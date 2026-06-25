import {
  MinusIcon,
  PlusIcon,
} from 'lucide-react';

import Button from '@/src/components/ui/Button';
import { ArrowRightIcon } from '@/src/components/ui/Icons';
import InputError from '@/src/components/ui/InputError';

import { Error } from './error_message';
import { LiveDemo } from './live_demo';
import { Success } from './success_message';

export const CreateSplit = ({
  data,
  currentUser,
  handleOnchange,
  isError,
  isSuccess,
  handleDecrement,
  handleIncrement,
  btnClick,
  totalSplit,
  inCompleteInputs,
}) => {
  const PercentOff = 100 - totalSplit;
  return (
    <>
      <section className="mb-4 w-full">
        <h3 className="font-plusJakartaSans h-20 font-extrabold text-xl sm:text-[32px] leading-10 text-[#1C1B1B] py-3">
          How should payment be split?
        </h3>
        <p className="font-manrope font-regular text-base leading-6 text-[#3C4A46] py-4">
          Percentage must add up to exactly 100%
        </p>
      </section>

      {isError && <Error message={`Total: ${PercentOff}% off try again`} />}

      {inCompleteInputs && (
        <InputError
          message={"Every crew member must receive at least 1% share!"}
        />
      )}

      {isSuccess && <Success message={"Total: 100% ✓ All good"} />}

      <section className="flex flex-col w-full gap-6 mt-3">
        {data.map((item) => {
          const admin = currentUser === item.id;

          const splitName = item.first_name.split("")[0];

          return (
            <div
              key={item.id}
              className="flex justify-between items-center w-full gap-6 bg-[#F6F3F2] backdrop-blur-sm rounded-3xl h-20 p-4"
            >
              <div className="flex items-center gap-2">
                <div
                  className={` flex justify-center items-center w-12 h-12 rounded-full ${item.profile_picture ? "bg-[#EBE7E7]" : "bg-[#FF8D69] pt-2.25 pb-3 text-[#752509] font-bold text-lg leading-7 font-plusJakartaSans"}`}
                >
                  {item.profile_picture === "" ? (
                    splitName
                  ) : (
                    <img
                      src={`${item.profile_picture}`}
                      alt=""
                      aria-label={`${item.first_name}, profile picture`}
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="p-0 m-0 font-plusJakartaSans font-semibold text-base leading-6 text-[#1C1B1B]">
                    {admin ? "You" : item.first_name}
                  </p>
                  <span className="font-manrope font-regular text-sm leading-5 text-[#6C7A76]">
                    {admin ? "Admin" : item.role}
                  </span>
                </div>
              </div>

              <div
                // onClick={() => onRemoveMember(item.id)}
                className="relative bg-white flex justify-between items-center gap-4 cursor-pointer p-4  max-w-[160px] h-6 rounded-lg text-black "
              >
                <button
                  type="button"
                  disabled={item.percentShare === 0}
                  onClick={() => handleDecrement(item.id, 1)}
                  className="absolute left-0 flex items-center justify-center p-1 hover:bg-gray-100 rounded transition cursor-pointer w-8 h-8 "
                >
                  <MinusIcon className="w-3 h-3 left-3" />
                </button>

                <div className="flex items-center gap-0 w-full px-3">
                  <input
                    type="number"
                    name="percent_share"
                    value={item.percentShare === 0 ? "" : item.percentShare}
                    placeholder="0"
                    onChange={(e) => handleOnchange(item.id, e.target.value)}
                    // onBlur={
                    //   parseInt(item.percentShare) === ""
                    //     ? 0
                    //     : parseInt(item.percentShare)
                    // }
                    min={1}
                    max={100}
                    className={`border-transparent text-right items-right m-0 h-6 w-9 placeholder:text-center font-plusJakartaSans font-bold text-lg leading-7 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none py-3 ${item.percentShare >= 60 ? " text-[#006B5C]" : ""}`}
                  />
                  {item.percentShare > 0 && (
                    <label className="flex items-left pl-1 pr-3 font-manrope font-bold text-sm leading-5">
                      %
                    </label>
                  )}
                </div>
                <button
                  type="button"
                  disabled={item.percentShare === 100}
                  onClick={() => handleIncrement(item.id, 1)}
                  className="absolute right-0 flex items-center justify-center w-8 h-8 p-1 hover:bg-gray-100 rounded transition cursor-pointer"
                >
                  <PlusIcon className="w-3 h-3 text-black" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <LiveDemo data={data} activeUser={currentUser} />
      <Button
        className={`mt-6 font-plusJakartaSans cursor-pointer font-bold text-lg leading-7 pt-2.75 pb-3`}
        onClick={() => btnClick(data)}
        endIcon={<ArrowRightIcon className="shrink-0 w-3.5 h-3.5" />}
      >
        Create Crew
      </Button>
    </>
  );
};
