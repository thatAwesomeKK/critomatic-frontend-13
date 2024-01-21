import { toast } from "react-toastify";
import { alertCall } from "../toast/alertCall";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const isServer = typeof window === "undefined";
let host_url;

if (isServer) host_url = process.env.API_IP_ADDRESS;
else host_url = process.env.NEXT_PUBLIC_API_IP_ADDRESS;
const base_url = `${host_url}/api/addrating`;

export const giveRating = async (
  contentType: string,
  contentID: string,
  data: { rating: string; review: string }
) => {
  const id = toast.loading("Please wait...");
  const payload = await fetch(
    `${base_url}/add?contentType=${contentType}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contentID,
        rating: data.rating,
        review: data.review,
      }),
    }
  ).then((res) => res.json());

  if (payload.success) {
    alertCall("update_success", payload.message, id);
  } else {
    alertCall("update_error", payload.error, id);
  }
};

export const deleteRating = async (
  contentType: string,
  ratingID: string,
  router: AppRouterInstance
) => {
  const id = toast.loading("Please wait...");
  const payload = await fetch(`${base_url}/del-rating`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ contentType, ratingID }),
  }).then((res) => res.json());

  if (payload.success) {
    alertCall("update_success", payload.message, id);
  } else {
    alertCall("update_error", payload.error, id);
  }

  router.refresh();
};
