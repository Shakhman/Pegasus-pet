import { Grid, Typography } from '@mui/material';

import IncomesCard, { IncomesCardProps } from '../IncomesCard/IncomesCard';
import StatsIcon from '@/components/Icons/StatsIcon';
import DollarIcon from '@/components/Icons/DollarIcon';
import ProjectsIcon from '@/components/Icons/ProjectsIcon';
import NewTasksIcon from '@/components/Icons/NewTasksIcon';
import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';

export default function IncomesCardList() {
  const successColor = useCurrentThemeColor('success');

  const list: IncomesCardProps[] = [{
    title: 'Earning',
    text: '$350.4',
    Icon: StatsIcon,
    variant: 'solid'
  }, {
    title: 'Spend this month',
    text: '$642.39',
    Icon: DollarIcon,
    variant: 'solid'
  }, {
    title: 'Sales',
    text: '$574.34',
    variant: 'solid',
    infoText: (<><Typography component="span" variant='body2' sx={{
      color: successColor,
      fontWeight: 700,
    }}>+23%</Typography> since last month</>)
  }, {
    title: 'New Tasks',
    text: '154',
    Icon: NewTasksIcon,
    variant: 'gradient'
  }, {
    title: 'Total Projects',
    text: '2935',
    Icon: ProjectsIcon,
    variant: 'solid'
  }];

  return (
    <Grid className='incomes-card-list' container spacing={2}>
      {list.map((props, key) => {
        return (
          <Grid key={key} item xs><IncomesCard {...props}></IncomesCard></Grid>
        );
      })}
    </Grid>
  );
}
