import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, ButtonTypeStyleProps } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function Button({ title, icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      {...rest}
      type={type}>
      <Icon
        name={icon}
        type={type} />
      <Title
        type={type}>
        {title}
      </Title>
    </Container>
  )
}