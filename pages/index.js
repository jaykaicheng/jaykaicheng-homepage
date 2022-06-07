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

const Page = () => {
  return (
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
        websites and solving problems. Offline, he loves playing volleyball, weightlifting, 
        rock climbing and recently got into leetcoding. In his senior year he took many web 
        development courses and created 
          <NextLink href="/works/studyseeker">
            <Link> Study Seeker </Link>
          </NextLink>
        in his Applied Human Computer Interaction and Interface Design class (CSE370) and 
          <NextLink href="/works/mosaicmaker">
            <Link> Mosaic Maker </Link>
          </NextLink>
        in his Software Engineering class (CSE442). It was these projects that really inspired 
        him to pursue a path in web/software development.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page