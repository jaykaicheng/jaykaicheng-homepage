'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'
import Main from '../components/layouts/main'

export default function ClientLayout({ children }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme} cssVarsRoot="html">
        <Main>
          {children}
        </Main>
      </ChakraProvider>
    </>
  )
} 