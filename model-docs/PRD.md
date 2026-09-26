````md
# PRD.md

# Product Requirements Document

## BantenPedia — Digital Cultural Heritage Website

---

## 1. Product Overview

**BantenPedia** adalah website digital yang berfungsi sebagai media dokumentasi dan eksplorasi pengetahuan mengenai **banten Bali** dari berbagai wilayah di Bali.

Website ini memungkinkan pengguna untuk mencari, menjelajahi, memahami, dan membandingkan informasi mengenai banten berdasarkan wilayah, jenis, komponen, makna, proses pembuatan, serta sumber dokumentasinya.

BantenPedia dirancang sebagai **digital cultural heritage platform** dengan pendekatan visual yang modern, sederhana, dan mudah digunakan, tanpa menghilangkan identitas budaya Bali.

Website tidak bertujuan untuk menentukan satu bentuk banten sebagai bentuk yang paling benar, tetapi menampilkan keberagaman dan variasi banten berdasarkan konteks wilayah dan sumber yang tersedia.

---

# 2. Problem Statement

Informasi mengenai banten Bali masih tersebar dalam berbagai sumber dan belum terdokumentasi secara terstruktur dalam satu platform digital.

Selain itu, banten yang memiliki nama atau fungsi yang sama dapat memiliki variasi berdasarkan wilayah, seperti:

- komponen;
- jumlah komponen;
- bentuk;
- bahan;
- susunan;
- proses pembuatan;
- penggunaan;
- konteks upacara.

Masyarakat membutuhkan media digital yang dapat membantu mereka menemukan dan memahami informasi tersebut dengan cara yang sederhana dan mudah diakses.

---

# 3. Product Goals

BantenPedia bertujuan untuk:

1. Mendokumentasikan berbagai jenis banten Bali secara digital.
2. Menyediakan informasi banten yang terstruktur dan mudah dipahami.
3. Memudahkan pengguna mencari banten berdasarkan nama atau wilayah.
4. Menampilkan komponen penyusun setiap banten.
5. Menampilkan proses pembuatan banten.
6. Menampilkan makna dan penggunaan banten.
7. Menampilkan variasi banten antarwilayah.
8. Menyediakan sumber informasi untuk setiap data yang ditampilkan.
9. Menjadi media digital untuk memperkenalkan warisan budaya banten Bali.

---

# 4. Target Users

## 4.1 Masyarakat Umum

Pengguna yang ingin mengetahui informasi mengenai banten Bali.

## 4.2 Generasi Muda

Pengguna yang membutuhkan media digital yang lebih menarik dan mudah dipahami untuk mengenal banten.

## 4.3 Mahasiswa dan Peneliti

Pengguna yang membutuhkan dokumentasi mengenai banten, wilayah, komponen, proses, dan variasinya.

## 4.4 Pengelola Data

Pengguna internal yang bertugas mengelola dan memvalidasi informasi banten.

---

# 5. Website Scope

Website terdiri dari beberapa halaman utama:

```text
BantenPedia
│
├── Beranda
│
├── Eksplorasi
│
├── Detail Banten
│
│── Tentang
```
````

---

# 6. Navigation

Navbar utama:

```text
BantenPedia

Beranda
Eksplorasi
Identifikasi
Tentang

Search
```

Navigation harus sederhana dan mudah dipahami.

Pada desktop menggunakan horizontal navigation.

Pada mobile menggunakan hamburger menu.

---

# 7. Landing Page

Landing page merupakan halaman utama BantenPedia.

Tujuan halaman:

- memperkenalkan BantenPedia;
- menjelaskan fungsi website;
- mengarahkan pengguna ke koleksi banten;
- memberikan akses cepat ke pencarian.

---

## 7.1 Hero Section

Hero menggunakan konsep visual minimal dengan fokus pada **banten sebagai objek utama**.

Visual utama dapat menggunakan Canang Sari.

Konsep visual:

```text
Komponen Canang
       ↓
   Assemble
       ↓
 Canang Sari
```

Elemen banten dapat muncul secara perlahan dan menyatu menjadi objek utama.

Animasi harus:

- smooth;
- subtle;
- realistis;
- tidak berlebihan;
- tidak mengganggu konten.

---

## 7.2 Hero Content

Contoh:

```text
Mengenal Banten Bali

Jelajahi berbagai banten, komponen penyusunnya,
makna, proses pembuatan, dan variasinya
di berbagai wilayah Bali.

[ Cari banten, komponen, atau wilayah... ]
```

---

## 7.3 Quick Access

Landing page menyediakan beberapa akses utama:

### Eksplorasi Banten

Melihat koleksi banten dari berbagai wilayah.

### Identifikasi Banten

Menuju halaman identifikasi banten melalui foto.

### Tentang BantenPedia

Mengetahui tujuan dan latar belakang proyek.

