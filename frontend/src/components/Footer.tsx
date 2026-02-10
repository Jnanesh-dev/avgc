import Link from 'next/link';
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">
                                GlobalHealth
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            Pioneering the future of medical mobility and transparent healthcare access worldwide.
                        </p>
                        <div className="text-xs text-gray-400">
                            © 2024 GLOBALHEALTH MARKETPLACE. ALL RIGHTS RESERVED.
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Procedures</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Dental Implants</Link></li>
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Joint Replacement</Link></li>
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Hair Transplant</Link></li>
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Cosmetic Surgery</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Destinations</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Turkey</Link></li>
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Mexico</Link></li>
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Thailand</Link></li>
                                <li><Link href="#" className="hover:text-emerald-500 transition-colors">Germany</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <button className="bg-emerald-500 text-white p-3 rounded-xl hover:bg-emerald-600 transition-colors">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-bold tracking-wider uppercase">
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-emerald-500 transition-colors">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
