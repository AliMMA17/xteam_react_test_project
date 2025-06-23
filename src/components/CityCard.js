import Image from "next/image";

export default function CityCard({ city, country, weather, icon }) {
    return (
        <div className="bg-[#1c1c1e] rounded-lg p-3 flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-400">{country}</p>
                <p className="text-base font-medium text-white">{city}</p>
                <p className="text-xs text-gray-500 mt-1">{weather}</p>
            </div>
            <Image src={icon} alt={`${weather} icon`} width={60} height={60} />
        </div>
    );
}
