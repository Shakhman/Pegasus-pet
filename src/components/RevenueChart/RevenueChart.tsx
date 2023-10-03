import { useMemo, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { MonthlyRevenueChart } from './MonthlyRevenueChart';
import PopupSelect, { MenuItems } from '../ui/PopupSelect/PopupSelect';
import Title from '../ui/Title/Title';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


const items: MenuItems[] = [
  { text: 'This month', value: 'month' },
  { text: 'This year', value: 'year' },
];

const chartsDataMapping = {
  month: {
    income: 433.2,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [[10, 20, 2, 50, 100], [20, 200, 77, 32, 10]],
  },
  year: {
    income: 43.2,
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    data: [[101, 20, 23, 11, 100], [20, 33, 2, 32, 10]],
  }
};

type SelectedChartKey = keyof typeof chartsDataMapping;

export default function RevenueChart() {
  const [selectedChartKey, setSelectedChartKey] = useState<SelectedChartKey>('month');

  const chartData = useMemo(() => chartsDataMapping[selectedChartKey], [selectedChartKey]);

  return (
    <Box sx={{
      px: 4,
      py: 3,
      borderRadius: '20px',
      backgroundColor: (theme) => theme.palette.box[theme.palette.mode],
      height: '345px',
      overflowY: 'auto',
    }}>
      <Grid container rowSpacing={4}>
        <Grid item md={12}>
          <PopupSelect startIcon={<CalendarTodayOutlinedIcon />} items={items} handleSelectedMenuItem={(itemValue: SelectedChartKey) => setSelectedChartKey(itemValue) } />
        </Grid>
        <Grid item md={3}>
          <Title>${chartData.income}</Title>
        </Grid>
        <Grid item md={9}>
          <MonthlyRevenueChart data={chartData.data} labels={chartData.labels} />
        </Grid>
      </Grid>
    </Box>
  );
}
