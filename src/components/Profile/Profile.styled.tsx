import styled from '@emotion/styled';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding-top: 16px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
    border: ${props => `1px solid ${props.theme.colors.darkGrey}`};

`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 12px;
`;

export const ProfilePhoto = styled.img`
  display: block;
  width: 300px;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: 800;
  margin: 0;
`;

export const UserTag = styled.p`
  font-size: 16px;
  font-weight: 200;
  margin: 0;
`;

export const UserLocation = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  list-style: none;
  background-color: ${props => props.theme.colors.lightGrey};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 28px;
  padding-bottom: 28px;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
`;

export const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 200;
  margin-right: 5px;
`;

export const StatQuantity = styled.span`
  font-size: 22px;
  font-weight: 800;
`;
