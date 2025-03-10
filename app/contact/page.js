// app/contact/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const schoolLocation = {
    address:
      "Muizenberg High School, Dover Road, Off Windermere Rd, Muizenberg, Cape Town, 7950",
    lat: "-34.097956",
    lng: "18.477404",
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-school-primary text-blue-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you!</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 text-gray-600">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-school-light p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-400 mb-4">
                School Details
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-school-primary mr-2">📍</span>
                  <div>
                    <p className="font-semibold">Physical Address</p>
                    <p>
                      Dover Road, Off Windermere Rd, Muizenberg, <br />
                      Cape Town, 7950
                      <br />
                      South Africa
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-school-primary mr-2">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>
                      <a
                        href="tel:+27211234567"
                        className="hover:text-school-primary"
                      >
                        +27 (0)21 123 4567
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-school-primary mr-2">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>
                      <a
                        href="mailto:info@muzienberg.edu.za"
                        className="hover:text-school-primary"
                      >
                        info@muzienberg.edu.za
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-school-primary mb-6">
                Send a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-lg h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-blue-900"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="sticky top-4 h-[600px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.093292680882!2d${schoolLocation.lng}!3d${schoolLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6f4d4d9f46a1%3A0x8d40b765b5b4285e!2sMuizenberg+High+School!5e0!3m2!1sen!2sza!4v1712500000000!5m2!1sen!2sza`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muizenberg High School Location"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
