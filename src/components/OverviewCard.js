// components/OverviewCard.js
const ICONS = {
    wind: "/icons/overviewCards/wind_status.svg",
    humidity: "/icons/overviewCards/carbon_humidity.svg",
    visibility: "/icons/overviewCards/visibility.svg",
    uv: "/icons/overviewCards/uv_circle.svg",
};

export default function OverviewCard({
    title,
    iconName,          // key into ICONS
    value,
    footer,
    cardClassName = "",// extra Tailwind classes for height/responsiveness
    iconClassName = "",// extra Tailwind classes for icon sizing
}) {
    const iconSrc = iconName ? ICONS[iconName] : null;

    return (
        <div
            className={[
                "bg-[#1c1c1e] rounded-lg p-4 flex flex-col justify-between",
                cardClassName,
            ].join(" ")}
        >
            <p className="text-sm font-medium text-gray-300">{title}</p>

            {iconSrc && (
                <div className="flex-grow flex items-center justify-center">
                    <img
                        src={iconSrc}
                        alt={`${title} icon`}
                        className={iconClassName}
                    />
                </div>
            )}

            <p className={`text-2xl font-semibold text-white ${iconSrc ? "" : "mt-2"}`}>
                {value}
            </p>
            {footer && <p className="text-xs text-gray-400">{footer}</p>}
        </div>
    );
}
