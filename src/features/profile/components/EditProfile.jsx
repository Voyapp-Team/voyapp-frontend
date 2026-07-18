"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Modal from '@/src/components/ui/Modal';

import { ShareDashboardIcon } from '../../dashboard/components/DashboardIcons';
import Header from '../../settings/components/common/Header';
import UploadProfilePic from '../components/common/UploadProfilePic';
import { User } from '../data/ProfileData';
import {
  InputField,
  InputTextArea,
} from './ui/InputField';

export default function EditProfile({ profilePictureEdit }) {
  const router = useRouter();
  const initialData = User[0];

  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);

  const [userData, setUserData] = useState({
    user_name: initialData.user_name,
    profile_image: initialData.profile_image,
    job_role: initialData.job_role,
    bio: initialData.bio,
    social_links: initialData.social_links,
    other_links: initialData.other_links,
  });

  //   function for changing profile picture..
  const handleProfilePictureEdit = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (userData.profile_image && userData.profile_image.startsWith("blob:")) {
      URL.revokeObjectURL(userData.profile_image);
    }

    const imageUrl = URL.createObjectURL(file);

    setUserData((prevData) => ({
      ...prevData,
      profile_image: imageUrl,
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //function to update user social links
  const handleSocialLinks = (index, newValue) => {
    setUserData((prev) => {
      const updatedLink = [...prev.social_links];
      updatedLink[index] = {
        ...updatedLink[index],
        link: newValue,
      };
      return {
        ...prev,
        social_links: updatedLink,
      };
    });
  };

  //Function to update other links

  const handleOtherLinks = (index, value) => {
    setUserData((prev) => {
      const updatedLinks = [...prev.other_links];

      updatedLinks[index] = {
        ...updatedLinks[index],
        link: value,
      };
      return {
        ...prev,
        other_links: updatedLinks,
      };
    });
  };

  const handleSubmit = async () => {
    if (!userData) return;

    if (
      userData.user_name.trim() === "" ||
      userData.bio.trim() === "" ||
      userData.job_role.trim() === ""
    ) {
      alert("Please fill out all required fields (Name, Job Role, and Bio).");
      return;
    }

    try {
      setIsLoading(true);

      User[0] = {
        ...User[0],
        ...userData,
      };

      setModal(true);

      // alert("Profile saved successfully!");
      // router.push("/dashboard/profile");
    } catch (error) {
      console.error("Save failed:", error);
      alert("Something went wrong while saving your changes.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header
        pageDesc={"Edit Profile"}
        btnDesc={isLoading ? "....." : "Save Changes"}
        icon={ShareDashboardIcon}
        onClick={handleSubmit}
      ></Header>
      <section className="relative flex flex-col items-center mt-20">
        {/* header */}

        {/*Upload Profile Pucture Component */}
        <UploadProfilePic
          handleChange={handleProfilePictureEdit}
          editProfile={profilePictureEdit}
          imageSrc={userData.profile_image || "/profile-pic.svg"}
        />

        <div className="flex flex-col items-center gap-2 w-full sm:max-w-[495px]">
          <InputField
            label={`Full Name`}
            name={`user_name`}
            value={`${userData.user_name}`}
            onChange={handleOnChange}
          />
          <InputField
            label={`Job Role`}
            name={`job_role`}
            value={`${userData.job_role}`}
            onChange={handleOnChange}
          />
          <div>
            <InputTextArea
              label={`Bio`}
              name={`bio`}
              value={`${userData.bio}`}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full sm:max-w-[495px]">
          {userData.social_links.map((item, index) => (
            <div key={index} className="">
              <InputField
                label={`${item.label}`}
                value={`${item.link}`}
                onChange={(e) => handleSocialLinks(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 w-full sm:max-w-[495px] mt-4">
          {userData.other_links.map((item, index) => (
            <div key={index} className="">
              <InputField
                label={`${item.label}`}
                value={item.link}
                onChange={(e) => handleOtherLinks(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <p className="font-medium font-monserrat text-[11px] leading-4.25 tracking-[1.1px] text-[#C8C8C8] text-center mt-20 mb-10">
          POWERED BY <span className="font-bold">VOYA.COM</span>
        </p>
      </section>
      {modal && (
        <Modal
          buttonClassName={`hidden`}
          className={`bg-transparent border border-[#E8E8E8] flex flex-col items-center gap-5 max-w-[511px] p-6 backdrop-blur-md`}
        >
          <div className="flex flex-col items-center h-[203px] sm:w-[261px] rounded-[50px]">
            <div className="h-[250px] w-[250px]"></div>
            <p className="text-center font-montserrat font-bold text-lg leading-7 text-[#FFFFFF] ">
              Successfully Completed
            </p>
          </div>
          <button
            onClick={() => {
              router.push("/dashboard/profile");
              setModal(false);
            }}
            className="bg-[#006B5C] w-[238px] text-center py-3 px-6 rounded-[20px] text-[#FFFFFF] font-manrope font-semibold text-[15px] leading-[22px]"
          >
            Done
          </button>
        </Modal>
      )}
    </>
  );
}
