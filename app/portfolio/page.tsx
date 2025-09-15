"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { ExternalLink, Gamepad2, Smartphone, Globe } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "PlayerzPot",
      description: "Fantasy Sports Platform with real-time scoring and multiple game formats",
      category: "Fantasy Sports",
      link: "https://playerzpot.com/",
      icon: <Gamepad2 className="w-6 h-6" />,
      image: "/playerzpot-screenshot.png",
    },
    {
      title: "Cherry Games",
      description: "Comprehensive gaming platform with multiple game categories",
      category: "Gaming Platform",
      link: "https://cherrygames.io/",
      icon: <Gamepad2 className="w-6 h-6" />,
      image: "/cherrygames-screenshot.png",
    },
    {
      title: "Play2Win World",
      description: "Gaming and rewards platform with social features",
      category: "Gaming & Rewards",
      link: "https://play2win.world/",
      icon: <Gamepad2 className="w-6 h-6" />,
      image: "/play2win-screenshot.png",
    },
    {
      title: "LudoBroo",
      description: "Online Ludo game with multiplayer functionality",
      category: "Board Game",
      link: "https://ludobroo.in/",
      icon: <Gamepad2 className="w-6 h-6" />,
      image: "/ludobroo-screenshot.png",
    },
    {
      title: "Trade2Help",
      description: "Trading and investment platform with member portal",
      category: "FinTech",
      link: "https://trade2help.org/member/",
      icon: <Globe className="w-6 h-6" />,
      image: "/trade2help-screenshot.png",
    },
    {
      title: "Wealth Concert (iOS)",
      description: "Investment and wealth management mobile application",
      category: "Mobile App",
      link: "https://apps.apple.com/us/app/wealth-concert/id1576513504",
      icon: <Smartphone className="w-6 h-6" />,
      image:
        "/abstract-geometric-shapes.png?height=200&width=300&query=investment wealth management mobile app interface",
    },
    {
      title: "Wealth Concert (Android)",
      description: "Investment and wealth management mobile application",
      category: "Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.noblefolks.wealthconcertandroid",
      icon: <Smartphone className="w-6 h-6" />,
      image:
        "/abstract-geometric-shapes.png?height=200&width=300&query=investment wealth management android app dashboard",
    },
    {
      title: "Prashna Kundli",
      description: "Astrology and horoscope mobile application",
      category: "Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.prashnakundli.app",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/prashna-kundli-screenshot.png",
    },
    {
      title: "Wolomi (iOS)",
      description: "Pregnancy companion app with tracking features",
      category: "Healthcare",
      link: "https://apps.apple.com/us/app/wolomi-a-pregnancy-companion/id1512550645",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/wolomi-screenshot.png",
    },
    {
      title: "Wolomi (Android)",
      description: "Pregnancy companion app with tracking features",
      category: "Healthcare",
      link: "https://play.google.com/store/apps/details?id=com.wolomi",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/wolomi-screenshot.png",
    },
    {
      title: "Makro Mango",
      description: "E-commerce platform for fresh produce delivery",
      category: "E-commerce",
      link: "https://play.google.com/store/apps/details?id=com.makromangoapp.production",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/makro-pro-screenshot.png",
    },
    {
      title: "Club Bangalore",
      description: "Social networking and events platform",
      category: "Social Platform",
      link: "https://play.google.com/store/apps/details?id=com.clubbangaore",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/bangalore-club-screenshot.png",
    },
    {
      title: "Kirar Kshatriya",
      description: "Community platform for cultural connections",
      category: "Community",
      link: "https://play.google.com/store/apps/details?id=com.kirarkshatriya.app",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/kirar-kshatriya-screenshot.png",
    },
    {
      title: "EduBharat",
      description: "Educational platform with learning resources",
      category: "Education",
      link: "https://play.google.com/store/apps/details?id=com.edubharat",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/edubharat-screenshot.png",
    },
    {
      title: "Lucky Box",
      description: "Rewards and gaming application",
      category: "Gaming",
      link: "https://play.google.com/store/apps/details?id=com.luckybox.user",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/lucky-box-screenshot.png",
    },
  ]

  const categories = ["All", "Gaming Platform", "Mobile App", "Fantasy Sports", "E-commerce", "Healthcare", "Education"]

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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our successful projects that showcase our expertise across various industries and technologies.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={
                        project.image ||
                        `/abstract-geometric-shapes.png?key=723bj&height=200&width=300&query=${project.category.toLowerCase() || "/placeholder.svg"} ${project.title.toLowerCase()} interface dashboard`
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">{project.icon}</div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.link, "_blank")}
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">Industries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
