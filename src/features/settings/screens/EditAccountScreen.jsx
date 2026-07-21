"use client";

import EditAccount from '../components/EditAccount';

export default function EditAccountScreen() {
  // const [editProfile, setEditProfile] = useState(true);
  return (
    <div className="flex items-center justify-center h-full mt-20 bg-[#ffffff]">
      {/* <EditProfile profilePictureEdit={editProfile} /> */}
      <EditAccount />
    </div>
  );
}
