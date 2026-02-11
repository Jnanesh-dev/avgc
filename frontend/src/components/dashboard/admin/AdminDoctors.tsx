
import { MoreHorizontal, Search, Star, MapPin } from 'lucide-react';

interface Doctor {
    id: string;
    name: string;
    specialization: string;
    hospital: string;
    rating: number;
    patients: number;
    status: 'Available' | 'Busy' | 'Offline';
}

export default function AdminDoctors() {
    // Mock Data
    const doctors: Doctor[] = [
        { id: 'D-101', name: 'Dr. Somchai Pattanapong', specialization: 'Orthopedic', hospital: 'Bangkok Int. Hospital', rating: 4.9, patients: 124, status: 'Available' },
        { id: 'D-102', name: 'Dr. Mehmet Yilmaz', specialization: 'Cardiac Surgery', hospital: 'Memorial Hospital', rating: 4.8, patients: 98, status: 'Busy' },
        { id: 'D-103', name: 'Dr. Priya Sharma', specialization: 'Fertility & IVF', hospital: 'Apollo Chennai', rating: 4.9, patients: 156, status: 'Available' },
        { id: 'D-104', name: 'Dr. Carmen Rodriguez', specialization: 'Oncology', hospital: 'Quirónsalud Madrid', rating: 4.7, patients: 82, status: 'Offline' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Doctor Management</h2>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search doctors..."
                            className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                        />
                    </div>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition">
                        Add Doctor
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                                    {doctor.name.charAt(4)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                                    <p className="text-sm text-emerald-600 font-medium">{doctor.specialization}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="truncate">{doctor.hospital}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1 text-orange-500 font-bold">
                                    <Star className="w-4 h-4 fill-current" />
                                    {doctor.rating}
                                </div>
                                <div className="text-gray-500">{doctor.patients} Patients</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-4">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${doctor.status === 'Available' ? 'bg-green-100 text-green-700' :
                                    doctor.status === 'Busy' ? 'bg-amber-100 text-amber-700' :
                                        'bg-gray-100 text-gray-600'
                                }`}>
                                {doctor.status}
                            </span>
                            <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700">View Profile</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
