import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface TabButtonProps {
  keyCheck: boolean;
  label: string;
  link: string;
}

const TabButton: React.FC<TabButtonProps> = ({ label, keyCheck, link }) => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the specified link
    router.push(link);
  };
  const currentUrl =
    router.asPath.slice(1) === "" ? "what" : router.asPath.slice(1);
  return (
    <button
      className={`text-xsm font-bold leading-5 uppercase flex-1 py-[15px] hover:bg-rega-blue transition-all hover:bg-opacity-20 ${
        keyCheck ? "px-[15px]" : ""
      } ${currentUrl === link ? "text-[#2187E5]" : "text-[#555]"}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
