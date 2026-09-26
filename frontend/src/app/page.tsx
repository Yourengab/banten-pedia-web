"use client";

import { motion, Variants } from "framer-motion";
import { Search, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function LandingPage() {
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
                    <Link
                        href="/identify"
                        className="hover:text-foreground transition-colors"
                    >
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

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Digitalisasi Warisan Budaya Bali</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
                    >
                        Eksplorasi Makna di Balik{" "}
                        <span className="text-primary">Setiap Banten</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Platform edukasi untuk mengenali, memahami, dan
                        melestarikan filosofi banten Bali secara interaktif dan
                        mudah dipahami.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/explore">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto gap-2 rounded-full px-8 h-12 text-base"
                            >
                                <Search className="w-4 h-4" />
                                Eksplorasi Banten
                            </Button>
                        </Link>
                        <Link href="#">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto gap-2 rounded-full px-8 h-12 text-base border-border/60 hover:bg-muted/50"
                            >
                                <BookOpen className="w-4 h-4" />
                                Pelajari Lebih Lanjut
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}
