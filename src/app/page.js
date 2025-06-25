"use client";

import { useState } from "react";
import Header from "../components/Header";
import TabNav from "../components/TabNav";
import DailyCard from "../components/DailyCard";
import RainChart from "../components/RainChart";

import OverviewCard from "../components/OverviewCard";
import CityCard from "../components/CityCard";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Next 7 Days");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const forecast = [
    { day: "Friday", temperature: 16, type: "rain", time: "11:45 AM", realFeel: 18, wind: "6-7 km/h", pressure: "100MB", humidity: "51%", sunrise: "5:30AM", sunset: "6:45PM" },
    { day: "Sat", temperature: 10, type: "rain", time: "11:00 AM", realFeel: 12, wind: "4-5 km/h", pressure: "101MB", humidity: "60%", sunrise: "5:31AM", sunset: "6:44PM" },
    { day: "Sun", temperature: 15, type: "rain", time: "11:15 AM", realFeel: 13, wind: "5-6 km/h", pressure: "102MB", humidity: "58%", sunrise: "5:32AM", sunset: "6:43PM" },
    { day: "Mon", temperature: 11, type: "mix_sunny_cloudy", time: "11:30 AM", realFeel: 11, wind: "3-4 km/h", pressure: "100MB", humidity: "55%", sunrise: "5:33AM", sunset: "6:42PM" },
    { day: "Tue", temperature: 10, type: "rain", time: "11:45 AM", realFeel: 10, wind: "4-5 km/h", pressure: "103MB", humidity: "65%", sunrise: "5:34AM", sunset: "6:41PM" },
    { day: "Wed", temperature: 12, type: "hurricain", time: "12:00 PM", realFeel: 12, wind: "7-8 km/h", pressure: "105MB", humidity: "70%", sunrise: "5:35AM", sunset: "6:40PM" },
    { day: "Thu", temperature: 10, type: "mix_sunny_cloudy", time: "12:15 PM", realFeel: 9, wind: "10-12 km/h", pressure: "106MB", humidity: "66%", sunrise: "5:36AM", sunset: "6:39PM" },
  ];

  const handleCardClick = (idx) => {
    setSelectedIndex(selectedIndex === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-[#0f0f11] text-white">
      <Header />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ─── Top Section: Daily Cards + Rain Chart ─── */}
      <section className="px-6 py-4 flex gap-4">
        <div className="flex flex-row gap-6 sm:gap-8 overflow-x-auto w-full lg:w-3/5 h-72 pr-4">
          {forecast.map((item, idx) => (
            <DailyCard
              key={idx}
              day={item.day}
              temperature={item.temperature}
              type={item.type}
              time={item.time}
              realFeel={item.realFeel}
              wind={item.wind}
              pressure={item.pressure}
              humidity={item.humidity}
              sunrise={item.sunrise}
              sunset={item.sunset}
              isSelected={selectedIndex === idx}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>

        <div className="flex-[1] bg-[#1c1c1e] p-4 rounded-lg h-72">
          <RainChart />
        </div>
      </section>

      {/* ─── Lower Section: Today's Overview + Image Card + Other Cities ─── */}
      <section className="px-6 py-4 space-y-6">
        {/* Heading */}
        <h2 className="text-xl font-semibold">Today's Overview</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── Left: Overview Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex-1">
            <OverviewCard
              title="Wind Status"
              iconName="wind"
              value="7.50 km/h"
              footer="6:20 AM"
              cardClassName="h-32 sm:h-40 lg:h-52"
              iconClassName="w-8 h-8 sm:w-10 sm:h-10 lg:w-60 lg:h-20"
            />

            {/* UV Index: use static icon */}
            <OverviewCard
              title="UV Index"
              iconName="uv"
              value="5.50 UV"
              cardClassName="h-32 sm:h-40 lg:h-52"
              iconClassName="w-8 h-8 sm:w-10 sm:h-10 lg:w-28 lg:h-28"
            />

            {/* Humidity: small on mobile, large on desktop */}
            <OverviewCard
              title="Humidity"
              iconName="humidity"
              value="84%"
              footer="The dew point is 27° right now"
              cardClassName="h-32 sm:h-40 lg:h-52"
              iconClassName="w-8 h-8 sm:w-10 sm:h-10 lg:w-28 lg:h-28"
            />

            {/* Visibility: small on mobile, large on desktop */}
            <OverviewCard
              title="Visibility"
              iconName="visibility"
              value="04 km"
              footer="Haze is affecting visibility"
              cardClassName="h-32 sm:h-40 lg:h-52"
              iconClassName="w-8 h-8 sm:w-10 sm:h-10 lg:w-28 lg:h-28"
            />
          </div>

          {/* ── Middle: Big Image Card ── */}
          <div className="relative flex-1 rounded-2xl overflow-hidden h-80 sm:h-96 lg:h-[28rem]">
            <img
              src="/image.png"
              alt="Explore Map"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-8">
              <p className="text-center text-xl sm:text-2xl font-medium text-white max-w-lg">
                Explore global map of wind weather and ocean condition
              </p>
              <button className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>

          {/* ── Right: Other Cities ── */}
          <div className="lg:w-1/4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Other Cities</h3>
              <button className="text-sm text-blue-400 hover:underline">See All</button>
            </div>
            <div className="space-y-4">
              <CityCard city="Beijing" country="China" weather="Cloudy" icon="/icons/weather/rain.svg" />
              <CityCard city="California" country="US" weather="Windy" icon="/icons/weather/mix_sunny_cloudy.svg" />
              <CityCard city="Arab Emirates" country="Dubai" weather="Mostly Sunny" icon="/icons/weather/hurricain.svg" />
              <CityCard city="Charlottetown" country="Canada" weather="Light Snow" icon="/icons/weather/rain.svg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
