import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono, Newsreader } from 'next/font/google'
import './globals.css'
import './home.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Keskey Lab | Surgical Microbiome Lab',
  description: 'Studying how the gut microbiome and microbial metabolites alter host immunity and pathogen virulence in surgery, trauma, and critical illness.',
}

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' })
const body = Newsreader({ subsets: ['latin'], variable: '--font-body' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
