import { Container, EnterButton, EnterIcom ,Porcentage, PorcentageText } from "./styles";

export function Meal() {
  return (
    <Container>
      <EnterButton>
        <EnterIcom/>
      </EnterButton>
      <Porcentage>
        90,86%
      </Porcentage>
      <PorcentageText>
        das refeições dentro da dieta
      </PorcentageText>
    </Container>
  )
}