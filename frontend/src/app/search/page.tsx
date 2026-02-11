
"use client";

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import {
    Search, MapPin, Filter, Star, ShieldCheck,
    ChevronDown, DollarSign, CheckSquare, SlidersHorizontal, Heart, ArrowRight
} from 'lucide-react';

// Reusing Hospital interface
interface Hospital {
    id: string;
    name: string;
    city: string;
    country: string;
    heroImage: string;
    accreditations: string[];
    specializations: string[];
    priceRange: {
        min: number;
        max: number;
        currency: string;
    };
}

function SearchContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get query params
    const treatment = searchParams.get('treatment') || '';
    const destination = searchParams.get('destination') || '';
    const query = searchParams.get('q') || '';

    const [results, setResults] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState(true);

    // Form states
    const [treatmentInput, setTreatmentInput] = useState(treatment);
    const [destinationInput, setDestinationInput] = useState(destination);

    useEffect(() => {
        setLoading(true);

        // Construct API URL based on what we have
        let url = 'http://localhost:3000/hospitals';

        // Use endpoint strategies based on available params
        // Note: Ideally backend should have a unified search endpoint, 
        // but we'll use existing filtering for now

        const params = new URLSearchParams();

        if (destination) {
            params.append('country', destination);
        }

        if (treatment || query) {
            // If we have text search, use the search endpoint
            url = 'http://localhost:3000/hospitals/search';
            params.append('q', treatment || query);
        }

        // Logic: specific endpoints take precedence
        // If searching specifically for hospitals in a country:
        if (destination && !treatment && !query) {
            url = 'http://localhost:3000/hospitals';
            // params are already set
        }

        const fetchUrl = `${url}?${params.toString()}`;

        fetch(fetchUrl)
            .then(res => {
                if (!res.ok) throw new Error("Fetch failed");
                return res.json();
            })
            .then(data => {
                // Ensure data is array
                setResults(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Search failed:", err);
                setResults([]);
                setLoading(false);
            });

    }, [treatment, destination, query]);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (treatmentInput) params.set('treatment', treatmentInput);
        if (destinationInput) params.set('destination', destinationInput);
        router.push(`/search?${params.toString()}`);
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="container-custom">

                {/* Search Header */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="What treatment are you looking for?"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                                value={treatmentInput}
                                onChange={(e) => setTreatmentInput(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Preferred Destination"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                                value={destinationInput}
                                onChange={(e) => setDestinationInput(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200"
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Filters Sidebar - Static for now but interactive looking */}
                    <div className="w-full lg:w-80 shrink-0 space-y-6 hidden lg:block">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                    <SlidersHorizontal className="w-5 h-5" /> Filters
                                </h3>
                                <button className="text-xs text-emerald-600 font-bold hover:underline">Reset All</button>
                            </div>

                            {/* Accreditation */}
                            <div className="mb-6 pb-6 border-b border-gray-50">
                                <h4 className="font-bold text-sm text-gray-900 mb-4">Accreditation</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="rounded text-emerald-500 focus:ring-emerald-500 border-gray-300" defaultChecked />
                                        <span className="text-sm text-gray-600">JCI Accredited</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="rounded text-emerald-500 focus:ring-emerald-500 border-gray-300" />
                                        <span className="text-sm text-gray-600">ISO Certified</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                {loading ? 'Searching...' : `${results.length} Results found`}
                            </h2>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : results.length > 0 ? (
                            <div className="space-y-6">
                                {results.map((hospital) => (
                                    <div key={hospital.id} className="bg-white p-2 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row group">
                                        <div className="relative w-full md:w-72 h-64 md:h-auto rounded-2xl overflow-hidden shrink-0">
                                            {hospital.heroImage ? (
                                                <img
                                                    src={hospital.heroImage}
                                                    alt={hospital.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                                            )}
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                                                <ShieldCheck className="w-3 h-3" /> {hospital.accreditations[0] || 'Accredited'}
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full">Hospital</span>
                                                        <div className="flex text-orange-400 text-xs">
                                                            <Star className="w-3 h-3 fill-current" />
                                                            <span className="ml-1 font-bold text-gray-700">4.8</span>
                                                        </div>
                                                    </div>
                                                    <Link href={`/hospitals/${hospital.id}`} className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                                        {hospital.name}
                                                    </Link>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {hospital.city}, {hospital.country}
                                            </p>

                                            <div className="flex gap-4 mb-6">
                                                <div className="bg-gray-50 px-3 py-2 rounded-lg">
                                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Specialties</p>
                                                    <p className="text-sm font-bold text-emerald-600">{hospital.specializations.length}</p>
                                                </div>
                                            </div>

                                            <div className="mt-auto flex items-end justify-between border-t border-gray-50 pt-4">
                                                <div>
                                                    <p className="text-xs text-gray-400 mb-1">Package starting from</p>
                                                    <p className="text-2xl font-bold text-gray-900">
                                                        {hospital.priceRange.currency} {hospital.priceRange.min.toLocaleString()}
                                                    </p>
                                                </div>
                                                <Link href={`/hospitals/${hospital.id}`} className="bg-emerald-500 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-8 h-8 text-gray-300" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">No results found</h3>
                                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                                    We couldn't find any hospitals matching your criteria. Try adjusting your search terms or destination.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchContent />
        </Suspense>
    );
}
