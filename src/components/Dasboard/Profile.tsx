import ProfileUpdateForm from "@/components/Forms/ProfileUpdateForm";
import { fetchUser } from "@/utils/apiCalls/profile";
import { cookies } from "next/headers";
import React from "react";

async function Profile() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value as string;
  const user = await fetchUser(accessToken!);

  return <ProfileUpdateForm user={user}/>;
}

export default Profile;
