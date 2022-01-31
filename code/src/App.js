import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './components/profile/user.json';
import percentage from './components/Statistics/data.json';
import friends from './components/friendList/friends.json';
import FriendList from  './components/friendList/FriendList'


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
    <>
    <Statistics
    label= 'Upload stats'
    percentage={percentage}
    />
    </>
    <>
    <FriendList 
    friends={friends}
    />
    </>
    </>
  );
}

export default App;
