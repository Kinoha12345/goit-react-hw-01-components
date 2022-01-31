import FriendsItem from './FriendsItem'

const FriendList = ({friends}) => {
return (<ul class="friend-list">
<FriendsItem 
friends={friends}
/>
</ul>)
}

export default FriendList;