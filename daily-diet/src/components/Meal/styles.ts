import { CaretRight } from "phosphor-react-native";
import styled from "styled-components/native";

export type MealTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: MealTypeStyleProps;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 100%;
  padding: 20px 16px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 8px;
  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  margin-bottom: 40px;
`;

export const OpenButton = styled.TouchableOpacity`
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