import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartOptions,
  ChartData
} from 'chart.js';
import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

type Props = {
  labels: string[],
  data: number[][],
}

export function MonthlyRevenueChart(props: Props) {
  const { labels, data }  = props;

  const chartColor = useCurrentThemeColor('secondaryLight');

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {},
    scales: {
      x: {
        display: true,
        ticks: {
          color: chartColor,
          callback(_, index) {
            return labels[index].toUpperCase();
          },
          font: {
            family: 'DM Sans',
            size: 12,
            lineHeight: '20px',
            weight: 'normal',
          },
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    }
  };

  const chartData = useMemo<ChartData<'line'>>(() => {
    return { 
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: data[0],
          borderColor: '#4318FF',
          backgroundColor: '#4318FF',
          pointRadius: 2,
          pointHoverRadius: 10,
          borderWidth: 4,
          tension: 0.4,
        },
        {
          label: 'Dataset 2',
          data: data[1],
          borderColor: '#6AD2FF',
          backgroundColor: '#6AD2FF',
          pointRadius: 1,
          pointHoverRadius: 10,
          borderWidth: 4,
          tension: 0.4,
        },
      ] };
  }, [data]);

  return <Line options={options} data={chartData} />;
}
