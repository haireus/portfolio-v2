import { Text } from '@chakra-ui/react'
import HeaderPostDetail from '../../components/header-post-detail'
import Layout from '../../components/layouts/article'

const AtomicHabit = () => (
  <Layout title="Atomic habit">
    <HeaderPostDetail />
    <Text>
    Do you ever feel like you just floating through life... but not actually getting closer to the person that you want to be. 
    It usually happens around New years, you imagine all the bad habits your going to break free from, and all the good habits you will begin. 
    &quot;This time will be different	&quot;, you say to yourself. 	&quot;This time I AM going to do the things that I say I will	&quot;. Only to end up back where you began shortly after and no closer to what you had envisaged(hình dung).
    So the question is, how do you become the person you dream of becomming? How do you break free from bad habits and make the habits you desire easier and automatic?
    Atomic Habits by James Clear answers all these questions. This book deserves a space on everyone&apos;s bookshelf! Let&apos;s jump into it.
    </Text>
 

  </Layout>
)

export default AtomicHabit
export { getServerSideProps } from '../../components/chakra'
