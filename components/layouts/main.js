'use client'

import { usePathname } from 'next/navigation'
import Navbar from '../navbar'
import Footer from '../footer'
import { 
  Box, 
  Container 
} from '@chakra-ui/react'

const Main = ({ children }) => {
  const pathname = usePathname()

  return (
    <Box as="main" pb={8}>
      <Navbar path={pathname} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>  
    </Box>
  )
}

export default Main