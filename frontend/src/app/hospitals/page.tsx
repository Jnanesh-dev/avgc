
"use client";

import { useState, useEffect, Suspense } from 'react';
import { Search, MapPin, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

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

function HospitalsContent() {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialQuery = searchParams.get('q') || '';
    const initialCountry = searchParams.get('country') || '';
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    useEffect(() => {
        setLoading(true);
        let url = 'http://localhost:3000/hospitals';

        if (initialCountry) {
            url += `?country=${encodeURIComponent(initialCountry)}`;
        } else if (initialQuery) {
            url += `/search?q=${encodeURIComponent(initialQuery)}`;
        }

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((data) => {
                setHospitals(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch hospitals:', err);
                setHospitals([]);
                setLoading(false);
            });
    }, [initialCountry, initialQuery]);

    // Handle Search Submit
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/hospitals?q=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push('/hospitals');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-teal-600 font-medium">Loading hospitals...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Partner Hospitals</h1>
                        <p className="text-gray-600 mt-1">
                            {initialCountry
                                ? `Showing hospitals in ${initialCountry}`
                                : initialQuery
                                    ? `Search results for "${initialQuery}"`
                                    : 'Discover world-class medical facilities'}
                        </p>
                    </div>
                    <form onSubmit={handleSearch} className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search hospitals..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                        />
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hospitals.map((hospital) => (
                        <div key={hospital.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                {hospital.heroImage ? (
                                    <img
                                        src={hospital.heroImage}
                                        alt={hospital.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                        No Image
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-teal-700 shadow-sm">
                                    {hospital.accreditations[0] || 'JCI Accredited'}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{hospital.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    {hospital.city}, {hospital.country}
                                </div>

                                <div className="space-y-3 mb-5">
                                    <div className="flex flex-wrap gap-2">
                                        {hospital.specializations.slice(0, 3).map((spec) => (
                                            <span key={spec} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="text-sm">
                                        <span className="text-gray-500">Starts at </span>
                                        <span className="font-semibold text-gray-900">
                                            {hospital.priceRange.currency} {hospital.priceRange.min.toLocaleString()}
                                        </span>
                                    </div>
                                    <Link href={`/hospitals/${hospital.id}`} className="p-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition">
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {hospitals.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No hospitals found</h3>
                        <p className="text-gray-500 mt-1">Try adjusting your search terms or clearing filters</p>
                        {(initialCountry || initialQuery) && (
                            <Link href="/hospitals" className="inline-block mt-4 text-teal-600 font-medium hover:underline">
                                Clear all filters
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function HospitalsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HospitalsContent />
        </Suspense>
    );
}
