import ClientLayout from './client-layout'
import { M_PLUS_Rounded_1c } from 'next/font/google'

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-m-plus-rounded-1c',
})

export const metadata = {
  title: 'Jay Cheng - Homepage',
  description: 'Jay Cheng\'s personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${mPlusRounded1c.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('chakra-ui-color-mode')) {
                  document.documentElement.dataset.theme = localStorage.getItem('chakra-ui-color-mode')
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
} 