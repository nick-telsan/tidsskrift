import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { primaryText, secondaryBackground, secondaryBackgroundAccent, visitedLink } from '../../styles/colors'

export const ArticlesBarContainer = styled.div`
  height: 70vh;
  width: 10rem;
  background-color: ${secondaryBackground};
  padding: 0.5rem;
  // box-shadow: 0px 0px 5px 1px ${secondaryBackgroundAccent};
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 15px 0;
`

export const ArticleLink = styled(Link)`
  margin-bottom: 1rem;
  color: ${primaryText};
  text-decoration: none;
  text-empahsis: bold;

  &:visited {
    color: ${visitedLink};
`

export const ArticleHeading = styled.h4`
  color: ${primaryText};
  margin-top: 0.5rem;
  border-bottom: 2px solid white;
`