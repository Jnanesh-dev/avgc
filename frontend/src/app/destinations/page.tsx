
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Star, Globe, Shield } from 'lucide-react';

export default function DestinationsPage() {
    const destinations = [
        {
            id: 'turkey',
            name: "Turkey",
            region: "Europe/Asia",
            description: "A global hub for hair transplants, cosmetic surgery, and dentistry.",
            longDescription: "Turkey combines world-class medical infrastructure with renowned hospitality. Istanbul is particularly famous for high-quality hair restoration and dental aesthetics at competitive prices.",
            rating: 4.8,
            reviews: 2400,
            saveUpTo: "75%",
            procedures: ["Hair Transplant", "Dental Veneers", "Rhinoplasty"],
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800",
            flag: "🇹🇷"
        },
        {
            id: 'thailand',
            name: "Thailand",
            region: "Asia",
            description: "The wellness capital of Asia, famous for cosmetic surgery and holistic care.",
            longDescription: "Thailand offers top-tier JCI-accredited hospitals known for cosmetic surgery and gender affirmation procedures, often combined with a luxury recovery vacation.",
            rating: 4.9,
            reviews: 3100,
            saveUpTo: "60%",
            procedures: ["Face Lift", "Breast Augmentation", "Gender Reassignment"],
            image: "https://images.unsplash.com/photo-1506665531195-3566afe2be6a?auto=format&fit=crop&q=80&w=800",
            flag: "🇹🇭"
        },
        {
            id: 'mexico',
            name: "Mexico",
            region: "North America",
            description: "Leading destination for bariatric surgery and dentistry for US patients.",
            longDescription: "Mexico is the top choice for North American patients seeking affordable bariatric surgery and dental work, offering high standards of care just across the border.",
            rating: 4.2,
            reviews: 1800,
            saveUpTo: "80%",
            procedures: ["Gastric Sleeve", "Dental Implants", "Full Arch Restoration"],
            image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=800",
            flag: "🇲🇽"
        },
        {
            id: 'spain',
            name: "Spain",
            region: "Europe",
            description: "Advanced fertility treatments and orthopedics.",
            longDescription: "Spain has one of the best healthcare systems in the world, specializing in advanced fertility treatments (IVF) and complex orthopedic surgeries.",
            rating: 4.7,
            reviews: 1200,
            saveUpTo: "40%",
            procedures: ["IVF", "Egg Donation", "Knee Replacement"],
            image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=800",
            flag: "🇪🇸"
        },
        {
            id: 'india',
            name: "India",
            region: "Asia",
            description: "Complex cardiac and organ transplant surgeries.",
            longDescription: "India is a leader in complex medical procedures like cardiac bypass and organ transplants, offering cutting-edge technology at a fraction of Western costs.",
            rating: 4.5,
            reviews: 4500,
            saveUpTo: "85%",
            procedures: ["Heart Bypass", "Liver Transplant", "Orthopedics"],
            image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
            flag: "🇮🇳"
        },
        {
            id: 'germany',
            name: "Germany",
            region: "Europe",
            description: "Precision medicine and oncology.",
            longDescription: "Germany is renowned for its precision in medical engineering, oncology treatments, and neurosurgery, attracting patients seeking the most advanced care available.",
            rating: 4.9,
            reviews: 900,
            saveUpTo: "20%",
            procedures: ["Oncology", "Neurosurgery", "Spinal Surgery"],
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
            flag: "🇩🇪"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-20">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">Global Network</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Top Medical Destinations
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Explore our curated network of safe, accredited medical hubs worldwide. Combine world-class healthcare with a comfortable recovery experience.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100/50 group flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-900 flex items-center gap-2 shadow-sm">
                                    <span className="text-lg">{dest.flag}</span>
                                    <span>{dest.name}</span>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="flex items-center gap-1 text-sm font-medium mb-1">
                                        <MapPin className="w-4 h-4 text-emerald-400" />
                                        {dest.region}
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                    Save up to {dest.saveUpTo}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(dest.rating) ? "fill-current" : "text-gray-200"}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">{dest.rating}</span>
                                    <span className="text-sm text-gray-500">({dest.reviews}+ reviews)</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{dest.description}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                                    {dest.longDescription}
                                </p>

                                <div className="space-y-3 mb-6">
                                    {dest.procedures.slice(0, 3).map((proc, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 p-2 rounded-lg">
                                            <Globe className="w-3 h-3 text-emerald-500" />
                                            {proc}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={`/search?destination=${dest.name}`}
                                    className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    View Hospitals <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
