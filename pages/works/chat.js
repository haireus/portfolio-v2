import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="sutica">
    <Container>
      <Title>
        Chat App <Badge>8/2022 - now</Badge>
      </Title>
      <P>
        Work as fullstack developer for developing that project. I&apos;ve planned build a chat application for my own in my spare time!
      </P>
      <P>
       Using Nestjs and Reactjs
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NestJs, React Js, SocketIo, MySql</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
