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
import buffparking1 from '../../public/images/works/buffparking_01.png'
import buffparking2 from '../../public/images/works/buffparking_02.png'
import buffparking3 from '../../public/images/works/buffparking_03.png'

const Work = () => {
  return (
    <Layout title="Buffalo Parking Data">
      <Container>
        <Title>
          Buffalo Parking Data <Badge>2020</Badge>
        </Title>
        <Paragraph>
          Python application that uses Bottle to map data pulled from a website/csv to plots and charts
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
              <Link href='https://complete-project-1--zjq.repl.co/'>
              https://complete-project-1--zjq.repl.co/<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
              <Link href='https://github.com/jiahhou/Buffalo-Parking-Data'>
              https://github.com/jiahhou/Buffalo-Parking-Data<ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
        </List>

        <WorkImage src={buffparking1} alt="Buffalo Parking Tows by Day of the Month"/>
        <WorkImage src={buffparking2} alt="Buffalo Parking Tows by District" />
        <WorkImage src={buffparking3} alt="Buffalo Parking Number of Tows by Month and Description" />
      </Container>
    </Layout>
  )
}

export default Work