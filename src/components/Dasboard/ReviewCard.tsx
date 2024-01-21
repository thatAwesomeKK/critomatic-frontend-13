import React from "react";
import { AiFillStar } from "react-icons/ai";
import DelButton from "./DelButton";

interface PageProps {
  contentType: string;
  review: any;
}

function ReviewCard({ contentType, review }: PageProps) {
  return (
    <div
      className="bg-[rgb(7,38,49)] my-3 py-3 px-4 rounded-lg relative"
      key={review._id}
    >
      <DelButton contentType={contentType} ratingID={review._id} />
      <h3 className="font-semibold text-2xl">
        {review.movieID?.title || review.showID?.title}
      </h3>
      <div className="flex items-center space-x-2">
        <AiFillStar className="h-8 w-8 text-yellow-300" />
        <p className="font-sm text-lg">
          <span className="font-medium text-2xl text-white">
            {review.userRating.rating}
          </span>
          /10
        </p>
      </div>
      <p className="text-lg font-normal my-2">{review.userRating.review}</p>
    </div>
  );
}

export default ReviewCard;
