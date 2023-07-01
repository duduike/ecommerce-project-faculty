import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'] })

export const metadata = {
  title: 'Fashion 4U',
  description: 'ecommerce project',
  keywords:'Eduardo Pina, react, reactjs, typescript, next js, ecommerce'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className }>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
