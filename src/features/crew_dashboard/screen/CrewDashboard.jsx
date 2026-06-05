"use client";

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import CrewBalanceOverview from '../components/CrewBalanceOverview';
import CrewMemberCard from '../components/CrewMemberCard';
import QuickLinks from '../components/QuickLinks';
import RecentPayment from '../components/RecentPayments';
import { CrewPaymentHistory } from '../data/crew_payment_history';
import { CrewMembers } from '../data/crewmember';
import { QuickActions } from '../data/quickaction';
import {
  FormatCurrency,
  FormatNGN,
} from '../utils/convertCurrency';

export const CrewDashboardScreen = () => {
  const router = useRouter();

  const [viewBalance, setViewBalance] = useState(true);

  const handleClick = () => {
    setViewBalance((prev) => !prev);
  };

  const currentUserId = 1;
  const crew = CrewMembers[0];
  const crewBalance = crew.crew_balance;
  const percentShare = CrewMembers.map((member) => {
    const activeUser = member.members.find((user) => user.id === currentUserId);
    return activeUser.percent_share;
  });

  const convertToNGN = Number(crewBalance) * 1500;

  const earned = (crewBalance * Number(percentShare)) / 100;

  // const {params} = useParams();
  return (
    <div className="w-full flex  flex-col items-center flex-1 mx-auto max-w-[1014px]">
      <div className="flex flex-col max-w-[672px]">
        <div className="flex items-center gap-4 w-full">
          <div className="flex items-center w-[64px] h-[64px] rounded-full">
            <img
              src={`/crew-dashboard/studiokaliteam.svg`}
              alt="crew profile image"
              className="object-cover rounded-full"
            />
          </div>
          <div>
            {CrewMembers.map((crew, index) => (
              <div key={index} className="">
                {/* Displays "Studio Kali" */}
                <h2 className="font-plusjakartasans text-3xl font-extrabold text-[#1C1B1B] leading-9">
                  {crew.crew_name}
                </h2>

                {/* Displays "Total Members: 4" */}
                <p className="text-base font-medium font-manrope leading-6 text-[#3C4A46]">
                  {crew.members.length} Active Members
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
        <div className="mt-6">
          <CrewBalanceOverview
            usdBalance={FormatCurrency("USD", crewBalance)}
            ngnBalance={FormatNGN(convertToNGN)}
            percent_share={percentShare}
            // loading={}
            toggleBalance={handleClick}
            viewBalance={viewBalance}
            earned={FormatCurrency("USD", earned)}
            onClick={() => router.push("/dashboard/withdrawal")}
          />
        </div>
        <div className="mt-6">
          <QuickLinks actions={QuickActions} />
        </div>
        <section className="mt-[63px]">
          <div className="mb-[23px] flex items-center justify-between">
            <h2 className="text-xl font-bold font-plusjakartasans leading-7 text-[#1c1b1b]">
              Members
            </h2>
            <Link
              href="/dashboard/recent-activity"
              className="hidden sm:inline-block font-manrope text-sm font-bold leading-7 text-[#006b5c] transition hover:text-[#00493c]"
            >
              View all
            </Link>
          </div>

          {CrewMembers.map((crew) => (
            <CrewMemberCard
              key={crew.crew_name}
              members={crew.members}
              userId={1} // Assuming the logged-in user has an ID of 1 for demonstration
              // loading,
              viewBalance={viewBalance}
            />
          ))}
        </section>
        <section className="mt-[63px]">
          <div className="mb-[23px]">
            <h2 className="text-xl font-bold font-plusjakartasans leading-7 text-[#1c1b1b]">
              Recent Crew Payment
            </h2>
          </div>

          {CrewMembers.map((crew) => (
            <RecentPayment
              key={crew.crew_name}
              data={CrewPaymentHistory}
              beneficiaries={crew.members}
              //  loading,
              viewBalance={viewBalance}
            />
          ))}
        </section>

        {/* <BalanceOverview balances={balances} />

      

      <div className="mt-[49px] lg:mt-[51px]">
        <ProfileSummary user={dashboardUser} />
      </div>

       */}
      </div>
    </div>
  );
};
