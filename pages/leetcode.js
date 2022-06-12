import { 
Container, 
Heading, 
SimpleGrid, 
Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'

const Leetcode = () => {
  return (
    <Layout>
      <Container>
        <Section>
        <Heading as="h3" 
          fontSize={20} 
          mb={4}
          variant="section-title"
        >
          Leetcode
        </Heading>
        <Paragraph>
          All leetcode questions completed and solutions will be posted here. Will be updated once leetcode
          grind begins.
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

export default Leetcode