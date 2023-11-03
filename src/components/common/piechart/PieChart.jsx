import 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react';
// import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  console.log(data);
  return <Pie data={data} />;
};

export default PieChart;
