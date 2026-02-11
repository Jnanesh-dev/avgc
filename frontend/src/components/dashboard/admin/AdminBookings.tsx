
import { MoreHorizontal, Search, Filter, Calendar } from 'lucide-react';

interface Booking {
    id: string;
    patientName: string;
    doctorName: string;
    treatment: string;
    date: string;
    status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
    amount: string;
}

export default function AdminBookings() {
    // Mock Data (Expanded)
    const bookings: Booking[] = [
        { id: 'BK-7821', patientName: 'Sarah Miller', doctorName: 'Dr. Somchai', treatment: 'Knee Replacement', date: 'Feb 12, 2026', status: 'confirmed', amount: '$4,500' },
        { id: 'BK-7822', patientName: 'James Wilson', doctorName: 'Dr. Mehmet Y.', treatment: 'Hair Transplant', date: 'Feb 14, 2026', status: 'pending', amount: '$2,200' },
        { id: 'BK-7823', patientName: 'Emma Davis', doctorName: 'Dr. Priya S.', treatment: 'IVF Concert', date: 'Feb 15, 2026', status: 'confirmed', amount: '$150' },
        { id: 'BK-7824', patientName: 'Michael Brown', doctorName: 'Dr. Somporn T.', treatment: 'Rhinoplasty', date: 'Feb 18, 2026', status: 'cancelled', amount: '$3,800' },
        { id: 'BK-7825', patientName: 'Linda Taylor', doctorName: 'Dr. Carmen R.', treatment: 'Oncology', date: 'Feb 20, 2026', status: 'pending', amount: '$500' },
        { id: 'BK-7826', patientName: 'Robert White', doctorName: 'Dr. Ahmed A.', treatment: 'LASIK', date: 'Feb 22, 2026', status: 'completed', amount: '$1,500' },
        { id: 'BK-7827', patientName: 'Jennifer Lopez', doctorName: 'Dr. Somchai', treatment: 'Hip Replacement', date: 'Feb 25, 2026', status: 'confirmed', amount: '$5,200' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-emerald-50 text-emerald-600';
            case 'pending': return 'bg-amber-50 text-amber-600';
            case 'cancelled': return 'bg-red-50 text-red-600';
            case 'completed': return 'bg-blue-50 text-blue-600';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">All Bookings</h2>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search bookings..."
                            className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                        />
                    </div>
                    <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600">
                        <Calendar className="w-5 h-5" />
                    </button>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition">
                        New Booking
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Patient</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Treatment / Doctor</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                                        {booking.patientName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">{booking.treatment}</span>
                                            <span className="text-xs text-gray-400">{booking.doctorName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{booking.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