---

# 8. Explore Page

Explore Page merupakan halaman utama untuk menjelajahi koleksi banten.

Tujuan utama halaman:

- menampilkan koleksi;
- memudahkan pencarian;
- memudahkan filtering;
- membantu pengguna menemukan banten yang relevan.

---

## 8.1 Header

Contoh:

```text
Eksplorasi Banten

Temukan berbagai banten dari berbagai wilayah
di Bali dan pelajari cerita di baliknya.
```

---

## 8.2 Search

Search bar berada pada area utama halaman.

Placeholder:

```text
Cari nama banten, komponen, atau wilayah...
```

Search dapat digunakan untuk mencari:

- nama banten;
- nama lokal;
- komponen;
- wilayah.

---

## 8.3 Filter

Filter utama:

```text
Semua

Kabupaten
├── Badung
├── Denpasar
├── Gianyar
├── Tabanan
└── Lainnya
```

Filter menggunakan chip, dropdown, atau segmented control.

Tidak menggunakan filter UI yang terlalu kompleks.

---

## 8.4 Sorting

Pengguna dapat mengurutkan:

```text
Terbaru
Nama A–Z
Nama Z–A
```

---

# 9. Banten Detail Page

Detail Page digunakan untuk menampilkan informasi lengkap mengenai satu banten.

Contoh:

```text
Banten Pejati
Badung, Bali
```

---

## 9.1 Header

Header menampilkan:

- nama banten;
- wilayah;
- kategori;
- breadcrumb;
- tombol simpan;
- tombol bagikan.

Contoh:

```text
Eksplorasi / Banten Pejati

Banten Pejati

📍 Badung, Bali

[Yadnya] [Banten Utama]

[ Simpan ] [ Bagikan ]
```

---

# 10. Image Gallery

Detail page memiliki gallery foto.

Foto dapat berupa:

- foto utama;
- tampak atas;
- tampak samping;
- foto detail;
- dokumentasi proses.

Layout desktop:

```text
┌───────────────────────┬──────────────┐
│                       │              │
│                       │ Tampak Atas  │
│     Foto Utama        │              │
│                       ├──────────────┤
│                       │              │
│                       │ Tampak Samping
│                       │              │
└───────────────────────┴──────────────┘
```

Gallery harus tetap realistis untuk diimplementasikan menggunakan web component.

---

# 11. Detail Information

Informasi utama banten dibagi menjadi beberapa section.

```text
Deskripsi
Makna
Komponen Penyusun
Proses Pembuatan
Variasi Antarwilayah
Sumber
```

Section dapat menggunakan accordion untuk mengurangi panjang halaman.

---

# 12. Deskripsi

Menampilkan informasi umum mengenai banten.

Contoh:

```text
Banten Pejati merupakan salah satu jenis
banten yang digunakan dalam berbagai
konteks upacara di Bali...
```

Deskripsi harus menggunakan bahasa yang mudah dipahami.

---

# 13. Makna

Menampilkan informasi mengenai makna dan konteks budaya banten.

Section dapat menggunakan:

- heading;
- paragraph;
- highlighted quote;
- visual pendukung jika tersedia.

Tidak menggunakan dekorasi berlebihan.

---

# 14. Komponen Penyusun

Menampilkan komponen yang terdapat pada banten.

Contoh:

```text
Komponen Penyusun

[ Daksina ]
[ Peras ]
[ Canang ]
[ Sampian ]
[ Komponen lainnya ]
```

Setiap komponen dapat memiliki:

- foto;
- nama;
- nama lokal;
- deskripsi;
- bahan.

Komponen dapat ditampilkan dalam bentuk card atau list.

---

# 15. Proses Pembuatan

Proses pembuatan ditampilkan dalam bentuk timeline.

Contoh:

```text
01
Persiapan bahan

        ↓

02
Membuat wadah

        ↓

03
Menyusun komponen

        ↓

04
Menambahkan bunga

        ↓

05
Penyelesaian
```

Setiap tahap dapat memiliki:

- nomor tahap;
- judul;
- deskripsi;
- foto.

---

# 16. Variasi Antarwilayah

Section ini menunjukkan bahwa satu banten dapat memiliki variasi di wilayah berbeda.

Contoh:

```text
Banten Pejati

Badung
Gianyar
Tabanan
Denpasar
```

Informasi dapat ditampilkan dalam bentuk:

- comparison card;
- table;
- visual comparison;
- regional list.

Aspek yang dapat dibandingkan:

- komponen;
- jumlah;
- bentuk;
- bahan;
- susunan;
- penggunaan;
- konteks.

---

# 18. Source Section

Setiap halaman detail banten memiliki informasi sumber.

Contoh:

```text
Sumber

Narasumber
Nama Narasumber

Dokumentasi
Lokasi / tanggal dokumentasi

Referensi
Nama buku / artikel / sumber
```

