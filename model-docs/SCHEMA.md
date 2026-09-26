````md
# SCHEMA.md

# BantenPedia — Database Schema

Dokumen ini mendefinisikan struktur database utama untuk BantenPedia.

Database menggunakan pendekatan **relational database** dengan PostgreSQL.

---

# 1. Entity Relationship Overview

```text
                         ┌──────────────┐
                         │   WILAYAH    │
                         └──────┬───────┘
                                │
                                │ 1:N
                                ▼
                         ┌──────────────┐
                         │    BANTEN    │
                         └──────┬───────┘
                                │
                ┌───────────────┼────────────────┐
                │               │                │
                │               │                │
                ▼               ▼                ▼
       ┌────────────────┐ ┌────────────┐ ┌──────────────┐
       │BANTEN_KOMPONEN │ │ PEMBUATAN  │ │BANTEN_SUMBER │
       └───────┬────────┘ └─────┬──────┘ └──────┬───────┘
               │                │               │
               ▼                ▼               ▼
       ┌──────────────┐ ┌────────────────┐ ┌──────────────┐
       │   KOMPONEN   │ │PEMBUATAN_      │ │    SUMBER    │
       │              │ │   KOMPONEN     │ │              │
       └──────────────┘ └───────┬────────┘ └──────────────┘
                                │
                                ▼
                         ┌──────────────┐
                         │   KOMPONEN   │
                         └──────────────┘
```
````

---

# 2. Entity List

Database terdiri dari entity utama:

```text
1. WILAYAH
2. BANTEN
3. KOMPONEN
4. BANTEN_KOMPONEN
5. PEMBUATAN
6. PEMBUATAN_KOMPONEN
7. SUMBER
8. BANTEN_SUMBER
```

---

# 3. WILAYAH

Menyimpan informasi lokasi asal suatu banten.

## Fields

| Field      | Type    | Constraint | Description |
| ---------- | ------- | ---------- | ----------- |
| id_wilayah | UUID    | PK         | ID wilayah  |
| kabupaten  | VARCHAR | NOT NULL   | Kabupaten   |
| kecamatan  | VARCHAR | NULL       | Kecamatan   |
| desa_adat  | VARCHAR | NULL       | Desa adat   |

## Relationship

```text
WILAYAH 1 ───── N BANTEN
```

Satu wilayah dapat memiliki banyak banten.

---

# 4. BANTEN

Menyimpan informasi utama mengenai suatu banten.

## Fields

| Field           | Type      | Constraint | Description      |
| --------------- | --------- | ---------- | ---------------- |
| id_banten       | UUID      | PK         | ID banten        |
| nama_banten     | VARCHAR   | NOT NULL   | Nama umum banten |
| nama_lokal      | VARCHAR   | NULL       | Nama lokal       |
| id_wilayah      | UUID      | FK         | Wilayah asal     |
| deskripsi_umum  | TEXT      | NULL       | Deskripsi umum   |
| makna           | TEXT      | NULL       | Makna banten     |
| foto_utama      | TEXT      | NULL       | URL foto utama   |
| status_validasi | VARCHAR   | NOT NULL   | Status validasi  |
| created_at      | TIMESTAMP | NOT NULL   | Waktu dibuat     |
| updated_at      | TIMESTAMP | NOT NULL   | Waktu diperbarui |

## Relationship

```text
BANTEN N ───── 1 WILAYAH
```

Banten juga memiliki relationship dengan:

```text
BANTEN
 ├── BANTEN_KOMPONEN
 ├── PEMBUATAN
 └── BANTEN_SUMBER
```

---

# 5. KOMPONEN

Menyimpan informasi mengenai komponen penyusun banten.

## Fields

| Field         | Type    | Constraint | Description       |
| ------------- | ------- | ---------- | ----------------- |
| id_komponen   | UUID    | PK         | ID komponen       |
| nama_komponen | VARCHAR | NOT NULL   | Nama komponen     |
| nama_lokal    | VARCHAR | NULL       | Nama lokal        |
| kategori      | VARCHAR | NULL       | Kategori komponen |
| bahan         | TEXT    | NULL       | Bahan penyusun    |
| deskripsi     | TEXT    | NULL       | Deskripsi         |
| foto          | TEXT    | NULL       | URL foto          |

## Relationship

```text
BANTEN N ───── N KOMPONEN
```

Relationship tersebut direalisasikan melalui:

```text
BANTEN_KOMPONEN
```

---

# 6. BANTEN_KOMPONEN

Junction table antara BANTEN dan KOMPONEN.

Satu banten dapat memiliki banyak komponen dan satu komponen dapat digunakan pada banyak banten.

## Fields

| Field              | Type    | Constraint | Description     |
| ------------------ | ------- | ---------- | --------------- |
| id_banten_komponen | UUID    | PK         | ID relationship |
| id_banten          | UUID    | FK         | ID banten       |
| id_komponen        | UUID    | FK         | ID komponen     |
| jumlah             | INTEGER | NULL       | Jumlah komponen |

## Constraint

```text
UNIQUE (
    id_banten,
    id_komponen
)
```

## Relationship

