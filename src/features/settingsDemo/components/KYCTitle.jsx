"use client"

export default function KYCTitle() {
  return (
    <section className="flex flex-col gap-3 w-full mb-6">
      <h2 className="font-montserrat w-[385px] m-auto font-bold text-[30px] leading-9 text-[#006B5C] text-center tracking-[-0.75px]">
        Tier 2:
        <br/>
        <span className="text-[#1C1B1B]">Bank Identity Verification</span>
      </h2>
      <p className="font-montserrat font-medium text-[16px] leading-6 text-[#3C4A46] text-center">
        Ensure your details matches with the document
      </p>
    </section>
  );
}