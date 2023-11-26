import { Meal } from "@components/Meal";
import { Container, HeaderMeal } from "./styles";
import { Button } from "@components/Button";

export function Statistics() {
  return (
    <>
      <HeaderMeal>
        <Meal
          porcentage="90,86%"
          name="das refeições dentro da dieta"
        />
      </HeaderMeal>
      <Container>
        <Button
          text="Refeições"
          title="Nova refeição"
          icon="add"
        />
      </Container>
    </>
  )
}
