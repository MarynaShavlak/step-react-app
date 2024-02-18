import {FC} from 'react';

import {  FriendListItem} from './FriendListItem';
import { FriendBoard } from './FriendList.styled';

interface FriendItemProps {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}


interface FriendListProps {
 friends: FriendItemProps[],
}


export const FriendList: FC<FriendListProps > = ({ friends }) => {
  
  return (
    
    <FriendBoard>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={ avatar}
          name={ name}
          isOnline ={ isOnline} />
      ))}
    </FriendBoard>
  );
 
}

