"use client";

import { useState } from "react";

import EditProfile from "../components/EditProfile";

export default function ProfileScreen() {
  const [editProfile, setEditProfile] = useState(true);
  return (
    <div className="w-full bg-[#FCF8F8] sm:p-6 pt-7 sm:m-auto">
      <EditProfile profilePictureEdit={editProfile} />
    </div>
  );
}
