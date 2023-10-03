import { LinearProgress, LinearProgressProps } from '@mui/material';
import BaseTable, { BaseTableProps } from '@/components/ui/BaseTable/BaseTable';

type UserData = {
  name: string,
  age: JSX.Element,
}

export default function UserTable() {
  const AgeProgress = (props: LinearProgressProps) => <LinearProgress {...props} variant="determinate" />;

  const tableProps: BaseTableProps<UserData> = {
    headers: [{ text: 'Name', value: 'name' }, { text: 'Age', value: 'age' }],
    items: [{ name: 'Name 1', age: <AgeProgress value={22} /> }, { name: 'Name 2', age: <AgeProgress value={33}/> }],
    cellProps: {
      align: 'left'
    }
  };

  return (
    <BaseTable<UserData> {...tableProps}></BaseTable>
  );
}