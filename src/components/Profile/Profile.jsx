import PropTypes from 'prop-types';
import {UserProfile, UserDescription, ProfilePhoto, UserName, UserTag, UserLocation, Stats, Item, StatLabel, StatQuantity  } from './Profile.styled';


export const Profile =({username, tag, location, avatar, stats: { followers, views, likes }}) => {
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

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
}