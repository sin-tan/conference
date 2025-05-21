import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'International Conference on Computer Science, ML and AI',
  description: 'Join us for the International Conference on Computer Science, Machine Learning and Artificial Intelligence in Malappuram, Kerala, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 