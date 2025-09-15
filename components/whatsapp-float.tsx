"use client"

import { MessageCircle, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919219967205", "_blank")
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group overflow-hidden"
        title="Chat with us on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.7)",
            "0 0 0 10px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        }}
      >
        {/* Background pulse effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>

        {/* WhatsApp icon */}
        <MessageCircle size={28} className="relative z-10" />

        {/* Tooltip */}
        <motion.span
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
          initial={{ x: 10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          💬 Chat with us on WhatsApp
          {/* Tooltip arrow */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </motion.span>

        {/* Phone icon for additional visual appeal */}
        <motion.div
          className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full p-1"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <Phone size={12} />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}
