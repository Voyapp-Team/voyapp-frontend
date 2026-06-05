export default function CrewMemberCard({
  members,
  userId,
  loading,
  viewBalance,
}) {
  return (
    <div className="flex flex-col gap-5 max-w-[608px] h-fit rounded-2xl p-2 bg-[#F6F3F2]">
      {members.map((member) => {
        const ProfileImageAlt = member.name.split("")[0];

        return (
          <div
            key={member.id}
            className={`flex justify-between p-4 ${member.id === userId ? "bg-[#FFFFFF]  rounded-xl" : ""}`}
          >
            <div className="relative flex gap-2 ">
              <div>
                <div className="flex items-center justify-center font-manrope font-bold text-lg text-[#3B6D62] w-[48px] h-[48px] rounded-full bg-[#B8EDDF]">
                  {member.profile_img === "" ? (
                    ProfileImageAlt
                  ) : (
                    <img
                      src={member.profile_img}
                      alt=""
                      className="object-cover"
                    />
                  )}
                </div>
                {member.id === userId && (
                  <div className="absolute left-9 bottom-1.5 w-[17px] h-[17px] rounded-full border border-[#FFFFFF] bg-[#00C2A8]">
                    <span className="w-[15px] h-[15px] rounded-full bg-[#006b5c]"></span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-manrope font-bold text-sm leading-5 text-[#1C1B1B]">
                  {member.name} {member.id === userId && "(You)"}
                </p>
                <span className="font-manrope font-medium text-xs leading-4 text-[#3C3A46]">
                  {member.role.toLowerCase() === "admin"
                    ? member.role + " • "
                    : ""}{" "}
                  {member.percent_share}% Split
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-manrope font-bold text-sm leading-5 text-[#1C1B1B]">
                {viewBalance
                  ? loading
                    ? "0.00"
                    : `$${member.percentage}`
                  : "••••"}
              </p>
              <span className="font-manrope font-regular text-[10px] leading-[15px] tracking-[0.25px] text-[#3C3A46]">
                EARNED{" "}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
