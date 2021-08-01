import styled from 'styled-components'
import { articleBackground, primaryText, visitedLink } from '../styles/colors'

export const ArticleContainer = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  margin-right: 1rem;
  background-color: ${articleBackground};
  color: ${primaryText};
  border-radius: 15px;
  max-width: 80rem;
`

export const ArticleStyledTitle = styled.h1`
  color: ${primaryText};
  margin-top: 0;
  margin-bottom: ${props => props.date ? 0 : null};
`

export const ArticleAchor = styled.a`
  color: ${primaryText};
  &:visited {
    color: ${visitedLink};
`