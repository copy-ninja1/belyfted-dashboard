import React from "react";
import styles from "./featureCard.module.css";
import { DollarCircle } from "iconsax-reactjs";
import { FeatureCardProps } from "./featureCard.type";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  backgroundColor,
  onButtonClick,
}) => {
  return (
    <div
      className={styles.featureCard}
      style={{ backgroundColor: backgroundColor || "#f5f5f5" }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>

      <button className={styles.button} onClick={onButtonClick}>
        {buttonText} ↗
      </button>

      <DollarCircle
        className={styles.icon}
        size={55}
        color="#ffffff94"
        variant="Bold"
      />
    </div>
  );
};
