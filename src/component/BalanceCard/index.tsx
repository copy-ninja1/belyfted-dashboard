import React from "react";
import styles from "./balanceCard.module.css";
import { BalanceCardProps } from "./balanceCard.type";
import { ArrowRight } from "iconsax-reactjs";
import Link from "next/link";
import CurrencyDropDown from "./CurrencyDropDown";

export const BalanceCard: React.FC<BalanceCardProps> = ({
  currencySymbol,

  availableBalance,
  ledgerBalance,
  lockedBalance,
  rollingReserve,
}) => {
  return (
    <div className={styles.balanceCardContainer}>
      <div className={styles.fullWidth}>
        <div className={styles.balanceHeader}>
          <CurrencyDropDown />
        </div>
        <span className={styles.balanceLabel}>Available balance</span>
        <div className={styles.availableBalance}>
          <span className={styles.symbol}>{currencySymbol}</span>
          <span className={styles.amount}>{availableBalance}</span>
        </div>
      </div>

      <div className={styles["divider-vertical"]} />

      <div className={styles.fullWidth}>
        <div className={styles.subBalanceRow}>
          <span>Ledger Balance: {ledgerBalance}</span>
        </div>
        <div className={styles.subBalanceRow}>
          <span>Locked Balance: {lockedBalance}</span>
        </div>
        <div className={styles["divider-horizontal"]} />

        <div className={styles.subBalanceRow}>
          <span>
            <Link href="#" className={styles.ancore}>
              Rolling Reserve:
            </Link>{" "}
            {rollingReserve}{" "}
          </span>
          <span className={styles.arrow}>
            <ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};
