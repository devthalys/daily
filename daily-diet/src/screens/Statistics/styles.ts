import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;

  border-radius: 20px;
  /* box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.05); */
`;

export const HeaderMeal = styled.View`
  height: 190px;
`;
