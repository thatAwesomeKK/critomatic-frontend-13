import Providers from "@/app/(Providers)/Providers";
import React from "react";
const Profile = dynamic(() => import("../../../components/Dasboard/Profile"), {
  ssr: false,
});
const Reviews = dynamic(() => import("../../../components/Dasboard/Reviews"), {
  ssr: false,
});
// import Reviews from '../../../components/Dasboard/Reviews';
import { store } from "@/utils/redux/store";
import dynamic from "next/dynamic";

interface PageProps {
  params: {
    dashType: string;
  };
}

// export const dynamic = 'force-dynamic'

function Dashboard({ params: { dashType } }: PageProps) {
  const accessToken = store.getState().accessToken.token;
  return (
    <Providers>
      {dashType === "profile" && <Profile accessToken={accessToken!} />}
      {dashType === "reviews" && <Reviews />}
    </Providers>
  );
}

export default Dashboard;
