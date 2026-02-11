
import { LucideIcon } from 'lucide-react';

interface AdminStatsCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
    icon: LucideIcon;
    color: string;
    onClick?: () => void;
}

export default function AdminStatsCard({ title, value, change, trend, icon: Icon, color, onClick }: AdminStatsCardProps) {
    return (
        <div
            onClick={onClick}
            className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-200 ${onClick ? 'cursor-pointer hover:shadow-md hover:scale-[1.02]' : 'hover:shadow-md'
                }`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${color}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-50 text-green-600' :
                    trend === 'down' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'
                    }`}>
                    {change}
                </span>
            </div>
            <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            </div>
        </div>
    );
}
