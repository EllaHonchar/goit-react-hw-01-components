import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

export function FriendList({friends}) {
    return  (
    <ul className="friend-list">
   
        {friends.map((friend) => {
            return <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline} />
        })}

 </ul>
    )
}

FriendList.propTypes  = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id:PropTypes.number.isRequired,
        }))
}