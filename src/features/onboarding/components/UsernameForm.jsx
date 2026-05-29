"use client";

import Button from "@/src/components/ui/Button";
import { CheckedCircleIcon } from "@/src/components/ui/Icons";

import InputError from "../../../components/ui/InputError";

export default function UsernameForm({
  username,
  setUsername,
  conditions,
  usernameRequirement,
  usernameSuggestions,
  onSubmit,
  usernameError,
  setUsernameError,
}) {
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div>
        <h1 className="font-montserrat text-[30px] font-semibold leading-[1.16] text-[#1C1B1B] sm:text-[34px]">
          Choose your <span className="block text-[#006B5C]">username</span>
        </h1>
        <p className="mt-4 max-w-[310px] font-manrope text-[15px] leading-6 text-[#3C4A46]">
          This is how your friends and networks will find you on Voya.
        </p>
      </div>

      <div className="mt-14">
        <label
          htmlFor="username"
          className="mb-3 block font-manrope text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-[#3C4A46]"
        >
          Your unique handle
        </label>
        <div className="relative mb-1 flex items-center">
          <span className="pointer-events-none absolute left-5 font-manrope text-[18px] font-bold leading-7 text-[#006B5C]">
            voya.me/
          </span>
          <input
            type="text"
            id="username"
            placeholder="alex_voya"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setUsernameError("");
            }}
            className="block h-16 w-full rounded-2xl border border-[#E1E1E1] bg-white pl-[104px] pr-12 font-manrope text-[18px] font-bold text-[#2C2C2C] outline-none placeholder:text-[#DCD9D9] focus:border-[var(--color-brand-accent)]"
          />
          {username ? (
            <span
              className={`absolute right-4 flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] font-bold ${
                conditions.characterCount && !usernameError
                  ? "border-[#006B5C] bg-[#006B5C] text-white"
                  : "border-[#BA1A1A] text-[#BA1A1A]"
              }`.trim()}
            >
              {conditions.characterCount && !usernameError ? "" : "!"}
            </span>
          ) : null}
        </div>
        <InputError message={usernameError} />
      </div>

      <div className="mt-10">
        <p className="font-manrope text-[13px] font-semibold uppercase leading-5 text-[#3C4A46]/70">
          Suggested for you
        </p>
        <div className="mt-2 space-y-2">
          {usernameSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className="flex h-[58px] w-full max-w-[284px] items-center justify-between rounded-xl border border-[#BBCAC4]/10 bg-white/50 px-4 font-manrope text-sm font-medium text-[#2C2C2C] transition hover:border-[#00C2A8]/30"
              onClick={() => {
                setUsername(suggestion);
                setUsernameError("");
              }}
            >
              <span>{suggestion}</span>
              <span className="flex h-4 w-4 items-center justify-center text-lg leading-none text-[#41DDC2]">
                +
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-9 flex flex-wrap gap-x-4 gap-y-3">
        {usernameRequirement.map((req, index) => {
          const isMet = conditions[Object.keys(conditions)[index]];

          return (
            <div key={req} className="flex items-center gap-2">
              {isMet ? (
                <CheckedCircleIcon className="h-4 w-4" />
              ) : (
                <span className="h-4 w-4 rounded-full border border-[#3C4A46]/60" />
              )}
              <p className="font-manrope text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-[#3C4A46]/60">
                {req}
              </p>
            </div>
          );
        })}
      </div>

      <Button className="mt-10 h-[52px] rounded-2xl font-plusJakartaSans text-[15px] font-bold" disabled={!conditions.characterCount} type="submit">
        Done
      </Button>

      <p className="mt-10 text-center font-manrope text-[12px] font-medium leading-4 text-[#3C4A46]/40">
        You can change this once every 30 days.
      </p>
    </form>
  );
}
