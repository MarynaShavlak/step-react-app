import {FC} from 'react';
import { StatisticBoard, StatisticsTitle, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styled';

interface StatisticsStatsType {
   id: string,
  label: string,
  percentage: number,
 }

interface StatistcsProps {
  title?: string,
  stats: StatisticsStatsType[],
}


export const Statistics: FC<StatistcsProps> = ({title, stats}) => {
  return (
    <StatisticBoard>
      {title && <StatisticsTitle>{ title}</StatisticsTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <StatLabel>{label}</StatLabel>
          <StatPercentage>{percentage}</StatPercentage>
        </StatItem>
        ))}
      </StatList>

  </StatisticBoard>
)
}


