'use client'

import { Container, Badge, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../../components/work'
import Layout from '../../../components/layouts/article'
import thumbStudy from '../../../public/images/study-seeker.png'
import studyseeker1 from '../../../public/images/works/studyseeker_01.PNG'
import studyseeker2 from '../../../public/images/works/studyseeker_02.PNG'
import studyseeker3 from '../../../public/images/works/studyseeker_03.PNG'
import studyseeker4 from '../../../public/images/works/studyseeker_04.PNG'

export default function Work() {
  return (
    <Layout title="Study Seeker">
      <Container>
        <Title>
          Study Seeker <Badge colorScheme="teal">2023</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Node.js, MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>Course</Meta>
            <span>CSE 370 - Human-Computer Interaction</span>
          </ListItem>
        </List>

        <WorkImage src={thumbStudy} alt="Study Seeker" />
        <WorkImage src={studyseeker1} alt="Study Seeker - Home Page" />
        <WorkImage src={studyseeker2} alt="Study Seeker - Study Groups" />
        <WorkImage src={studyseeker3} alt="Study Seeker - Profile" />
        <WorkImage src={studyseeker4} alt="Study Seeker - Messaging" />
      </Container>
    </Layout>
  )
} 