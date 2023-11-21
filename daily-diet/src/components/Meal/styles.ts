import { CaretRight } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  width: 100%;
  padding: 20px 16px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const EnterButton = styled.TouchableOpacity`
  /* flex: 1; */
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const EnterIcom = styled(CaretRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const Porcentage = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 32px;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
  `;

export const PorcentageText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;

  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;