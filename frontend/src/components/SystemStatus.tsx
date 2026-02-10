"use client";

import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

export default function SystemStatus() {
    const [status, setStatus] = useState<'loading' | 'online' | 'offline'>('loading');

    useEffect(() => {
        const checkHealth = async () => {
            try {
                const res = await fetch('http://localhost:3000');
                if (res.ok) {
                    setStatus('online');
                } else {
                    setStatus('offline');
                }
            } catch (error) {
                setStatus('offline');
            }
        };

        checkHealth();
        // Poll every 30 seconds
        const interval = setInterval(checkHealth, 30000);
        return () => clearInterval(interval);
    }, []);

    if (status === 'loading') return null;

    return (
        <div className={`fixed bottom-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg backdrop-blur-sm transition-all duration-500 ${status === 'online'
                ? 'bg-green-100/80 text-green-700 border border-green-200'
                : 'bg-red-100/80 text-red-700 border border-red-200'
            }`}>
            <div className="relative flex h-2 w-2">
                {status === 'online' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </div>
            System {status === 'online' ? 'Operational' : 'Unreachable'}
        </div>
    );
}
