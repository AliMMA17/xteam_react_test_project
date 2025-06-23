"use client";

export default function SimpleChart() {
    // Mock data (e.g., temperatures)
    const data = [16, 10, 15, 11, 10, 12, 10];

    return (
        <div>
            <h2 className="text-white text-lg mb-2">Weekly Chart</h2>
            <div className="flex items-end gap-1 h-32">
                {data.map((value, index) => (
                    <div
                        key={index}
                        className="bg-blue-500"
                        style={{
                            height: `${value * 3}px`, // Scale bar height
                            width: '20px',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
