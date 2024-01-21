const isServer = typeof window === "undefined";
let host_url;

if (isServer) host_url = process.env.API_IP_ADDRESS;
else host_url = process.env.NEXT_PUBLIC_API_IP_ADDRESS;
const base_url = `${host_url}/api/fetchprofile`;

export const fetchUser = async (accessToken: string) => {
  const payload = await fetch(`${base_url}/get-profile`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
  }).then((res) => res.json());

  return payload.user;
};

export const fetchUserRatings = async (accessToken: string) => {
  const payload = await fetch(`${base_url}/get-ratings`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
  }).then((res) => res.json());

  return {
    movieRatings: payload.movieRatings,
    showRatings: payload.showRatings,
  };
};