Sumber ditampilkan secara jelas tetapi tidak mendominasi halaman.

---

# 19. Identification Page

Website menyediakan halaman **Identifikasi Banten** sebagai salah satu fitur utama.

Halaman ini memungkinkan pengguna mengunggah atau mengambil foto banten.

UI utama:

```text
Identifikasi Banten

Unggah foto banten untuk mengenali
jenis banten yang terdapat pada gambar.

┌──────────────────────────┐
│                          │
│       📷                 │
│                          │
│   Upload Foto            │
│                          │
└──────────────────────────┘

[ Ambil Foto ]  [ Upload ]
```

Halaman ini hanya mendefinisikan pengalaman pengguna dan interface.

Implementasi teknologi identifikasi berada di luar scope PRD website ini.

---

# 20. Identification Result

Setelah proses identifikasi selesai, hasil ditampilkan secara visual.

Contoh:

```text
Hasil Identifikasi

Kemungkinan Banten

┌──────────────────────────┐
│ Foto                     │
│                          │
│ Banten Pejati            │
│ Badung                   │
│                          │
│ [ Lihat Detail ]         │
└──────────────────────────┘
```

Jika terdapat beberapa kandidat:

```text
Hasil Lainnya

Banten Peras
Canang Sari
Daksina
```

---

# 21. About Page

About Page menjelaskan:

- apa itu BantenPedia;
- alasan website dibuat;
- permasalahan yang ingin didokumentasikan;
- tujuan digitalisasi;
- cakupan wilayah;
- metode pengumpulan informasi;
- kontribusi terhadap digital cultural heritage.

Contoh headline:

```text
Mendokumentasikan
Pengetahuan Banten Bali
```

---

# 22. Data Credibility

Website harus memberikan konteks mengenai asal informasi.

Informasi dapat diberi label:

```text
Dokumentasi Lapangan
Wawancara
Literatur
Dokumentasi Masyarakat
```

Jika data belum divalidasi, status tersebut tidak ditampilkan sebagai data final tanpa penanda yang sesuai.

---

# 23. Admin Page

Admin digunakan untuk mengelola konten website.

Admin dapat mengelola:

```text
Banten
Komponen
Wilayah
Proses Pembuatan
Foto
Sumber
Dokumentasi
```

Admin juga dapat melakukan:

- tambah data;
- edit data;
- hapus data;
- upload foto;
- mengubah status validasi.

---

# 24. UI Design System

BantenPedia menggunakan gaya:

- modern;
- minimal;
- clean;
- friendly;
- slightly fun;
- professional;
- realistic untuk implementasi web.

Desain tidak boleh terlihat seperti website pariwisata generik atau website budaya tradisional.

---

# 25. Color Palette

Gunakan maksimal **3–4 warna utama**.

Recommended palette:

```text
Text
#2C2C2D

Paragraph
#535353

Light Gold
#FFE7BA

Gold
#F4AF2F

Background
#F7F7F7

Stroke
#C5C5C5
```

Tidak menggunakan banyak warna tambahan.

---

# 26. Typography

Gunakan modern sans-serif.

Recommended:

```text
Inter
Outfit (-2% letter spacing)
```

Typography harus:

- clean;
- readable;
- modern;
- friendly.

---

# 27. Icon System

Gunakan icon yang:

- minimal;
- outline;
- rounded;
- konsisten;
- mudah dikenali.

Recommended icon style:

```text
Lucide / similar outline icon
```

Jangan menggunakan terlalu banyak jenis icon atau gaya icon yang berbeda. Ingat nama import yang sesuai dengan nama icon dari library yang dipakai agar meminimalisir error.

---

# 29. Animation Guidelines

Website menggunakan animasi yang halus dan purposeful.

## Landing Page

Animasi utama:

```text
Komponen Canang
       ↓
Floating
       ↓
Assembly
       ↓
Canang Sari
```

Animasi menggunakan:

- fade;
- floating;
- subtle rotation;
- scale;
- position transition.

Durasi sekitar:

```text
400ms – 1200ms
```

Animasi harus terasa natural dan tidak seperti motion graphic yang berlebihan.

---

## 29.1 Page Transition

Gunakan:

```text
Fade
Subtle slide
Subtle scale
```

---

## 29.2 Card Interaction

Hover state dapat menggunakan:

```text
translateY(-2px)
subtle image zoom
border transition
```

Interaction tidak boleh terlalu agresif.

---

# 30. Responsive Design

Website harus responsive pada:

```text
Desktop
Tablet
Mobile
```

Desktop:

```text
Wide layout
Multi-column
```

Tablet:

```text
Two-column
```

Mobile:

```text
Single-column
```

Gallery, cards, filter, dan navigation harus menyesuaikan ukuran layar.

---

# 31. Accessibility

