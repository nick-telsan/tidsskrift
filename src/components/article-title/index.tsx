import { Container } from './styles'

type iProps = {
  title: string
}

export const ArticleTitle = ({ title }: iProps) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  )
}