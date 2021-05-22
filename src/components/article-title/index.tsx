import { Container, Title, Date } from './styles'

type iProps = {
  title: string
  date?: string
}

export const ArticleTitle = ({ title, date }: iProps) => {
  return (
    <Container>
      <Title 
        mb={date ? "0" : null}
      >
        {title}
      </Title>
      {date && <Date>{date}</Date>}
    </Container>
  )
}