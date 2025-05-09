"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const tabContents = [
  {
    title: "No-code builder",
    description:
      "Design sophisticated flows with conditional logic, formulas, and rich media, with a visual drag-and-drop interface.",
  },
  {
    title: "Opt-ins widget",
    description:
      "Landbot lets you test new experiences live as you try your WhatsApp bot on your phone or via preview.",
  },
  {
    title: "Campaign manager",
    description:
      "Move conversations to human support and manage any number of agents and chats from one central team inbox.",
  },
  {
    title: "Notifications",
    description:
      "Send and receive data in real time with our native integrations, Webhooks, or API.",
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
          "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-2 auto-rows-[18rem] ",
          className
        )}
      >
        {/* Main interactive grid item */}
        <div className="relative col-span-full bg-[#F9F9FF] row-span-1 bg-white dark:bg-black rounded-xl shadow-lg border border-neutral-200 dark:border-white/[0.2] flex flex-col p-0 transition hover:shadow-2xl">
          {/* Two-column layout below pills */}
          <div className="">
            {/* Left: Title and description */}
            <div className="flex-1 flex flex-col justify-center min-w-[220px]">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                {tabContents[activeTab].title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg">
                {tabContents[activeTab].description}
              </p>
            </div>
            {/* Right: Placeholder for chat UI illustration */}
            
          </div>
        </div>

        {/* Test environment - 55% width */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-between p-6 transition hover:shadow-2xl col-span-full md:col-span-3">
          <div className="w-full">
            <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-3">Test environment</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">Landbot lets you test new experiences live as you try your WhatsApp bot on your phone or via preview.</p>
          </div>
          <div className="w-full mt-4">
            <img src="/test-environment.png" alt="Test Environment" className="w-full h-32 object-contain" />
          </div>
        </div>

        {/* Analytics - 45% width */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-between p-6 transition hover:shadow-2xl col-span-full md:col-span-2">
          <div className="w-full">
            <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-3">Analytics</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">See goals, view reports, and analyze drop-offs in the conversation with our chatbot analytics.</p>
          </div>
          <div className="w-full mt-4">
            <img src="/analytics.png" alt="Analytics" className="w-full h-32 object-contain" />
          </div>
        </div>

        {/* Team Inbox - 40% width */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-between p-6 transition hover:shadow-2xl col-span-full md:col-span-2">
          <div className="w-full">
            <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-3">Team Inbox</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">Move conversations to human support and manage any number of agents and chats from one central team inbox.</p>
          </div>
          <div className="w-full mt-4 flex justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden">
              <img src="/avatar1.png" alt="Team Member 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full bg-green-100 overflow-hidden">
              <img src="/avatar2.png" alt="Team Member 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-100 overflow-hidden">
              <img src="/avatar3.png" alt="Team Member 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Integrations - 60% width */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-neutral-200 dark:border-white/[0.2] flex flex-col items-start justify-between p-6 transition hover:shadow-2xl col-span-full md:col-span-3">
          <div className="w-full">
            <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-3">Integrations</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">Send and receive data in real-time with our native integrations, Webhooks, or API. Connect with your favorite tools seamlessly.</p>
          </div>
          <div className="w-full mt-4 flex justify-start gap-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
              </svg>
            </div>
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
