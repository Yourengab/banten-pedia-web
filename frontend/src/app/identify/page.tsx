/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Camera,
    Upload,
    Image as ImageIcon,
    Loader2,
    ArrowRight,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } },
};

export default function IdentifyPage() {
    const [isScanning, setIsScanning] = useState(false);
    const [hasResult, setHasResult] = useState(false);

    const handleUpload = () => {
        setIsScanning(true);
        // Simulate scanning delay
        setTimeout(() => {
            setIsScanning(false);
            setHasResult(true);
        }, 2500);
    };

    const handleReset = () => {
        setHasResult(false);
        setIsScanning(false);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b border-border/50 bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold text-lg text-primary-foreground"
                >
                    <div className="w-8 h-8 rounded-lg border-2 border-primary flex items-center justify-center text-primary">
                        <span>B</span>
                    </div>
                    Banten<span className="text-primary">Pedia</span>
                </Link>
                <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
                    <Link
                        href="/explore"
                        className="hover:text-foreground transition-colors"
                    >
                        Eksplorasi
                    </Link>
                    <Link href="/identify" className="text-foreground">
                        Identifikasi
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-foreground transition-colors"
                    >
                        Tentang
                    </Link>
                </div>
            </header>

            <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-10 md:py-14">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeIn}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Identifikasi Banten
                    </h1>
                    <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
                        Unggah foto banten untuk mengenali jenis banten yang
                        terdapat pada gambar.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!hasResult ? (
                        <motion.div
                            key="upload-state"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="border-2 border-dashed border-border/60 rounded-3xl p-10 md:p-20 flex flex-col items-center justify-center text-center bg-white">
                                {!isScanning ? (
                                    <>
                                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                                            <ImageIcon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Pilih foto banten
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-8">
                                            Format yang didukung: JPG, PNG.
                                            Maksimal ukuran file: 5MB.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                            <Button
                                                size="lg"
                                                className="rounded-full gap-2 px-8"
                                                onClick={handleUpload}
                                            >
                                                <Upload className="w-4 h-4" />
                                                Upload Foto
                                            </Button>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="rounded-full gap-2 px-8"
                                                onClick={handleUpload}
                                            >
                                                <Camera className="w-4 h-4" />
                                                Ambil Foto
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center py-10">
                                        <Loader2 className="w-12 h-12 text-primary animate-spin mb-6" />
                                        <h3 className="text-xl font-semibold mb-2">
                                            Menganalisis Gambar...
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            AI kami sedang mengidentifikasi
                                            jenis banten dan komponennya.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result-state"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-2xl font-bold">
                                    Hasil Identifikasi
                                </h2>
                                <Button
                                    variant="ghost"
                                    onClick={handleReset}
                                    className="text-primary hover:text-primary hover:bg-primary/10"
                                >
                                    Pindai Gambar Lain
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {/* Uploaded Image Preview */}
                                <div className="rounded-2xl overflow-hidden bg-muted aspect-4/3 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1596720542385-23c31fa7ba41?auto=format&fit=crop&q=80&w=800"
                                        alt="Uploaded Banten"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm">
                                        Gambar Anda
                                    </div>
                                </div>

                                {/* Main Match */}
                                <div className="flex flex-col">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                                        Kemungkinan Terbesar (98%)
                                    </h3>
                                    <Link
                                        href="/detail"
                                        className="block flex-1"
                                    >
                                        <div className="group cursor-pointer flex flex-col gap-4 h-full p-6 rounded-3xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <Badge
                                                        variant="secondary"
                                                        className="mb-3 bg-white text-primary hover:bg-white border-0"
                                                    >
                                                        Yadnya
                                                    </Badge>
                                                    <h4 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                                                        Banten Pejati
                                                    </h4>
                                                </div>
                                                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center shrink-0 bg-white shadow-sm">
                                                    <ArrowRight className="w-5 h-5 text-primary -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground text-sm mb-2 flex-1">
                                                Banten Pejati adalah sarana
                                                upakara yang paling umum dan
                                                sering digunakan dalam berbagai
                                                pelaksanaan yadnya di Bali
                                                sebagai wujud kesungguhan hati.
                                            </p>

                                            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span>Badung, Bali</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Other Candidates */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">
                                    Hasil Lainnya
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        {
                                            name: "Banten Peras",
                                            image: "https://images.unsplash.com/photo-1549429177-3eefc6fb0c86?auto=format&fit=crop&q=80&w=150",
                                            match: "75%",
                                        },
                                        {
                                            name: "Canang Sari",
                                            image: "https://images.unsplash.com/photo-1621508678072-a720e5d0705a?auto=format&fit=crop&q=80&w=150",
                                            match: "62%",
                                        },
                                        {
                                            name: "Daksina",
                                            image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=150",
                                            match: "45%",
                                        },
                                    ].map((item) => (
                                        <Link href="/detail" key={item.name}>
                                            <div className="group p-3 rounded-xl border border-border/50 bg-white hover:border-primary/40 transition-colors flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden shrink-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-xs text-muted-foreground mt-0.5">
                                                        Kemiripan ~{item.match}
                                                    </p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mr-1" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
