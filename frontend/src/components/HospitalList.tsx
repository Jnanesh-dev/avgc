"use client";
import { useState } from 'react';
import { Star, MapPin, ShieldCheck, Heart, Filter, ChevronDown, Check, X } from 'lucide-react';
import Image from 'next/image';

export default function HospitalList() {
    const [selectedHospitals, setSelectedHospitals] = useState<number[]>([1]); // Mock selection
    const [specialty, setSpecialty] = useState('Cardiology');

    const toggleSelection = (id: number) => {
        if (selectedHospitals.includes(id)) {
            setSelectedHospitals(selectedHospitals.filter(hId => hId !== id));
        } else {
            if (selectedHospitals.length < 3) {
                setSelectedHospitals([...selectedHospitals, id]);
            }
        }
    };

    const hospitals = [
        {
            id: 1,
            name: "Bumrungrad International",
            location: "Bangkok, Thailand",
            rating: 4.9,
            reviews: 2400,
            tags: ["Cardiology", "Oncology"],
            price: 8400,
            image: "https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=800",
            badges: ["JCI Accredited"]
        },
        {
            id: 2,
            name: "Asklepios Klinik Barmbek",
            location: "Hamburg, Germany",
            rating: 4.8,
            reviews: 1100,
            tags: ["Orthopedics", "Neurosurgery"],
            price: 12200,
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
            badges: ["JCI Accredited", "Top Choice"]
        },
        {
            id: 3,
            name: "Seoul National Hospital",
            location: "Seoul, South Korea",
            rating: 4.7,
            reviews: 890,
            tags: ["Cosmetic Surgery", "IVF"],
            price: 6500,
            image: "https://images.unsplash.com/photo-1516549655169-df83a25a8396?auto=format&fit=crop&q=80&w=800",
            badges: ["ISO 9001"]
        },
        {
            id: 4,
            name: "Gleneagles Medical Centre",
            location: "Singapore",
            rating: 5.0,
            reviews: 3100,
            tags: ["General Surgery", "Diagnostics"],
            price: 15000,
            image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800",
            badges: ["JCI Accredited"]
        },
        {
            id: 5,
            name: "Apollo Hospital",
            location: "Chennai, India",
            rating: 4.6,
            reviews: 4200,
            tags: ["Cardiology", "Transplants"],
            price: 5500,
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
            badges: ["JCI Accredited"]
        },
        {
            id: 6,
            name: "Anadolu Medical Center",
            location: "Gebze, Turkey",
            rating: 4.7,
            reviews: 1400,
            tags: ["Oncology", "Women's Health"],
            price: 7200,
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
            badges: ["JCI Accredited"]
        }
    ];

    return (
        <section className="py-12 bg-gray-50/50">
            <div className="container-custom">

                <div className="flex flax-col lg:flex-row gap-8 items-start">

                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-72 flex-shrink-0 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hidden lg:block sticky top-24">
                        <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold">
                            <Filter className="w-5 h-5 text-emerald-600" /> Filters
                        </div>

                        <div className="space-y-8">
                            {/* Specialty */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Specialty</h4>
                                <div className="space-y-3">
                                    {['Cardiology', 'Orthopedics', 'Cosmetic Surgery', 'Dental Care'].map((item) => (
                                        <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${specialty === item ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300 group-hover:border-emerald-400'}`}>
                                                {specialty === item && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className={`text-sm ${specialty === item ? 'text-gray-900 font-bold' : 'text-gray-600'}`}>{item}</span>
                                            <input type="radio" name="specialty" className="hidden" onChange={() => setSpecialty(item)} checked={specialty === item} />
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Price Range</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="px-4 py-2 rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-700 text-sm font-bold">Budget</button>
                                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-300">Premium</button>
                                </div>
                            </div>

                            {/* Accreditation */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Accreditation</h4>
                                <div className="space-y-3">
                                    {['JCI Accredited', 'ISO Certified'].map((item) => (
                                        <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-colors group-hover:border-emerald-400"></div>
                                            <span className="text-sm text-gray-600">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Medical Facilities</h2>
                                <p className="text-gray-500">Showing 128 verified hospitals in <span className="text-gray-900 font-medium">Bangkok, Thailand</span></p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Sort by:</span>
                                <div className="relative">
                                    <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-900 min-w-[140px] justify-between">
                                        Best Rated <ChevronDown className="w-4 h-4 text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {hospitals.map((hospital) => (
                                <div key={hospital.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative">

                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={hospital.image}
                                            alt={hospital.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                            {hospital.badges.map((badge, idx) => (
                                                <span key={idx} className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm ${badge === 'Top Choice' ? 'bg-emerald-500 text-white' : 'bg-white text-emerald-700'}`}>
                                                    {badge === 'JCI Accredited' && <ShieldCheck className="w-3 h-3" />}
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                        <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-colors">
                                            <Heart className="w-4 h-4 text-white" />
                                        </button>

                                        {/* Select for comparison overlay */}
                                        <div className="absolute top-3 right-12">
                                            <button
                                                onClick={() => toggleSelection(hospital.id)}
                                                className={`p-2 rounded-lg backdrop-blur-md transition-all ${selectedHospitals.includes(hospital.id) ? 'bg-emerald-500 text-white' : 'bg-white/90 text-gray-400 hover:bg-white'}`}
                                            >
                                                {selectedHospitals.includes(hospital.id) ? <Check className="w-4 h-4" /> : <div className="w-4 h-4 border-2 border-current rounded-sm" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{hospital.name}</h3>
                                            <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm bg-emerald-50 px-1.5 py-0.5 rounded">
                                                <Star className="w-3.5 h-3.5 fill-current" /> {hospital.rating}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                                            <MapPin className="w-3.5 h-3.5" /> {hospital.location}
                                            <span className="text-gray-300">|</span>
                                            <span>{hospital.reviews} reviews</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {hospital.tags.map((tag, idx) => (
                                                <span key={idx} className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Starts From</p>
                                                <p className="text-lg font-bold text-emerald-600">${hospital.price.toLocaleString()}</p>
                                            </div>
                                            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <button className="bg-white border border-gray-200 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2 mx-auto">
                                Load More Facilities <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Comparison Sticky Bag */}
                {selectedHospitals.length > 0 && (
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200 flex items-center gap-6 z-50 animate-in slide-in-from-bottom-10 fade-in duration-300 w-full max-w-2xl mx-4">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="flex -space-x-3">
                                {selectedHospitals.map(id => {
                                    const h = hospitals.find(h => h.id === id);
                                    return (
                                        <div key={id} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                                            <img src={h?.image} className="w-full h-full object-cover" />
                                        </div>
                                    )
                                })}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-50 flex items-center justify-center text-emerald-600 text-xs font-bold">
                                    +
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{selectedHospitals.length}/3 hospitals selected</p>
                                <p className="text-xs text-gray-500">Add up to 3 to compare features</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {selectedHospitals.length > 0 && (
                                <button onClick={() => setSelectedHospitals([])} className="p-2 text-gray-400 hover:text-gray-600">
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                            <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200">
                                Compare Now
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
