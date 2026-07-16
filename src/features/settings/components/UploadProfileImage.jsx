"use client";

import { useRef } from 'react';

export default function UploadProfilePic({
  handleChange,
  imageSrc,
  editProfile,
}) {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    if (!editProfile) {
      return;
    }
    fileInputRef.current.click();
  };
  return (
    <div
      className="relative w-43 h-43 rounded-full  cursor-pointer bg-[#F6F3F2] m-auto mb-6"
      onClick={handleUpload}
    >
      {/* Profile Image */}
      <img
        src={imageSrc ? imageSrc : "/profile-pic.svg"} // Replace with actual image source
        alt="Profile"
        className="rounded-full object-cover w-43 h-43"
      />

      {/* Camera Icon */}
      <div className="absolute right-6 bottom-1 w-[23.67px] h-[22.5px] flex justify-center items-center rounded-full bg-[#006B5C] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)]">
        <img src="/upload-img-icon2.svg" alt="Upload Photo" />
      </div>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        id="profile_image"
        name="profile_image"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
