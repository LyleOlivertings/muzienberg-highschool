// app/apply-online/page.js
import ApplicationForm from '@/components/ApplicationForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ApplyOnline() {
  return (
    <>
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">
            Online Application Form
          </h1>
          <ApplicationForm />
        </div>
      </main>

   
    </>
  )
}