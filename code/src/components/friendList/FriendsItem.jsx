const FriendsItem = ({friends}) => {
    return (
        <>
        {friends.map(el => 
            <li class="item" key={el.id}>
            <span class="status">{el.isOnline}</span>
            <img class="avatar" src={el.avatar} alt="User avatar" width="48" />
            <p class="name">{el.name}</p>
          </li>
            )}
        </>)
}

export default FriendsItem;