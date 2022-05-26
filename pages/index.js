import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
	  Hello, I&apos;m a front-end developer based in Brooklyn, New York!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
      	    Jia Hou
          </Heading>
	        <p>Developer ( Front-end / Full-stack / Software )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page