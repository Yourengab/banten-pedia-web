/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Bookmark,
    ArrowRight,
    ArrowLeft,
    FileText,
    Sparkles,
    Box,
    ListOrdered,
    ChevronLeft,
    ChevronRight,
    Home
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } }
};

export default function DetailBantenPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border/50 bg-white px-6 py-4 flex items-center">
                <div className="flex items-center gap-2 font-semibold text-lg text-primary-foreground">
                    <div className="w-8 h-8 rounded-lg border-2 border-primary flex items-center justify-center text-primary">
                        <span>B</span>
                    </div>
                    Banten<span className="text-primary">Pedia</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Navigation */}
                <motion.div initial="hidden" animate="show" variants={fadeIn} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <Link href="/explore" className="w-fit">
                        <Button variant="ghost" className="gap-2 -ml-3 w-fit text-muted-foreground hover:text-foreground">
                            <ChevronLeft className="w-4 h-4" />
                            Kembali
                        </Button>
                    </Link>
                    
                    <nav className="flex items-center space-x-1.5 text-sm text-muted-foreground overflow-x-auto pb-1 sm:pb-0">
                        <a href="#" className="hover:text-foreground whitespace-nowrap transition-colors flex items-center gap-1.5"><Home className="w-3.5 h-3.5" /> Beranda</a>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        <a href="#" className="hover:text-foreground whitespace-nowrap transition-colors">Eksplorasi</a>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-medium text-foreground whitespace-nowrap">Banten Pejati</span>
                    </nav>
                </motion.div>

                {/* Title Section */}
                <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground">
                                Banten Pejati
                            </h1>
                            <Badge
                                variant="secondary"
                                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-normal px-3 rounded-lg"
                            >
                                Yadnya
                            </Badge>
                            <Badge
                                variant="secondary"
                                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-normal px-3 rounded-lg"
                            >
                                Banten Badung
                            </Badge>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground mt-2">
                            <MapPin className="w-4 h-4" />
                            <span>Badung, Bali</span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="gap-2 rounded-lg hidden md:flex border-border/50 text-foreground hover:bg-muted transition-colors"
                    >
                        <Bookmark className="w-4 h-4" />
                        Simpan
                    </Button>
                </motion.div>

                {/* 2-Column Grid */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {/* Left Column */}
                    <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
                        {/* Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Main Image */}
                            <div className="md:col-span-2 aspect-4/3 rounded-lg overflow-hidden relative group bg-muted border border-border/50">
                                <img
                                    src="https://images.unsplash.com/photo-1596720542385-23c31fa7ba41?auto=format&fit=crop&q=80&w=1000"
                                    alt="Banten Pejati Utama"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Navigation Arrows */}
                                <div className="absolute bottom-5 left-5 flex gap-2">
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="rounded-lg w-10 h-10 bg-black/40 text-white hover:bg-black/70 hover:text-white border-0 backdrop-blur-sm transition-all"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="rounded-lg w-10 h-10 bg-black/40 text-white hover:bg-black/70 hover:text-white border-0 backdrop-blur-sm transition-all"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                                {/* Counter */}
                                <div className="absolute bottom-5 right-5 bg-black/40 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                                    1 / 2
                                </div>
                            </div>

                            {/* Side Images */}
                            <div className="hidden md:flex flex-col gap-4">
                                <div className="flex-1 rounded-lg overflow-hidden relative group bg-muted border border-border/50">
                                    <img
                                        src="https://images.unsplash.com/photo-1533606622340-e2ef84a29792?auto=format&fit=crop&q=80&w=500"
                                        alt="Tampak Atas"
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm">
                                        Tampak Atas
                                    </div>
                                </div>
                                <div className="flex-1 rounded-lg overflow-hidden relative group bg-muted border border-border/50">
                                    <img
                                        src="https://images.unsplash.com/photo-1596720542385-23c31fa7ba41?auto=format&fit=crop&q=80&w=500"
                                        alt="Tampak Samping"
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm">
                                        Tampak Samping
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Simpan Button */}
                        <Button
                            variant="outline"
                            className="w-full gap-2 rounded-lg md:hidden border-border/50 bg-white mt-4"
                        >
                            <Bookmark className="w-4 h-4" />
                            Simpan
                        </Button>

                        {/* Accordions */}
                        <div className="space-y-4 pt-4">
                            <Accordion className="space-y-4">
                                <AccordionItem
                                    value="deskripsi"
                                    className="bg-white border border-border/50 rounded-lg px-6 py-1 transition-all"
                                >
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-secondary/60 rounded-lg text-primary">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            Deskripsi
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                                        Dataset digital Banten Bali yang berisi
                                        informasi banten, wilayah asal, komponen
                                        penyusun, proses pembuatan komponen
                                        penyusun, proses pembuatan digital
                                        Banten Bali yang berisi pembuatan
                                        digital Banten Bali yang berisi.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value="makna"
                                    className="bg-white border border-border/50 rounded-lg px-6 py-1 transition-all"
                                >
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-secondary/60 rounded-lg text-primary">
                                                <Sparkles className="w-5 h-5" />
                                            </div>
                                            Makna
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                                        Dataset digital Banten Bali yang berisi
                                        informasi banten, wilayah asal, komponen
                                        penyusun, proses pembuatan komponen
                                        penyusun, proses pembuatan digital
                                        Banten Bali yang berisi pembuatan
                                        digital Banten Bali yang berisi.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value="bahan"
                                    className="bg-white border border-border/50 rounded-lg px-6 py-1 transition-all"
                                >
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-secondary/60 rounded-lg text-primary">
                                                <Box className="w-5 h-5" />
                                            </div>
                                            Bahan & Komponen
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Daksina</li>
                                            <li>Banten Peras</li>
                                            <li>Canang Sari</li>
                                            <li>Sampian</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem
                                    value="tahap"
                                    className="bg-white border border-border/50 rounded-lg px-6 py-1 transition-all"
                                >
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-secondary/60 rounded-lg text-primary">
                                                <ListOrdered className="w-5 h-5" />
                                            </div>
                                            Tahap Pembuatan
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                                        <ol className="list-decimal pl-5 space-y-2">
                                            <li>Persiapan bahan dan janur.</li>
                                            <li>Membuat wadah dan tatakan.</li>
                                            <li>Menyusun komponen.</li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div variants={fadeUp} className="space-y-6">
                        {/* Lihat Banten Lain */}
                        <Card className="border-border/50 rounded-lg overflow-hidden bg-white flex flex-col h-120">
                            <CardHeader className="pb-4 pt-6 px-6 border-b border-border/50 shrink-0">
                                <CardTitle className="text-xl flex items-center gap-3 font-semibold">
                                    <ArrowRight className="w-5 h-5 text-primary" />
                                    Lihat Banten Lain
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-0 py-0 divide-y divide-border/50 overflow-y-auto flex-1">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4 p-5 hover:bg-muted/30 transition-colors cursor-pointer group"
                                    >
                                        <div className="w-16 h-16 bg-muted rounded-lg shrink-0 overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1596720542385-23c31fa7ba41?auto=format&fit=crop&q=80&w=150"
                                                alt="Banten Lain"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 w-full min-w-0">
                                            <Badge
                                                variant="secondary"
                                                className="bg-secondary text-secondary-foreground text-[10px] h-5 px-2 mb-1.5 font-normal rounded-lg"
                                            >
                                                Yadnya
                                            </Badge>
                                            <h4 className="font-semibold text-foreground leading-tight truncate">
                                                Banten Pejati {item}
                                            </h4>
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1.5">
                                                <MapPin className="w-3.5 h-3.5 shrink-0" />
                                                <span className="truncate">
                                                    Badung, Bali
                                                </span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="shrink-0 rounded-lg border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all w-9 h-9"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Informasi Sumber */}
                        <Card className="border-border/50 rounded-lg overflow-hidden bg-white">
                            <CardHeader className="pb-4 pt-6 px-6 border-b border-border/50">
                                <CardTitle className="text-xl flex items-center gap-3 font-semibold">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Informasi Sumber
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-6 space-y-5 py-6">
                                <div className="w-full h-35 bg-muted rounded-lg overflow-hidden relative border border-border/50">
                                    <img
                                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                                        alt="Map Preview"
                                        className="w-full h-full object-cover opacity-70 saturate-50"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <MapPin
                                                className="w-8 h-8 text-destructive relative z-10"
                                                fill="currentColor"
                                            />
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/20 rounded-[100%] blur-[2px]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[17px] text-foreground">
                                        Griya Gases - Denpasar
                                    </h4>
                                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                        Dataset digital Banten Bali yang berisi
                                        informasi banten, wilayah asal, komponen
                                        penyusun, proses pembuatan komponen
                                        penyusun, proses pembuatan digital
                                        Banten Bali yang berisi pembuatan
                                        digital Banten Bali yang berisi.
                                    </p>
                                </div>

                                <div className="pt-5 border-t border-border/50">
                                    <h5 className="font-medium text-[15px] text-foreground mb-3">
                                        Referensi
                                    </h5>
                                    <ul className="space-y-2.5">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-sm text-[#4A88E5] hover:underline flex items-center gap-2 font-medium"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#4A88E5]" />{" "}
                                                Buku Banten Bali
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-sm text-[#4A88E5] hover:underline flex items-center gap-2 font-medium"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#4A88E5]" />{" "}
                                                Wawancara Dengan Serati
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}
