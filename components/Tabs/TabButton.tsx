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

  const currentUrl =
    router.asPath.slice(1) === "" ? "what" : router.asPath.slice(1);
  return (
    <Link
      href={link}
      className={`text-xsm text-center font-bold leading-5 uppercase flex-1 py-[15px] hover:bg-rega-blue transition-all hover:bg-opacity-20 ${
        keyCheck ? "px-[15px]" : ""
      } ${currentUrl === link ? "text-[#2187E5]" : "text-[#555]"}`}
    >
      {label}
    </Link>
  );
};

export default TabButton;
