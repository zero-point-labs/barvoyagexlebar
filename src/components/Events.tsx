"use client"

import { motion } from 'framer-motion'
import { Heart, Briefcase, Users, Star } from 'lucide-react'
import Image from 'next/image'

const Events = () => {
  const eventTypes = [
    {
      icon: Heart,
      title: "Weddings & Celebrations",
      description: "Custom cocktails for your special day"
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional bar service for business gatherings"
    },
    {
      icon: Users,
      title: "Private Parties",
      description: "Personalized cocktail experiences for intimate gatherings"
    },
    {
      icon: Star,
      title: "Special Occasions",
      description: "Exceptional drinks for life's important moments"
    }
  ]

  return (
    <section id="events" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.02'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Perfect <span className="text-yellow-400">For</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional bartending services for every type of celebration and gathering.
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/events.jpg"
                alt="Premium Bar Events"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-4xl px-6"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Elevating Every <span className="text-yellow-400">Celebration</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Professional bartending services that transform ordinary gatherings into extraordinary experiences
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <event.icon className="h-12 w-12 text-yellow-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-lg mb-3">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Each event is tailored to your specific needs with custom cocktail menus, 
              professional presentation, and exceptional service that makes every occasion memorable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
