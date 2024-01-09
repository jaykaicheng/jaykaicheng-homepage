import { 
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
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
          of photoshop. This application is free and has no watermarks but the 
          images are currently not permanently saved due to Heroku&apos;s ephemeral disk and
          new pricing and hosting policy. 
          This project is still under development as I am planning to rewrite the frontend 
          to allow for responsiveness, guest access, and AWS S3 for permanent images.
        </Paragraph>
        <List ml={4} my={4}>
          {/* <ListItem>
            <Meta>Website</Meta>
              <Link href='https://moker-test.herokuapp.com/'>
              https://moker-test.herokuapp.com/<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem> */}
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
          <ListItem>
            <Meta>Source</Meta>
              <Link href='https://github.com/jaykcheng/Mosaic-Maker/tree/heroku-test2'>
              https://github.com/jaykcheng/Mosaic-Maker/<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
        </List>

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/MrBvw--eS_Y?si=xHPB3imC69sUTcVE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      
        <WorkImage src="/images/works/mosaicmaker_01.PNG" alt="Mosaic Maker Splash Page"/>
        <WorkImage src="/images/works/mosaicmaker_02.PNG" alt="Mosaic Maker Home Page" />
        <WorkImage src="/images/works/mosaicmaker_03.PNG" alt="Mosaic Maker Profile Page" />
        <WorkImage src="/images/works/mosaicmaker_04.PNG" alt="Mosaic Maker Image Page" />

      </Container>
    </Layout>
  )
}

export default Work