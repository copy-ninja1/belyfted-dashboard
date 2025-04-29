"use client";
import { BalanceCard } from "@/component/BalanceCard";
import { FeatureCard } from "@/component/FeatureCard";
import { UserTable } from "@/component/FundsTable";
import MonthlyPayoutChart from "@/component/MonthlyPayoutChart";
import TransactionSummary from "@/component/TransactionSummary";
import { themeColor } from "@/utils/constant";
import style from "./page.module.css";

export default function Home() {
  const monthlyData = [
    75000, 90000, 58000, 45000, 42000, 18000, 61000, 38000, 78000, 80000, 77000,
    43000,
  ];
  const payin = 12200;
  const payout = 5600;
  const total = payin + payout;

  return (
    <div>
      <div className={style.balanceWrapper}>
        <BalanceCard
          currencySymbol="$"
          availableBalance="32,000.09"
          ledgerBalance="$200"
          lockedBalance="$189"
          rollingReserve="$400"
        />

        <FeatureCard
          title="Make Payout🚀"
          description="This works like a virtual bank where you use your car..."
          buttonText="Get Started"
          backgroundColor="#F39C124A"
          onButtonClick={() => alert("Make Payout clicked")}
        />

        <FeatureCard
          title="Request Virtual Account"
          description="This works like a virtual bank where you use your car..."
          buttonText="Get Started"
          backgroundColor={themeColor.tertiary}
          onButtonClick={() => alert("Request Virtual Account clicked")}
        />
      </div>
      <div className={style.grid}>
        <div className={style.chartBox}>
          <MonthlyPayoutChart data={monthlyData} />
        </div>
        <div className={style.summaryBox}>
          <TransactionSummary total={total} payin={payin} payout={payout} />
        </div>
      </div>

      <UserTable />
    </div>
  );
}
