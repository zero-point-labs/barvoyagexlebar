"use client"

import { motion } from 'framer-motion'
import { Heart, Briefcase, Users, Star } from 'lucide-react'
import Image from 'next/image'

const Events = () => {
  const packages = [
    {
      name: "LIGHT",
      cocktails: "2 COCKTAILS",
      bartenders: "2 BARTENDERS",
      drinks: "NORMAL DRINKS",
      station: "LUXURY BAR STATION",
      features: ["Perfect for small gatherings", "Essential cocktail selection", "Professional service"]
    },
    {
      name: "BASIC",
      cocktails: "3 COCKTAILS",
      bartenders: "2 BARTENDERS",
      drinks: "NORMAL DRINKS",
      station: "LUXURY BAR STATION",
      shots: "TROUND OF SHOTS",
      features: ["Great for medium events", "Extended cocktail menu", "Round of shots included"]
    },
    {
      name: "FULL EXPERIENCE",
      cocktails: "4 COCKTAILS",
      bartenders: "3 BARTENDERS",
      drinks: "PREMIUM DRINKS",
      station: "LUXURY BAR STATION",
      shots: "3 ROUNDS OF SHOTS",
      champagne: "CHAMPAGNE TO EVERYONE",
      cigars: "PREMIUM CIGARS",
      sparklers: "BOTTLE SPARKLERS FOR ALL",
      features: ["Ultimate party experience", "Premium everything", "Complete luxury service"]
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
            Our <span className="text-yellow-400">Packages</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your event - from intimate gatherings to grand celebrations.
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

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-300 ${
                pkg.name === 'FULL EXPERIENCE' 
                  ? 'border-yellow-400/60 shadow-2xl shadow-yellow-400/20' 
                  : 'border-yellow-400/20 group-hover:border-yellow-400/40'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Popular Badge for Full Experience */}
                {pkg.name === 'FULL EXPERIENCE' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Package Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 tracking-wider">
                    {pkg.name}
                  </h3>
                  
                  {/* Package Details */}
                  <div className="space-y-3 mb-6">
                    <div className="text-white font-medium">{pkg.cocktails}</div>
                    <div className="text-white font-medium">{pkg.bartenders}</div>
                    <div className="text-white font-medium">{pkg.drinks}</div>
                    <div className="text-white font-medium">{pkg.station}</div>
                    {pkg.shots && <div className="text-white font-medium">{pkg.shots}</div>}
                    {pkg.champagne && <div className="text-white font-medium">{pkg.champagne}</div>}
                    {pkg.cigars && <div className="text-white font-medium">{pkg.cigars}</div>}
                    {pkg.sparklers && <div className="text-white font-medium">{pkg.sparklers}</div>}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
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
