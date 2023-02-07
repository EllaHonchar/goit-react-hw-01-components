import PropTypes from 'prop-types';
import s from '../FriendList/FriendStyle.module.scss';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