```text
BANTEN
  │
  │ 1:N
  ▼
BANTEN_KOMPONEN
  ▲
  │ N:1
  │
KOMPONEN
```

---

# 7. PEMBUATAN

Menyimpan tahapan proses pembuatan banten.

Satu banten dapat memiliki banyak tahap pembuatan.

## Fields

| Field           | Type    | Constraint | Description |
| --------------- | ------- | ---------- | ----------- |
| id_pembuatan    | UUID    | PK         | ID tahap    |
| id_banten       | UUID    | FK         | ID banten   |
| tahap           | INTEGER | NOT NULL   | Nomor tahap |
| judul_tahap     | VARCHAR | NULL       | Nama tahap  |
| deskripsi_tahap | TEXT    | NULL       | Deskripsi   |
| foto_tahap      | TEXT    | NULL       | URL foto    |

## Relationship

```text
BANTEN 1 ───── N PEMBUATAN
```

Contoh:

```text
Banten Pejati
│
├── Tahap 1 — Persiapan bahan
├── Tahap 2 — Membuat wadah
├── Tahap 3 — Menyusun komponen
└── Tahap 4 — Penyelesaian
```

---

# 8. PEMBUATAN_KOMPONEN

Junction table untuk menghubungkan tahap pembuatan dengan komponen yang digunakan.

Hal ini diperlukan karena satu tahap dapat menggunakan lebih dari satu komponen.

## Fields

| Field                 | Type    | Constraint | Description        |
| --------------------- | ------- | ---------- | ------------------ |
| id_pembuatan_komponen | UUID    | PK         | ID relationship    |
| id_pembuatan          | UUID    | FK         | ID tahap pembuatan |
| id_komponen           | UUID    | FK         | ID komponen        |
| jumlah                | INTEGER | NULL       | Jumlah komponen    |

## Relationship

```text
PEMBUATAN
     │
     │ 1:N
     ▼
PEMBUATAN_KOMPONEN
     ▲
     │ N:1
     │
KOMPONEN
```

---

# 9. SUMBER

Menyimpan seluruh sumber informasi yang digunakan dalam BantenPedia.

Sumber dibuat menjadi tabel terpisah karena **satu banten dapat memiliki lebih dari satu sumber**.

Terdapat dua tipe sumber:

```text
MAPS
LINK
```

---

# 10. Tipe Sumber

## 10.1 MAPS

Digunakan untuk menyimpan lokasi yang dapat ditampilkan menggunakan map.

Contoh:

```text
Lokasi Narasumber
Lokasi Dokumentasi
Lokasi Griya
Lokasi Desa Adat
Lokasi Pengambilan Data
```

Maps dapat ditampilkan pada halaman detail banten.

## 10.2 LINK

Digunakan untuk menyimpan sumber eksternal.

Contoh:

```text
Artikel
Website
Jurnal
Dokumentasi Online
Video
Referensi lainnya
```

Satu banten dapat memiliki beberapa link.

---

# 11. SUMBER Fields

| Field       | Type      | Constraint | Description        |
| ----------- | --------- | ---------- | ------------------ |
| id_sumber   | UUID      | PK         | ID sumber          |
| tipe_sumber | VARCHAR   | NOT NULL   | `maps` atau `link` |
| judul       | VARCHAR   | NOT NULL   | Nama sumber        |
| deskripsi   | TEXT      | NULL       | Deskripsi sumber   |
| url         | TEXT      | NULL       | URL sumber         |
| latitude    | DECIMAL   | NULL       | Latitude lokasi    |
| longitude   | DECIMAL   | NULL       | Longitude lokasi   |
| alamat      | TEXT      | NULL       | Alamat/lokasi      |
| created_at  | TIMESTAMP | NOT NULL   | Waktu dibuat       |

---

# 12. Source Validation Rules

Field sumber memiliki aturan berdasarkan `tipe_sumber`.

## Jika tipe = `link`

Wajib memiliki:

```text
url
```

Tidak membutuhkan:

```text
latitude
longitude
```

Contoh:

```text
tipe_sumber = link

judul = "Artikel Banten Pejati"
url = "https://example.com/..."
```

---

## Jika tipe = `maps`

Wajib memiliki:

```text
latitude
longitude
```

Opsional:

```text
alamat
url
```

Contoh:

```text
tipe_sumber = maps

judul = "Lokasi Narasumber"
latitude = -8.xxxxx
longitude = 115.xxxxx
alamat = "..."
```

---

# 13. BANTEN_SUMBER

Junction table yang menghubungkan banten dengan sumber.

Dibutuhkan karena:

```text
1 Banten → banyak sumber
1 Sumber → dapat digunakan oleh banyak Banten
```

## Fields

| Field            | Type | Constraint | Description                |
| ---------------- | ---- | ---------- | -------------------------- |
| id_banten_sumber | UUID | PK         | ID relationship            |
| id_banten        | UUID | FK         | ID banten                  |
| id_sumber        | UUID | FK         | ID sumber                  |
| keterangan       | TEXT | NULL       | Penjelasan hubungan sumber |

## Constraint

