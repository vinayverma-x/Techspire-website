"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Gamepad2, Smartphone, Globe, Cpu, Palette, Zap, HeadsetIcon as VrHeadset, Code } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Game Development",
      description: "Complete gaming solutions from concept to deployment",
      subServices: [
        "Fantasy Sports Apps",
        "Board Games (Ludo, Carrom, Chess)",
        "Rummy, Poker, Teen Patti",
        "Casual & Arcade Games",
        "Multiplayer Gaming Platforms",
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "iGaming & Betting Solutions",
      description: "Comprehensive betting and casino platforms",
      subServices: [
        "Sports Betting Platforms",
        "Live Casino Solutions",
        "Slot Games Development",
        "Payment Gateway Integration",
        "Admin Dashboard & Analytics",
      ],
    },
    {
      icon: <VrHeadset className="w-12 h-12" />,
      title: "AR/VR & Metaverse Development",
      description: "Immersive experiences and virtual worlds",
      subServices: [
        "Augmented Reality Apps",
        "Virtual Reality Experiences",
        "Metaverse Platforms",
        "3D Modeling & Animation",
        "Mixed Reality Solutions",
      ],
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "AI/ML Solutions",
      description: "Intelligent systems and machine learning integration",
      subServices: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Assistants",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web3 & Blockchain Development",
      description: "Decentralized applications and blockchain solutions",
      subServices: [
        "Smart Contract Development",
        "DeFi Platforms",
        "NFT Marketplaces",
        "Cryptocurrency Wallets",
        "Blockchain Integration",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      subServices: [
        "iOS App Development",
        "Android App Development",
        "React Native Apps",
        "Flutter Development",
        "App Store Optimization",
      ],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX & Graphic Design",
      description: "Beautiful and user-friendly design solutions",
      subServices: [
        "User Interface Design",
        "User Experience Research",
        "Brand Identity Design",
        "Graphic Design Services",
        "Prototyping & Wireframing",
      ],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Modern and responsive web solutions",
      subServices: [
        "Custom Website Development",
        "E-commerce Platforms",
        "Content Management Systems",
        "Progressive Web Apps",
        "Website Maintenance",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We offer comprehensive technology solutions to help your business thrive in the digital landscape. From
            gaming to blockchain, we've got you covered.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <ul className="space-y-2">
                          {service.subServices.map((subService, subIndex) => (
                            <li key={subIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700">{subService}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get a Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
