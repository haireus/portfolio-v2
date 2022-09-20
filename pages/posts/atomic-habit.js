import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const AtomicHabit = () => (
  <Layout title="Atomic habit">
   Don't have anything yet cause I still read that book!
  </Layout>
)

export default AtomicHabit
export { getServerSideProps } from '../../components/chakra'
