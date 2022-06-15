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
    <Layout title="Mosaic Maker">
      <Container>
        <Title>
          Mosaic Maker <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A web application created to create mosaicked images without the use or need 
          of photoshop. This application is free and has no watermarks and due to deployment 
          on heroku, the upload functionality is implemented. This project is still
          being worked on as I am planning to rewrite the ReactJS code and do an overhaul.
          <br/>
          Please use the login: 
          <br/>
          USERNAME: jay
          <br/>
          PASSWORD: 123
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
              <Link href='https://moker-test.herokuapp.com/'>
              https://moker-test.herokuapp.com/<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flask, Python, ReactJS, mySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Figma</Meta>
              <Link href='https://www.figma.com/file/hwsv7GxeNLCfVk1SKyU8RT/Mosaic'>
                https://www.figma.com/Mosaic-Maker<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work