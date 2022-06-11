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
          A social media web application created for students. Please use Login: jhhou@buffalo.edu testing123
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
        </List>
      </Container>
    </Layout>
  )
}

export default Work