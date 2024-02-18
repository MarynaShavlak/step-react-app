import React, { FC } from 'react';
import styled from '@emotion/styled'

import {
  FriendCard,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

interface FriendItemProps  {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}


export const FriendListItem: FC<Partial<FriendItemProps>>  = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <FriendStatus online ={isOnline ? true : false}/>
      <FriendAvatar src={avatar} alt="Friend's Avatar" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

