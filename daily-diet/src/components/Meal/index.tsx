import { Container, EnterButton, EnterIcom, Porcentage, PorcentageText } from "./styles";

type Props = {
  name: string;
  porcentage: string;
}

export function Meal({ name, porcentage }: Props) {
  return (
    <Container>
      <EnterButton>
        <EnterIcom />
      </EnterButton>
      <Porcentage>
        {porcentage}
      </Porcentage>
      <PorcentageText>
        {name}
      </PorcentageText>
    </Container>
  )
}