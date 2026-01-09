"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, ImageIcon } from "lucide-react";

interface ProjectImage {
    id: string;
    image_url: string;
    is_cover: boolean;
}

interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    status: string;
    image_url?: string;
    description?: string;
}

interface ProjectGalleryModalProps {
    project: Project | null;
    images: ProjectImage[];
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectGalleryModal({ project, images, isOpen, onClose }: ProjectGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // All images including cover
    const allImages = project?.image_url
        ? [{ id: 'cover', image_url: project.image_url, is_cover: true }, ...images.filter(img => img.image_url !== project.image_url)]
        : images;

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [project?.id]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-50"
                    >
                        <X size={32} />
                    </button>

                    {/* Main Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-white overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col lg:flex-row h-full">
                            {/* Image Area */}
                            <div className="relative flex-1 bg-black min-h-[300px] lg:min-h-[500px]">
                                {allImages.length > 0 ? (
                                    <>
                                        <Image
                                            src={allImages[currentIndex]?.image_url || ""}
                                            alt={`${project.title} - Fotoğraf ${currentIndex + 1}`}
                                            fill
                                            className="object-contain"
                                        />

                                        {/* Navigation Arrows */}
                                        {allImages.length > 1 && (
                                            <>
                                                <button
                                                    onClick={goPrev}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
                                                >
                                                    <ChevronLeft size={24} className="text-white" />
                                                </button>
                                                <button
                                                    onClick={goNext}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
                                                >
                                                    <ChevronRight size={24} className="text-white" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image Counter */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                                            {currentIndex + 1} / {allImages.length}
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <ImageIcon size={64} className="text-white/30" />
                                    </div>
                                )}
                            </div>

                            {/* Info Panel */}
                            <div className="w-full lg:w-80 p-6 bg-white">
                                <div className="mb-4">
                                    <span className={`inline-block text-xs font-semibold px-3 py-1 ${project.status === "Tamamlandı" ? "bg-green-500" : "bg-yellow-500"} text-white`}>
                                        {project.status}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {project.title}
                                </h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-text-secondary">
                                        <MapPin size={18} />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-text-secondary">
                                        <Calendar size={18} />
                                        <span>{project.year}</span>
                                    </div>
                                </div>

                                {project.description && (
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                )}

                                {/* Thumbnail Grid */}
                                {allImages.length > 1 && (
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-sm font-medium text-foreground mb-3">Fotoğraflar</p>
                                        <div className="grid grid-cols-4 gap-2">
                                            {allImages.map((img, idx) => (
                                                <button
                                                    key={img.id}
                                                    onClick={() => setCurrentIndex(idx)}
                                                    className={`relative aspect-square overflow-hidden ${currentIndex === idx ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`}
                                                >
                                                    <Image
                                                        src={img.image_url}
                                                        alt={`Thumbnail ${idx + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
