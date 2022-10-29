import { Text } from '@chakra-ui/react'
import HeaderPostDetail from '../../components/header-post-detail'
import Layout from '../../components/layouts/article'

const AtomicHabit = () => (
  <Layout title="The psychology of money">
    <HeaderPostDetail />
    <Text>
      <Text fontWeight={'bold'}>
        Lesson 1: Everyone has different attitudes towards money and because the
        way that those attitudes affects the way that they earn and spend their
        money we shouldn&apos;t be too quick to judge people based on what they
        do with their own money.
      </Text>
      So let&apos;s think about people behavior when it comes to investing in
      stocks for example, if you were born in the 1970s, the index fund that
      track the top 500 biggest companies in the US increased by 10 times its
      starting amount between age 13 and age 30 for you. But if you were born
      just 20 years earlier the market basically went no where.
    </Text>

    <Text mt={30}>
      <Text fontWeight={'bold'}>
        Lesson 2: Don&apos;t underestimate the importance of luck.
      </Text>
      Basically any outcome that we&apos;re going for whether it&apos; making
      money or anything else in life is some combination of luck and skill and
      unfair advantages. If we take Bill Gate for example, now he&apos;s
      obviously super talented but he was also pretty lucky to get to go to one
      of the very few high schools in the US that actually owned a computer. And
      that what helped him start messing around with coding and start working on
      the company that ultimately became microsoft.
    </Text>

    <Text m="10" fontWeight={'bold'} fontSize="20">
      I have not finished the books yet... I will comback to edit this later...
    </Text>
  </Layout>
)

export default AtomicHabit
export { getServerSideProps } from '../../components/chakra'
