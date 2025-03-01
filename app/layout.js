import ClientLayout from './client-layout'

export const metadata = {
  title: 'Jay Cheng - Homepage',
  description: 'Jay Cheng\'s personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
} 