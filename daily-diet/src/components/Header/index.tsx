import { Container, Logo, Profile } from './styles';

import logo from '@assets/logo.png';
import profile from '@assets/profile.png';

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Profile source={profile} />
    </Container>
  )
}