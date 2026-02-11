
import { MoreHorizontal, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';

interface Booking {
    id: string;
    patientName: string;
    doctorName: string;
    treatment: string;
    date: string;
    status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
    amount: string;
}

interface AdminRecentBookingsProps {
    onViewAll?: () => void;
}

export default function AdminRecentBookings({ onViewAll }: AdminRecentBookingsProps) {
    // Mock Data - In real app this comes from API
    const bookings: Booking[] = [
        {
            id: 'BK-7821',
            patientName: 'Sarah Miller',
            doctorName: 'Dr. Somchai Pattanapong',
            treatment: 'Knee Replacement',
            date: 'Feb 12, 2026',
            status: 'confirmed',
            amount: '$4,500'
        },
        {
            id: 'BK-7822',
            patientName: 'James Wilson',
            doctorName: 'Dr. Mehmet Yilmaz',
            treatment: 'Hair Transplant',
            date: 'Feb 14, 2026',
            status: 'pending',
            amount: '$2,200'
        },
        {
            id: 'BK-7823',
            patientName: 'Emma Davis',
            doctorName: 'Dr. Priya Sharma',
            treatment: 'IVF Consultation',
            date: 'Feb 15, 2026',
            status: 'confirmed',
            amount: '$150'
        },
        {
            id: 'BK-7824',
            patientName: 'Michael Brown',
            doctorName: 'Dr. Somporn Thanakit',
            treatment: 'Rhinoplasty',
            date: 'Feb 18, 2026',
            status: 'cancelled',
            amount: '$3,800'
        },
        {
            id: 'BK-7825',
            patientName: 'Linda Taylor',
            doctorName: 'Dr. Carmen Rodriguez',
            treatment: 'Oncology Screening',
            date: 'Feb 20, 2026',
            status: 'pending',
            amount: '$500'
        },
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
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-lg">Recent Bookings</h3>
                <button
                    onClick={onViewAll}
                    className="text-sm font-bold text-emerald-600 hover:text-emerald-700"
                >
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Treatment</th>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                                            {booking.patientName.charAt(0)}
                                        </div>
                                        {booking.patientName}
                                    </div>
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
    );
}
