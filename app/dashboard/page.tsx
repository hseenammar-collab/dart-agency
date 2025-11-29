'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { TrendingUp, DollarSign, MessageSquare, Target, BarChart3, LogOut } from 'lucide-react';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { ROASChart } from '@/components/dashboard/ROASChart';

export default function DashboardPage() {
  const [clientName, setClientName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const [stats, setStats] = useState({
    totalSpend: 1250,
    totalResults: 347,
    roas: 4.2,
    activeCampaigns: 3
  });

  useEffect(() => {
    const name = localStorage.getItem('clientName');
    const code = localStorage.getItem('clientCode');

    if (!name || !code) {
      router.push('/dashboard/login');
      return;
    }

    setClientName(name);
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('clientCode');
    localStorage.removeItem('clientName');
    router.push('/dashboard/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">Dart Dashboard</h1>
            <p className="text-gray-400">مرحباً، {clientName}</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-400 hover:text-white">
              ← العودة للموقع
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              تسجيل خروج
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">إجمالي الإنفاق</p>
                <p className="text-2xl font-bold text-white">${stats.totalSpend}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">النتائج</p>
                <p className="text-2xl font-bold text-white">{stats.totalResults}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">ROAS</p>
                <p className="text-2xl font-bold text-white">{stats.roas}x</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">الحملات النشطة</p>
                <p className="text-2xl font-bold text-white">{stats.activeCampaigns}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <PerformanceChart />
          <ROASChart />
        </div>

        {/* Campaigns Table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-amber-400" />
            الحملات الإعلانية
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">الحملة</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">الإنفاق</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">النتائج</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">ROAS</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">الحالة</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-4">حملة العرض الخاص</td>
                  <td className="py-4 px-4">$450</td>
                  <td className="py-4 px-4">156</td>
                  <td className="py-4 px-4 text-green-400">5.2x</td>
                  <td className="py-4 px-4">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">نشط</span>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-4">حملة المنتج الجديد</td>
                  <td className="py-4 px-4">$380</td>
                  <td className="py-4 px-4">98</td>
                  <td className="py-4 px-4 text-green-400">3.8x</td>
                  <td className="py-4 px-4">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">نشط</span>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-4">حملة التوعية</td>
                  <td className="py-4 px-4">$420</td>
                  <td className="py-4 px-4">93</td>
                  <td className="py-4 px-4 text-amber-400">3.5x</td>
                  <td className="py-4 px-4">
                    <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">متوقف</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
