import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image src="/akps-logo.jpeg" alt="TechSpire Solutions Logo" fill className="object-contain" />
              </div>
              <span className="font-serif font-bold text-xl">TechSpire Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              From Gaming to Web3, your one-stop technology partner. We build future-ready digital solutions that
              empower businesses to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/akps01"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/akps-technology-a212b5202/"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-500" />
                <span className="text-gray-300">+91 92199 67205</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500" />
                <span className="text-gray-300">office@techspiresolutions.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span className="text-gray-300">
                  B-17, First Floor, Near Metro Pillar No-164,
                  <br />
                  New Ashok Nagar, Delhi – 110096
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 TechSpire Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
