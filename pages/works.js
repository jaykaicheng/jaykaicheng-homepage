import { 
Container, 
Heading, 
SimpleGrid, 
Divider 
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMosaic from '../public/images/mosaic-maker.png'
import thumbStudy from '../public/images/study-seeker.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" 
        fontSize={20} 
        mb={4}
      >
        Works
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="mosaic-maker" title="Mosaic Maker" thumbnail={thumbMosaic}>
            <strong>CSE 442 (Software Engineering)</strong>
            <br/>
            <i>2nd Place in CSE Demo Day</i>
            <br/>
            Generate mosaic images without knowledge of photo-editing skills for free and without watermarks
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="study-seeker" title="Study Seeker" thumbnail={thumbStudy}>
            <strong>CSE 370 (HCI and Interface Design)</strong>
            <br/>
            Social media platform to build a student community, nurturing growth and helping students succeed by aligning academic interests and goals
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works