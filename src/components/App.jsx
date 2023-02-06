import user from "../data/user.json";
// import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"
import { Profile } from "./Profile/Profile";
// import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />

      {/* <Statistics 
      title={data.title}
      stats={data.stats} /> */}

      <FriendList
       friends={friends}
       />

      <TransactionHistory
      items={transactions}
      />
    </div>
  );
};
