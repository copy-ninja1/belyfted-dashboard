import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

import styles from "./index.module.css";
import { themeColor } from "@/utils/constant";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface TransactionSummaryProps {
  total: number;
  payin: number;
  payout: number;
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({
  total,
  payin,
  payout,
}) => {
  const series = [payin, payout];

  const percentPayin = Math.round((payin / (payin + payout)) * 100);
  const percentPayout = 100 - percentPayin;

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: false },
      toolbar: { show: false },
      animations: { enabled: true },
    },
    labels: ["Payin", "Payout"],
    colors: [themeColor.primary, themeColor.secondary],
    stroke: { width: 8, lineCap: "round", curve: "stepline" },
    legend: { show: false },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80%",
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
            },

            total: {
              show: true,
              label: "Total",
              fontSize: "14px",
              fontFamily: undefined,
              color: "#888",
              formatter: () => `$${total.toLocaleString()}`,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { width: 200, height: 260 },
          plotOptions: {
            pie: {
              donut: { size: "70%" },
            },
          },
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.chartTitle}>Transcation Summary</div>
      <div className={styles.chart}>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={200}
        />
      </div>

      <div className={styles.breakdown}>
        <div className={`${styles.flex} ${styles["justify-between"]}`}>
          <div className={styles.flex}>
            <span className={styles.payinDot}>{percentPayin}%</span>
            <span>Payin</span>
          </div>
          <strong>${payin.toLocaleString()}</strong>
        </div>
        <div className={`${styles.flex} ${styles["justify-between"]}`}>
          <div className={styles.flex}>
            <span className={styles.payoutDot}>{percentPayout}%</span>
            <span>Payout</span>
          </div>
          <strong>${payout.toLocaleString()}</strong>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
