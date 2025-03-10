import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const activities = {
  sports: {
    title: "Sports & Athletics",
    description: "Develop teamwork and physical excellence through our competitive and recreational sports programs",
    gallery: [
      { img: '/images/extramurals/4.jpg', caption: 'First Team Rugby Practice' },
      { img: '/images/extramurals/1.jpg', caption: 'Inter-school Netball Match' },
      // Add 4+ images
    ],
    activities: [
      {
        name: "Rugby",
        schedule: "Mon/Wed 3-5pm",
        coach: "Mr. Sipho Dlamini",
        equipment: "Provided except boots",
        gallery: [{ img: '/images/extramurals/1.jpg', caption: 'First Team Rugby Practice' },
            { img: '/images/extramurals/4.jpg', caption: 'Inter-school Netball Match' },]
      },
      // Other sports
    ]
  },  arts: {
    title: "Arts & Culture",
    description: "Express yourself through music, drama, and visual arts in our state-of-the-art facilities",
    gallery: [
      { img: '/images/extramurals/5.jpg', caption: 'Art piece by student' },
      { img: '/images/extramurals/6.jpg', caption: 'Our first play' },
      // Add 4+ images
    ],
    activities: [
      {
        name: "Drama Club",
        schedule: "Mon/Wed 3-5pm",
        coach: "Ms. Sarah Johnson",
        equipment: "Provided except boots",
        gallery: [{ img: '/images/extramurals/5.jpg', caption: 'First Team Rugby Practice' },
            { img: '/images/extramurals/6.jpg', caption: 'Inter-school Netball Match' },]
      },
      // Other sports
    ]
  },
  // Repeat for arts, stem
}

export default function Extramurals() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-school-primary text-blue-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Extramural Program
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Cultivating talents beyond academics since 1982
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="flex gap-4 mb-12 justify-center">
          {Object.keys(activities).map((category) => (
            <a 
              key={category}
              href={`#${category}`}
              className="bg-school-light text-black px-6 py-2 rounded-full hover:bg-school-primary hover:text-blue-900 transition-colors"
            >
              {activities[category].title}
            </a>
          ))}
        </div>

        {/* Category Sections */}
        {Object.entries(activities).map(([key, category]) => (
          <section key={key} id={key} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              {category.title}
            </h2>
            
            {/* Activity Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">e
              {category.activities.map((activity, index) => (
                <div key={index} className="bg-white text-gray-500 rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={activity.gallery[0].img}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold">Schedule</p>
                        <p>{activity.schedule}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Coach</p>
                        <p>{activity.coach}</p>
                      </div>
                    </div>
                    
                    {/* Gallery Grid */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {activity.gallery.slice(1).map((img, idx) => (
                        <div key={idx} className="relative h-24 cursor-pointer hover:opacity-80">
                          <Image
                            src={img.img}
                            alt={img.caption}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Category Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.gallery.map((img, index) => (
                <div 
                  key={index}
                  className="relative h-48 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img.img}
                    alt={img.caption}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  )
}