'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function DashboardLogin() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // أكواد العملاء (مؤقتاً - لاحقاً من Supabase)
  const clientCodes: Record<string, string> = {
    'ZAITONA2024': 'زيتونة',
    'MADRID2024': 'أبراج مدريد',
    'BEAUTY2024': 'صالون الجمال',
    'DEMO123': 'عميل تجريبي'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const clientName = clientCodes[code.toUpperCase()];

      if (clientName) {
        localStorage.setItem('clientCode', code.toUpperCase());
        localStorage.setItem('clientName', clientName);
        router.push('/dashboard');
      } else {
        setError('الرمز غير صحيح. تواصل معنا للحصول على رمز الدخول.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl mb-4">
            <span className="text-4xl font-black text-black">D</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Dart Dashboard</h1>
          <p className="text-gray-400 mt-2">أدخل رمز العميل للوصول للوحة التحكم</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">رمز العميل</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="أدخل الرمز هنا..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none text-center text-xl tracking-widest uppercase"
                required
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !code}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                دخول
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Help */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            ما عندك رمز؟{' '}
            <a
              href="https://wa.me/9647818812713?text=مرحباً، أريد الحصول على رمز الدخول للـ Dashboard"
              target="_blank"
              className="text-amber-400 hover:underline"
            >
              تواصل معنا
            </a>
          </p>
        </div>

        {/* Demo Code */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
          <p className="text-amber-400 text-sm">🎯 للتجربة استخدم: <span className="font-mono font-bold">DEMO123</span></p>
        </div>
      </div>
    </div>
  );
}
