import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  gap: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${props => props.theme.colors.darkGrey};
  border: ${props => `1px solid ${props.theme.colors.darkGrey}`};
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  
  `;

export const FriendStatus = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => (props.online ? '#5de100': '#ff0000')};
  `;

  export const FriendAvatar = styled.img`
  height: 80px;
  padding: 10px;
 
  width: auto;
    border: ${props => `1px solid ${props.theme.colors.darkGrey}`}; 
  `;

  export const FriendName = styled.p`font-size: 32px;`;