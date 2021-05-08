import { Container } from './styles'

type iProps = {
  children: React.ReactNode
}

export const ArticleContainer = ({children}: iProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

