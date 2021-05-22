import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: ${props => props.mb || '1rem'};
`

export const Date = styled.p`
  font-size: 1rem;
  margin-top: 0;
`