"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, HomeIcon, Info, Layers, Phone } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const tabs = [
    { href: "/", label: "Home", icon: <HomeIcon size={20} /> },
    { href: "/about", label: "About", icon: <Info size={20} /> },
    { href: "/services", label: "Services", icon: <Layers size={20} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={20} /> },
  ];

  const [active, setActive] = useState("/");

  return (
    <footer className="fixed bottom-0 left-0 w-full h-20 bg-white shadow-t flex justify-around items-center z-50">
      {tabs.map((tab) => (
        <button
          key={tab.href}
          onClick={() => setActive(tab.href)}
          className={`flex flex-col items-center ${
            active === tab.href ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {tab.icon}
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </footer>
  );
};
