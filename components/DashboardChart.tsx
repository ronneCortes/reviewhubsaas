import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', positive: 40, negative: 24 },
  { name: 'Fev', positive: 45, negative: 20 },
  { name: 'Mar', positive: 55, negative: 15 },
  { name: 'Abr', positive: 60, negative: 12 },
  { name: 'Mai', positive: 75, negative: 10 },
  { name: 'Jun', positive: 85, negative: 5 },
  { name: 'Jul', positive: 80, negative: 8 },
];

export const DashboardChart: React.FC = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorNeg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            dy={10}
          />
          <YAxis 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '12px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
            }}
            cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }}
          />
          <Area 
            type="monotone" 
            dataKey="positive" 
            stroke="#4f46e5" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#colorPos)" 
            name="Positivo" 
            animationDuration={2000}
          />
          <Area 
            type="monotone" 
            dataKey="negative" 
            stroke="#ef4444" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#colorNeg)" 
            name="Negativo" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};