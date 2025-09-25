"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const effectiveScrolled = isHome ? isScrolled : true
  const navBgClass = isHome
    ? effectiveScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-lg"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/akps-logo.jpeg"
              alt="TechSpire Solutions Logo"
              width={120}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
            <span className={`font-serif font-bold text-xl ${effectiveScrolled ? "text-gray-900" : "text-white"}`}>TechSpire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${effectiveScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"} transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">Get a Quote</Button>
              </DialogTrigger>
              <DialogContent className={`sm:max-w-lg ${effectiveScrolled ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
                <DialogHeader>
                  <DialogTitle>Get a Quote</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${effectiveScrolled ? "text-gray-700" : "text-gray-300"}`}>Name</label>
                    <Input placeholder="Your name" className={`${effectiveScrolled ? "" : "bg-gray-800 border-gray-700 placeholder-gray-400 text-white"}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${effectiveScrolled ? "text-gray-700" : "text-gray-300"}`}>Email</label>
                    <Input type="email" placeholder="you@example.com" className={`${effectiveScrolled ? "" : "bg-gray-800 border-gray-700 placeholder-gray-400 text-white"}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${effectiveScrolled ? "text-gray-700" : "text-gray-300"}`}>Project details</label>
                    <Textarea placeholder="Tell us about your project" rows={4} className={`${effectiveScrolled ? "" : "bg-gray-800 border-gray-700 placeholder-gray-400 text-white"}`} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className={`${effectiveScrolled ? "text-gray-700" : "text-white"}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get a Quote</Button>
                </DialogTrigger>
              <DialogContent className={`sm:max-w-lg ${effectiveScrolled ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
                  <DialogHeader>
                    <DialogTitle>Get a Quote</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${effectiveScrolled ? "text-gray-700" : "text-gray-300"}`}>Name</label>
                      <Input placeholder="Your name" className={`${effectiveScrolled ? "" : "bg-gray-800 border-gray-700 placeholder-gray-400 text-white"}`} />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${effectiveScrolled ? "text-gray-700" : "text-gray-300"}`}>Email</label>
                      <Input type="email" placeholder="you@example.com" className={`${effectiveScrolled ? "" : "bg-gray-800 border-gray-700 placeholder-gray-400 text-white"}`} />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${effectiveScrolled ? "text-gray-700" : "text-gray-300"}`}>Project details</label>
                      <Textarea placeholder="Tell us about your project" rows={4} className={`${effectiveScrolled ? "" : "bg-gray-800 border-gray-700 placeholder-gray-400 text-white"}`} />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
