"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search, MapPin, Filter, Star, ShieldCheck,
    ChevronDown, DollarSign, CheckSquare, SlidersHorizontal, Heart
} from 'lucide-react';

export default function SearchPage() {
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
                                defaultValue="Knee Replacement"
                            />
                        </div>
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Preferred Destination"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                                defaultValue="Thailand"
                            />
                        </div>
                        <button className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200">
                            Search
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Filters Sidebar */}
                    <div className="w-full lg:w-80 shrink-0 space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                    <SlidersHorizontal className="w-5 h-5" /> Filters
                                </h3>
                                <button className="text-xs text-emerald-600 font-bold hover:underline">Reset All</button>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6 pb-6 border-b border-gray-50">
                                <h4 className="font-bold text-sm text-gray-900 mb-4">Price Range</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-emerald-500">
                                            <div className="w-3 h-3 bg-emerald-500 rounded-sm opacity-0 group-hover:opacity-20"></div>
                                        </div>
                                        <span className="text-sm text-gray-600">$0 - $1,000</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-emerald-500">
                                            <CheckSquare className="w-4 h-4 text-white fill-emerald-500 hidden" />
                                            <div className="w-3 h-3 bg-emerald-500 rounded-sm opacity-100"></div>
                                        </div>
                                        <span className="text-sm text-gray-900 font-medium">$1,000 - $5,000</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-emerald-500">
                                            <div className="w-3 h-3 bg-emerald-500 rounded-sm opacity-0 group-hover:opacity-20"></div>
                                        </div>
                                        <span className="text-sm text-gray-600">$5,000 - $10,000</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-emerald-500">
                                            <div className="w-3 h-3 bg-emerald-500 rounded-sm opacity-0 group-hover:opacity-20"></div>
                                        </div>
                                        <span className="text-sm text-gray-600">$10,000+</span>
                                    </label>
                                </div>
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
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="rounded text-emerald-500 focus:ring-emerald-500 border-gray-300" />
                                        <span className="text-sm text-gray-600">Global Healthcare</span>
                                    </label>
                                </div>
                            </div>

                            {/* Rating */}
                            <div>
                                <h4 className="font-bold text-sm text-gray-900 mb-4">Patient Rating</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="rating" className="text-emerald-500 focus:ring-emerald-500 border-gray-300" defaultChecked />
                                        <div className="flex text-orange-400 text-xs">
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <span className="ml-2 text-gray-600">4.5+</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="rating" className="text-emerald-500 focus:ring-emerald-500 border-gray-300" />
                                        <div className="flex text-orange-400 text-xs">
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 text-gray-200 fill-current" />
                                            <span className="ml-2 text-gray-600">4.0+</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                24 Results for <span className="text-emerald-600">"Knee Replacement"</span> in Thailand
                            </h2>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Sort by:</span>
                                <select className="text-sm font-bold text-gray-900 bg-transparent border-none focus:ring-0 cursor-pointer">
                                    <option>Recommended</option>
                                    <option>Price: Low to High</option>
                                    <option>Rating: High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Result Card 1 */}
                            <div className="bg-white p-2 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row group">
                                <div className="relative w-full md:w-72 h-64 md:h-auto rounded-2xl overflow-hidden shrink-0">
                                    <Image src="https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=600" alt="Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                                        <ShieldCheck className="w-3 h-3" /> JCI ACCREDITED
                                    </div>
                                    <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white text-white hover:text-red-500 transition-colors">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full">Hospital</span>
                                                <div className="flex text-orange-400 text-xs">
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <span className="ml-1 font-bold text-gray-700">4.8</span>
                                                    <span className="ml-1 text-gray-400">(1.2k)</span>
                                                </div>
                                            </div>
                                            <Link href="/hospitals/1" className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">St. Emerald International Hospital</Link>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                                        <MapPin className="w-4 h-4" /> Bangkok, Thailand
                                    </p>

                                    <div className="flex gap-4 mb-6">
                                        <div className="bg-gray-50 px-3 py-2 rounded-lg">
                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Success Rate</p>
                                            <p className="text-sm font-bold text-emerald-600">98.5%</p>
                                        </div>
                                        <div className="bg-gray-50 px-3 py-2 rounded-lg">
                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Surgeons</p>
                                            <p className="text-sm font-bold text-gray-900">45 Specialists</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-end justify-between border-t border-gray-50 pt-4">
                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">Package starting from</p>
                                            <p className="text-2xl font-bold text-gray-900">$2,500</p>
                                        </div>
                                        <Link href="/hospitals/1" className="bg-emerald-500 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Result Card 2 */}
                            <div className="bg-white p-2 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row group">
                                <div className="relative w-full md:w-72 h-64 md:h-auto rounded-2xl overflow-hidden shrink-0">
                                    <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" alt="Hospital" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                                        <ShieldCheck className="w-3 h-3" /> ISO Certified
                                    </div>
                                    <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white text-white hover:text-red-500 transition-colors">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">Clinic</span>
                                                <div className="flex text-orange-400 text-xs">
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <span className="ml-1 font-bold text-gray-700">4.9</span>
                                                    <span className="ml-1 text-gray-400">(850)</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">Bangkok Orthopedic Center</h3>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                                        <MapPin className="w-4 h-4" /> Bangkok, Thailand
                                    </p>

                                    <div className="flex gap-4 mb-6">
                                        <div className="bg-gray-50 px-3 py-2 rounded-lg">
                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Success Rate</p>
                                            <p className="text-sm font-bold text-emerald-600">99.2%</p>
                                        </div>
                                        <div className="bg-gray-50 px-3 py-2 rounded-lg">
                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Surgeons</p>
                                            <p className="text-sm font-bold text-gray-900">12 Specialists</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-end justify-between border-t border-gray-50 pt-4">
                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">Package starting from</p>
                                            <p className="text-2xl font-bold text-gray-900">$2,100</p>
                                        </div>
                                        <button className="bg-white border border-gray-200 text-gray-900 font-bold py-2.5 px-6 rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center gap-2">
                            <button className="w-10 h-10 rounded-xl bg-emerald-500 text-white font-bold flex items-center justify-center shadow-lg shadow-emerald-200">1</button>
                            <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:bg-gray-50">2</button>
                            <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:bg-gray-50">3</button>
                            <span className="flex items-end px-2 text-gray-400">...</span>
                            <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:bg-gray-50">8</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
