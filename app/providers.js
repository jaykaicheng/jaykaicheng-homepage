'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'

export function Providers({ children }) {
  return (
    <>
      <Fonts />
      <Layout>
        <AnimatePresence mode="wait" initial={true}>
          {children}
        </AnimatePresence>
      </Layout>
    </>
  )
} 