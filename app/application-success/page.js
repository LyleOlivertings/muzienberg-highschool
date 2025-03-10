// app/application-success/page.js
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 text-center text-blue-900">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-school-primary mb-4">
            🎉 Application Received!
          </h1>
          <p className="text-xl mb-8">
            Thank you for choosing Muzienberg High. We'll contact you within 5 working days.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-school-dark"
          >
            Return to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}