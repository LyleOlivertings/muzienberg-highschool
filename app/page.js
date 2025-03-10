import HeroCarousel from "@/components/HeroCarousel";
import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to MuzienBerg High
            </h1>
            <p className="text-xl">
              Cape Town's Premier Educational Institution
            </p>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-black font-bold text-center mb-12">
              Why MuzienBerg High?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-black">
              {[
                { title: "Graduation Rate", value: "100%", desc: "Since 2018" },
                {
                  title: "University Acceptance",
                  value: "98%",
                  desc: "To Top SA Universities",
                },
                {
                  title: "Sports Teams",
                  value: "15+",
                  desc: "Competitive Programs",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg text-center"
                >
                  <p className="text-4xl font-bold text-blue-800 mb-2">
                    {stat.value}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Temporary Content */}
  
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
              {[
                {
                  title: "STEM Focus",
                  icon: "🔬",
                  desc: "Advanced Science & Tech Labs",
                },
                {
                  title: "Arts Academy",
                  icon: "🎭",
                  desc: "Drama, Music & Visual Arts",
                },
                {
                  title: "Sports Excellence",
                  icon: "⚽",
                  desc: "Provincial Champions",
                },
                {
                  title: "Leadership",
                  icon: "🌟",
                  desc: "Student Council Programs",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </main>
    </>
  );
}
