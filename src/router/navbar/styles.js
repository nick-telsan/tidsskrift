import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 10%;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const StyledLink = styled(Link)`
  margin-bottom: 0.5rem;
  &:visited {
    color: white;
`