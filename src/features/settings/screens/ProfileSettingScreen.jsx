"use client";

import ProfileSetting from '../components/ProfileSetting';

export default function ProfileSettingScreen() {
  // const [editProfile, setEditProfile] = useState(true);
  return (
    <div className="flex items-center justify-center bg-[#fcf8f8] min-h-screen">
      {/* <EditProfile profilePictureEdit={editProfile} /> */}
      <ProfileSetting />
    </div>
  );
}
