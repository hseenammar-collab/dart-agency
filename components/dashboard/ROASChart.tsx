'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { campaign: 'العرض الخاص', roas: 5.2 },
  { campaign: 'المنتج الجديد', roas: 3.8 },
  { campaign: 'التوعية', roas: 3.5 },
  { campaign: 'ريتارجتنج', roas: 6.1 },
];

const getColor = (roas: number) => {
  if (roas >= 5) return '#10B981';
  if (roas >= 4) return '#F59E0B';
  return '#EF4444';
};

export function ROASChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-6">🎯 ROAS لكل حملة</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis type="number" stroke="#666" />
            <YAxis dataKey="campaign" type="category" stroke="#666" width={100} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px'
              }}
              formatter={(value) => [`${value}x`, 'ROAS']}
            />
            <Bar dataKey="roas" radius={[0, 8, 8, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={getColor(entry.roas)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
