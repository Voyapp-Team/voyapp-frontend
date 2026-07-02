import Button from '@/src/components/ui/Button';
import {
  ArrowRightIcon,
  CancelIcon,
  ShieldUser,
} from '@/src/components/ui/Icons';

export const AddedMember = ({
  data,
  currentUser,
  onRemoveMember,
  btnClick,
}) => {
  return (
    <>
      <section className="h-7 mb-4 w-full">
        <h3 className="font-plusJakartaSans font-bold text-lg leading-7 text-[#1C1B1B]">
          Added to Crew
        </h3>
      </section>
      <section className="flex flex-col w-full gap-6">
        {data.map((item) => {
          const admin = currentUser === item.id;

          const splitName =
            item.first_name.split("")[0] + item.last_name.split("")[0];

          return (
            <div
              key={item.id}
              className="flex justify-between items-center w-full gap-6"
            >
              <div className="flex items-center gap-2">
                <div
                  className={` flex justify-center items-center w-12.5 h-12.5 rounded-full ${admin ? "border-4 border-[#00C2A8]" : ""} ${item.profile_picture ? "bg-[#EBE7E7]" : "bg-[#FF8D69] pt-2.25 pb-3 text-[#752509] font-bold text-lg leading-7 font-plusJakartaSans"}`}
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
                    {admin ? "You" : item.first_name + " " + item.last_name}
                  </p>
                  <span className="font-manrope font-regular text-sm leading-5 text-[#6C7A76]">
                    {item.userName}
                  </span>
                </div>
              </div>

              {admin ? (
                <div className="flex justify-center items-center gap-1 bg-[#00C2A8]/20 py-1 px-3 rounded-full min-w-[76px] h-6">
                  <ShieldUser className="w-3 h-10 text-[#00493E] shrink-0" />
                  <p className="font-plusJakartaSans font-bold text-xs leading-4 capitalize text-[#00493E]">
                    ADMIN
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => onRemoveMember(item.id)}
                  className="flex justify-center cursor-pointer p-4 w-10 h-10 rounded-xl"
                >
                  <CancelIcon
                    className={"w-3.5 h-3.5 text-[]"}
                    fill="#6C7A76"
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>
      <Button
        className={`mt-6 font-plusJakartaSans cursor-pointer font-bold text-lg leading-7 pt-2.75 pb-3`}
        onClick={btnClick}
        endIcon={<ArrowRightIcon className="shrink-0 w-3.5 h-3.5" />}
      >
        Next
      </Button>
    </>
  );
};
