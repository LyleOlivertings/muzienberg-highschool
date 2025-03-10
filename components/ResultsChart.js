'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ResultsChart = () => {
  const data = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'Pass Rate (%)',
      data: [98, 99, 100, 100, 99],
      backgroundColor: '#00418c',
      borderRadius: 4,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Matriculation Results Trend',
        font: { size: 18 }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 95,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`
        }
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ResultsChart;