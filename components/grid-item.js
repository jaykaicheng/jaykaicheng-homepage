'use client'

import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image 
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy" 
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} color={useColorModeValue('gray.800', 'whiteAlpha.900')}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14} color={useColorModeValue('gray.600', 'whiteAlpha.700')}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box 
    w="100%" 
    align="center"
  >
    <NextLink href={`/works/${id}`} passHref legacyBehavior>
      <LinkBox cursor="pointer" as="a">
        <Image 
          src={thumbnail} 
          alt={title} 
          className="grid-item-thumbnail"
          placeholder="blur"
          height={1200}
        />
        <Text 
          mt={2} 
          fontSize={20}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          {title}
        </Text>
        <Text 
          fontSize={14}
          color={useColorModeValue('gray.600', 'whiteAlpha.700')}
        > 
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global 
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
      height: 200px;
    }
    
    @media (prefers-color-scheme: dark) {
      .grid-item-thumbnail {
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  `}
  />
)