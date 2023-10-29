import React from "react";
import Image from 'next/image'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] w-auto">
      <Image priority src={"/loading.svg"} alt="Loading..." width={100} height={100} />
    </div>
  );
};

export default Spinner;
