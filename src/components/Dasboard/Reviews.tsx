import React from "react";
import ReviewCard from "./ReviewCard";
import { cookies } from "next/headers";
import { fetchUserRatings } from "@/utils/apiCalls/profile";

async function Reviews() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value as string;

  const contentReviews = await fetchUserRatings(accessToken!);

  const movieReviews = contentReviews.movieRatings || [];
  const showReviews = contentReviews.showRatings || [];

  return (
    <section className="flex space-x-5 px-4 overflow-hidden h-[50vh]">
      <div className="flex-1">
        <h4 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 py-2 rounded-md px-4">
          Movies
        </h4>
        <div className="h-full pb-20 overflow-y-scroll scrollbar-hide">
          {showReviews.map((review: any, id: any) => (
            <ReviewCard contentType={"shows"} key={id} review={review} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 py-2 rounded-md px-4">
          Shows
        </h4>
        <div className="h-full pb-20 overflow-y-scroll scrollbar-hide">
          {movieReviews.map((review: any, id: any) => (
            <ReviewCard contentType={"movies"} key={id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
