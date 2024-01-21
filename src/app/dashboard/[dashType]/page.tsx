import Providers from "@/app/(Providers)/Providers";
import React from "react";
const Profile = dynamic(() => import("../../../components/Dasboard/Profile"), {
  ssr: false,
});
const Reviews = dynamic(() => import("../../../components/Dasboard/Reviews"), {
  ssr: false,
});
import dynamic from "next/dynamic";

interface PageProps {
  params: {
    dashType: string;
  };
}

// export const dynamic = 'force-dynamic'

function Dashboard({ params: { dashType } }: PageProps) {
  return (
    <Providers>
      {dashType === "profile" && <Profile />}
      {dashType === "reviews" && <Reviews />}
    </Providers>
  );
}

export default Dashboard;
