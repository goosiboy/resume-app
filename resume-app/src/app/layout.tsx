import './styles/css-reset.css'
import './styles/css-grid.css'
import './styles/globals.css'
import './styles/variables.css'
import { StrictMode } from 'react'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Resume',
  description: 'Resume app',
}

// Self-hosted fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StrictMode>
        <body className="App">{children}</body>
      </StrictMode>
    </html>
  )
}
