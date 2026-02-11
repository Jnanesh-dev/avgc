import { useState } from 'react';

interface RecoveryTrendsChartProps {
    dataPoints: Array<{
        date: string;
        painScore: number;
        activityLevel: number;
    }>;
}

export default function RecoveryTrendsChart({ dataPoints }: RecoveryTrendsChartProps) {
    const [period, setPeriod] = useState<'week' | 'month'>('week');

    const maxPain = Math.max(...dataPoints.map((d) => d.painScore));
    const maxActivity = Math.max(...dataPoints.map((d) => d.activityLevel));

    return (
        <div className="bg-white rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Recovery Trends</h3>
                    <p className="text-sm text-gray-600">Pain & Temp (Last 7 Days)</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setPeriod('week')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${period === 'week'
                                ? 'bg-teal-50 text-teal-700'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => setPeriod('month')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${period === 'month'
                                ? 'bg-teal-50 text-teal-700'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        Month
                    </button>
                </div>
            </div>

            {/* Simple Line Chart Visualization */}
            <div className="relative h-48 mb-4">
                <svg className="w-full h-full" viewBox="0 0 700 200">
                    {/* Grid Lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <line
                            key={i}
                            x1="0"
                            y1={i * 50}
                            x2="700"
                            y2={i * 50}
                            stroke="#e5e7eb"
                            strokeWidth="1"
                        />
                    ))}

                    {/* Pain Score Line */}
                    <polyline
                        points={dataPoints
                            .map((point, i) => {
                                const x = (i / (dataPoints.length - 1)) * 700;
                                const y = 200 - (point.painScore / 10) * 200;
                                return `${x},${y}`;
                            })
                            .join(' ')}
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Activity Level Line */}
                    <polyline
                        points={dataPoints
                            .map((point, i) => {
                                const x = (i / (dataPoints.length - 1)) * 700;
                                const y = 200 - (point.activityLevel / 10) * 200;
                                return `${x},${y}`;
                            })
                            .join(' ')}
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Data Points */}
                    {dataPoints.map((point, i) => {
                        const x = (i / (dataPoints.length - 1)) * 700;
                        const painY = 200 - (point.painScore / 10) * 200;
                        const activityY = 200 - (point.activityLevel / 10) * 200;
                        return (
                            <g key={i}>
                                <circle cx={x} cy={painY} r="4" fill="#14b8a6" />
                                <circle cx={x} cy={activityY} r="4" fill="#8b5cf6" />
                            </g>
                        );
                    })}
                </svg>

                {/* X-axis Labels */}
                <div className="flex justify-between mt-2">
                    {dataPoints.map((point, i) => (
                        <div key={i} className="text-xs text-gray-500">
                            {point.date}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500" />
                    <span className="text-sm text-gray-600">Pain Score Index</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="text-sm text-gray-600">Activity Level</span>
                </div>
            </div>
        </div>
    );
}
