import StatiscticsItem from './StatisticsItem';
import s from './Statistics.module.css'
import PropTypes from 'prop-types'; 
const Statistics = ({percentage}) => {
    return (
        <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>
  <ul className={s.statList}>
    <StatiscticsItem
    percentage={percentage}
    />
  </ul>
</section>
     );
}

Statistics.propTypes = { 
  percentage: PropTypes.arrayOf(
    PropTypes.shape({
     id:  PropTypes.string.isRequired,
     label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired
    })
  ),
  label: PropTypes.string
}
export default Statistics;