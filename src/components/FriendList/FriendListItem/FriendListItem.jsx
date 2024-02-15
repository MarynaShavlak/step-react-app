import PropTypes from 'prop-types';
import { FriendCard, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled'; 

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <FriendStatus online ={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="Friend's Avatar" />
      <FriendName>{ name}</FriendName>
    </FriendCard>
  );
  
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};