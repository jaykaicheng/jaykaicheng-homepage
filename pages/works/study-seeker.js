import { 
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { 
  Title, 
  WorkImage,
  Meta
} from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Study Seeker">
      <Container>
        <Title>
          Study Seeker <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A social media web application created for students to build a community to nurture 
          growth and help students succeed. This application was created with responsiveness 
          and accessibility in mind with the oversight of a now Project Manager at Meta who 
          served as our scrum master in an agile environment.
          <br/>
          Please use the login: 
          <br/>
          Email: jhhou@buffalo.edu 
          <br/>
          Password: testing123
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
              <Link href='https://webdev.cse.buffalo.edu/hci/teams/commitment/'>
                https://webdev.cse.buffalo.edu/<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Swagger API</span>
          </ListItem>
          <ListItem>
            <Meta>Figma</Meta>
              <Link href='https://www.figma.com/file/QVP0FV2JZDv4nsMHetIabX/StudySeeker?node-id=0%3A1'>
                https://www.figma.com/Study-Seeker<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
          <ListItem>
            <Meta>Usability Tests</Meta>
              <Link href='https://docs.google.com/document/d/1UItOgQbJtekWVZZ4_glwQSSKhyy1p5p7wbzjaTXWd8k/edit?usp=sharing'>
                https://docs.google.com/Study-Seeker<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
              <Link href='https://github.com/tommyxchow/study-seeker'>
              https://github.com/tommyxchow/study-seeker<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/studyseeker_01.PNG" alt="Study Seeker Splash Page"/>
        <WorkImage src="/images/works/studyseeker_02.PNG" alt="Study Seeker Home Page" />
        <WorkImage src="/images/works/studyseeker_03.PNG" alt="Study Seeker Class Page" />
        <WorkImage src="/images/works/studyseeker_04.PNG" alt="Study Seeker Connections Page" />
      </Container>
    </Layout>
  )
}

export default Work