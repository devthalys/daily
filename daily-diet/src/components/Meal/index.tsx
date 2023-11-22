import { Container, OpenButton, EnterIcom, Porcentage, PorcentageText, MealTypeStyleProps } from "./styles";

type Props = {
  type?: MealTypeStyleProps;
  name: string;
  porcentage: string;
}

export function Meal({ type = "PRIMARY", name, porcentage }: Props) {
  return (
    <Container
      type={type}
    >
      <OpenButton>
        <EnterIcom />
      </OpenButton>
      <Porcentage>
        {porcentage}
      </Porcentage>
      <PorcentageText>
        {name}
      </PorcentageText>
    </Container>
  )
}