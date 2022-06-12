import { 
Container, 
Heading, 
SimpleGrid, 
Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import Layout from '../components/layouts/article'

const Leetcode = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" 
          fontSize={20} 
          mb={4}
        >
          Leetcode
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Leetcode