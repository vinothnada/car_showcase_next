"use client";

import { CustomeButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
