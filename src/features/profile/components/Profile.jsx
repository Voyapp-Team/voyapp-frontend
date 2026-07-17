"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";

import useHandleCopy from "@/src/hooks/useHandleCopy";

import { User } from "../data/ProfileData";
import UploadProfilePic from "./common/UploadProfilePic";

export default function Profile() {
  const router = useRouter();

  const { handleCopy, copied } = useHandleCopy();
  const [copiedLink, setCopiedLink] = useState(null);

  // const socialMedia = [
  //   { link: "https://whatsapp", img: "/whatsaap-icon.svg" },
  //   { link: "https://x", img: "/x-icon.svg" },
  //   { link: "https://instagram", img: "/instagram-icon.svg" },
  //   { link: "https://tictok", img: "/tictok-icon.svg" },
  // ];

  // const otherLinks = [
  //   "https://somaportfolio.framer.website/",
  //   "https:/voya.me/",
  // ];
  return (
    <section className="relative">
      <button
        onClick={() => router.push("/profile/edit-profile")}
        className=" absolute -top-6.25 -right-2 flex justify-center items-center bg-[#FFFFFF] w-10 h-10 rounded-xl"
      >
        <img src="/edit-pen-icon.svg" alt="Edit Profile Illustration" />
      </button>
      {/*Upload Profile Pucture Component */}
      <UploadProfilePic />

      <div className="max-w-[356.7px]">
        <p className="font-extrabold font-plusJakartaSans text-[36px] leading-10 tracking-[-0.9px] text-[#1C1B1B] text-center">
          {User[0].user_name}
        </p>
        <p className="font-medium font-montserrat text-[16px] leading-[29.25px] text-[#3C4A46] text-center">
          {User[0].user_role}
        </p>
        <p className="max-w-[267.06px] m-auto font-manrope text-[18px] leading-[29.25px] text-[#3C4A46] text-center">
          {User[0].bio}{" "}
        </p>
      </div>

      <div className=" w-full max-w-74 m-auto flex justify-between gap-4">
        {User[0].social_links &&
          User[0].social_links?.map((media, index) => (
            <a
              href={media.link}
              key={index}
              className="w-14 h-14 rounded-2xl bg-[#FFFFFF] flex justify-center items-center my-6"
            >
              <img src={media.img} alt="Social media icon" />
            </a>
          ))}
      </div>

      <div>
        {User[0].other_links &&
          User[0].other_links.map((item) => (
            <div
              key={item.label}
              className="relative w-full max-w-85 m-auto flex gap-2 items-center mb-6 "
            >
              <p className="w-full max-w-74 truncate bg-[#FFFFFF] rounded-[10px] p-2 font-bold font-montserrat text-[clamp(12px,3.3vw,14px)] text-[#006B5C] leading-7 text-center">
                {item.link}
              </p>
              <button
                className="w-10 h-10 rounded-xl bg-[#F6F3F2] flex justify-center items-center cursor-pointer "
                onClick={() => {
                  handleCopy(item.link);
                  setCopiedLink(item.link);
                }}
              >
                <img src="/copy-icon.svg" />
              </button>
              {copied && copiedLink === item.link && (
                <p className="text-green-600 text-[10px] absolute right-0 top-[-30%]">
                  copied!
                </p>
              )}
            </div>
          ))}
      </div>
      <p className="font-medium font-monserrat text-[11px] leading-4.25 tracking-[1.1px] text-[#006B5C] text-center mt-20 mb-10">
        POWERED BY <span className="font-bold">VOYA.COM</span>
      </p>
    </section>
  );
}
