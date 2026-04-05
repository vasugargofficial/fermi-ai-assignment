import styles from "./StatsContainer.module.css";
import { Card } from "@/components/ui/Card/Card";
import { StatItem } from "./types";
import React from "react";

const stats: StatItem[] = [
  {
    id: "1",
    label: "Revenue",
    value: "$24,500",
    change: 12.5,
    icon: "💰",
  },
  {
    id: "2",
    label: "Users",
    value: "1,240",
    change: -3.2,
    icon: "👥",
  },
  {
    id: "3",
    label: "Orders",
    value: "320",
    change: 5.1,
    icon: "📦",
  },
  {
    id: "4",
    label: "Conversion",
    value: "3.2%",
    change: 1.8,
    icon: "📈",
  },
];

export const StatsContainer: React.FC<{}> = () => {
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