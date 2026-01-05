"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, ArrowUpRight } from "lucide-react";

const categories = ["Hepsi", "Altyapı", "Sağlık", "Eğitim", "Konut"];

const projects = [
    {
        id: 1,
        title: "Şehir Köprüsü Yapımı",
        category: "Altyapı",
        location: "İstanbul",
        year: "2023",
        status: "Tamamlandı",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFPkVqupZRKxhC7a3pFgxUMDsMBXcQ_z4gHTpe6pRHCQJ5PJel7cK08uSHVFDjqkHMXLPOew-c4sp-10sCHTgZA2tw9T_ytFNd_WSz5cr4DOFIzem7Kk337500hrNsqNFVr4akDQpOWay-Nz3xpywIrLSvLRyqRLl-ruZnfC7B2FIOMkLWYrHz7NDK22466r1DQpFaLatVEpHC96C7d1YVff1yIrvrjHN9zZPnX4FWr-atXuRF5KB880dui7clKqEF6_Kono2iPTiJ"
    },
    {
        id: 2,
        title: "Merkez Hastanesi Projesi",
        category: "Sağlık",
        location: "Ankara",
        year: "2024",
        status: "Devam Ediyor",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Q8994vL6Z-dsApRROUsa9Bxq9xfoBViyhxHG2Il0tGcHB7vrwkjfY0eMUNiCRS57lK1H9ldJST06gtEgoa6PXPxWaxMzk6C2DLFjur6J-odHFJLRZB8MIJmBsVRp-f2roPrhBCImiRXRkG7FVtSw1GjKcdvw_99icL2xUowq2tztgokb1PEPGp43ZLyG3V0hUR_m291H52ALbcqrMVjKk9rDKrM0enPdidNyl6DAfRCFz56zSewnWLEQX751073y8kfTXXVSMao7"
    },
    {
        id: 3,
        title: "Anadolu Lisesi Bağışı",
        category: "Eğitim",
        location: "İzmir",
        year: "2022",
        status: "Tamamlandı",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcyhifZbpSgvyiXW09ZLaG6ZTAfuwGut1eaAfWhMtwXsI2AkjddTNbSRCxvQ9GaC1ywJJLuv5mwBvjg-OdEu7q3Pn8Ssox_vRbe4kiKFVyhJj96RS_Kv9ab3CiWLum_1ur5cg8UNkA2Ka0luYWkS5f7BoDPwN-GPoGBTDR5I2nA91WObLOK7QlA8bWmk4BkO4TxoNdA4hbN6hHnm3GVCMhUCqt9UfsXR60-s8U1WzoaTU6DywtagjJYmeutuJtBxwf1y1GS4OKB2Y"
    },
    {
        id: 4,
        title: "Modern Yaşam Konutları",
        category: "Konut",
        location: "Antalya",
        year: "2023",
        status: "Tamamlandı",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEdGREEIEIgZIt3Ca6KJloVUS5uZ7599iWQ4tm1H7CGEvSQh62cykeMIQdxCYTWoClGtkTEYi61CgAAEZXeys5h6TfhnBdKOkP15MUSl9VRraWkcU7_JJ44yOpDkC7wXR-CiiLzjpk3n0zIxGzdhKS5DhHwUnoWLE3Ctw4aKBfj-TIvrS0AVJ1brJgbbrDeevGt5lImWTkagKrz7-4WF03xerdfXLYKsz1GtTf1owpamaTBKPDbycR6tT_j7HD0Nm0FtgurzXAvw6h"
    }
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Hepsi");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === "Hepsi" || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col py-20 bg-black min-h-screen">
            <div className="layout-container">
                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Projelerimiz</h1>
                    <p className="text-sm uppercase tracking-[0.3em] text-text-secondary max-w-2xl mx-auto font-medium">
                        Evrensel mühendislik standartlarında inşa edilen kalıcı eserler.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`h-11 px-8 text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${selectedCategory === cat
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent border-white/10 text-text-secondary hover:border-white/40 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                        <input
                            type="text"
                            placeholder="Arama yapın..."
                            className="w-full h-11 pl-12 pr-4 bg-transparent border border-white/10 focus:border-white outline-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="group relative flex flex-col bg-surface border border-white/5 overflow-hidden"
                            >
                                <div className="relative aspect-[21/9] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-50 group-hover:brightness-75"
                                    />
                                    <div className="absolute top-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest border border-white/20">
                                        {project.status}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col md:flex-row gap-8 justify-between items-end">
                                    <div className="flex-1">
                                        <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                                            {project.category}
                                        </div>
                                        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:text-white transition-colors">{project.title}</h3>

                                        <div className="flex flex-wrap gap-6 items-center">
                                            <div className="flex items-center gap-2 text-text-secondary text-[10px] font-black uppercase tracking-widest">
                                                <MapPin size={14} className="opacity-40" /> {project.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-text-secondary text-[10px] font-black uppercase tracking-widest">
                                                <Calendar size={14} className="opacity-40" /> {project.year}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="size-16 flex items-center justify-center bg-white text-black transition-all hover:scale-105">
                                        <ArrowUpRight size={24} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-32 text-center border border-dashed border-white/10">
                        <p className="text-text-secondary text-xs uppercase tracking-[0.3em] font-medium">Sonuç bulunamadı.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
