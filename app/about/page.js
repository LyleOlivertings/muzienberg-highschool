import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg py-20 text-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
            About Muzienberg High
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We seek to provide a balanced value-based education system in a stimulating environment that inspires disciplined learners to realise their full potential and contribute meaningfully to society.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        
        {/* History Section */}
        <section className="mb-20 text-black">
          <h2 className="text-3xl font-bold text-school-primary mb-8">Our History</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg">
              Muizenberg Public School was established in 1898 with the Reverend Richard Rawlinson Vyvan as Headmaster and Miss A. Dunlop as his assistant.  The School then consisted of approximately 40 pupils ranging from Sub A to Std 5 (Grade 1 – 7). Classes were initially held in temporary quarters in the Mission Hall adjoining the Muizenberg station. A tiny wood and Iron building was built at the beginning of 1899 on the hill, overlooking Falsebay, and this served as the school’s home for the next 14 years. The permanent building was completed in June 1913, slightly below the site of the wood and iron building. This Building along with numerous extensions over years remained the home of Muizenberg Public, Secondary and High school until November 1977, when the school moved to its present site.
              </p>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-center">
                  <span className="bg-blue-200 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4">✓</span>
                  1898: School established with 40 students
                </li>
                {/* Add more timeline items */}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/school3.jpg"
                alt="Historic School Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-20 text-black">
          <h2 className="text-3xl font-bold text-school-primary mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                icon: "📚",
                desc: "Consistent 98% matric pass rate since 2010"
              },
              {
                title: "Community Leadership",
                icon: "🤝",
                desc: "200+ community service hours per student"
              },
              {
                title: "Holistic Development",
                icon: "🌟",
                desc: "State-of-the-art sports & arts facilities"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Staff Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-black">
            {[
              {
                name: "Mrs. M. Oliver",
                role: "Principal",
                bio: "Over 20 years of experience in education",
                img: "/images/staff/principal.jpg"
              },

              {
                name: "Mrs. M. Oliver",
                role: "Principal",
                bio: "Over 20 years of experience in education",
                img: "/images/staff/principal.jpg"
              },

              {
                name: "Mrs. M. Oliver",
                role: "Principal",
                bio: "Over 20 years of experience in education",
                img: "/images/staff/principal.jpg"
              },

              
              // Add more staff members
            ].map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={staff.img}
                    alt={staff.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{staff.name}</h3>
                  <p className="text-school-primary mb-2">{staff.role}</p>
                  <p className="text-gray-600">{staff.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

    </>
  )
}