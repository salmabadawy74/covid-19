import React, { useState, useEffect } from "react";
import { fetchDailyDate } from "../api/index.js";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

export default function Chart({
  data: { confirmed, recovered, deaths },
  country,
}) {
  const [dailyData, setDailyDate] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyDate(await fetchDailyDate());
    };
    fetchApi();
  });
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "(255,0,0,.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
}
