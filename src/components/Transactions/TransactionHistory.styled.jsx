import styled from '@emotion/styled';
import { setRandomColor } from '../../utils/setRandomColor';

export const Table = styled.table`
  margin: 0;
  padding: 0;
  text-align: center;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  color: ${props => props.theme.colors.darkGrey};
  overflow: hidden;
  border-radius: 10px;
`;

export const TableHeader = styled.thead`
  text-transform: uppercase;
  font-size: 28px;
  background-color: ${props => setRandomColor};
  color: ${props => props.theme.colors.white};
`;

export const TableBody = styled.tbody`
  color: ${props => props.theme.colors.darkGrey};
  background-color: ${props => props.theme.colors.white};
`;

export const ColumnHeading = styled.th`
  height: 40px;
`;

export const TableRow = styled.tr`
  font-weight: 500;
  font-size: 24px;
  height: 40px;
`;

export const TableCell = styled.td`
  text-transform: capitalize;
  width: calc(100% / 3);
`;
