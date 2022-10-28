import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioContent, BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import BoxTechStack from '../components/box-tech-stack'
import thumbRain from '../public/images/contents/rain.jpeg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a web developer based in Hanoi, Vietnam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hải Đinh
          </Heading>
          <p>Developer / Minimalist / Project manager(on the way)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/mine.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
              objectFit={'cover'}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hai is a full-stack developer passionate about building digital
          services/stuff he wants. He organizes his work into a flow and plans
          things out. When not working, he loves hanging out with his book and
          learning new technology.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Work
            </Button>
          </NextLink>

          {/* <Button
            type="submit"
            ml={2}
            rightIcon={<DownloadIcon />}
            colorScheme="teal"
            onClick={() => window.open('../public/Đinh Văn Hải-CV.pdf')}
          >
            My CV
          </Button> */}
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>1997</BioYear>
          <BioContent> Born in ChuongMy, Hanoi.</BioContent>
        </BioSection>
        <BioSection>
          <BioYear>2015 - 2020</BioYear>
          <BioContent>
            Studied at Hanoi University of Science and Technology. Major:
            Mechatronics (I took this major just because my friend took it, and
            I&apos;m actually not know what it is, but my parent was so proud of
            me at this time. )
          </BioContent>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          <BioContent>
            Self-taught programming : HTML, CSS, JS, REACT JS, NODEJS, MYSQL...
          </BioContent>
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2022</BioYear>
          <BioContent>
            Joined &nbsp;
            <Link href="https://amela.vn/" target={'_blank'} rel="noreferrer">
              Amela Inc
            </Link>
            &nbsp; and has a big grow from here! I have worked at both front end
            development and back end as well. My main stack was Reactjs + Nestjs
          </BioContent>
        </BioSection>

        <BioSection>
          <BioYear>2022 - now</BioYear>
          <BioContent>
            Join &nbsp;
            <Link
              href="https://cmcglobal.com.vn/"
              target={'_blank'}
              rel="noreferrer"
            >
              CMC global
            </Link>
            &nbsp; and continue to develope myself!
          </BioContent>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Music, Book , Web
          developement
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Tech stack
        </Heading>
        <Paragraph>
          <BoxTechStack />
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/%C4%91inh-v%C4%83n-ha%CC%89i-ba347a21a/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiFillLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/haireus" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/haidinh07" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<BsFacebook />}
              >
                Facebook
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/posts/meaningful-story01"
            title="Meaningfull story 01"
            thumbnail={thumbRain}
          >
            Những bước ngoặt cuộc đời
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
