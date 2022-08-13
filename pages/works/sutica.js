import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="sutica">
    <Container>
      <Title>
        Sutica <Badge>2021 - 2022</Badge>
      </Title>
      <P>
        Work as backend developer and a project manager. I&apos;ve planned and
        estmated tasks for teams member, control scope and member into the right
        track.
      </P>
      <P>
        The CSS get from customer for project is 100/100 which mean they have
        been acknowledged our works.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android/Web cms</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React native, NestJs, React Js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sutica1.png" alt="sutica" />

      <WorkImage src="/images/works/sutica2.png" alt="sutica" />

      <WorkImage src="/images/works/sutica3.png" alt="sutica" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