```text
UNIQUE (
    id_banten,
    id_sumber
)
```

## Relationship

```text
BANTEN
   │
   │ 1:N
   ▼
BANTEN_SUMBER
   ▲
   │ N:1
   │
SUMBER
```

---

# 14. Source Display Logic

Pada halaman detail banten:

## Maps

Jika:

```text
tipe_sumber = maps
```

maka tampilkan:

```text
Lokasi Sumber

┌──────────────────────────┐
│                          │
│          MAP             │
│                          │
│             📍           │
│                          │
└──────────────────────────┘

Nama Lokasi
Alamat
[ Buka di Maps ]
```

Map dapat menggunakan:

- Leaflet;
- Google Maps;
- Mapbox;
- provider map lainnya.

---

## Link

Jika:

```text
tipe_sumber = link
```

maka tampilkan seluruh referensi:

```text
Referensi

1. Artikel Banten Pejati
   example.com
   [ Buka Sumber ]

2. Dokumentasi Banten Bali
   example.org
   [ Buka Sumber ]

3. Jurnal ...
   example.edu
   [ Buka Sumber ]
```

Karena satu banten dapat memiliki beberapa referensi, data harus di-render menggunakan loop/foreach.

Contoh konsep:

```text
sources.map(source => ...)
```

---

# 15. Source Relationship Example

Contoh satu banten memiliki:

```text
Banten Pejati
│
├── SUMBER #1
│   └── Maps
│       └── Lokasi Narasumber
│
├── SUMBER #2
│   └── Link
│       └── Artikel
│
├── SUMBER #3
│   └── Link
│       └── Jurnal
│
└── SUMBER #4
    └── Link
        └── Dokumentasi
```

Database:

```text
BANTEN
  │
  └── BANTEN_SUMBER
          │
          ├── SUMBER #1
          ├── SUMBER #2
          ├── SUMBER #3
          └── SUMBER #4
```

---

# 16. Complete Relationship

```text
                           ┌──────────────┐
                           │   WILAYAH    │
                           └──────┬───────┘
                                  │
                                  │ 1:N
                                  ▼
                           ┌──────────────┐
                           │    BANTEN    │
                           └──────┬───────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              │                   │                   │
              ▼                   ▼                   ▼
      ┌───────────────┐   ┌──────────────┐   ┌────────────────┐
      │BANTEN_KOMPONEN│   │  PEMBUATAN   │   │ BANTEN_SUMBER  │
      └───────┬───────┘   └──────┬───────┘   └───────┬────────┘
              │                  │                   │
              ▼                  ▼                   ▼
       ┌────────────┐    ┌─────────────────┐   ┌────────────┐
       │  KOMPONEN  │    │ PEMBUATAN_      │   │   SUMBER   │
       │            │◄───│ KOMPONEN        │   │            │
       └────────────┘    └────────┬────────┘   └────────────┘
                                  │
                                  ▼
                           ┌────────────┐
                           │  KOMPONEN  │
                           └────────────┘
```

---

# 17. Cardinality

| Relationship         | Cardinality |
| -------------------- | ----------- |
| WILAYAH → BANTEN     | 1 : N       |
| BANTEN → KOMPONEN    | N : N       |
| BANTEN → PEMBUATAN   | 1 : N       |
| PEMBUATAN → KOMPONEN | N : N       |
| BANTEN → SUMBER      | N : N       |

---

# 18. Data Flow Detail Page

Ketika user membuka detail banten:

```text
BANTEN
  │
  ├── WILAYAH
  │
  ├── BANTEN_KOMPONEN
  │       └── KOMPONEN
  │
  ├── PEMBUATAN
  │       └── PEMBUATAN_KOMPONEN
  │               └── KOMPONEN
  │
  └── BANTEN_SUMBER
          └── SUMBER
                  │
                  ├── MAPS → Map Component
                  │
                  └── LINK → Reference List
```

---

# 19. Important Constraints

## Banten

```text
nama_banten NOT NULL
id_wilayah NOT NULL
```

## Banten Komponen

```text
(id_banten, id_komponen) UNIQUE
```

## Pembuatan

```text
(id_banten, tahap) UNIQUE
```

## Pembuatan Komponen

```text
(id_pembuatan, id_komponen) UNIQUE
```

## Banten Sumber

```text
(id_banten, id_sumber) UNIQUE
```

## Sumber

```text
tipe_sumber ∈ {
    maps,
    link
}
```

---

# 20. Future Extension

Schema ini dapat dikembangkan kemudian tanpa mengubah struktur utama.

Potential entities:

```text
DOKUMEN
DOKUMEN_CHUNK
BAHAN
KOMPONEN_BAHAN
PERBANDINGAN_BANTEN
GALERI_BANTEN
```

Entity tersebut tidak menjadi bagian dari schema MVP apabila belum diperlukan.

---

# 21. Schema Principle

Struktur database menggunakan prinsip:

```text
BANTEN
   ↓
What is it?
   ↓
KOMPONEN
   ↓
How is it made?
   ↓
PEMBUATAN
   ↓
Where / from whom is the information?
   ↓
SUMBER
```

```

```
