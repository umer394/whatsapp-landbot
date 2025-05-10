"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
const tabContents = [
  {
    title: "No-code builder",
    description:
      "Design sophisticated flows with conditional logic, formulas, and rich media, with a visual drag-and-drop interface.",
    image: "/grid1.png",
  },
  {
    title: "Opt-ins widget",
    description:
      "Landbot lets you test new experiences live as you try your WhatsApp bot on your phone or via preview.",
    image: "/grid1.png",
  },
  {
    title: "Campaign manager",
    description:
      "Move conversations to human support and manage any number of agents and chats from one central team inbox.",
    image: "/grid1.png",
  },
  {
    title: "Notifications",
    description:
      "Send and receive data in real time with our native integrations, Webhooks, or API.",
    image: "/grid1.png",
  },
];

export const ModernBentoGrid = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Square tab buttons above the grid */}
      <div className="flex w-full gap-x-3  justify-center flex-wrap">
        {tabContents.map((tab, idx) => (
          <button
            key={tab.title}
            className={cn(
              "w-52 h-10 flex items-center justify-center font-medium text-sm transition   shadow-sm focus:outline-none",
              idx === activeTab
                ? "bg-[#636BFC] text-white border-blue-600"
                : "bg-[#EBECFF] text-[#33405E] dark:text-neutral-200 border-neutral-200 dark:border-white/[0.2] hover:bg-[#EBECFF] dark:hover:bg-blue-900 cursor-pointer hover:text-[#33405E] dark:hover:text-blue-300"
            )}
            onClick={() => setActiveTab(idx)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-2 auto-rows-[32rem] ",
          className
        )}
      >
        {/* Main interactive grid item */}
        <div className="relative col-span-full bg-[#F9F9FF] row-span-1  dark:bg-black rounded-xl  border border-neutral-200 dark:border-white/[0.2] flex flex-col p-0 transition ">
          {/* Two-column layout below pills */}
          <div className=" flex justify-between bg-[#F9F9FF] p-20">
            {/* Left: Title and description */}
            <div className="flex-1  flex flex-col  justify-center min-w-[220px]">
              <h2 className="text-2xl md:text-4xl capitalize font-bold text-[#33405E] dark:text-neutral-100 mb-2">
                {tabContents[activeTab].title}
              </h2>
              <p className="text-[#33405E] max-w-xl dark:text-neutral-300 text-base md:text-lg">
                {tabContents[activeTab].description}
              </p>
            </div>
            {/* Right: Placeholder for chat UI illustration */}
            <div className=" ">
              <Image src={tabContents[activeTab].image} alt="Bento Grid 1" width={400} height={500} />
            </div>
          </div>
        </div>

        {/* Test environment - 55% width */}
        <div className=" rounded-xl gap-y-8  bg-[#F9F9FF]  border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-center p-6 transition  col-span-full md:col-span-3">
        <div className="w-full flex items-center justify-center ">
           <Image src="/grid2.png" alt="Test Environment" width={600} height={500} />
          </div>
          <div className="w-full px-10">
            <h3 className="font-bold text-4xl text-[#33405E] dark:text-neutral-100 mb-3">Test environment</h3>
            <p className="text-[#33405E] dark:text-neutral-300 max-w-xl text-xl ">Landbot lets you test new experiences live as you try your WhatsApp bot on your phone or via preview.</p>
          </div>
          
        </div>

        {/* Analytics - 45% width */}
        <div className="bg-[#F9F9FF]  dark:bg-black rounded-xl  border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-between p-6 transition  col-span-full md:col-span-2">
        <div className="w-full flex items-center justify-centermt-10 ">
           <Image src="/grid3.png" alt="Test Environment" width={600} height={500} />
          </div>
          <div className="w-full px-6 mb-8">
            <h3 className="font-bold text-4xl text-[#33405E] dark:text-neutral-100 mb-3">Team inbox</h3>
            <p className="text-[#33405E] dark:text-neutral-300 max-w-2xl text-xl ">Move conversations to human support and manage any number of agents and chats from one central team inbox.</p>
          </div>
        </div>

        {/* Team Inbox - 40% width */}
        <div className="bg-[#F9F9FF] gap-y-10  dark:bg-black rounded-xl  border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-between p-6 transition  col-span-full md:col-span-2">
          <div className="w-full flex items-center justify-center">
            <Image src="/grid4.png" alt="Test Environment" width={500} height={500} />
          </div>
          <div className="w-full px-6 mb-8">
            <h3 className="font-semibold text-4xl text-[#33405E]  dark:text-neutral-100 mb-3">Integrations</h3>
            <p className="text-[#33405E] dark:text-neutral-300 max-w-2xl text-xl">Send and receive data in real-time with our native integrations, Webhooks, or API.</p>
          </div>
         
        </div>

        {/* Integrations - 60% width */}
        <div className="bg-[#F9F9FF] gap-y-6 dark:bg-black rounded-xl  border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-between p-6 transition  col-span-full md:col-span-3">
        <div className="w-full flex items-center justify-center ">
           <Image src="/grid5.png" alt="Test Environment" width={600} height={500} />
          </div>
          <div className="w-full px-10 mb-8">
            <h3 className="font-semibold text-4xl text-[#33405E] dark:text-neutral-100 mb-3">Analytics</h3>
            <p className="text-[#33405E] dark:text-neutral-300 max-w-xl text-2xl ">Set goals, view reports, and analyze drop offs in the conversation with our chatbot analytics.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-5 auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative bg-white dark:bg-black rounded-xl shadow-lg border border-neutral-200 dark:border-white/[0.2] flex flex-col p-6 transition hover:shadow-2xl",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-800 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// Example of a modern bento grid layout with specific ratios
export const ModernBentoDemo = () => {
  return (
    <BentoGrid>
      {/* Row 1: Full-width item */}
      <div className="col-span-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        Full Width Content
      </div>

      {/* Row 2: 60-40 split */}
      <div className="col-span-full md:col-span-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
        60% Width Content
      </div>
      <div className="col-span-full md:col-span-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
        40% Width Content
      </div>

      {/* Row 3: 40-60 split */}
      <div className="col-span-full md:col-span-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
        40% Width Content
      </div>
      <div className="col-span-full md:col-span-3 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
        60% Width Content
      </div>
    </BentoGrid>
  );
};
