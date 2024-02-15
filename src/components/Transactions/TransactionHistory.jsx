import PropTypes from 'prop-types';
import { Table, TableHeader,TableBody, ColumnHeading, TableRow, TableCell } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
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


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired))
};