"use client";

import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container-custom flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        A
                    </div>
                    <span className="text-2xl font-bold text-gray-900 tracking-tight">
                        Astraveda
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/treatments" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        Treatments
                    </Link>
                    <Link href="/destinations" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        Destinations
                    </Link>
                    <Link href="/how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        How It Works
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">
                        About Us
                    </Link>
                </nav>

                {/* CTA & Language */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-gray-500 hover:text-primary transition-colors">
                        <Globe className="w-5 h-5" />
                    </button>
                    <Link href="/contact" className="btn-primary py-2.5 px-5 text-sm">
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-4 shadow-lg animate-in slide-in-from-top-5">
                    <nav className="flex flex-col container-custom gap-4">
                        <Link href="/treatments" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium py-2 border-b border-gray-50">
                            Treatments
                        </Link>
                        <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium py-2 border-b border-gray-50">
                            Destinations
                        </Link>
                        <Link href="/how-it-works" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium py-2 border-b border-gray-50">
                            How It Works
                        </Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium py-2 border-b border-gray-50">
                            About Us
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center mt-4">
                            Get a Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
