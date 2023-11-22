import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, Title, ButtonTypeStyleProps, TextButton } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  text?: string;
  type?: ButtonTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function Button({ text, title, icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <>
      <TextButton>
        {text}
      </TextButton>
      <Container
        {...rest}
        type={type}>
        <Icon
          name={icon}
          type={type} 
          />
        <Title
          type={type}>
          {title}
        </Title>
      </Container>
    </>
  )
}