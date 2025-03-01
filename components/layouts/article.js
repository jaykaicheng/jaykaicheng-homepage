'use client'

import { motion } from "framer-motion"
import Head from 'next/head'
import { GridItemStyle } from "../grid-item"
import { useColorModeValue } from "@chakra-ui/react"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0},
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  const bgColor = useColorModeValue('transparent', 'rgba(32, 32, 35, 0.8)')
  
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative', backgroundColor: bgColor }}
    >
      <>
        {title && ( <Head>
          <title>{title} - Jay Cheng</title>
        </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout