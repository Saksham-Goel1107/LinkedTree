import Header from "@/components/Header";
import {Lato} from 'next/font/google'
import '../../globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'LinkedTree',
  description: 'LinkedTree is a simple link tree builder that allows you to create a single page with multiple links to your social media profiles, websites, and other online content.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={lato.className}>
    <main>
      {children}
    </main>
    </body>
    </html>
  )
}
