import styled from '@emotion/styled';
import { setRandomColor } from '../../utils';

export const StatisticBoard = styled.section`
  margin: 0;
  padding-top: 20px;
  border: ${props => `1px solid ${props.theme.colors.darkGrey}`};
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  overflow: hidden;
`;

export const StatisticsTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;
  gap: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => setRandomColor};
`;

export const StatLabel = styled.span`
  font-size: 22px;
`;

export const StatPercentage = styled.span`
  font-size: 28px;
  font-weight: 800;
`;
