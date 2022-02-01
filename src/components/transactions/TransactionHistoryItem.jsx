import s from './Transaction.module.css';
import PropTypes from 'prop-types'; 
const TransactionHistoryItem = ({items}) => {
     return (
         <>
         {items.map(el =>
        <tr className={s.tr} key={el.id}>
            <td className={s.td1}>{el.type}</td>
            <td className={s.td}>{el.amount}</td>
            <td className={s.td}>{el.currency}</td>
        </tr>
            )}
         </>
     )
 }
 TransactionHistoryItem.propTypes = {items: PropTypes.arrayOf(
    PropTypes.shape(
     { id: PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired
    }
  
    )
  )}
 export default TransactionHistoryItem;