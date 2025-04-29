import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { themeColor } from "@/utils/constant";
import styles from "./index.module.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface MonthlyPayoutChartProps {
  data: number[];
}

const MonthlyPayoutChart: React.FC<MonthlyPayoutChartProps> = ({ data }) => {
  const opttions: ApexOptions = {
    chart: {
      type: "bar",

      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        horizontal: false,
        borderRadiusApplication: "end",
      },
    },
    colors: [themeColor.primary],
    // stroke: { lineCap: "round" },

    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { height: 200 },
          xaxis: { labels: { style: { fontSize: "10px" } } },
        },
      },
    ],
  };

  const series = [{ name: "Payout", data }];

  return (
    <div className={styles.container}>
      <ReactApexChart
        options={opttions}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default MonthlyPayoutChart;
