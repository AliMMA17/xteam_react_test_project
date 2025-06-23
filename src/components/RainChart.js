"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Tooltip
);

export default function RainChart() {
    const labels = ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM"];
    const values = [30, 60, 50, 70, 90, 40];

    const data = {
        labels,
        datasets: [
            {
                type: "bar",
                data: values,
                backgroundColor: "#ffffff",
                barPercentage: 0.3,
                categoryPercentage: 0.5,
                borderRadius: 4,
                yAxisID: "y",
            },
            {
                type: "line",
                data: values,
                fill: false,
                borderColor: "#3b82f6",
                tension: 0.4,
                pointBackgroundColor: "#3b82f6",
                pointRadius: 4,
                pointHoverRadius: 6,
                yAxisID: "y",
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: "rgba(255,255,255,0.1)",
                    borderDash: [4, 4],
                },
                ticks: {
                    color: "#fff",
                    stepSize: 50,
                    callback: (val) => {
                        if (val === 0) return "Heavy";
                        if (val === 50) return "Sunny";
                        if (val === 100) return "Rainy";
                        return "";
                    },
                },
            },
            x: {
                grid: { display: false },
                ticks: { color: "#fff", padding: 8 },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "rgba(0,0,0,0.8)",
                titleColor: "#fff",
                bodyColor: "#fff",
                displayColors: false,
            },
        },
    };

    return (
        <div className="w-full h-full relative">
            <Chart type="bar" data={data} options={options} />
        </div>
    );
}
