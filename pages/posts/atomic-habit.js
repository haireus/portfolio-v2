import HeaderPostDetail from '../../components/header-post-detail'
import Layout from '../../components/layouts/article'

const AtomicHabit = () => (
  <Layout title="Atomic habit">
    <HeaderPostDetail />
    Dont have anything yet cause I still read that book!
  </Layout>
)

export default AtomicHabit
export { getServerSideProps } from '../../components/chakra'
