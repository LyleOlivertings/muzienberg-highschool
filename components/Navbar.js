import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo & School Name */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80">
          <Image
            src="/images/logo.png"
            alt="MuzienBerg High School Logo"
            width={100}
            height={50}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold hidden md:block">
            Muzienberg High School
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-blue-200">
            About
          </Link>
          <Link href="/academics" className="hover:text-blue-200">
            Academics
          </Link>
          <Link href="/admissions" className="hover:text-blue-200">
            Admissions
          </Link>
          <Link href="/contact" className="hover:text-blue-200">
            Contact
          </Link>

          <Link href="/events" className="hover:text-blue-200">
            Calendar
          </Link>
        </div>
      </div>
    </nav>
  );
}
