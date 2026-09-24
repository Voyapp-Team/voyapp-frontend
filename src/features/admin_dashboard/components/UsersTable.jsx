"use client";
import { Download } from "lucide-react";

import { ActionBtnIcon, UserSearchIcon } from "./DashboardIcons";
import { InputField, QuickActionsWrapper, SelectWrapper } from "./QuickActions";
import { Table, TableWrapper } from "./Table";

export const UsersTable = ({ data }) => {
  const handleClick = (id) => {
    console.log("clicked");
  };
  return (
    <div className="flex flex-col gap-4 max-w-screen overflow-hidden">
      <QuickActionsWrapper>
        <InputField
          Icon={UserSearchIcon}
          typeOf={"text"}
          className={"w-[341px]"}
          placeholder={"Search by Name, Email, or UID..."}
        />
        <SelectWrapper>
          <option value="all">Account Type: All</option>
          <option value="freelancer">FreeLancer</option>
          <option value="business">Business</option>
        </SelectWrapper>
        <SelectWrapper>
          <option value="all">Status: All</option>
          <option value="active">Active</option>
          <option value="in-active">Inactive</option>
        </SelectWrapper>
        <SelectWrapper>
          <option value="all">KYC: All</option>
          <option value="verified">Verified</option>
          <option value="Pending">Pending</option>
          <option value="failed">Failed</option>
        </SelectWrapper>
        <InputField typeOf={"date"} placeholder={"Date Range"} />
        <button className="bg-white border border-[#BBCAC44D]  rounded-md p-2 cursor-pointer">
          <Download className="text-[#3C4A46]" />
        </button>
      </QuickActionsWrapper>
      <TableWrapper>
        <Table>
          <thead>
            <tr className="border-b border-[#BBCAC4] bg-[#EBEBEB]">
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-left">
                User
              </th>
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-center">
                Type
              </th>
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-center">
                KYC Status
              </th>
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-center">
                Balance
              </th>
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-center">
                Transactions
              </th>
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-center">
                Join Date
              </th>
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-center">
                Status
              </th>
              <th className="pt-[21.5px] pb-[23px] px-[24px] uppercase font-montserrat font-semibold text-xs leading-[12px] text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const profileImage =
                item.profile_image || item.profileImage || "";
              const userName = item.first_name + " " + item.last_name || " ";
              const extraDetails =
                item.user_name + "." + item.email ||
                item.userName + "." + item.user_email;

              const dateJoined = item.createdAt || item.joinedDate;
              return (
                <tr
                  onClick={() => handleClick(item.id)}
                  key={item.id}
                  className="max-
                  h-[103px] "
                >
                  {/* User Column */}
                  <td className="flex items-center gap-[16px] max-h-[70px]  pt-[45px] pr-[24px] pb-[46px] pl-[24px]">
                    <div className="rounded-full w-[40px] max-w-[134.64px] h-[40px]">
                      <img
                        src={profileImage}
                        alt={`profile picture`}
                        className="object-contain w-[39px] h-[39px] max-w-[134.60px] rounded-full"
                      />
                    </div>
                    <div className="w-[77.1px] h-[70px] whitespace-wrap">
                      <p className="font-montserrat font-semibold text-sm leading-5.1 text-[#161D1B]">
                        {userName}
                      </p>
                      <span className="font-montserrat font-regular text-xxs leading-[100%] text-[#3C4A46]">
                        {extraDetails}
                      </span>
                    </div>
                  </td>
                  {/* Role Column */}
                  <td className="font-montserrat font-semibold text-xs leading-[12px] text-[#3C4A46] text-center pt-[45px] pr-[24px] pb-[46px] pl-[48px]">
                    {item.role || item.account_type}
                  </td>
                  {/* KYC Column */}
                  <td className="items-center  pt-[45px] pr-[24px] pb-[46px] pl-[48px]">
                    {" "}
                    <p
                      className={`${item.kyc_status.toLowerCase() === "verified" ? "bg-[#00C2A81A] border-[#00C2A833] text-[#006B5C]" : "text-[#9D4224] bg-[#FF8D691A] border-[#FF8D6933]"} font-montserrat font-semibold text-xxs leading-[11px] text-center py-[5.5px] px-[16px] border rounded-full w-[77.66px] h-[24px]`}
                    >
                      {item.kyc_status}
                    </p>
                  </td>
                  {/* Balance Column */}
                  <td className=" pt-[40px] pr-[24px] pb-[41px] pl-[24px] font-montserrat font-semibold text-sm text-5.1 text-center text-[#161D1B]">
                    ${item.balance}
                  </td>
                  {/* Transactions Column */}
                  <td className=" pt-[40px] pr-[24px] pb-[41px] pl-[24px] font-montserrat fonr-medium text-sm leading-5.1 text-center text-[#3C4A46]">
                    {item.transactions || item.transactions_count}
                  </td>
                  {/* Join Date Column */}
                  <td className=" pt-[33px] pr-[24px] pb-[34px] pl-[24px] font-montserrat font-semibold text-xs leading-[12px] text-center text-[#3C4A46]">
                    {dateJoined}
                  </td>
                  {/* Status Column */}
                  <td className="pt-[45px] pr-[24px] pb-[46px] pl-[24px] text-center align-middle">
                    <div className="flex justify-center items-center">
                      {item.status.toLowerCase() === "active" ? (
                        <span className="flex items-center w-2 h-2 rounded-full bg-green-500/70 shadow-sm"></span>
                      ) : (
                        <span className="flex items-center w-2 h-2 rounded-full bg-red-500/70 shadow-sm"></span>
                      )}
                    </div>
                  </td>

                  {/* Action Column */}
                  <td
                    className="pt-[45px] pr-[24px] pb-[46px] pl-[24px] text-center align-middle cursor-pointer"
                    onClick={() => handleClick(item.id)}
                  >
                    <div className="flex justify-center items-center">
                      <ActionBtnIcon className="w-4 h-4" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>
    </div>
  );
};
