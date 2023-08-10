import React, { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

type Tab = {
  label: string;
  content: React.ReactNode;
  link: string;
};

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {

  return (
    <div className="border border-solid border-red-100 rounded-t-md">
      <div className="flex justify-between bg-[#CDDDED] rounded-t-md">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            keyCheck={index === 0 || index === tabs.length - 1 ? true : false}
            label={tab.label}
            link = {tab.link}
          />
        ))}
      </div>
      <div>
        <TabContent />
      </div>
    </div>
  );
};

export default Tabs;
