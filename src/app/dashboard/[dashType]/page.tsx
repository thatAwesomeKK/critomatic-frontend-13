import Providers from "@/app/(Providers)/Providers";
import React from "react";
import { default as lazyLoad } from "next/dynamic";
const Profile = lazyLoad(() => import("../../../components/Dasboard/Profile"), {
  ssr: false,
});
const Reviews = lazyLoad(() => import("../../../components/Dasboard/Reviews"), {
  ssr: false,
});

interface PageProps {
  params: {
    dashType: string;
  };
}

export const dynamic = "force-dynamic";

function Dashboard({ params: { dashType } }: PageProps) {
  return (
    <Providers>
      {dashType === "profile" && <Profile />}
      {dashType === "reviews" && <Reviews />}
    </Providers>
  );
}

export default Dashboard;
