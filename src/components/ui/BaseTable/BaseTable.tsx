import { ReactNode } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, TableCellProps } from '@mui/material';

import { StyledBaseTableCell } from './BaseTable.styles';

export type BaseTableProps<TData> = {
  headers: {
    text: string,
    value: keyof TData,
  }[];
  items: { [K in keyof TData]: TData[K] }[];
  cellProps?: TableCellProps,
}

export default function BaseTable<TData>(props: BaseTableProps<TData>) {
  const { headers, items, cellProps = {} } = props;

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <StyledBaseTableCell {...cellProps} key={header.value as string}>
                {header.text}
              </StyledBaseTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) => (
            <TableRow
              key={index}
            >
              {Object.entries(row).map(([key, val]) => (
                <StyledBaseTableCell {...cellProps} component="th" scope="row" key={key}>
                  {val as ReactNode}
                </StyledBaseTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}