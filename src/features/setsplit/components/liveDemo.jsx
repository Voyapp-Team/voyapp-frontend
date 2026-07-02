import { Eye } from 'lucide-react';

export const LiveDemo = ({ data, activeUser }) => {
  return (
    <div className="flex flex-col gap-3 bg-[#FCF8F8B2]  border border-[#BBCAC44D] rounded-3xl p-6 w-full h-[134px] mt-5">
      <div className="flex items-center gap-1 h-[20px] text-[#3C4A46] font-manrope font-regular text-sm leading-5">
        <Eye className="shrink-0 w-6 h-6" />
        <p>Live Preview</p>
      </div>

      <p className="font-manrope font-regular text-[#1C1B1B] text-base leading-6">
        When you receive <span className="text-[#006B5C]">$1000</span>
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {data.map((user, index) => {
          const admin = activeUser === user.id;
          const isLastItem = index === data.length - 1;

          return (
            <p
              key={user.id}
              className="font-manrope font-regular text-[#1C1B1B] text-base leading-6.5 "
            >
              {admin ? "You get" : user.first_name + " " + "gets"} $
              {(Number(user.percentShare) / 100) * 1000} {!isLastItem && " • "}
            </p>
          );
        })}
      </div>
    </div>
  );
};
