"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Wine, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero', icon: Users },
    { name: 'Services', href: '#services', icon: Wine },
    { name: 'Menu', href: '#menu', icon: Calendar },
    { name: 'Packages', href: '#events', icon: Calendar },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-yellow-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="relative">
              <Wine className="h-8 w-8 text-yellow-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-white tracking-wider logo-font">
                LE BAR <span className="text-yellow-400">X</span> BAR VOYAGE
              </span>
              <span className="text-xs text-yellow-400/80 font-light tracking-widest">
                PREMIUM BAR SERVICES
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                className="group relative text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                <span className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </span>
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="gold" 
              className="shadow-lg shadow-yellow-500/25"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 text-white hover:text-yellow-400 transition-colors"
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md rounded-b-2xl border-b border-yellow-500/20"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors duration-300 py-2"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="pt-4"
            >
              <Button 
                variant="gold" 
                className="w-full"
                onClick={() => {
                  setIsOpen(false)
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header