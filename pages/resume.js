import { 
Container, 
Heading, 
SimpleGrid, 
} from '@chakra-ui/react'
import Section from '../components/section'

import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
      
        <div>
          <Document file="../public/Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
        
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