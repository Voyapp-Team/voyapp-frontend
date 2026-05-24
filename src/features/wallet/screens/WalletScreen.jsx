"use client";

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/src/components/ui/Button';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Camera,
  Code,
  Options,
  Palette,
  Sparkles,
  TextIcon,
  NotificationIcon,
  SettingIcon,
} from '@/src/components/ui/Icons';


export const WalletScreen = () => {
  const router = useRouter();


  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-400 items-center bg-[#f5f5f7]">
      {/* header */}
      <div className="flex justify-between items-center p-3 w-full  bg-[#ffff]">
        <div className="flex items-center gap-3 whitespace-nowrap">
            <ArrowLeftIcon className="w-5 h-5 text-black/90"/>
            <p className="text-(--color-brand-primary-deep) font-bold">Add Money</p>
        </div>
        <div className="flex items-center gap-4">
                <NotificationIcon className="w-5 h-5 text-black/90"/>
                <SettingIcon className="w-5 h-5 text-black/70" />
        </div>
      </div>
      <div className="w-full h-full bg-black">
        <div className="flex flex-col gap-3 rounded-xl bg-[#FFFF]">
            <div></div>

        </div>
      </div>
    </main>
  );
};
