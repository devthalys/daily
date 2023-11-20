import { Container } from "./styles";

import { Header } from "@components/Header";
import { Meal } from "@components/Meal";

export function Home() {
  return (
    <Container>
      <Header/>
      <Meal/>
    </Container>
  )
}