import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

import { Header } from "@components/Header";
import { Meal } from "@components/Meal";
import { Button } from "@components/Button";

export function Home() {
  const navigation = useNavigation();

  function handleNewMeal(){
    navigation.navigate('statistics')
  }

  return (
    <Container>
      <Header />
      <Meal
        name="das refeições dentro da dieta"
        porcentage="90,86%"
      />
      <Button
        text="Refeições"
        title="Nova refeição"
        icon="add"
        onPress={handleNewMeal}
      />
    </Container>
  )
}