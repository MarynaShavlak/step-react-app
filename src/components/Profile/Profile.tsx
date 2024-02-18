import {FC} from 'react';
import { UserProfile, UserDescription, ProfilePhoto, UserName, UserTag, UserLocation, Stats, Item, StatLabel, StatQuantity } from './Profile.styled';

export interface ProfileStatsType {
  followers: number,
  views: number,
  likes: number,
}

interface ProfileProps {
  avatar: string,
  tag: string,
  username: string,
  location: string,
  stats: ProfileStatsType,

}

export const Profile: FC<ProfileProps> =({username, tag, location, avatar, stats: { followers, views, likes }}) => {
  return (
<UserProfile>
  <UserDescription>
        <ProfilePhoto src={avatar} alt="User Photo"></ProfilePhoto>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
  </UserDescription>
  <Stats>
        <Item>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </Item>
        <Item>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </Item>
        <Item>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </Item>
  </Stats>
</UserProfile>
);
}

