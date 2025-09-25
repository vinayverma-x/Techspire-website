"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"
import Image from "next/image"
import {
  Gamepad2,
  Smartphone,
  Globe,
  Cpu,
  Palette,
  Zap,
  Users,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Eye,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Development",
      description: "Fantasy Sports, Board Games, Casino Games",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "iGaming & Betting",
      description: "Sports Betting, Live Casino, Slot Games",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI/ML Solutions",
      description: "Machine Learning, AI Integration, Data Analytics",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web3 & Blockchain",
      description: "Smart Contracts, DeFi, NFT Platforms",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "iOS, Android, Cross-platform Solutions",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User Interface, User Experience, Branding",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Spy Monitoring Services",
      description: "Security Software, Monitoring Solutions, Surveillance Systems",
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Editing",
      description: "Professional Video Production, Post-Production, Motion Graphics",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Content Strategy, Social Marketing, Brand Management",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic & UI/UX Design",
      description: "Brand Identity, Visual Design, User Experience Design",
    },
  ]

  const portfolioProjects = [
    {
      title: "PlayerzPot",
      description: "Fantasy Sports Platform",
      link: "https://playerzpot.com/",
      image: "/playerzpot-screenshot.png",
    },
    {
      title: "Cherry Games",
      description: "Gaming Platform",
      link: "https://cherrygames.io/",
      image: "/cherrygames-screenshot.png",
    },
    {
      title: "Wolomi",
      description: "Pregnancy Companion App",
      link: "https://apps.apple.com/us/app/wolomi-a-pregnancy-companion/id1512550645",
      image: "/wolomi-screenshot.png",
    },
    {
      title: "EduBharat",
      description: "Educational Platform",
      link: "https://play.google.com/store/apps/details?id=com.edubharat",
      image: "/edubharat-screenshot.png",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechSpire Solutions CEO",
      content:
        "TechSpire Solutions delivered an exceptional gaming platform that exceeded our expectations. Their technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Tech Entrepreneur",
      content:
        "The mobile app they developed for us has been a game-changer. Professional team with excellent communication throughout.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Blockchain Startup",
      content:
        "Their Web3 development skills are top-notch. They helped us build a robust DeFi platform with great user experience.",
      rating: 5,
    },
  ]

  const trustedCompanies = [
    { name: "PlayerzPot", logo: "/plogo.jpg" },
    { name: "Cherry Games", logo: "/clogo.png" },
    { name: "Wolomi", logo: "/wlogo.webp" },
    { name: "EduBharat", logo: "/elogo.webp" },
    { name: "Makro Pro", logo: "/mlogo.webp" },
    { name: "Trade2Help", logo: "/tlogo.png" },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp-8GUbK7dINXGDZcBDQyBUTA6obVrkaP.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            We Build Future-Ready
            <span className="text-blue-400"> Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            From Gaming to Web3, your one-stop technology partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg bg-white text-gray-900">
                <DialogHeader>
                  <DialogTitle>Get a Quote</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project details</label>
                    <Textarea placeholder="Tell us about your project" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 120" className="absolute top-0 left-0 w-full h-full">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z" fill="white" />
          </svg>
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 left-0 w-full h-full rotate-180">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold text-gray-900 mb-12"
          >
            Trusted by Leading Companies
          </motion.h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll items-center">
              {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 w-52 h-24 md:w-64 md:h-28 bg-white rounded-xl shadow-sm ring-1 ring-gray-100 flex items-center justify-center overflow-hidden px-6"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={200}
                    height={80}
                    className="h-16 md:h-20 w-auto object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Expertise Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our specialized services designed to empower your business with cutting-edge technology
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src="/game-development-banner.jpeg"
                  alt="Game Development Services"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src="/web-development-banner.jpeg"
                  alt="Web Development Excellence"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src="/mobile-app-banner.jpeg"
                  alt="Mobile App Development Services"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src="/mlm-software-banner.jpeg"
                  alt="MLM Software Development Services"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our successful projects that showcase our expertise and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.link, "_blank")}
                      className="w-full"
                    >
                      View Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">About TechSpire Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2025 by Vinay Verma, we are a technology company specializing in cutting-edge digital
                solutions. Our team of expert developers and designers work tirelessly to bring your ideas to life.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">50+ projects delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Founder: Vinay Verma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Founded in 2025</span>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl animate-float"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 gradient-blue">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Build Your Idea?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and turn your vision into reality. Contact us today for a free consultation.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
