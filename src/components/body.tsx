import { Title, Heading, Subheading, Text, Article } from './article'

export const Body = () => {
  return (
    <Article>
      <Title>Welcome to n.evergrown</Title>
      <Text>
        Last year, I started Manticore's Garage, which was a resounding
        semi-success. I still think the idea is valid, but I want to do some
        thigns differently this year.
      </Text>
      <Heading>This is a heading</Heading>
      <Subheading>This is a subheading</Subheading>
    </Article>
  )
}
