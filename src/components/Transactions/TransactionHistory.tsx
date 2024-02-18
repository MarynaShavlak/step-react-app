import React, { FC } from 'react';

import { Table, TableHeader, TableBody, ColumnHeading, TableRow, TableCell } from './TransactionHistory.styled';


interface Transaction {
  id: string,
  type: string,
  amount: string,
  currency: string,
}

interface TransactionHistoryProps {
items: Transaction[],
}
export const TransactionHistory: FC<TransactionHistoryProps > = ({items}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <ColumnHeading>Type</ColumnHeading>
          <ColumnHeading>Amount</ColumnHeading>
          <ColumnHeading>Currency</ColumnHeading>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key ={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


