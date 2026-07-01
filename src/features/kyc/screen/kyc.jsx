"use client";
import {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import { ArrowLeftIcon } from '@/src/components/ui/Icons';

import { Crew } from '../../set-split/data/crew';
import { CreateSplit } from '../components/createsplit';
import NameSplit from '../components/namesplit';

export const KYC = () => {
  const router = useRouter();

  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [crewMembers, setCrewMembers] = useState([]);

  // function to add the percentShare item to the each crew member data
  const createMemberArray = () => {
    const newMember = Crew.map((member) => ({
      ...member,
      percentShare: member.percentShare || 0,
    }));
    setCrewMembers(newMember);
  };

  // update the crewMember state on load
  useEffect(() => {
    createMemberArray();
  }, []);

  const handleOnchange = (id, valueString) => {
    const isValue = valueString === "" ? 0 : valueString;

    if (isNaN(isValue)) return;

    const updatedValue = crewMembers.map((user) => {
      if (user.id === id) {
        const newValue = Math.min(100, Math.max(0, isValue));

        return {
          ...user,
          percentShare: newValue,
        };
      }
      return user;
    });
    setCrewMembers(updatedValue);
  };

  const handleIncrement = (id, num) => {
    const updated = crewMembers.map((user) => {
      if (user.id === id) {
        const newSplit = Math.max(1, user.percentShare + num);
        return {
          ...user,
          percentShare: newSplit,
        };
      }
      return user;
    });
    setCrewMembers(updated);
    console.log("clicked");
  };
  const handleDecrement = (id, num) => {
    const updated = crewMembers.map((user) => {
      if (user.id === id) {
        const newSplit = Math.max(0, user.percentShare - num);
        return {
          ...user,
          percentShare: newSplit,
        };
      }
      return user;
    });
    setCrewMembers(updated);
  };

  const TotalSplit = crewMembers.reduce(
    (total, member) => total + member.percentShare,
    0,
  );

  useEffect(() => {
    if (TotalSplit === 100) {
      setSuccess(true);
      setError(false);
    }
    if (TotalSplit !== 100) {
      setSuccess(false);
    }
  }, [TotalSplit]);

  const handleCreateSplit = (data) => {
    if (TotalSplit !== 100) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    if (data) {
      const InComplete = data.some(
        (member) => !member.percentShare || member.percentShare < 1,
      );

      if (InComplete) {
        setInputError(true);
        setTimeout(() => {
          setInputError(false);
        }, 3000);
        return;
      }
    }
    router.push("/dashboard/crew");
  };

  // const [searchTerm, setSearchTerm] = useState("");

  // const [availableMemeber, setAvailableMember] = useState(VoyaMembers);

  // const [addedMembers, setAddedMembers] = useState(CrewMember);

  // function to search voya member

  // const handleChange = (e) => {
  //   const value = e.target.value;

  //   setSearchTerm(value);

  //   if (!value.trim()) {
  //     setAvailableMember(VoyaMembers);
  //     return;
  //   }
  //   const matchSearch = VoyaMembers.filter((user) =>
  //     user.userName.toLowerCase().includes(value.toLowerCase()),
  //   );

  //   setAvailableMember(matchSearch);
  // };

  // fuction to handle Add button
  // const handleAddMember = (user) => {
  //   if (addedMembers.some((member) => member.id === user.id)) {
  //     return;
  //   }
  //   setAddedMembers((prevData) => [...prevData, user]);
  // };

  // // function to remove member

  // const handleRemoveMember = (userId) => {
  //   const updatedMember = addedMembers.filter((user) => user.id !== userId);
  //   setAddedMembers(updatedMember);
  // };

  return (
    <div className="flex flex-col w-full items-center min-h-screen sm:px-6 py-6 overflow-hidden bg-[#f8f8f8]">
      {/* header */}
      <div className="flex items-left w-full sm:max-w-126 mb-4 h-8 gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex h-10 w-10 items-center justify-center text-[#1C1B1B] "
          aria-label="Go back"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div className="w-full">
          <h2 className="w-41.5 h-7 whitespace-nowrap text-xl font-extrabold leading-8 font-plusJakartaSans text-[#115E59]">
            Voya Crew Wallet
          </h2>
        </div>
      </div>

      {/*Main section*/}
      <section className=" bg-white w-full max-w-126 max-h-237.5 sm:top-32.25 sm:left-97 rounded-[50px] p-6">
        <NameSplit />
        <CreateSplit
          data={crewMembers}
          currentUser={1}
          handleOnchange={handleOnchange}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          isError={error}
          isSuccess={success}
          inCompleteInputs={inputError}
          btnClick={handleCreateSplit}
          totalSplit={TotalSplit}
        />
      </section>
    </div>
  );
};
