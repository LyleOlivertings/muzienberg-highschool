import Navbar from "@/components/Navbar";
import Image from "next/image";
import ResultsChart from "@/components/ResultsChart";

export default function Academics() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-school-light py-20 text-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-school-primary mb-4">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Rigorous curriculum meeting Western Cape Education Department
            standards
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Curriculum Streams */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Curriculum Streams
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-500">
            {[
              {
                stream: "STEM",
                subjects: [
                  "Mathematics",
                  "Physical Sciences",
                  "IT",
                  "Engineering",
                ],
                color: "bg-blue-100",
              },
              {
                stream: "Commerce",
                subjects: [
                  "Accounting",
                  "Business Studies",
                  "Economics",
                  "Math Lit",
                ],
                color: "bg-green-100",
              },
              {
                stream: "Humanities",
                subjects: ["History", "Geography", "Visual Arts", "Languages"],
                color: "bg-yellow-100",
              },
            ].map((program, index) => (
              <div key={index} className={`${program.color} p-6 rounded-xl`}>
                <h3 className="text-xl font-bold mb-4">{program.stream}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {program.subjects.map((subject, idx) => (
                    <li key={idx} className="text-gray-700">
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20">
          <h2 className="text-3xl font-bold text-gray-500 text-center mb-8">
            Matric Excellence
          </h2>
          <ResultsChart />
          <div className="mt-6 text-center text-gray-400">
            <p>* Based on Western Cape Education Department results</p>
            
          </div>
        </section>


       
<section className="my-20">
  <h2 className="text-3xl font-bold text-school-primary mb-12 text-center text-black">
    Beyond the Classroom
  </h2>
  
  <div className="grid md:grid-cols-3 gap-8 text-gray-500">
    {[
      {
        category: "Sports & Athletics",
        icon: "🏅",
        activities: [
          { name: "Rugby", schedule: "Mon/Wed 3-5pm", grades: "8-12" },
          { name: "Netball", schedule: "Tue/Thu 3-5pm", grades: "8-12" },
          { name: "Swimming", schedule: "Daily 7am", grades: "All" },
          { name: "Chess Club", schedule: "Fri 2-4pm", grades: "9-12" }
        ]
      },
      {
        category: "Creative Arts",
        icon: "🎭",
        activities: [
          { name: "Drama Society", schedule: "Mon 4-6pm", grades: "10-12" },
          { name: "School Choir", schedule: "Wed 3-4:30pm", grades: "All" },
          { name: "Art Studio", schedule: "Open Access", grades: "All" },
          { name: "Debating Team", schedule: "Thu 3:30pm", grades: "9-12" }
        ]
      },
      {
        category: "STEM Clubs",
        icon: "🔬",
        activities: [
          { name: "Robotics Club", schedule: "Tue 3:30-5pm", grades: "10-12" },
          { name: "Math Olympiad", schedule: "Fri 2:30pm", grades: "11-12" },
          { name: "Eco Warriors", schedule: "Wed 3pm", grades: "All" },
          { name: "Coding Society", schedule: "Mon 4pm", grades: "9-12" }
        ]
      }
    ].map((category, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-6">
          <span className="text-5xl">{category.icon}</span>
          <h3 className="text-xl font-bold mt-4 text-school-primary">
            {category.category}
          </h3>
        </div>
        <ul className="space-y-4">
          {category.activities.map((activity, idx) => (
            <li key={idx} className="border-b border-school-light pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{activity.name}</h4>
                  <p className="text-sm text-gray-600">{activity.schedule}</p>
                </div>
                <span className="bg-school-light text-school-primary px-2 py-1 rounded text-sm">
                  {activity.grades}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Gallery Preview */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
    {[1,2,3,4].map((img) => (
      <div key={img} className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={`/images/extramurals/${img}.jpg`}
          alt="Extramural activity"
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>

  {/* CTA */}
  <div className="text-center mt-8">
    <a
      href="/extramurals"
      className="inline-block bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors"
    >
      View Full Extramural Program
    </a>
  </div>
</section>

        {/* Academic Calendar */}
        <section className="mb-20 text-black">
          <h2 className="text-3xl font-bold text-school-primary mb-8">
            2024 Academic Calendar
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-school-primary text-white">
                <tr>
                  <th className="p-4 text-left">Term</th>
                  <th className="p-4 text-left">Start Date</th>
                  <th className="p-4 text-left">End Date</th>
                  <th className="p-4 text-left">Key Events</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    term: "Term 1",
                    start: "15 January",
                    end: "20 March",
                    events: "Orientation, Athletics Day",
                  },

                  {
                    term: "Term 1",
                    start: "21 March",
                    end: "21 March",
                    events: "Public Holiday, Human Rights Day",
                  },
                  {
                    term: "Term 2",
                    start: "3 April",
                    end: "14 June",
                    events: "Science Fair, Mid-year Exams",
                  },
                  // Add more terms...
                ].map((term, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">{term.term}</td>
                    <td className="p-4">{term.start}</td>
                    <td className="p-4">{term.end}</td>
                    <td className="p-4">{term.events}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Button */}
          <div className="mt-8 text-center text-black">
            <a
              href="/docs/academic-calendar-2024.pdf"
              download
              className="inline-flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-blue-900"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Full Calendar (PDF)
            </a>
          </div>
        </section>

        {/* Faculty Section */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-8">
            Academic Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500">
            {[
              {
                name: "Dr. Thandi Ndlovu",
                role: "H.O.D Science Department",
             
                img: "/images/staff/principal.jpg",
              },

              {
                name: "Mrs. M. Oliver",
                role: "Principal",
          
             
                img: "/images/staff/principal.jpg",
              },

              {
                name: "Mr. J. Smith",
                role: "H.O.D Natural Sciences",
               
                img: "/images/staff/principal.jpg",
              },
              // Add more faculty...
            ].map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={staff.img}
                    alt={staff.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{staff.name}</h3>
                  <p className="text-school-primary mb-2">{staff.role}</p>
                  <p className="text-sm text-gray-600">{staff.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
