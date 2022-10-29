import { Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import Image from 'next/image'
import HeaderPostDetail from '../../components/header-post-detail'
import Layout from '../../components/layouts/article'
import { TextTranslate } from '../../components/textTranslate'
import { CheckCircleIcon } from '@chakra-ui/icons'
import atomicPic from '../../public/images/atomic_habit/book_cover.jpeg'
import TextHeader, { TextSubHeader } from '../../components/textHeader'

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
      book deserves a space on everyone&apos;s bookshelf!
    </Text>

    <Text mt="10" fontWeight={'bold'} fontSize="3xl">
      “All big things come from small beginnings.”
    </Text>

    <Image src={atomicPic} alt="atomic-habit" layout="responsive" />

    <TextHeader title={'Chapter 1: The Surprising Power of Atomic Habits'} />

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

    <TextSubHeader title={'What progress is really like'} />

    <List spacing={3}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        An ice cube won’t melt aat 29, 30, 31 degrees. But at 32, it starts to
        melt = breakthrough. Breakthroughs are due to many previous actions
        built up. Bamboo spends 5 years growing underground, then shoots up
        “overnight”
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        To make a meaningful difference, habits have to persist through the
        Plateau of Latent Potential.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Work isn’t wasted, but stored. Success isn’t linear, there is a valley
        of disappointment then an upshoot.
      </ListItem>
    </List>

    <TextSubHeader title={'Forget about goals, focus on systems instead'} />
    <List spacing={3}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Goals = results you want. Systems = processes to lead to those results.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        With the right process, the score takes care of itself. “If you want
        better results, then forget about setting goals.”
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        There are 4 problems with goals:
        <List spacing={3} ml="5">
          <ListItem>
            <Text fontWeight={'bold'} display="inline">
              Winners and losers have the same goals:
            </Text>
            Don’t just look at successful people’s goals — many unsuccessful
            people have the same ones. It isn’t the goal that creates success,
            but the SYSTEM.
          </ListItem>
          <ListItem>
            <Text fontWeight={'bold'} display="inline">
              Achieving a goal = momentary change:
            </Text>
            You’ll always be chasing the same result if you treat a symptom
            without addressing the cause/system behind it. Goals are temporary.
            Results are not the problem. We have to change the systems that
            cause those results.
          </ListItem>
          <ListItem>
            <Text fontWeight={'bold'} display="inline">
              Goals restrict your happiness:
            </Text>
            If you think only achieving goals makes you happy, you will only be
            happy for short times — when you’ve achieved a goal. But your path
            in life won’t match your ideal path. You need to love the process
            &gt; the product so you can be happy as long as your system is
            running.
          </ListItem>
          <ListItem>
            <Text fontWeight={'bold'} display="inline">
              Goals conflict with long-term progress:
            </Text>
            Goal-orientation can create a yoyo effect. If you stop training
            after you hit the finish line, if you’re only motivated when you
            have a race to run, you have nothing to push yourself when you’ve
            achieved it. Build systems to continue playing the game — long-term
            thinking.
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> If you have trouble
        changing habits, the problem is your system, not you.
      </ListItem>
    </List>
  </Layout>
)

export default AtomicHabit
export { getServerSideProps } from '../../components/chakra'
