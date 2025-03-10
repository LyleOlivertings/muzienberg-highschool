import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* School Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/logo.png"
                alt="School Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm">
              MuzienBerg High School<br/>
              <a 
                href="https://maps.app.goo.gl/4dZRdDAE5vSU4BDU7" 
                target="_blank"
                className="hover:text-blue-200 underline"
              >
                Dover Road, Off Windermere Rd, Muizenberg, Cape Town, 7950
              </a>
            </p>
            <p className="text-sm">
              Tel: <a href="tel:+27211234567" className="hover:text-blue-200">+27 21 123 4567</a><br/>
              Email: <a href="mailto:info@muzienberg.edu.za" className="hover:text-blue-200">info@muzienberg.edu.za</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-200">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-blue-200">Academic Calendar</Link></li>
              <li><Link href="/admissions" className="hover:text-blue-200">Application Process</Link></li>
              <li><Link href="/contact" className="hover:text-blue-200">Staff Directory</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="font-bold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              {/* Add more social icons */}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-2">
            <h3 className="font-bold mb-3">School Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded text-black"
              />
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} MuzienBerg High School. 
            All rights reserved. | 
            <Link href="/privacy" className="hover:text-blue-200 ml-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer