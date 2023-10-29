import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return <div className="flex justify-center items-center">
    <Image priority src={"/loading.svg"} alt="Loading..." width={100} height={100} />
  </div>
}