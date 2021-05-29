import { Container, StyledLink } from './styles'

export const Navbar = () => {
  return (
    <Container>
      <StyledLink to="/">About</StyledLink>
      <h4>Recent Posts</h4>
      <StyledLink to="/2021-05-28">Wins and Losses</StyledLink>
      <StyledLink to="/2021-05-22">Struggles</StyledLink>
      <StyledLink to="/2021-05-14">Collections are Bad (for me)</StyledLink>
      <StyledLink to="/2021-05-07">Welcome to the Garage</StyledLink>
    </Container>
  )
}