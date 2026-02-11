"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container-custom flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-32 h-12">
                        <Image
                            src="/logo.png"
                            alt="Astraveda Global Care"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
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

                {/* CTA & Language & Auth */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-gray-500 hover:text-primary transition-colors">
                        <Globe className="w-5 h-5" />
                    </button>

                    {isAuthenticated ? (
                        <div className="flex items-center gap-4 ml-2">
                            <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary">
                                <User className="w-4 h-4" />
                                {user?.name.split(' ')[0]}
                            </Link>
                            <button onClick={logout} className="text-gray-400 hover:text-red-500 transition-colors" title="Logout">
                                <LogOut className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                                Login
                            </Link>
                            <Link href="/contact" className="btn-primary py-2.5 px-5 text-sm">
                                Get a Quote
                            </Link>
                        </div>
                    )}
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
                        {isAuthenticated ? (
                            <>
                                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium py-2 border-b border-gray-50 flex items-center gap-2">
                                    <User className="w-4 h-4" /> Dashboard ({user?.name})
                                </Link>
                                <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-left text-red-500 font-medium py-2 border-b border-gray-50 flex items-center gap-2">
                                    <LogOut className="w-4 h-4" /> Logout
                                </button>
                            </>
                        ) : (
                            <Link href="/auth/login" onClick={() => setIsMenuOpen(false)} className="text-gray-600 font-medium py-2 border-b border-gray-50">
                                Login
                            </Link>
                        )}
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center mt-4">
                            Get a Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
