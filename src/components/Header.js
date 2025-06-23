"use client"; // Only needed if using in Next.js App Router (app/ directory)

import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [searchValue, setSearchValue] = useState("");

    function handleInputChange(event) {
        const value = event.target.value;
        setSearchValue(value);
        console.log("Search input:", value);
    };

    return (
        <header className="flex  items-center justify-between px-6 py-4 bg-[#0f0f11] border-b border-blue-500 ">
            {/* Left */}
            <div className="flex items-center gap-6">
                <button className="bg-[#1c1c1e] p-2 rounded-full ">
                    <Image src="/icons/Header/dashboard.svg" alt="Dashboard" width={24} height={24} />
                </button>
                <button className="bg-[#1c1c1e] p-2 rounded-full">
                    <Image src="/icons/Header/bell.svg" alt="Notifications" width={24} height={24} />
                </button>
                <div className="flex items-center gap-1 text-white text-sm">
                    <Image src="/icons/Header/location.svg" alt="Location" width={16} height={16} />
                    <span>Dhaka, Bangladesh</span>
                </div>
            </div>

            {/* Center - Search */}
            <div className="flex items-center gap-2 bg-[#1c1c1e] px-4 py-2 rounded-lg w-[400px]">
                <Image src="/icons/Header/search.svg" alt="Search" width={16} height={16} />
                <input
                    type="text"
                    placeholder="Search City"
                    className="bg-transparent text-white outline-none w-full text-sm placeholder-white"
                    value={searchValue}
                    onChange={handleInputChange}
                />
            </div>
        </header>
    );
}
