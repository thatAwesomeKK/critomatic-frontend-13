import ProfileUpdateForm from "@/components/Forms/ProfileUpdateForm";
import { store } from "@/utils/redux/store";
import React from "react";

const hostname = process.env.API_IP_ADDRESS;

async function Profile() {
  const accessToken = store.getState().accessToken.token;
  const user = await fetch(`${hostname}/api/fetchprofile/get-profile`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken!,
    },
    next: { revalidate: 0 },
  }).then((res) => res.json());

  return <ProfileUpdateForm user={user.user} accessToken={accessToken!} />;
}

export default Profile;
