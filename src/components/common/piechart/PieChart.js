import React from "react";
import { useEffect } from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);
const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Yellow", "Blue"],
};

function PieChart() {
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((data) => {
          console.log("data", data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="piechart" style={{ width: "30%", height: "30%" }}>
      <Doughnut data={data} />
    </div>
  );
}

export default PieChart;
