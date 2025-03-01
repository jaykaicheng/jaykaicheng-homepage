'use client'

import { Container, Badge, Link, List, ListItem, AspectRatio, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../../components/work'
import Layout from '../../../components/layouts/article'
import thumbMosaic from '../../../public/images/mosaic-maker.png'
import mosaicmaker1 from '../../../public/images/works/mosaicmaker_01.PNG'
import mosaicmaker2 from '../../../public/images/works/mosaicmaker_02.PNG'
import mosaicmaker3 from '../../../public/images/works/mosaicmaker_03.PNG'
import mosaicmaker4 from '../../../public/images/works/mosaicmaker_04.PNG'

export default function Work() {
  const badgeColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  
  return (
    <Layout title="Mosaic Maker">
      <Container>
        <Title>
          Mosaic Maker <Badge colorScheme="teal">2023</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Flask, React</span>
          </ListItem>
          <ListItem>
            <Meta>Course</Meta>
            <span>CSE 442 - Software Engineering</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/jaykcheng/mosaic-maker" target="_blank" color={useColorModeValue('blue.500', 'teal.200')}>
              github.com/jaykcheng/mosaic-maker <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://youtu.be/MrBvw--eS_Y" target="_blank" color={useColorModeValue('blue.500', 'teal.200')}>
              Watch Demo on YouTube <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <AspectRatio maxW="640px" ratio={1.7} my={4} borderRadius="lg" overflow="hidden" borderWidth={useColorModeValue(0, 1)} borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}>
          <iframe
            src="https://www.youtube.com/embed/MrBvw--eS_Y"
            title="Mosaic Maker Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>

        <WorkImage src={thumbMosaic} alt="Mosaic Maker" />
        <WorkImage src={mosaicmaker1} alt="Mosaic Maker - Upload Interface" />
        <WorkImage src={mosaicmaker2} alt="Mosaic Maker - Image Processing" />
        <WorkImage src={mosaicmaker3} alt="Mosaic Maker - Result Preview" />
        <WorkImage src={mosaicmaker4} alt="Mosaic Maker - Download Options" />
      </Container>
    </Layout>
  )
} 