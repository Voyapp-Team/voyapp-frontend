export default function PageHeader({ value, accountLevel, icon }) {
  const Icon = icon;

  const tierMap = {
    "kyc-1": { label: "Tier 1", subtitle: "Personal Identity Verification" },
    "kyc-2": { label: "Tier 2", subtitle: "Bank Identity Verification" },
    "kyc-3": { label: "Tier 3", subtitle: "Proof of Address" },
  };

  const CurrentTier = tierMap[accountLevel.toLowerCase()] || tierMap["kyc-1"];
  return (
    <div className="w-120 h-fit pt-4 flex flex-col items-center text-center sm:whitespace-nowrap">
      {Icon && (
        <div className="w-fit flex items-center justify-center ">
          <Icon className="w-30 h-33 text-[#006B5C] " rect="#FFFFFF" />
        </div>
      )}
      <div className="flex flex-col h-32 w-109.25 pt-6 font-montserrat font-bold sm:text-[30px] text-lg leading-6 sm:leading-9 text-center">
        <p className="text-[#006B5C]">{CurrentTier.label}</p>
        <p className="text-[#1C1B1B]">{CurrentTier.subtitle}</p>
        <p className="font-montserrat font-medium text-sm sm:text-base ledaing-6 text-center text-[#3C4A46]">
          Ensure your details matches with the document
        </p>
      </div>
    </div>
  );
}
