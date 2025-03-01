'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Providers } from './providers'
import theme from '../lib/theme'

export default function ClientLayout({ children }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Providers>{children}</Providers>
      </ChakraProvider>
    </>
  )
} 