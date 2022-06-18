import { 
Container, 
Heading, 
SimpleGrid, 
} from '@chakra-ui/react'
import Section from '../components/section'

import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [pageNumber] = useState(1);

  return (
    <Layout>
      <Container>
        <Section>
        <Heading as="h3" 
          fontSize={20} 
          mb={4}
          variant="section-title"
        >
          Resume
        </Heading>
      
        <Paragraph>
          <Document file="Resume.pdf" >
            <Page pageNumber={pageNumber} />
          </Document>
        </Paragraph>
        
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
          </Section>
        </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Resume