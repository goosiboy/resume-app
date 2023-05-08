import './styles/css-reset.css'
import './styles/css-grid.css'
import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'oinasjo resume app',
  description: 'oinasjo resume app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="App">{children}</body>
    </html>
  )
}
