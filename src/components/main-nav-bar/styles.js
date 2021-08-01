import styled from 'styled-components'
import { primaryText, secondaryBackground, secondaryBackgroundAccent } from '../../styles/colors'

export const MainNavContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${secondaryBackground};
  padding: 0.5rem;
  // box-shadow: 0px 0px 5px 1px ${secondaryBackgroundAccent};
  z-index: 10;
  position: relative;
`

export const MainNavTitle = styled.h1`
  color: ${primaryText};
  margin-top: 0;
`