'use client'

import { Container, Badge, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../../components/work'
import Layout from '../../../components/layouts/article'
import thumbParking from '../../../public/images/buffparking.png'
import buffparking1 from '../../../public/images/works/buffparking_01.png'
import buffparking2 from '../../../public/images/works/buffparking_02.png'
import buffparking3 from '../../../public/images/works/buffparking_03.png'

export default function Work() {
  return (
    <Layout title="Buffalo Parking Data">
      <Container>
        <Title>
          Buffalo Parking Data <Badge colorScheme="teal">2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Data Analysis, Visualization</span>
          </ListItem>
          <ListItem>
            <Meta>Course</Meta>
            <span>CSE 115 - Computer Science I</span>
          </ListItem>
        </List>

        <WorkImage src={thumbParking} alt="Buffalo Parking Data" />
        <WorkImage src={buffparking1} alt="Buffalo Parking - Data Overview" />
        <WorkImage src={buffparking2} alt="Buffalo Parking - District Analysis" />
        <WorkImage src={buffparking3} alt="Buffalo Parking - Trends" />
      </Container>
    </Layout>
  )
} 