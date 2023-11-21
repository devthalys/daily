import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface Props {
  type: ButtonTypeStyleProps;
}

interface IconProps extends Props {
  name: keyof typeof MaterialIcons.glyphMap;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
  border-radius: 6px;
  border: ${({ theme, type }) => type === 'PRIMARY' ? 'none' : `1px solid ${theme.COLORS.GRAY_700}`};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))``;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;