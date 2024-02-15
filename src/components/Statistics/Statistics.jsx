import PropTypes from 'prop-types';
import { StatisticBoard, StatisticsTitle, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styled';


export const Statistics = ({title, stats}) => {
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


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};