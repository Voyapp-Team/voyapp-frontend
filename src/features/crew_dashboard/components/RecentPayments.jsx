import { ChevronDown } from 'lucide-react';

export default function RecentPayment({
  data,
  beneficiaries,
  loading,
  viewBalance,
}) {
  return (
    <div className="flex flex-col gap-5 max-w-[608px] h-fit rounded-2xl p-2 ">
      {data.slice(0, 3).map((item) => {
        const Logo = item.company_logo;

        return (
          <div
            key={item.id}
            className={`flex flex-col gap-3 justify-between p-4 bg-[#F6F3F2]`}
          >
            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <div classsName="">
                  <div className="flex items-center justify-center font-manrope font-bold text-lg text-[#3B6D62] w-[40px] h-[40px] rounded-full bg-[#E5E2E1]">
                    <Logo className="text-[#3C4A46] w-[20px] h-[18px]" />
                  </div>
                </div>
                <div>
                  <p className="font-manrope font-bold text-sm leading-5 text-[#1C1B1B]">
                    {item.company_name}
                  </p>
                  <span className="font-manrope font-medium text-xs leading-4 text-[#3C3A46]">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-plusJakartasans font-bold text-lg leading-6 text-[#006B5C]">
                  {viewBalance
                    ? loading
                      ? "0.00"
                      : `+$${item.amount}`
                    : "••••"}
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-3 ">
              <div className="flex items-center ">
                {beneficiaries.slice(0, 3).map((beneficiary, index) => {
                  const BeneficiaryProfileImageAlt =
                    beneficiary.name.split("")[0];
                  return (
                    <div
                      key={beneficiary.id}
                      className={`flex items-center justify-center font-manrope font-bold text-xs text-[#3B6D62] w-[24px] h-[24px] rounded-full bg-[#B8EDDF] ${index > 0 ? "-ml-3" : ""}`}
                    >
                      {beneficiary.profile_img === "" ? (
                        BeneficiaryProfileImageAlt
                      ) : (
                        <img
                          src={beneficiary.profile_img}
                          alt={BeneficiaryProfileImageAlt}
                          className="w-[24px] h-[24px] rounded-full object-cover"
                        />
                      )}
                    </div>
                  );
                })}
                {beneficiaries.length > 3 && (
                  <div className="-ml-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm border-2 border-white">
                    +{beneficiaries.length - 3}
                  </div>
                )}
              </div>
              <button className="flex gap-2 font-manrope font-bold cursor-pointer text-xs text-[#006B5C]">
                Split Details <ChevronDown className="w-3 h-3 text-[#006B5C]" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
