import { Footer } from './components/Footer/Footer' 
import { Header } from './components/Header/Header' 
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'] })

export const metadata = {
  title: 'Fashion 4U - Feita para você!',
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
