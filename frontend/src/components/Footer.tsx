
import Link from 'next/link';
import Image from 'next/image';
import { Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-32 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="Astraveda Global Care"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
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
                                <li><Link href="/search?treatment=dental" className="hover:text-emerald-500 transition-colors">Dental Implants</Link></li>
                                <li><Link href="/search?treatment=orthopedics" className="hover:text-emerald-500 transition-colors">Joint Replacement</Link></li>
                                <li><Link href="/search?treatment=hair-transplant" className="hover:text-emerald-500 transition-colors">Hair Transplant</Link></li>
                                <li><Link href="/search?treatment=cosmetic" className="hover:text-emerald-500 transition-colors">Cosmetic Surgery</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Destinations</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li><Link href="/search?destination=Turkey" className="hover:text-emerald-500 transition-colors">Turkey</Link></li>
                                <li><Link href="/search?destination=Mexico" className="hover:text-emerald-500 transition-colors">Mexico</Link></li>
                                <li><Link href="/search?destination=Thailand" className="hover:text-emerald-500 transition-colors">Thailand</Link></li>
                                <li><Link href="/search?destination=Germany" className="hover:text-emerald-500 transition-colors">Germany</Link></li>
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
                        <Link href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
                        <Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
