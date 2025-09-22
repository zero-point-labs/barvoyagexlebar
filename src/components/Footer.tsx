"use client"

import { motion } from 'framer-motion'
import { Wine, Instagram } from 'lucide-react'

const Footer = () => {

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    { name: "Wedding Bars", href: "#weddings" },
    { name: "Corporate Events", href: "#corporate" },
    { name: "Private Parties", href: "#private" },
    { name: "Custom Cocktails", href: "#custom" },
  ]

  return (
    <footer className="relative bg-black border-t border-yellow-500/20">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-black/50" />
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Wine className="h-10 w-10 text-yellow-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl text-white tracking-wider logo-font">
                    LE BAR <span className="text-yellow-400">X</span> BAR VOYAGE
                  </span>
                  <span className="text-sm text-yellow-400/80 font-light tracking-widest">
                    PREMIUM BAR SERVICES
                  </span>
                </div>
              </div>
              
              <p className="text-gray-400 max-w-md leading-relaxed">
                Two exceptional bars united in partnership, delivering premium cocktail experiences 
                that elevate your events with sophistication and style.
              </p>

              {/* Instagram Links */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-4 w-4" />
                  <a 
                    href="https://www.instagram.com/lebar.cy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    @lebar.cy
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-4 w-4" />
                  <a 
                    href="https://www.instagram.com/barvoyage.cy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    @barvoyage.cy
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-white font-semibold text-lg border-b border-yellow-500/20 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-white font-semibold text-lg border-b border-yellow-500/20 pb-2">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <motion.a
                      href={service.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="py-6 border-t border-yellow-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Le Bar & Bar Voyage. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer