import './globals.css'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Muzienberg High School',
  description: 'Empowering Future Leaders in Cape Town, South Africa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  )
}