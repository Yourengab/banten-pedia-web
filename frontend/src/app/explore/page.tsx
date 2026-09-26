/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Search, MapPin, ArrowRight, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } }
};

// Dummy Data
const bantenList = [
    {
        id: 1,
        name: "Banten Pejati",
        kategori: "Yadnya",
        wilayah: "Badung, Bali",
        image: "https://images.unsplash.com/photo-1596720542385-23c31fa7ba41?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 2,
        name: "Banten Saiban",
        kategori: "Nitya Karma",
        wilayah: "Seluruh Bali",
        image: "https://images.unsplash.com/photo-1533606622340-e2ef84a29792?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 3,
        name: "Canang Sari",
        kategori: "Nitya Karma",
        wilayah: "Seluruh Bali",
        image: "https://images.unsplash.com/photo-1621508678072-a720e5d0705a?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 4,
        name: "Banten Gebogan",
        kategori: "Yadnya",
        wilayah: "Gianyar, Bali",
        image: "https://images.unsplash.com/photo-1582236371578-1a52de2f82db?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 5,
        name: "Banten Sorohan",
        kategori: "Pitra Yadnya",
        wilayah: "Karangasem, Bali",
        image: "https://images.unsplash.com/photo-1549429177-3eefc6fb0c86?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 6,
        name: "Banten Pengulapan",
        kategori: "Manusa Yadnya",
        wilayah: "Denpasar, Bali",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=500"
    }
];

const regions = ["Semua", "Badung", "Denpasar", "Gianyar", "Tabanan", "Lainnya"];

export default function ExplorePage() {
    const [activeRegion, setActiveRegion] = useState("Semua");
    
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border/50 bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-primary-foreground">
                    <div className="w-8 h-8 rounded-lg border-2 border-primary flex items-center justify-center text-primary">
                        <span>B</span>
                    </div>
                    Banten<span className="text-primary">Pedia</span>
                </Link>
                <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/explore" className="text-foreground">Eksplorasi</Link>
                    <Link href="/identify" className="hover:text-foreground transition-colors">Identifikasi</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Tentang</Link>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-10 md:py-14">
                {/* Hero Section */}
                <motion.div initial="hidden" animate="show" variants={fadeIn} className="max-w-2xl mx-auto text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Eksplorasi Banten
                    </h1>
                    <p className="text-muted-foreground md:text-lg">
                        Temukan berbagai banten dari berbagai wilayah di Bali dan pelajari cerita di baliknya.
                    </p>
                </motion.div>

                {/* Search & Filter Section */}
                <motion.div initial="hidden" animate="show" variants={fadeIn} className="space-y-6 mb-12">
                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Input 
                            type="text" 
                            placeholder="Cari nama banten, komponen, atau wilayah..." 
                            className="pl-12 py-6 text-base rounded-xl border-border/60 bg-white focus-visible:ring-primary/20"
                        />
                    </div>

                    {/* Filter Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-muted-foreground mr-2 shrink-0 hidden md:block" />
                                {regions.map((region) => (
                                    <Button
                                        key={region}
                                        variant={activeRegion === region ? "default" : "outline"}
                                        onClick={() => setActiveRegion(region)}
                                        className={`rounded-full shrink-0 ${activeRegion === region ? "" : "border-border/60 bg-white text-muted-foreground hover:bg-muted/50"}`}
                                        size="sm"
                                    >
                                        {region}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-45 shrink-0">
                            <Select defaultValue="terbaru">
                                <SelectTrigger className="w-full bg-white border-border/60 rounded-lg">
                                    <SelectValue placeholder="Urutkan" />
                                </SelectTrigger>
                                <SelectContent className="rounded-lg border-border/60">
                                    <SelectItem value="terbaru">Terbaru</SelectItem>
                                    <SelectItem value="asc">Nama A-Z</SelectItem>
                                    <SelectItem value="desc">Nama Z-A</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {bantenList.map((banten) => (
                        <motion.div key={banten.id} variants={fadeUp}>
                            <Link href="/detail" className="block h-full">
                                <div className="group cursor-pointer flex flex-col gap-4 h-full">
                                    <div className="aspect-4/3 rounded-lg overflow-hidden relative bg-muted">
                                        <img 
                                            src={banten.image} 
                                            alt={banten.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-white backdrop-blur-sm rounded-md font-medium border-0">
                                                {banten.kategori}
                                            </Badge>
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-[17px] text-foreground group-hover:text-primary transition-colors">
                                                {banten.name}
                                            </h3>
                                            <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-all duration-300 -rotate-45 group-hover:rotate-0" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{banten.wilayah}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
}
