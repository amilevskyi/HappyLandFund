import { Navbar, Container } from "react-bootstrap"

import { Logo } from '#components/Logo'
import { Nav } from '#components/Nav'

export const Header = () => (
  <Navbar bg="primary" sticky="top" expand="lg">
    <Container fluid>
      <Logo />
      <Nav />
    </Container>
  </Navbar>
)