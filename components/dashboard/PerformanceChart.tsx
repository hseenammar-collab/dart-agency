'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'السبت', spend: 120, results: 45, roas: 3.8 },
  { day: 'الأحد', spend: 180, results: 62, roas: 4.2 },
  { day: 'الإثنين', spend: 150, results: 58, roas: 4.5 },
  { day: 'الثلاثاء', spend: 200, results: 78, roas: 4.1 },
  { day: 'الأربعاء', spend: 170, results: 65, roas: 4.8 },
  { day: 'الخميس', spend: 220, results: 89, roas: 5.2 },
  { day: 'الجمعة', spend: 190, results: 72, roas: 4.6 },
];

export function PerformanceChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-6">📈 أداء الأسبوع</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorResults" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px'
              }}
            />
            <Area type="monotone" dataKey="spend" stroke="#F59E0B" fill="url(#colorSpend)" name="الإنفاق ($)" />
            <Area type="monotone" dataKey="results" stroke="#10B981" fill="url(#colorResults)" name="النتائج" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
