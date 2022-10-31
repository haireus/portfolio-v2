import { Text, List, ListItem, ListIcon, UnorderedList } from '@chakra-ui/react'
import Image from 'next/image'
import HeaderPostDetail from '../../components/header-post-detail'
import Layout from '../../components/layouts/article'
import { TextTranslate } from '../../components/textTranslate'
import { CheckCircleIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import atomicPic from '../../public/images/atomic_habit/book_cover.jpeg'
import fourStepHabitPic from '../../public/images/atomic_habit/four-stages-of-the-habit-loop-building-good-habits.png'
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
    <Image
      src={atomicPic}
      alt="atomic-habit"
      layout="responsive"
      placeholder="blur"
      loading="lazy"
    />
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
    <TextSubHeader title={'Summary'} />
    <List spacing={3}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> Habits = compound
        interest. 1% improvement every day = huge benefit in the end.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> Habits are a double
        edged sword working for or against you.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> Small changes seem
        to make no difference until you cross a{' '}
        <TextTranslate
          text={'critical threshold'}
          textTranslate="ngưỡng tới hạn"
        />{' '}
        .
      </ListItem>
    </List>
    {/* CHAPTER 2 */}
    <TextHeader
      title={'Chapter 2: How Your Habits Shape Your Identity (And Vice Versa)'}
    />
    <List spacing={3}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> Changing habits is
        hard because:
        <UnorderedList spacing={3} ml="5">
          <ListItem fontWeight={'bold'} ml="5">
            We try to change the wrong thing
          </ListItem>
          <ListItem fontWeight={'bold'} ml="5">
            We try to change habits in the wrong way.{' '}
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> There are 3 layers
        of behavior change, from outside to inside:
        <UnorderedList spacing={3} ml="5">
          <ListItem fontWeight={'bold'} ml="5">
            change in outcome (results) What you get.
          </ListItem>
          <ListItem fontWeight={'bold'} ml="5">
            processes (habits and systems and routines) What you do.
          </ListItem>
          <ListItem fontWeight={'bold'} ml="5">
            and identity (beliefs, worldview, self-image, judgments of yourself
            and others) What you believe.
          </ListItem>
        </UnorderedList>
      </ListItem>

      <Text marginTop={'10'}>
        When quitting smoking, one person says “I’m trying to quit” = they
        believe they’re a smoker who is trying to be something else. The other
        person says “No thanks, I don’t smoke.” They have{' '}
        <TextTranslate
          text={'embraced'}
          textTranslate="Accept something enthusiastically"
        />{' '}
        a new life where smoking is not their identity.
      </Text>

      <Text mt="10">
        But your old identity can{' '}
        <TextTranslate text={'sabotage'} textTranslate="Phá hoại" /> your new
        plans for change.
      </Text>

      <Text mt="10" ml="15" fontWeight={'bold'}>
        <ArrowForwardIcon /> Behind every system of actions are a system of
        beliefs…behavior that is{' '}
        <TextTranslate
          text={'incongruent'}
          textTranslate="incompatible
"
        />{' '}
        with the self will not last.
      </Text>

      <Text mt="10">
        Another ex: a man who chewed his nails as a nervous habit stopped when
        he got a manicure and realized that he had healthy, attractive nails.
        His pride in his nails caused him to stop chewing.
      </Text>

      <Text>
        In other words, the more <b>PRIDE</b> you have in some aspect of your
        identity, the more motivated you will be to maintain habits associated
        with it.
      </Text>
      <Text mt="10" ml="15" fontWeight={'bold'}>
        <ArrowForwardIcon /> True behavior change is identity change.
      </Text>

      <Text mt="10">
        The only way you stick to a habit is when it becomes part of your
        identity. What you do indicates what type of person you believe you are,
        consciously or unconsciously.
      </Text>

      <Text fontWeight={'bold'} textTransform="uppercase">
        The Goal:
      </Text>
      <UnorderedList spacing={3} ml="5">
        <ListItem fontWeight={'bold'} ml="5">
          Not to read more books, but to be a READER
        </ListItem>
        <ListItem fontWeight={'bold'} ml="5">
          Not to run a marathon, but to be a RUNNER
        </ListItem>
        <ListItem fontWeight={'bold'} ml="5">
          Not to play an instrument, but to be a MUSICIAN
        </ListItem>
      </UnorderedList>

      <Text>
        We often repeat our identity through stories like “I have a bad memory,”
        “I’m bad at math,” “I’m not a morning person.” When we do that, we
        create mental{' '}
        <TextTranslate
          text={'grooves'}
          textTranslate="an established routine or habit."
        />{' '}
        and accept these statement as fact.
      </Text>
      <Text>
        You need to continuously edit your beliefs, upgrading and expanding your
        identity.
      </Text>

      <Text>
        Habits are how you{' '}
        <TextTranslate text={'embody'} textTranslate="represent" /> your
        identity. Frequent habits modify your self-image. Accumulating evidence
        causes your self-image to change.
      </Text>

      <Text>
        Identity comes from the Latin “essentitas” = being, and “identidem” =
        repeatedly. Ergo, identity = repeated beingness.
      </Text>

      <Text mt="10" ml="15" fontWeight={'bold'}>
        <ArrowForwardIcon /> The process of building habits is actually the
        process of becoming yourself…We are continually undergoing
        microevolutions of the self. Each habit is like a suggestion: “Hey,
        maybe this is who I am.”
      </Text>

      <Text>
        As the “votes” (actions) mount up, you build evidence to change your
        story and yourself. And you don’t need{' '}
        <TextTranslate
          text="unanimous"
          textTranslate={'entire, total, general'}
        />{' '}
        votes to win an “election,” just the majority vote. Your goal: win most
        of the time.
      </Text>

      <Text>How to begin identity change:</Text>
      <UnorderedList spacing={3} ml="5">
        <ListItem fontWeight={'bold'} ml="5">
          Ask yourself “Who is the type of person that could get the outcome I
          want?”
        </ListItem>
        <ListItem fontWeight={'bold'} ml="5">
          Now start making small steps to reinforce the desired identity by
          asking, “What would [a healthy person] do?”
        </ListItem>
      </UnorderedList>

      <Text>
        Your habits shape your identity and vice versa. But let your values,
        principles, and identity drive the loop rather than the results. Focus
        on being a particular type of person, not getting a particular result.
      </Text>
      <Text mt="10" ml="15" fontWeight={'bold'}>
        <ArrowForwardIcon /> The first step is not WHAT or HOW, but WHO.
      </Text>
    </List>
    <TextSubHeader title={'Summary'} />
    <List spacing={3}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> 3 levels of change:
        outcome, process, identity
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> To change, focus on
        WHO you want to be, not WHAT you want to achieve
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> Identity emerges out
        of habits. Every action is a vote for your identity.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" /> Habits matter not
        because they get you resuts but because they change your beliefs about
        yourself.
      </ListItem>
    </List>
    <TextHeader
      title={'Chapter 3: How to Build Better Habits in 4 Simple Steps'}
    />
    <Image
      src={fourStepHabitPic}
      alt="atomic-habit"
      layout="responsive"
      placeholder="blur"
      loading="lazy"
    />
    Nothing yet, I am still read this chapter...
  </Layout>
)

export default AtomicHabit
export { getServerSideProps } from '../../components/chakra'
