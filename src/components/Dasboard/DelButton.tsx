"use client";
import { deleteRating } from "@/utils/apiCalls/rating";
import { useRouter } from "next/navigation";
import React from "react";
import { IoTrashBin } from "react-icons/io5";

function DelButton({ contentType, ratingID }: any) {
  const router = useRouter();
  return (
    <IoTrashBin
      onClick={() => deleteRating(contentType, ratingID, router)}
      className="h-6 w-6 absolute top-2 right-2 text-red-600 cursor-pointer"
    />
  );
}

export default DelButton;
