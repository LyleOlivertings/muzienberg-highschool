// app/admissions/page.js
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Admissions() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-school-primary text-blue-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            2025 Admissions
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join the MuzienBerg High family - Applications open until 31 August
            2025
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Application Steps */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-500 mb-12">
            Application Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-gray-600">
            {[
              {
                step: 1,
                title: "Request Prospectus",
                desc: "Download or collect our information pack",
              },
              {
                step: 2,
                title: "School Tour",
                desc: "Book a personalized campus visit",
              },
              {
                step: 3,
                title: "Submit Application",
                desc: "Complete online or paper forms",
              },
              {
                step: 4,
                title: "Assessment",
                desc: "Academic evaluation & interview",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-school-light p-6 rounded-xl text-center text-gray-500"
              >
                <div className="w-12 h-12 bg-school-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements & Deadlines */}
        <section className="mb-20 text-black">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-school-primary mb-6">
                Requirements
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-school-primary mr-2">✓</span>
                  Certified birth certificate (SA citizens) or passport
                  (international students)
                </li>
                <li className="flex items-start">
                  <span className="text-school-primary mr-2">✓</span>
                  Most recent school report & testimonial
                </li>
                <li className="flex items-start">
                  <span className="text-school-primary mr-2">✓</span>
                  Proof of residence (municipal account)
                </li>
                <li className="flex items-start">
                  <span className="text-school-primary mr-2">✓</span>
                  Application fee of R250 (non-refundable)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-school-primary mb-6">
                Key Dates
              </h2>
              <div className="bg-white shadow-lg rounded-xl p-6">
                {[
                  { date: "31 Aug 2025", event: "Applications close" },
                  { date: "14 Sep 2025", event: "Entrance Assessments" },
                  { date: "30 Oct 2025", event: "Acceptance letters sent" },
                  { date: "15 Jan 2025", event: "Orientation Day" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex py-3 border-b border-school-light last:border-0"
                  >
                    <div className="w-32 font-semibold text-school-primary">
                      {item.date}
                    </div>
                    <div className="flex-1">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-20 text-gray-600">
          <h2 className="text-3xl font-bold text-school-primary mb-8">
            Fee Structure
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-school-primary text-white">
                <tr>
                  <th className="p-4 text-left">Grade</th>
                  <th className="p-4 text-left">Annual Tuition</th>
                  <th className="p-4 text-left">Inclusions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    grade: "8-9",
                    fee: "R45,000",
                    includes: "Textbooks, basic stationery",
                  },
                  {
                    grade: "10-12",
                    fee: "R52,000",
                    includes: "Exam fees, career guidance",
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-school-light">
                    <td className="p-4 font-semibold">Grade {row.grade}</td>
                    <td className="p-4">{row.fee}</td>
                    <td className="p-4 text-gray-600">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 bg-school-light">
              <p className="text-sm">
                * Payment plans and bursaries available -{" "}
                <a
                  href="/financial-aid"
                  className="text-school-primary underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="text-center py-16 text-blue-900">
          <h2 className="text-3xl font-bold text-school-primary mb-6">
            Ready to Apply?
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="/docs/admissions-form.pdf"
              download
              className="bg-gray-400 text-white px-8 py-4 rounded-lg hover:bg-blue-900 flex items-center"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Application Pack
            </a>
            <Link
              href="/apply-online"
              className="bg-white text-school-primary px-8 py-4 rounded-lg border-2 border-school-primary hover:bg-school-light flex items-center"
            >
              ✨ Apply Online
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
