// components/DailyCard.js
import Image from "next/image";

export default function DailyCard({
    day,
    temperature,
    type,
    isSelected,
    onClick,
    time,
    realFeel,
    wind,
    pressure,
    humidity,
    sunrise,
    sunset,
}) {
    const iconPath = `/icons/weather/${type}.svg`;

    return (
        <div
            onClick={onClick}
            className={[
                "cursor-pointer transition-all duration-500 ease-in-out overflow-hidden flex flex-col transition-colors",
                isSelected
                    ? "rounded-2xl bg-blue-200 text-black flex-[3] min-w-[240px] max-w-[280px] p-4 justify-between"
                    : "rounded-full bg-[#1c1c1e] text-gray-300 flex-none w-28 p-3 flex flex-col justify-around items-center hover:bg-[#2a2a2c] hover:text-white"
            ].join(" ")}
            style={{ height: "100%" }}
        >
            {isSelected ? (
                <>
                    {/* — Expanded View — */}
                    <div className="flex justify-between items-center text-sm mb-2">
                        <p className="font-semibold">{day}</p>
                        <p className="text-xs">{time}</p>
                    </div>

                    <div className="flex justify-between items-center w-full mb-4">
                        <p className="text-4xl font-bold">{temperature}°</p>
                        <Image src={iconPath} alt={type} width={60} height={60} />
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                        <p>
                            <span className="text-gray-600">Real Feel </span>
                            <strong>{realFeel}°</strong>
                        </p>
                        <p>
                            <span className="text-gray-600">Sunrise </span>
                            <strong>{sunrise}</strong>
                        </p>
                        <p>
                            <span className="text-gray-600">Wind </span>
                            <strong>{wind}</strong>
                        </p>
                        <p>
                            <span className="text-gray-600">Sunset </span>
                            <strong>{sunset}</strong>
                        </p>
                        <p>
                            <span className="text-gray-600">Pressure </span>
                            <strong>{pressure}</strong>
                        </p>
                        <p>
                            <span className="text-gray-600">Humidity </span>
                            <strong>{humidity}</strong>
                        </p>
                    </div>
                </>
            ) : (
                <>
                    {/* — Collapsed View — */}
                    <div className="w-full border-b border-gray-700 pb-2">
                        <p className="text-xs font-medium uppercase text-center">{day}</p>
                    </div>

                    <Image
                        src={iconPath}
                        alt={type}
                        width={60}
                        height={60}
                        className="mt-3"
                    />

                    <p className="text-xl font-bold text-white mt-1">{temperature}°</p>
                </>
            )}
        </div>
    );
}
