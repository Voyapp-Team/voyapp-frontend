"use client";

import {
  TrendingDownIcon,
  TrendingUpIcon,
} from 'lucide-react';

export const DashboardCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
      {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex flex-col bg-white gap-4 p-5 rounded-lg"
          >
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col gap-2">
                <p className="font-montserrat font-semibold text-xs leading-2 text-[#3C4A46]">
                  {item.label}
                </p>
                <p className="font-montserrat font-semibold text-2xl leading-8 text-[#161D1B]">
                  {item.details}
                </p>
              </div>

              <div
                className={`flex justify-center items-center pt-3 pb-1 px-3 h-fit  rounded-lg ${index === 0 ? "bg-[#00C2A81A] text-[#006B5C]" : index === 1 ? "bg-[#FF8D691A]" : index === 2 ? "bg-[#FFDAD61A]" : "bg-[#E5E2E11A]"}`}
              >
                <Icon className="w-7 h-7" />
              </div>
            </div>
            {/* buttom label */}
            <div className="flex gap-2 items-center">
              <div
                className={`flex items-center gap-1 py-0.5 px-1.5 rounded-xl font-montserrat font-bold text-xxs leading-3 ${item.label.toLowerCase() === "suspended users" ? "bg-[#FFDAD633] text-[#93000A]" : "bg-[#00C2A833] text-[#00493E]"} `}
              >
                {item.label.toLowerCase() === "suspended users" ? (
                  <TrendingDownIcon className="w-3 h-4" />
                ) : (
                  <TrendingUpIcon className="w-3 h-4" />
                )}

                <span>{item.trend_value}</span>
              </div>
              <span className="text-[#6C7A76] font-montserrat regular text-xxs leading-3">
                {index <= 1 ? "vs " : ""}
                {item.comment}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
