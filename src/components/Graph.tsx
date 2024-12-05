import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

interface PerformanceComparisonCardProps {
  percentile: number;
}

const PerformanceComparisonCard: React.FC<PerformanceComparisonCardProps> = ({ percentile }) => {
  const data = {
    labels: ["0%", "25%", "50%", "75%", "100%"], // X-axis labels
    datasets: [
      {
        label: "Number of Students",
        data: [5, 10, 50, 25, 4], // Y-axis values
        borderColor: "#6366F1", // Tailwind Indigo-500
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        pointBackgroundColor: "#6366F1",
        pointBorderColor: "#FFFFFF",
        pointHoverBackgroundColor: "#4F46E5",
        pointHoverBorderColor: "#FFFFFF",
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "#FFFFFF",
        borderColor: "#6366F1",
        borderWidth: 1,
        titleColor: "#1F2937", // Tailwind Gray-800
        bodyColor: "#4B5563", // Tailwind Gray-600
        cornerRadius: 8,
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "category",
        grid: {
          color: "#E5E7EB", // Tailwind Gray-200
        },
        ticks: {
          color: "#6B7280", // Tailwind Gray-500
          font: {
            size: 14,
          },
        },
      },
      y: {
        type: "linear",
        grid: {
          color: "#E5E7EB", // Tailwind Gray-200
        },
        ticks: {
          color: "#6B7280", // Tailwind Gray-500
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <Card className="border-none shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100">
      <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
        <CardTitle className="text-xl sm:text-3xl font-semibold">
          Performance Comparison
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <p className="text-sm sm:text-lg text-gray-800 mb-4 sm:mb-6">
          You scored in the <span className="font-bold text-indigo-600">{percentile}th percentile</span>,
          which is below the average of <span className="font-bold text-indigo-600">72%</span> for all test takers.
        </p>
        <div className="h-48 sm:h-72 bg-white shadow-md rounded-lg p-2 sm:p-4">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceComparisonCard;