Website harus memperhatikan:

- readable contrast;
- semantic HTML;
- keyboard navigation;
- accessible buttons;
- alt text pada gambar;
- responsive typography;
- touch-friendly interaction.

Animasi harus mendukung:

```text
prefers-reduced-motion
```

Ketika reduced motion aktif, animasi dikurangi atau dinonaktifkan.

---

# 32. Performance

Website harus memprioritaskan:

- image optimization;
- lazy loading;
- responsive images;
- lightweight animations;
- minimal JavaScript untuk decorative animation;
- fast initial page load.

Foto banten merupakan elemen visual utama sehingga harus dikompresi tanpa mengurangi kualitas secara berlebihan.

---

# 33. Mobile Experience

Pada mobile:

- navbar berubah menjadi hamburger;
- search tetap mudah ditemukan;
- filter menggunakan bottom sheet atau horizontal scroll;
- card menggunakan single column;
- gallery menggunakan swipe;
- accordion digunakan untuk informasi panjang;
- tombol utama memiliki ukuran yang mudah disentuh.

---

# 34. MVP Website

## Phase 1 — Core Website

Wajib tersedia:

- Landing Page;
- Explore Page;
- Search;
- Filter;
- Banten Card;
- Banten Detail;
- Image Gallery;
- Deskripsi;
- Makna;
- Komponen;
- Proses Pembuatan;
- Sumber.

## Phase 3 — Identification Interface

Tambahkan:

- Identification Page;
- Camera interface;
- Upload interface;
- Result interface;
- Link menuju Banten Detail.

---

# 35. Out of Scope

Hal berikut tidak termasuk dalam PRD website ini:

- database schema;
- ERD;
- SQL;
- API specification;
- machine learning architecture;
- computer vision model;
- LLM;
- RAG architecture;
- embedding model;
- vector database;
- AI training pipeline.

Detail teknis tersebut akan didokumentasikan dalam dokumen terpisah.

---

# 36. Success Criteria

Website dianggap memenuhi kebutuhan MVP apabila pengguna dapat:

1. Membuka dan memahami tujuan BantenPedia dari landing page.
2. Menjelajahi koleksi banten.
3. Mencari banten berdasarkan kata kunci.
4. Memfilter banten berdasarkan wilayah dan jenis.
5. Membuka detail banten.
6. Melihat foto banten.
7. Membaca deskripsi dan makna.
8. Melihat komponen penyusun.
9. Melihat proses pembuatan.
10. Melihat sumber informasi.
11. Mengakses halaman identifikasi banten.
12. Menggunakan website dengan baik pada desktop maupun mobile.

---

# 37. Product Principles

BantenPedia dibangun berdasarkan prinsip:

### Simple

Informasi budaya yang kompleks harus disajikan dengan interface yang sederhana.

### Discoverable

Pengguna harus mudah menemukan banten berdasarkan nama, wilayah, maupun kategori.

### Contextual

Setiap informasi budaya harus mempertahankan konteks wilayah dan sumbernya.

### Visual

Foto dan dokumentasi visual menjadi bagian penting dari pengalaman pengguna.

### Respectful

Website tidak menganggap satu variasi banten sebagai bentuk tunggal yang berlaku untuk semua wilayah.

### Modern

Teknologi dan desain modern digunakan untuk membuat pengetahuan budaya lebih mudah diakses tanpa menghilangkan identitas budaya.

---

# 38. Product Vision

BantenPedia menjadi sebuah **digital cultural heritage platform** yang memungkinkan masyarakat untuk:

```text
Explore
   ↓
Discover
   ↓
Understand
   ↓
Compare
   ↓
Learn
```

---

# 39. Tech Stack

| Framework | **Next.js 16 + TypeScript** | SEO bagus, routing jelas, cocok untuk website katalog |
| UI | **Tailwind CSS** | Cepat membuat design system sesuai PRD |
| Component | **shadcn/ui** | Komponen clean, mudah dikustomisasi |
| Icon | **Lucide React** | Minimal, konsisten dengan desain |
| Animation | **Motion (Framer Motion)** | Cocok untuk animasi Canang assemble dan page transition |
| Database | **Supabase** | Relational data + mudah diintegrasikan dengan Next.js |
| Image Storage | **Supabase Storage** | Cocok untuk foto banten |
| Auth | **Supabase Auth** | Jika admin/login diperlukan |
| Backend/API | **Next.js Route Handlers** | Cukup untuk MVP, tidak perlu FastAPI dulu |
| Validation | **Zod** | Validasi form dan API |
| Form | **React Hook Form** | Form admin lebih mudah dikelola |
| Deployment | **Vercel** | Integrasi sangat baik dengan Next.js |
| Maps | **Leaflet + React Leaflet** | Jika nanti menampilkan persebaran wilayah |

---

```

```
