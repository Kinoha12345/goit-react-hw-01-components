import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from  './components/friendList/FriendList';
import TransactionHistory from './components/transactions/TransactionHistory';
import user from './user.json';
import percentage from './data.json';
import friends from './friends.json';
import items from './transactions.json';



function App() {
  return (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics
    label= 'Upload stats'
    percentage={percentage}
    />
    <FriendList 
    friends={friends}
    />
    <TransactionHistory 
    items={items}
    />
    </>
  );
}

export default App;
