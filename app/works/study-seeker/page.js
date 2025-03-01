'use client'

import { Container, Badge, Link, List, ListItem, useColorModeValue, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../../components/work'
import Layout from '../../../components/layouts/article'
import thumbStudy from '../../../public/images/study-seeker.png'
import studyseeker1 from '../../../public/images/works/studyseeker_01.PNG'
import studyseeker2 from '../../../public/images/works/studyseeker_02.PNG'
import studyseeker3 from '../../../public/images/works/studyseeker_03.PNG'
import studyseeker4 from '../../../public/images/works/studyseeker_04.PNG'

export default function Work() {
  const badgeColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  
  return (
    <Layout title="Study Seeker">
      <Container>
        <Title>
          Study Seeker <Badge colorScheme={badgeColor}>2023</Badge>
        </Title>
        <Text>
          A social media web application created for students to build a community to nurture 
          growth and help students succeed. This application was created with responsiveness 
          and accessibility in mind with the oversight of a now Project Manager at Meta who 
          served as our scrum master in an agile environment.
          <br/>
          <br/>
          Please use the login: 
          <br/>
          Email: jhhou@buffalo.edu 
          <br/>
          Password: testing123
        </Text>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://webdev.cse.buffalo.edu/hci/teams/commitment/' target="_blank" color={useColorModeValue('blue.500', 'teal.200')}>
              https://webdev.cse.buffalo.edu/<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Node.js, Swagger API</span>
          </ListItem>
          <ListItem>
            <Meta>Course</Meta>
            <span>CSE 370 - Human-Computer Interaction</span>
          </ListItem>
          <ListItem>
            <Meta>Usability Tests</Meta>
            <Link href='https://docs.google.com/document/d/1UItOgQbJtekWVZZ4_glwQSSKhyy1p5p7wbzjaTXWd8k/edit?usp=sharing' target="_blank" color={useColorModeValue('blue.500', 'teal.200')}>
              https://docs.google.com/Study-Seeker<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href='https://github.com/tommyxchow/study-seeker' target="_blank" color={useColorModeValue('blue.500', 'teal.200')}>
              https://github.com/tommyxchow/study-seeker<ExternalLinkIcon mx="2px" />
            </Link>
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