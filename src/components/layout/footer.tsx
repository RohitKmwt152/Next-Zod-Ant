"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Layers, Phone } from "lucide-react";

export default function FooterTabs() {
  const pathname = usePathname();

  const tabs = [
    { href: "/", label: "Home", icon: <Home size={22} /> },
    { href: "/about", label: "About", icon: <Info size={22} /> },
    { href: "/services", label: "Services", icon: <Layers size={22} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={22} /> },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center text-sm transition ${
                active ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab.icon}
              <span className="text-xs mt-1">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
