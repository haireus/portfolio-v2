import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shokunin">
    <Container>
      <Title>
        Shokunin <Badge>2021 to now-</Badge>
      </Title>
      <P>
        A system management used by multiple company to manage their
        construction site and staff include time off, overtime, task, salary,
        payroll...
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bookingoff.page">
            https://bookingoff.page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS,Express, React, React Native</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/shokunin3.png" alt="shokunin" />
      <WorkImage src="/images/works/shokunin2.png" alt="shokunin" />
      <WorkImage src="/images/works/shokunin1.png" alt="shokunin" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
