import React from "react";
import Image from "next/image";
import Timeago from "../ui/Timeago";
import { AiOutlineStar } from 'react-icons/ai'

const ReviewCard = ({ rating }: any) => {
    return (
        <div className="flex flex-col my-4 bg-[rgb(7,38,49)] rounded-lg p-5 text-white">
            <div className="flex items-center space-x-2">
                <AiOutlineStar className="h-8 w-8 text-yellow-300" />
                <p className="font-sm text-lg">
                    <span className="font-medium text-2xl text-white">
                        {rating.userRating.rating}
                    </span>
                    /10
                </p>
            </div>
            <div className="my-2">
                <p className="text-white">{rating.userRating.review}</p>
            </div>
            <div className="flex items-center mt-1">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-gray-500">
                    <Image
                        src={rating.userID.pfp || "https://links.papareact.com/gll"}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col ml-2">
                    <p className="font-light text-base">@{rating.userID.username}</p>
                    <Timeago createdAt={rating.createdAt} />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
