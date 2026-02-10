import Link from 'next/link';
import { Check, ShieldCheck, Smile, Star, Plane, Car, Hotel, User } from 'lucide-react';

export default function PackageList() {
    const packages = [
        {
            title: "Elite Knee Replacement Package",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
            badge: "Top Rated",
            accreditation: "JCI Accredited",
            inclusions: [
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Full Surgery + Post-op Rehab" },
                { icon: <Hotel className="w-4 h-4" />, text: "7 Nights at Hilton Istanbul (5-Star)" },
                { icon: <Car className="w-4 h-4" />, text: "VIP Private Chauffeur Transfers" },
                { icon: <User className="w-4 h-4" />, text: "Personal Medical Concierge 24/7" }
            ],
            price: 12500,
            originalPrice: 16500,
            savings: "Save 20%"
        },
        {
            title: "Full Smile Hollywood Makeover",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
            badge: null,
            accreditation: "ISO Certified",
            inclusions: [
                { icon: <Smile className="w-4 h-4" />, text: "20 Zirconia Veneers + Imaging" },
                { icon: <Hotel className="w-4 h-4" />, text: "5 Nights Boutique Beach Resort" },
                { icon: <Car className="w-4 h-4" />, text: "Complimentary Airport Pickup" },
                { icon: <Plane className="w-4 h-4" />, text: "City Tour & Translation Support" }
            ],
            price: 6900,
            originalPrice: 9000,
            savings: "Early Bird Deal"
        },
        {
            title: "Executive Cardiology Checkup",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            badge: null,
            accreditation: "JCI Accredited",
            inclusions: [
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Comprehensive Heart Diagnostics" },
                { icon: <Hotel className="w-4 h-4" />, text: "3 Nights Luxury Wellness Spa" },
                { icon: <User className="w-4 h-4" />, text: "Nutritionist-Designed Meal Plan" },
                { icon: <Car className="w-4 h-4" />, text: "All Ground Transportation" }
            ],
            price: 3200,
            originalPrice: null,
            savings: "Best Value"
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">All-Inclusive Premium Packages</h2>
                        <p className="text-gray-500">Surgery, Stay, and Support - combined into one transparent price.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">Sort by:</span>
                        <select className="bg-white border border-gray-200 text-gray-900 text-sm font-bold rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                            <option>Most Popular</option>
                            <option>Lowest Price</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {packages.map((pkg, i) => (
                        <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group">
                            <div className="relative h-56 overflow-hidden">
                                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md text-[10px] font-bold text-emerald-700 flex items-center gap-1 shadow-sm">
                                    <ShieldCheck className="w-3 h-3" /> {pkg.accreditation}
                                </div>
                                {pkg.badge && (
                                    <div className="absolute bottom-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-md">
                                        {pkg.badge}
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{pkg.title}</h3>

                                <ul className="space-y-4 mb-8">
                                    {pkg.inclusions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-xs text-gray-600 font-medium">
                                            <div className="text-emerald-500 shrink-0 mt-0.5">{item.icon}</div>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-end justify-between border-t border-gray-50 pt-6">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">All-Inclusive Price</p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-3xl font-bold text-gray-900">${pkg.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        {pkg.originalPrice && <p className="text-xs text-gray-400 line-through mb-1 font-medium">${pkg.originalPrice.toLocaleString()}</p>}
                                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">{pkg.savings}</p>
                                    </div>
                                </div>

                                <button className="w-full mt-6 bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200">
                                    View Package Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secure Banner */}
                <div className="bg-emerald-500 rounded-none w-screen relative left-1/2 -translate-x-1/2 py-12 mb-24">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Secure Transactions</h4>
                                    <p className="text-xs text-emerald-100 opacity-80">All payments are protected with 256-bit encryption.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                    <Check className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Verified Hospitals</h4>
                                    <p className="text-xs text-emerald-100 opacity-80">We only partner with accredited medical centers.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                    <Smile className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">10,000+ Journeys</h4>
                                    <p className="text-xs text-emerald-100 opacity-80">Proudly serving patients from 50+ countries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Logistics CTA */}
                <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Logistics Plan?</h3>
                    <p className="text-gray-500 mb-8">Our advisors can create a personalized package tailored to your specific medical and travel needs.</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200">
                            Request Custom Quote
                        </button>
                        <button className="bg-white text-gray-900 border border-gray-200 font-bold py-3 px-8 rounded-full hover:border-gray-300 transition-colors">
                            Chat with an Advisor
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
