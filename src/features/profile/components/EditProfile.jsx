"use client";
import { User } from '../data/ProfileData';
import UploadProfilePic from './common/UploadProfilePic';
import {
  InputField,
  InputTextArea,
} from './ui/InputField';

export default function EditProfile({ profilePictureEdit }) {
  //   const { handleCopy, copied } = useHandleCopy();
  //   const [copiedLink, setCopiedLink] = useState(null);

  //   const socialMedia = [
  //     { link: "https://whatsapp", img: "/whatsaap-icon.svg" },
  //     { link: "https://x", img: "/x-icon.svg" },
  //     { link: "https://instagram", img: "/instagram-icon.svg" },
  //     { link: "https://tictok", img: "/tictok-icon.svg" },
  //   ];

  //   const otherLinks = [
  //     "https://somaportfolio.framer.website/",
  //     "https://voya.me/",
  //   ];

  const intialData = User[0];

  const [userData, setUserData] = useState({
    user_name: intialData.user_name,
    job_role: intialData.job_role,
    bio: intialData.bio,
    social_links: [intialData.social_links.flat()],
    other_links: intialData.other_links,
  });

  const handleProfilePictureEdit = () => {
    const profilePicture = URL.createObjectURL(event.target.files[0]);
  };
  return (
    <section className="relative flex flex-col items-center ">
      {/*Upload Profile Pucture Component */}
      <UploadProfilePic editProfile={profilePictureEdit} />

      <div className="flex flex-col items-center gap-2 w-full sm:max-w-[495px]">
        <InputField label={`Full Name`} value={`Chanor James`} readOnly />
        <InputField label={`Job Role`} value={`Product Designer`} readOnly />
        <div>
          <InputTextArea
            label={`Bio`}
            value={`I design intuitive interface to increase user retention by 45%`}
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full sm:max-w-[495px]">
        <InputField label={`Social Link 1`} />
        <InputField
          label={`Social Link 2`}
          value={`https://whatsapp`}
          readOnly
        />
        <InputField label={`Social Link 3`} />
        <InputField label={`Social Link 4`} />
        {/* {socialMedia &&
          socialMedia.map((media, index) => (
            <a
              href={media.link}
              key={index}
              className="w-14 h-14 rounded-2xl bg-[#FFFFFF] flex justify-center items-center my-6"
            >
              <img src={media.img} alt="Social media icon" />
            </a>
          ))} */}
      </div>
      <div className="flex flex-col items-center gap-2 w-full sm:max-w-[495px] mt-4">
        <InputField label={`Portfolio Link`} />
        <InputField label={`Personal Website Link`} />
        {/* {otherLinks &&
          otherLinks.map((link) => (
            <div
              key={link}
              className="relative w-full max-w-85 m-auto flex gap-2 items-center mb-6 "
            >
              <p className="w-full max-w-74 truncate bg-[#FFFFFF] rounded-[10px] p-2 font-bold font-montserrat text-[clamp(12px,3.3vw,14px)] text-[#006B5C] leading-7 text-center">
                {link}
              </p>
              <button
                className="w-10 h-10 rounded-xl bg-[#F6F3F2] flex justify-center items-center cursor-pointer "
                onClick={() => {
                  handleCopy(link);
                  setCopiedLink(link);
                }}
              >
                <img src="/copy-icon.svg" />
              </button>
              {copied && copiedLink === link && (
                <p className="text-green-600 text-[10px] absolute right-0 top-[-30%]">
                  copied!
                </p>
              )}
            </div>
          ))} */}
      </div>
      <p className="font-medium font-monserrat text-[11px] leading-4.25 tracking-[1.1px] text-[#C8C8C8] text-center mt-20 mb-10">
        POWERED BY <span className="font-bold">VOYA.COM</span>
      </p>
    </section>
  );
}
