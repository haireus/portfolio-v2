import { Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import Image from 'next/image'
import HeaderPostDetail from '../../components/header-post-detail'
import Layout from '../../components/layouts/article'
import { TextTranslate } from '../../components/textTranslate'
import { CheckCircleIcon } from '@chakra-ui/icons'
import atomicPic from '../../public/images/atomic_habit/book_cover.jpeg'

const AtomicHabit = () => (
  <Layout title="Atomic habit">
    <HeaderPostDetail />
    <Text mt="20">
      Do you ever feel like you just floating through life... but not actually
      getting closer to the person that you want to be. It usually happens
      around New years, you imagine all the bad habits your going to break free
      from, and all the good habits you will begin. &quot;This time will be
      different &quot;, you say to yourself. &quot;This time I AM going to do
      the things that I say I will &quot;. Only to end up back where you began
      shortly after and no closer to what you had{' '}
      <TextTranslate text={'envisaged'} textTranslate="hình dung" />. So the
      question is, how do you become the person you dream of becomming? How do
      you break free from bad habits and make the habits you desire easier and
      automatic? Atomic Habits by James Clear answers all these questions. This
      book deserves a space on everyone&apos;s bookshelf! Let&apos;s jump into
      it.
    </Text>

    <Text mt="10" fontWeight={'bold'} fontSize="3xl">
      “All big things come from small beginnings.”
    </Text>

    <Image src={atomicPic} alt="atomic-habit" layout="responsive" />

    <Text mt="10" mb="10" fontWeight={'bold'} fontSize="3xl">
      Chapter 1: The Surprising Power of Atomic Habits
    </Text>

    <List spacing={3}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        In 2003, British Cycling changed when Dave Brailsford decided to
        aggregate marginial gains, breaking down everything about riding a bike
        intending to improve it all by 1% (including redesigning more
        comfortable seats, rubbing alcohol on tires for better grip, etc)
        <Text mt="5" mb="5" ml="5" fontWeight={'semibold'}>
          It is so easy to overestimate the importance of one defining moment
          and underestimate the value of making small improvements on a daily
          basis. Too often, we convince ourselves that massive success requires
          massive action.
        </Text>
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Habits multiply like money with compound interest. It takes 2–5–10 years
        to see the value or cost of habits
        <Text mt="5" mb="5" ml="5" fontWeight={'semibold'}>
          It doesn’t matter how successful or unsuccessful you are right now.
          What matters is whether your habits are putting you on the path toward
          success…you get what you repeat.
        </Text>
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Time multiplies whatever you feed it.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Knowledge compounds: reading doesn’t teach you something new but gives
        you different ways to think about old ideas.
      </ListItem>
    </List>
  </Layout>
)

export default AtomicHabit
export { getServerSideProps } from '../../components/chakra'
