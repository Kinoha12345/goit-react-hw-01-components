import s from './Statistics.module.css'
import PropTypes from 'prop-types'; 
const StatiscticsItem = ({percentage}) => {
    return (
    <>
    {percentage.map(el => 
        <li className={s.item} key={el.id}>
        <span className={s.label}>{el.label}</span>
        <span className={s.percentage}>{el.percentage}%</span>
      </li>
    )}
    </>)
}

StatiscticsItem.propTypes = { 
  percentage: PropTypes.arrayOf(
    PropTypes.shape({
     id:  PropTypes.string.isRequired,
     label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired
    })
  ),
  label: PropTypes.string
}
export default StatiscticsItem;