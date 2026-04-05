import styles from "./StatsCards.module.css";
import { Card } from "@/components/ui/Card/Card";
import { StatItem } from "@/types/models";
import React from "react";

export const StatsCards: React.FC<{ stats: StatItem[] }> = ({ stats }) => {
  return (
    <section className={styles.container}>
      {stats.map((stat) => {
        const isPositive = stat.change >= 0;

        return (
          <Card key={stat.id}>
            <Card.Header>
              <div className={styles.header}>
                <span>{stat.label}</span>
                <span>{stat.icon}</span>
              </div>
            </Card.Header>

            <Card.Body>
              <div className={styles.body}>
                <span className={styles.value}>{stat.value}</span>

                <span
                  className={
                    isPositive ? styles.positive : styles.negative
                  }
                >
                  {isPositive ? "↑" : "↓"} {Math.abs(stat.change)}%
                </span>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  );
};