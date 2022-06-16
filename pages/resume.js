import { 
Container, 
Heading, 
SimpleGrid, 
} from '@chakra-ui/react'
import Section from '../components/section'

import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'

const Resume = () => {
  return (
    <Layout>
      <Container>
        <Section>
        <Heading as="h3" 
          fontSize={20} 
          mb={4}
          variant="section-title"
        >
          Resume
        </Heading>
        <Paragraph>

        </Paragraph>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
          </Section>
        </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Resume