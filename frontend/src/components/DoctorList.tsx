import { Star, GraduationCap, Languages, CheckCircle, ArrowRight, Filter, Search } from 'lucide-react';
import Image from 'next/image';

export default function DoctorList() {
    const doctors = [
        {
            name: "Dr. Elena Rodriguez",
            specialty: "Senior Orthopedic Surgeon",
            rating: 4.9,
            reviews: 128,
            experience: "15+ Years",
            languages: ["EN", "ES", "FR"],
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
            verified: true
        },
        {
            name: "Dr. Julian Thorne",
            specialty: "Cardiac Specialist",
            rating: 5.0,
            reviews: 92,
            experience: "22+ Years",
            languages: ["EN", "DE", "TR"],
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
            verified: true
        },
        {
            name: "Dr. Sofia Chen",
            specialty: "Bariatric Specialist",
            rating: 4.8,
            reviews: 210,
            experience: "12+ Years",
            languages: ["EN", "ZH", "PT"],
            image: "https://images.unsplash.com/photo-1537368910025-bc005fbede68?auto=format&fit=crop&q=80&w=400",
            verified: true
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2 block">Expert Directory</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">World-Class Specialists</h2>
                        <p className="text-gray-600 max-w-2xl">Connect with internationally accredited surgeons who lead their fields in innovation and patient safety.</p>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="bg-white p-3 rounded-xl border border-gray-200 text-gray-400 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                            <Filter className="w-5 h-5" />
                        </button>
                        <div className="relative flex-1 md:w-64">
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search by name or specialty"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100/50 group">

                            <div className="flex items-start gap-5 mb-6">
                                <div className="relative w-20 h-20 shrink-0">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="rounded-2xl object-cover"
                                    />
                                    {doctor.verified && (
                                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-2 border-white">
                                            <CheckCircle className="w-3 h-3" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                                    <p className="text-emerald-500 text-sm font-medium mb-2">{doctor.specialty}</p>
                                    <div className="flex items-center gap-1 text-xs font-bold">
                                        <Star className="w-3.5 h-3.5 text-orange-400 fill-current" />
                                        <span className="text-gray-900">{doctor.rating}</span>
                                        <span className="text-gray-400 font-normal">({doctor.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Experience</p>
                                    <p className="text-sm font-bold text-gray-900">{doctor.experience}</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Languages</p>
                                    <p className="text-sm font-bold text-gray-900">{doctor.languages.join(", ")}</p>
                                </div>
                            </div>

                            <button className="w-full bg-gray-50 text-gray-900 font-bold py-3 rounded-xl hover:bg-emerald-500 hover:text-white transition-all">
                                View Full Profile
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
