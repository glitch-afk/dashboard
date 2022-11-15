/* eslint-disable unused-imports/no-unused-vars */

'use client';

import { RadioGroup } from '@headlessui/react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { chartData as fakeData } from '@/data/mockData';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';

function CustomYAxis({ y, dy, payload }: any) {
  return (
    <g
      transform={`translate(${30},${y})`}
      className="text-[12px] text-zinc-600"
    >
      <text x={0} y={0} dy={dy} textAnchor="middle" fill="currentColor">
        {payload.value}
      </text>
    </g>
  );
}

function CustomXAxis({ x, y, payload }: any) {
  return (
    <g transform={`translate(${x},${y})`} className="text-[12px] text-zinc-600">
      <text x={0} y={0} dy={25} textAnchor="middle" fill="currentColor">
        {payload.value}
      </text>
    </g>
  );
}

interface RadioOptionProps {
  value: string;
}

function RadioGroupOption({ value }: RadioOptionProps) {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <span
          className={`relative flex h-8 cursor-pointer items-center justify-center rounded-lg px-3 text-sm uppercase tracking-wider ${
            checked ? 'text-white' : 'text-gray-400'
          }`}
        >
          {checked && (
            <motion.span
              className="shadow-large bg-[#1F1F1F] absolute bottom-0 inset-x-0 h-full w-full rounded-lg"
              layoutId="statusIndicator"
            />
          )}
          <span className="relative">{value}</span>
        </span>
      )}
    </RadioGroup.Option>
  );
}

const OverviewChart = () => {
  const breakpoint = useBreakpoint();
  const [date, setDate] = useState(1624147200);
  const [chartData, setChartData] = useState(fakeData);
  const [status, setStatus] = useState('Year');
  const formattedDate = format(new Date(date * 1000), 'MMMM d, yyyy hh:mma');

  const [percentage, setPercentage] = useState('2.22%');

  const handleOnChange = (value: string) => {
    setStatus(value);
    switch (value) {
      case 'Week':
        setChartData(fakeData);
        break;
      case 'Month':
        setChartData(fakeData);
        break;
      case 'Year':
        setChartData(fakeData);
        break;
      default:
        setChartData(fakeData);
        break;
    }
  };

  return (
    <div className="dashboardCard p-4">
      <div className="flex flex-col xl:flex-row justify-between items-center space-y-3 xl:space-y-0">
        <div className="flex flex-col text-center lg:text-left">
          <span className="mb-2 font-medium">
            Average time spent by users per day
          </span>
          <time
            dateTime={formattedDate}
            className="text-center xl:text-left text-xs text-zinc-400"
          >
            {formattedDate}
          </time>
        </div>
        <RadioGroup
          value={status}
          onChange={handleOnChange}
          className="flex items-center gap-5"
        >
          <RadioGroupOption value="Week" />
          <RadioGroupOption value="Month" />
          <RadioGroupOption value="Year" />
        </RadioGroup>
      </div>

      {/* chart */}
      <div className="mt-5 h-56 sm:mt-8  md:h-96 lg:h-[380px] xl:h-[402px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            width={500}
            height={400}
            margin={{
              top: 20,
              bottom: 20,
            }}
            onMouseMove={(data) => {
              if (data.isTooltipActive) {
                setPercentage(
                  data.activePayload && data.activePayload[0].payload.uv
                );
              }
            }}
          >
            <defs>
              <linearGradient id="fetcch-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5D46" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#D9D9D900" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              tick={<CustomXAxis />}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={<CustomYAxis />} axisLine={false} tickLine={false} />
            <Tooltip
              content={<span className="text-[14px]">{percentage}</span>}
              cursor={{
                strokeWidth: breakpoint === 'xs' ? 30 : 50,
                stroke: '#1f1f1f',
              }}
              wrapperStyle={{
                boxShadow: '0 0 1px 0px 4px 50px rgba(73, 93, 112, 0.08)',
              }}
            />
            {/* <CartesianGrid
              vertical={false}
              strokeDasharray="10 5"
              stroke="#374151"
            /> */}
            <Area
              dataKey="uv"
              type="monotone"
              stroke="#FFFFFF"
              strokeWidth={breakpoint === 'xs' ? 2 : 3}
              fill="url(#fetcch-gradient)"
              activeDot={{
                stroke: '#fff',
                strokeWidth: breakpoint === 'xs' ? 2 : 5,
                r: breakpoint === 'xs' ? 5 : 7,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;
