'use client'

import NextImage from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const Title = ({ children }) => (
  <Box>
    <Text as="h3" fontSize={20} mb={4} color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
      {children}
    </Text>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Box 
    borderRadius="lg" 
    w="full" 
    mb={4} 
    overflow="hidden"
    borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
    borderWidth={useColorModeValue(0, 1)}
    bg={useColorModeValue('transparent', 'whiteAlpha.100')}
  >
    <NextImage
      src={src}
      alt={alt}
      className="grid-item-thumbnail"
      loading="lazy"
      width={720}
      height={400}
      style={{ width: '100%', height: 'auto' }}
    />
  </Box>
)

export const Meta = ({ children }) => (
  <Text as="span" fontWeight="bold" mr={2} color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
    {children}:
  </Text>
)