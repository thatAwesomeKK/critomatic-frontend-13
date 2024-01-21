import { toast } from "react-toastify";
import { alertCall } from "../toast/alertCall";

const isServer = typeof window === "undefined";
let host_url;

if (isServer) host_url = process.env.API_IP_ADDRESS;
else host_url = process.env.NEXT_PUBLIC_API_IP_ADDRESS;
const base_url = `${host_url}/api/auth`;

export const signIn = async (data: { email: string; password: string }) => {
  const id = toast.loading("Please wait...");
  const payload = await fetch(`${base_url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email: data.email, password: data.password }),
  }).then((res) => res.json());
  if (payload.success) {
    alertCall("update_success", "Login Success!", id);
  } else {
    alertCall("update_error", payload.error, id);
  }
};

export const signUp = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const id = toast.loading("Please wait...");
  const payload = await fetch(`${base_url}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    }),
  }).then((res) => res.json());
  if (payload.success) {
    alertCall("update_success", "Registration Success!", id);
  } else {
    alertCall("update_error", payload.error, id);
  }
};

export const updateUser = async (
  data: { username: string },
  profileImg: string | null
) => {
  const id = toast.loading("Please wait...");
  const payload = await fetch(`${base_url}/update-user`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pfp: profileImg,
      username: data.username,
    }),
  }).then((res) => res.json());
  if (payload.success) {
    alertCall("update_success", payload.message, id);
  } else {
    alertCall("update_error", payload.error, id);
  }
};

export const logout = async () => {
  const res = await fetch(`${base_url}/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(res);
  window.location.reload();
};
