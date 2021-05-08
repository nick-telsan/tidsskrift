import { Link } from 'react-router-dom'
import { Container } from './styles'

export const Navbar = () => {
  return (
    <Container>
      <Link to="/">About</Link>
      <Link to="/2021-05-07">Welcome to the Garage</Link>
    </Container>
  )
}