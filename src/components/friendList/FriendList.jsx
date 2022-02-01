import FriendsItem from './FriendsItem'
import s from './Friend.module.css';
import PropTypes from 'prop-types'; 
const FriendList = ({friends}) => {
return (<ul className={s.friendList}>
<FriendsItem 
friends={friends}
/>
</ul>)
}

FriendList.propTypes = {friends: PropTypes.arrayOf(
    PropTypes.shape(
     { avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }
    )
   )}
export default FriendList;