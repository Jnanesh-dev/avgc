
"use client";

import Link from 'next/link';
import { ArrowRight, Bone, Heart, Baby, Activity, Brain, User, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function TreatmentsPage() {
    const treatments = [
        {
            id: 'orthopedics',
            name: "Orthopedics",
            description: "Advanced joint replacement and spinal surgeries.",
            procedures: ["Knee Replacement", "Hip Replacement", "Spinal Fusion", "ACL Reconstruction"],
            price: 4500,
            usPrice: 35000,
            icon: <Bone className="w-8 h-8 text-emerald-600" />,
            bg: "bg-emerald-50"
        },
        {
            id: 'cardiology',
            name: "Cardiology",
            description: "World-class heart care and surgical interventions.",
            procedures: ["Coronary Angioplasty", "Heart Bypass", "Valve Replacement", "Pacemaker Implantation"],
            price: 12000,
            usPrice: 100000,
            icon: <Heart className="w-8 h-8 text-rose-500" />,
            bg: "bg-rose-50"
        },
        {
            id: 'fertility',
            name: "Fertility (IVF)",
            description: "Comprehensive fertility solutions with high success rates.",
            procedures: ["IVF", "Egg Freezing", "ICSI", "PGD/PGS Testing"],
            price: 3200,
            usPrice: 15000,
            icon: <Baby className="w-8 h-8 text-blue-500" />,
            bg: "bg-blue-50"
        },
        {
            id: 'hair-transplant',
            name: "Hair Transplant",
            description: "Permanent hair restoration solutions.",
            procedures: ["FUE Transplant", "DHI Transplant", "Beard Transplant", "Eyebrow Transplant"],
            price: 1800,
            usPrice: 12000,
            icon: <User className="w-8 h-8 text-amber-600" />,
            bg: "bg-amber-50"
        },
        {
            id: 'dental',
            name: "Dental Care",
            description: "Complete dental restoration and cosmetic dentistry.",
            procedures: ["Dental Implants", "Veneers", "All-on-4", "Teeth Whitening"],
            price: 850,
            usPrice: 4000,
            icon: <Activity className="w-8 h-8 text-cyan-600" />,
            bg: "bg-cyan-50"
        },
        {
            id: 'neurosurgery',
            name: "Neurosurgery",
            description: "Expert brain, spine, and nerve surgery.",
            procedures: ["Brain Tumor Removal", "Spinal Decompression", "Deep Brain Stimulation"],
            price: 9000,
            usPrice: 55000,
            icon: <Brain className="w-8 h-8 text-purple-600" />,
            bg: "bg-purple-50"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-20">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">Medical Specialties</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        World-Class Medical Treatments
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Access high-quality, affordable healthcare across specialized fields. We partner with JCI-accredited hospitals to ensure the highest standards of safety and care.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((treatment) => (
                        <div key={treatment.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100/50 group">
                            <div className={`w-16 h-16 rounded-2xl ${treatment.bg} flex items-center justify-center mb-6 Group-hover:scale-110 transition-transform`}>
                                {treatment.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{treatment.name}</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                {treatment.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {treatment.procedures.map((proc, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        {proc}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-end justify-between border-t border-gray-50 pt-6">
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Starting From</p>
                                    <p className="text-3xl font-bold text-emerald-600">${treatment.price.toLocaleString()}</p>
                                </div>
                                <Link
                                    href={`/search?treatment=${treatment.id}`}
                                    className="p-3 bg-gray-50 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Safety Badge */}
                <div className="mt-20 bg-emerald-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Your Safety is Our Priority</h2>
                        <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
                            Every hospital and clinic in our network undergoes a rigorous vetting process. We only work with internationally accredited facilities that meet global healthcare standards.
                        </p>
                        <Link href="/about" className="inline-block bg-white text-emerald-900 font-bold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors">
                            Learn About Our Quality Standards
                        </Link>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </div>
        </div>
    );
}
