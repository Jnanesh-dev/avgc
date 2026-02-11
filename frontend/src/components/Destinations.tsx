import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowRight } from 'lucide-react';

export default function Destinations() {
    const destinations = [
        {
            name: "Turkey",
            description: "Dental & Hair Transplants",
            subtext: "Hub for advanced cosmetic procedures with JCI accredited hospitals.",
            flag: "🇹🇷",
            bgGradient: "bg-gradient-to-br from-emerald-800 to-teal-900",
            mapColor: "text-emerald-700",
            rating: 4.8,
            reviews: 2400,
            saveUpTo: "75%",
            // Using a slightly different approach since we don't have the exact map vectors. 
            // We'll use a stylized abstract look or a high-quality photo with an overlay.
            // For this implementation, I will use a clean colored card with the country name prominent.
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Thailand",
            description: "Cosmetic & Wellness",
            subtext: "Renowned for luxury wellness resorts and high-tech surgical centers.",
            flag: "🇹🇭",
            bgGradient: "bg-gradient-to-br from-orange-400 to-red-500",
            mapColor: "text-orange-500",
            rating: 4.9,
            reviews: 3100,
            saveUpTo: "60%",
            image: "https://images.unsplash.com/photo-1506665531195-3566afe2be6a?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Mexico",
            description: "Bariatrics & Proximity",
            subtext: "Convenient travel for US patients specializing in weight loss surgery.",
            flag: "🇲🇽",
            bgGradient: "bg-gradient-to-br from-teal-900 to-gray-900",
            mapColor: "text-teal-900",
            rating: 4.2,
            reviews: 1800,
            saveUpTo: "80%",
            image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Top Destinations</h2>
                        <p className="text-gray-600 text-lg max-w-2xl">World-class medical hubs with significant cost savings.</p>
                    </div>
                    <Link href="/destinations" className="text-emerald-600 font-bold flex items-center gap-2 hover:text-emerald-700 transition-colors">
                        View Map <MapPin className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, i) => (
                        <Link href={`/search?destination=${dest.name}`} key={i} className="block group">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                <div className="relative h-56 overflow-hidden">
                                    {/* Fallback to Image but styled to look cooler if pixel matching map is hard without assets */}
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 flex items-center gap-2 shadow-md">
                                        <span className="text-lg">{dest.flag}</span>
                                        <span>{dest.name}</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                        Save up to {dest.saveUpTo}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{dest.description}</h3>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < Math.floor(dest.rating) ? "fill-current" : "text-gray-200"}`} />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500">{dest.rating} ({dest.reviews > 1000 ? (dest.reviews / 1000).toFixed(1) + 'k' : dest.reviews} reviews)</span>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {dest.subtext}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
