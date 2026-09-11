"use client";

import UserAccountSetting from '../components/UserAccountSetting';

export default function AccountSettingScreen() {
  // const [editProfile, setEditProfile] = useState(true);
  return (
    <div className="flex items-center justify-center bg-[#fcf8f8] min-h-screen">
      {/* <EditProfile profilePictureEdit={editProfile} /> */}
      <UserAccountSetting />
    </div>
  );
}
