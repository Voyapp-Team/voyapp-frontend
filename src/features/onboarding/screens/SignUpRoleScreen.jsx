"use client";

import { useRouter } from "next/navigation";
import VoyaLogo from "../../../components/brand/VoyaLogo";
import RoleOptionButton from "../components/common/RoleOptionButton";
import { ArrowLeftIcon } from "../../../components/ui/Icons";
import { auth } from "@/src/firebase/config";

const signUpOptions = [
  { id: "business-owner", label: "As Business Owner", variant: "primary", path: "/onboarding/business-signup" },
  { id: "freelancer", label: "As Freelancer", variant: "secondary", path: "/onboarding/freelancer-signup" },
];

export default function SignUpRoleScreen() {
  const router = useRouter();

  console.log("Auth object:", auth); // Log the auth object to verify it's imported correctly

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-10">
      <section className="relative w-full max-w-[22rem] rounded-[2rem] border border-black/5 bg-white px-5 pb-10 pt-6 sm:px-10">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => router.push("/")}
          className="absolute left-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-brand-primary-deep)] transition hover:bg-[var(--color-brand-soft)]"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center">
          <VoyaLogo markClassName="h-auto w-24" />
          <h1 className="mt-3 text-[2rem] font-extrabold tracking-tight text-[#262626]">
            Sign up
          </h1>
        </div>

        <div className="mt-6 space-y-6">
          {signUpOptions.map((option) => (
            <RoleOptionButton
              key={option.id}
              variant={option.variant}
              onClick={() => router.push(option.path)}
            >
              {option.label}
            </RoleOptionButton>
          ))}
        </div>
      </section>
    </main>
  );
}
