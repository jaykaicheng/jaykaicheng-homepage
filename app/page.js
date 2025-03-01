'use client'

import NextLink from 'next/link'
import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue, 
  Button,
  List,
  Link,
  ListItem,
  Icon,
  chakra
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
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
          Hello, I&apos;m a software engineer based in Brooklyn, New York! Open to relocation!
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jay Cheng
            </Heading>
            <p>Software Engineer <br/>
            Aspiring Data Engineer/Scientist</p>
          </Box>
          <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center"
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
                src="/images/jia.jpg"
                alt="Image of Jia"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Paragraph>Jay graduated from the University at Buffalo and aspires to 
          work in Machine Learning. He has a passion for building software,
          websites, cloud, DevOps, and solving problems. Offline, he spends his time playing volleyball, pickleball, and snowboarding. 
           In his senior year, he focused on web 
          development courses and created{' '} 
            <NextLink href="/works/study-seeker" passHref legacyBehavior>
              <Link as="span">Study Seeker</Link>
            </NextLink> 
          {' '}in Applied Human Computer Interaction and Interface Design (CSE370) and 
          {' '}
            <NextLink href="/works/mosaic-maker" passHref legacyBehavior>
              <Link as="span">Mosaic Maker</Link>
            </NextLink>
          {' '}in Software Engineering (CSE442). These projects inspired 
          him to pursue a career in web/software development. 
          He is currently contracted as a Software Engineer at {' '}
          <Link href="https://lightpathfiber.com/" target="_blank">Lightpath</Link> after interning and 
          is working on his AWS and Azure certification. He is currently pursuing his Masters in Computer Science at Georgia Tech
           part-time starting in Spring 2024.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref legacyBehavior>
              <Button as="a" rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Timeline
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
            Completed Bachelors program for Computer Science in the Undergraduate School of Engineering and Applied Sciences 
            at the University at Buffalo.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Began work as an Full-Stack Developer Intern at Lightpath.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Began contract work as a Software Engineer at Lightpath via TEKsystems.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Naturalized as a US Citizen.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Started Masters of Computer Science in the College of Computing at Georgia Institute of Technology.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Volleyball, Bouldering, Weightlifting, Snowboarding, Pickleball, Music, Hiking, National Parks 
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/jaykcheng" target="_blank">
                <Button 
                  variant="ghost" 
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoGithub} 
                  />}>
                    @jaykcheng
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/jaykcheng" target="_blank">
                <Button 
                  variant="ghost" 
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoLinkedin} 
                  />}>
                    @jaykcheng
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
} 