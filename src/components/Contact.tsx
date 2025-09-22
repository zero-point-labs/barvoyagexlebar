"use client"

import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-black">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to elevate your event? Let&apos;s discuss your vision and create something extraordinary.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form className="relative bg-black/40 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-yellow-400/30">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-3xl" />
            
            <div className="relative z-10 space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-yellow-400/60" />
                  <input
                    type="text"
                    className="w-full bg-gray-900/50 border border-yellow-400/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/60 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-yellow-400/60" />
                  <input
                    type="email"
                    className="w-full bg-gray-900/50 border border-yellow-400/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/60 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-yellow-400/60" />
                  <textarea
                    rows={4}
                    className="w-full bg-gray-900/50 border border-yellow-400/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/60 transition-all duration-300 resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="w-full px-8 py-4 text-lg font-semibold shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </div>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            We typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
