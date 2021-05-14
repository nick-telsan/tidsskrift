import { Container, StyledLink } from './styles'

export const Navbar = () => {
  return (
    <Container>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/2021-05-07">Welcome to the Garage</StyledLink>
      <StyledLink to="/2021-05-14">Collections are Bad (for me)</StyledLink>
    </Container>
  )
}