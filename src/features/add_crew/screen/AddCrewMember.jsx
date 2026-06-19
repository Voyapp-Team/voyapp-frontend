"use client";
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { ArrowLeftIcon } from '@/src/components/ui/Icons';

import { AddedMember } from '../components/added_member';
import MemberSearch from '../components/member_search';
import { VoyaMemberCard } from '../components/voya_member';
import { CrewMember } from '../data/crewMember';
import { VoyaMembers } from '../data/data';

export const AddCrewScreen = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const [availableMemeber, setAvailableMember] = useState(VoyaMembers);

  const [addedMembers, setAddedMembers] = useState(CrewMember);

  // function to search voya member

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchTerm(value);

    if (!value.trim()) {
      setAvailableMember(VoyaMembers);
      return;
    }
    const matchSearch = VoyaMembers.filter((user) =>
      user.userName.toLowerCase().includes(value.toLowerCase()),
    );

    setAvailableMember(matchSearch);
  };

  // fuction to handle Add button
  const handleAddMember = (user) => {
    if (addedMembers.some((member) => member.id === user.id)) {
      return;
    }
    setAddedMembers((prevData) => [...prevData, user]);
  };

  // function to remove member

  const handleRemoveMember = (userId) => {
    const updatedMember = addedMembers.filter((user) => user.id !== userId);
    setAddedMembers(updatedMember);
  };

  return (
    // <div className="w-full md:py-6 min-h-screen flex items-center justify-center overflow-hidden">
    //   <div className="flex flex-col w-full sm:max-w-[480px] items-center justify-center min-h-screen sm:px-6">
    //     {/* header */}
    //     <div className="flex items-center w-full max-w-[432px]">
    //       <button
    //         type="button"
    //         onClick={() => router.back()}
    //         className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1C1B1B] transition hover:-translate-x-0.5 hover:bg-[#F7FFFD]"
    //         aria-label="Go back"
    //       >
    //         <ArrowLeftIcon className="h-5 w-5" />
    //       </button>
    //       <div className="w-full">
    //         <h2 className="w-[158.41px] h-[32px] whitespace-nowrap text-2xl font-extrabold leading-8 font-plusJakartaSans text-[#1C1B1B]">
    //           Add Members
    //         </h2>
    //         <p className=" w-[100px] h-[20px] whitespace-nowrap font-manrope text-sm leading-5 text-[#6C7A76]">
    //           Sarah's Lounge
    //         </p>
    //       </div>
    //     </div>

    //     {/* Voya member to add to crew */}
    //     <section className="flex flex-col items-center justify-center w-full max-w-126.25 max-h-128 sm:top-95 sm:left-97 rounded-[50px] pl-1 pr-4 pt-7 pb-10 overflow-hidden">
    //       <MemberSearch handleChange={handleChange} value={searchTerm} />
    //       <VoyaMemberCard
    //         data={availableMemeber}
    //         onAddMember={handleAddMember}
    //       />
    //     </section>
    //     {/* Existing crew members */}
    //     <section className=" bg-white w-full max-w-126.25 max-h-128 sm:top-103.75 sm:left-97 rounded-[50px] px-6 py-10">
    //       <AddedMember data={addedMembers} currentUser={1} />
    //     </section>
    //   </div>
    // </div>
    <div className="flex flex-col w-full items-center sm:justify-center min-h-screen sm:px-6 py-6 overflow-hidden bg-[#f8f8f8]">
      {/* header */}
      <div className="flex items-center w-full sm:w-[590px] gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1C1B1B] transition hover:-translate-x-0.5 hover:bg-[#F7FFFD]"
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div className="w-full">
          <h2 className="w-[158.41px] h-[32px] whitespace-nowrap text-2xl font-extrabold leading-8 font-plusJakartaSans text-[#1C1B1B]">
            Add Members
          </h2>
          <p className=" w-[100px] h-[20px] whitespace-nowrap font-manrope text-sm leading-5 text-[#6C7A76]">
            Sarah's Lounge
          </p>
        </div>
      </div>

      {/* Voya member to add to crew */}
      <section className="flex flex-col items-center justify-center w-full max-w-126.25 max-h-128 sm:top-95 sm:left-97 rounded-[50px] pl-1 pr-4 pt-7 pb-10 overflow-hidden">
        <MemberSearch handleChange={handleChange} value={searchTerm} />
        <VoyaMemberCard data={availableMemeber} onAddMember={handleAddMember} />
      </section>
      {/* Existing crew members */}
      <section className=" bg-white w-full max-w-126.25 max-h-128 sm:top-103.75 sm:left-97 rounded-[50px] px-6 py-10">
        <AddedMember
          data={addedMembers}
          currentUser={1}
          onRemoveMember={handleRemoveMember}
          // btnClick={router.push("/onboarding/set-crew-split")}
        />
      </section>
    </div>
  );
};
