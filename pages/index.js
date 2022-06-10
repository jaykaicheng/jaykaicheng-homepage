import NextLink from 'next/link'
import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue, 
  Button,
  Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg" 
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={3} 
          mb={6} 
          align="center"
        >
      Hello, I&apos;m a front-end developer based in Brooklyn, New York!
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jia Hou
            </Heading>
            <p>Developer ( Front-end / Full-stack / Software )</p>
          </Box>
          <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center"
          >
            <Image 
              borderColor="whiteAlpha.800" 
              borderWidth={2} 
              borderStyle="solid" 
              maxWidth="100px" 
              display="inline-block" 
              borderRadius="full" 
              src="/images/jia.jpg" 
              alt="Image of Jia"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Jia is a recent graduate at the University at Buffalo and aspires to 
          become a web/software developer. He has a passion for building software, 
          websites and solving problems. Offline, he spends his time playing volleyball, weightlifting
          and recently got into leetcoding. In his senior year he took many web 
          development courses and created{' '} 
            <NextLink href="/works/studyseeker">
              <Link>Study Seeker</Link>
            </NextLink> 
          {' '}in his Applied Human Computer Interaction and Interface Design class (CSE370) and 
          {' '}
            <NextLink href="/works/mosaicmaker">
              <Link>Mosaic Maker</Link>
            </NextLink>
          {' '} in his Software Engineering class (CSE442). These projects inspired 
          him to pursue a career in web/software development.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Guangdong (广东), China.
          </BioSection>
          <BioSection>
            <BioYear>2003</BioYear>
            Immigrated to America.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated from Brooklyn Technical High School after majoring in Architecture.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Bachelors program in the Undergraduate School of Engineering and Applied Sciences 
            from the University at Buffalo after majoring in Computer Science and minoring in Psychology.
          </BioSection>
          <BioSection>
            <BioYear>Present</BioYear>
            Searching for an opportunity to learn in a fast-paced and collaborative environment.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Volleyball, Bouldering, Weightlifting, Walks, Spending time with friends and family, Driving

          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page