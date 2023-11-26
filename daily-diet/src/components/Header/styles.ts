import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0px 30px 0px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
  `;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
`;