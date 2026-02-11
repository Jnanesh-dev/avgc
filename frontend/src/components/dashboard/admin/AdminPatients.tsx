
import { MoreHorizontal, Search, Filter } from 'lucide-react';

interface Patient {
    id: string;
    name: string;
    email: string;
    status: 'Active' | 'Inactive';
    journeyStage: string;
    joinedDate: string;
}

export default function AdminPatients() {
    // Mock Data
    const patients: Patient[] = [
        { id: 'P-1001', name: 'Sarah Miller', email: 'sarah.miller@email.com', status: 'Active', journeyStage: 'Pre-op', joinedDate: 'Jan 15, 2026' },
        { id: 'P-1002', name: 'Alex Johnson', email: 'alex.johnson@email.com', status: 'Active', journeyStage: 'Recovery', joinedDate: 'Jan 20, 2026' },
        { id: 'P-1003', name: 'Michael Brown', email: 'm.brown@email.com', status: 'Inactive', journeyStage: 'Consultation', joinedDate: 'Feb 02, 2026' },
        { id: 'P-1004', name: 'Emma Davis', email: 'emma.d@email.com', status: 'Active', journeyStage: 'Travel Prep', joinedDate: 'Feb 05, 2026' },
        { id: 'P-1005', name: 'James Wilson', email: 'j.wilson@email.com', status: 'Active', journeyStage: 'Procedure', joinedDate: 'Feb 08, 2026' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search patients..."
                            className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                        />
                    </div>
                    <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600">
                        <Filter className="w-5 h-5" />
                    </button>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition">
                        Add Patient
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Journey Stage</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Joined</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {patients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                                                {patient.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                                                <div className="text-xs text-gray-500">{patient.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                            }`}>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {patient.journeyStage}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {patient.joinedDate}
                                    </td>
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
