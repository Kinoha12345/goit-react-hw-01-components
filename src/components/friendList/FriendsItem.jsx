import s from './Friend.module.css';
import PropTypes from 'prop-types'; 

const FriendsItem = ({friends}) => {
    return (
        <>
        {friends.map(el => 
            <li className={s.item} key={el.id}>
            <span className={el.isOnline ? s.true : s.false}>{el.isOnline}</span>
            <img className={s.avatar} src={el.avatar} alt="User avatar" width="48" />
            <p className={s.name}>{el.name}</p>
          </li>
            )}
        </>)
}

FriendsItem.propTypes = {friends: PropTypes.arrayOf(
  PropTypes.shape(
   { avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }
  )
 )}
export default FriendsItem;