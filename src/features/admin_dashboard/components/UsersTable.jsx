"use client";
import { Download } from 'lucide-react';

import { UserSearchIcon } from './DashboardIcons';
import {
  InputField,
  QuickActionsWrapper,
  SelectWrapper,
} from './QuickActions';

export const UsersTable = () => {
  return (
    <>
      <QuickActionsWrapper>
        <InputField
          Icon={UserSearchIcon}
          typeOf={"text"}
          className={"w-[341px]"}
          placeholder={"Search by Name, Email, or UID..."}
        />
        <SelectWrapper>
          <option value="all">Account Type: All</option>
        </SelectWrapper>
        <SelectWrapper>
          <option value="all">Status: All</option>
        </SelectWrapper>
        <SelectWrapper>
          <option value="all">KYC: All</option>
        </SelectWrapper>
        <InputField typeOf={"date"} placeholder={"Date Range"} />
        <button className="bg-white border border-[#BBCAC44D]  rounded-md p-2 cursor-pointer">
          <Download className="text-[#3C4A46]" />
        </button>
      </QuickActionsWrapper>
    </>
  );
};
