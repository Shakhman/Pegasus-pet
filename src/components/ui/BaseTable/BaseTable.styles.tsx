import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


export const StyledBaseTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.secondaryLight[theme.palette.mode],
  },
  [`&.${tableCellClasses.body}`]: {
    ...theme.typography.body1,
  },
}));