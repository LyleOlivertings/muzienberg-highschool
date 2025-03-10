import EventsCalendar from '@/components/EventsCalendar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function EventsPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-school-primary text-blue-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            School Calendar
          </h1>
          <p className="text-xl">Stay updated with our academic and social events</p>
        </div>
      </section>

      <EventsCalendar />
      
    
    </>
  )
}