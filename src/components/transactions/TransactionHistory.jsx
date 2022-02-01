import TransactionHistoryItem from './TransactionHistoryItem' 
import s from './Transaction.module.css'
import PropTypes from 'prop-types'; 

const TransactionHistory = ({items}) => {
    return (
    <table className={s.transactionHistory}>
    <thead className={s.thead}>
      <tr className={s.trStats}>
        <th className={s.stats}>Type</th>
        <th className={s.stats}>Amount</th>
        <th className={s.stats}>Currency</th>
      </tr>
    </thead>
  
    <tbody className={s.tbody}>
    <TransactionHistoryItem 
    items={items}
    />
    </tbody>
  </table>)
}

TransactionHistory.propTypes = {items: PropTypes.arrayOf(
  PropTypes.shape(
   { id: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  }

  )
)}

export default TransactionHistory;