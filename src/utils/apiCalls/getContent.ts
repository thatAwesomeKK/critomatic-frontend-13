const isServer = typeof window === "undefined";
let host_url;

if (isServer) host_url = process.env.API_IP_ADDRESS;
else host_url = process.env.NEXT_PUBLIC_API_IP_ADDRESS;
const base_url = `${host_url}/api/getcontent`;

export const contentFetch = async (contentType: string) => {
  const payload = await fetch(`${base_url}/get-${contentType}`).then((res) =>
    res.json()
  );
  return payload;
};
