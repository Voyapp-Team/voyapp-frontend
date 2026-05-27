import Image from "next/image";

export default function OnboardingHeroPanel({ className = "" }) {
  return (
    <div
      className={`relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-white ${className}`.trim()}
    >
      <Image
        src="/onboarding/signupSideIllustration.svg"
        alt="Business owner working on a laptop in a bright office space"
        fill
        unoptimized
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
    </div>
  );
}
