import { Plus } from 'lucide-react';

export const VoyaMemberCard = ({ data, onAddMember }) => {
  return (
    <>
      <section className="flex flex-col gap-6 w-full min-h-29 pt-6 sm:pl-6">
        {data.map((item) => {
          const splitName =
            item.first_name.split("")[0] + item.last_name.split("")[0];

          return (
            <div
              key={item.id}
              className="flex justify-between items-center w-full gap-6"
            >
              <div className="flex items-center gap-2">
                <div
                  className={` flex justify-center items-center w-12.5 h-12.5 rounded-full ${item.profile_picture ? "bg-[#EBE7E7]" : "bg-[#B8EDDF] pt-2.25 pb-3 text-[#3B6D62] font-bold text-lg leading-7 font-plusJakartaSans"}`}
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
                    {item.first_name + " " + item.last_name}
                  </p>
                  <span className="font-manrope font-regular text-sm leading-5 text-[#6C7A76]">
                    {item.userName}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onAddMember(item)}
                className="flex justify-center items-center gap-1 text-[#006B5C] font-plusJakartaSans font-bold text-sm leading-5 cursor-pointer py-2 px-4 w-18.75 h-9 rounded-xl bg-[#EBE7E7] backdrop-blur-md hover:backdrop-brightness-50"
              >
                <Plus className={"w-3.5 h-3.5 shrink-0 "} />
                Add
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};
