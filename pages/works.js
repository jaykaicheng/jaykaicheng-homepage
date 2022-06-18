import { 
Container, 
Heading, 
SimpleGrid, 
// Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMosaic from '../public/images/mosaic-maker.PNG'
import thumbStudy from '../public/images/study-seeker.PNG'
import thumbParking from '../public/images/buffparking.PNG'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" 
          fontSize={20} 
          mb={4}
        >
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem 
              id="mosaic-maker"
              title="Mosaic Maker" 
              thumbnail={thumbMosaic}
            >
              <strong>CSE 442 (Software Engineering)</strong>
              <br/>
              <i>2nd Place in CSE Demo Day</i>
              <br/>
              Generate mosaic images without knowledge of photo-editing skills for free and without watermarks
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem 
              id="study-seeker" 
              title="Study Seeker" 
              thumbnail={thumbStudy}
            >
              <strong>CSE 370 (HCI and Interface Design)</strong>
              <br/>
              Social media platform to build a student community, nurturing growth and helping students succeed by aligning academic interests and goals
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem 
              id="buff-parking" 
              title="Buffalo Parking Data" 
              thumbnail={thumbParking}
            >
              <strong>CSE 115 (Computer Science I)</strong>
              <br/>
              Map parking data pulled from Open Data Buffalo to discover and find trends in parking violations based on day of month, district, number of tows per month and why
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works