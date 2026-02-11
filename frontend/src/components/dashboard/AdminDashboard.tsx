"use client";

import {
    Users, DollarSign, Calendar, Activity,
    LayoutDashboard, UserCog, Settings, FileText,
    LogOut, Bell, Search, Menu
} from 'lucide-react';
import AdminStatsCard from './admin/AdminStatsCard';
import AdminRecentBookings from './admin/AdminRecentBookings';
import AdminPatients from './admin/AdminPatients';
import AdminDoctors from './admin/AdminDoctors';
import AdminBookings from './admin/AdminBookings';
import AdminReports from './admin/AdminReports';
import AdminSettings from './admin/AdminSettings';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminDashboard() {
    const { logout, user } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [currentView, setCurrentView] = useState('dashboard');

    const renderView = () => {
        switch (currentView) {
            case 'patients': return <AdminPatients />;
            case 'doctors': return <AdminDoctors />;
            case 'bookings': return <AdminBookings />;
            case 'reports': return <AdminReports />;
            case 'settings': return <AdminSettings />;
            default: // 'dashboard'
                return (
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <AdminStatsCard
                                title="Total Revenue"
                                value="$128,430"
                                change="+12.5%"
                                trend="up"
                                icon={DollarSign}
                                color="bg-emerald-500"
                                onClick={() => setCurrentView('reports')}
                            />
                            <AdminStatsCard
                                title="Total Patients"
                                value="1,248"
                                change="+8.2%"
                                trend="up"
                                icon={Users}
                                color="bg-blue-500"
                                onClick={() => setCurrentView('patients')}
                            />
                            <AdminStatsCard
                                title="Appointments"
                                value="432"
                                change="-2.4%"
                                trend="down"
                                icon={Calendar}
                                color="bg-purple-500"
                                onClick={() => setCurrentView('bookings')}
                            />
                            <AdminStatsCard
                                title="Active Doctors"
                                value="84"
                                change="+4.1%"
                                trend="up"
                                icon={Activity}
                                color="bg-orange-500"
                                onClick={() => setCurrentView('doctors')}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Recent Bookings - Takes up 2 columns */}
                            <div className="lg:col-span-2">
                                <AdminRecentBookings onViewAll={() => setCurrentView('bookings')} />
                            </div>

                            {/* Quick Actions / Notifications - Takes up 1 column */}
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setCurrentView('doctors')}
                                            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-colors group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg group-hover:bg-emerald-200 transition-colors">
                                                    <UserCog className="w-5 h-5 text-gray-600 group-hover:text-emerald-700" />
                                                </div>
                                                <span className="font-medium text-gray-700 group-hover:text-emerald-800">Add New Doctor</span>
                                            </div>
                                            <span className="text-gray-400 group-hover:text-emerald-600">+</span>
                                        </button>
                                        <button
                                            onClick={() => setCurrentView('reports')}
                                            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-colors group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg group-hover:bg-emerald-200 transition-colors">
                                                    <FileText className="w-5 h-5 text-gray-600 group-hover:text-emerald-700" />
                                                </div>
                                                <span className="font-medium text-gray-700 group-hover:text-emerald-800">Generate Report</span>
                                            </div>
                                            <span className="text-gray-400 group-hover:text-emerald-600">+</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-emerald-600 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-white font-bold mb-2">System Status</h3>
                                        <p className="text-emerald-100 text-sm mb-4">All systems operational. Database backup completed 2 hours ago.</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-bold text-white uppercase tracking-wider">Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const NavItem = ({ view, icon: Icon, label }: { view: string, icon: any, label: string }) => (
        <button
            onClick={() => setCurrentView(view)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${currentView === view
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
        >
            <Icon className="w-5 h-5" />
            {label}
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className={`bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-20 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/logo.png"
                                alt="Astraveda"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">Astraveda</span>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Main</div>
                        <NavItem view="dashboard" icon={LayoutDashboard} label="Dashboard" />
                        <NavItem view="patients" icon={Users} label="Patients" />
                        <NavItem view="doctors" icon={UserCog} label="Doctors" />
                        <NavItem view="bookings" icon={Calendar} label="Bookings" />

                        <div className="px-4 py-2 mt-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Management</div>
                        <NavItem view="reports" icon={FileText} label="Reports" />
                        <NavItem view="settings" icon={Settings} label="Settings" />
                    </nav>

                    {/* User Profile */}
                    <div className="p-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 mb-4 px-2">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                                {user?.name?.charAt(0) || 'A'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">{user?.name || 'Admin User'}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 min-w-0">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                            <h1 className="text-2xl font-bold text-gray-900 capitalize">
                                {currentView === 'dashboard' ? 'Dashboard Overview' : currentView}
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search anything..."
                                    className="pl-10 pr-4 py-2 w-64 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                                />
                            </div>
                            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
                                <Bell className="w-6 h-6" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {renderView()}
                </div>
            </main>
        </div>
    );
}
