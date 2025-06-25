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
                "cursor-pointer transition-all duration-500 ease-in-out flex flex-col transition-colors",
                isSelected
                    ? "overflow-hidden rounded-2xl bg-blue-200 text-black flex-[3_1_0%] min-w-0 p-4 justify-between"
                    // flex: 1 1 0%; allows equal share and shrink
                    : "rounded-full bg-[#1c1c1e] text-gray-300 flex-[1_1_0%] min-w-0 p-3 flex flex-col justify-around items-center hover:bg-[#2a2a2c] hover:text-white"

            ].join(" ")}
            style={{ height: "100%" }}
        >
            {isSelected ? (
                <>
                    {/* — Expanded View — */}
                    <div className="flex justify-between items-center mb-2">
                        {/* Bolder, larger day */}
                        <p className="text-lg font-bold">{day}</p>
                        <p className="text-lg">{time}</p>
                    </div>

                    <div className="flex justify-between items-center w-full mb-4">
                        {/* Bigger temperature */}
                        <p className="text-5xl font-bold">{temperature}°</p>
                        <Image src={iconPath} alt={type} width={100} height={100} />
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
                    {/* Bolder and larger day */}
                    <div className="w-full border-b border-gray-700 pb-2">
                        <p className="text-sm font-bold uppercase text-center">{day}</p>
                    </div>

                    {/* Icon */}
                    <Image
                        src={iconPath}
                        alt={type}
                        width={60}
                        height={60}
                        className="mt-3"
                    />

                    {/* Bigger temperature */}
                    <p className="text-3xl font-bold text-white mt-1">{temperature}°</p>
                </>
            )}
        </div>
    );
}
