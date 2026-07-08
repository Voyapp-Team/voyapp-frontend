"use client"

export default function KycTitle({ accountLevel, subtitle, Icon}) {
  return (
    <section className="flex flex-col gap-3 w-full mb-6">
      {Icon && (
        <div className="w-fit flex items-center justify-center m-auto  ">
          <Icon className="w-30 h-33 text-[#006B5C]" rect="#FFFFFF" />
        </div>
      )}
      
      <h2 className="font-montserrat max-w-120 m-auto font-bold text-[30px] leading-9 text-[#006B5C] text-center tracking-[-0.75px]">
        {`Tier ${accountLevel}:`}
        <br/>
        <span className="text-[#1C1B1B]">{subtitle}</span>
      </h2>
      <p className="font-montserrat font-medium text-[16px] leading-6 text-[#3C4A46] text-center">
        Ensure your details matches with the document
      </p>
    </section>
  );
}