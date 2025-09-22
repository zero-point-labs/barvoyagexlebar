"use client"

import { motion } from 'framer-motion'
import { Wine, Sparkles, Star, ChefHat } from 'lucide-react'
import Image from 'next/image'

const Services = () => {
  const cocktailImages = [
    '1000019781.jpg',
    '1000019787.jpg',
    '1000019802.jpg', 
    '1000019839.jpg',
    '1000019866.jpg',
    '1000020852.jpg'
  ]

  const specialties = [
    {
      icon: Wine,
      title: "Signature Cocktails",
      description: "Expertly crafted drinks that define our unique style and approach to mixology."
    },
    {
      icon: Sparkles,
      title: "Custom Creations",
      description: "Personalized cocktails designed specifically for your event and taste preferences."
    },
    {
      icon: Star,
      title: "Premium Ingredients",
      description: "Only the finest spirits, fresh ingredients, and artisanal mixers in every drink."
    },
    {
      icon: ChefHat,
      title: "Expert Bartenders",
      description: "Professional mixologists with years of experience in high-end cocktail service."
    }
  ]

  return (
    <section id="services" className="relative py-20 bg-black">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From signature cocktails to completely custom creations, we bring premium bar experiences to your special events.
          </p>
        </motion.div>

        {/* Cocktail Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {cocktailImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 group-hover:border-yellow-400/50 transition-all duration-300">
                  <Image
                    src={`/${image}`}
                    alt="Premium Cocktail"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <specialty.icon className="h-10 w-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-xl mb-3">{specialty.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{specialty.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Drinks Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              <span className="text-yellow-400">Custom</span> Cocktail Experiences
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-400 mb-4">What We Offer:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Bespoke cocktail menus tailored to your event theme</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Signature drinks created exclusively for your celebration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Premium spirits and artisanal ingredients</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Professional presentation and garnish artistry</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-400 mb-4">Perfect For:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Weddings and romantic celebrations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Corporate events and networking functions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Private parties and intimate gatherings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Special occasions and milestone celebrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Signature Cocktails Menu */}
        <motion.div
          id="menu"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-black/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-yellow-400/30">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-3xl" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 tracking-wide">
                MENU
              </h3>
              <h4 className="text-xl md:text-2xl text-white font-light tracking-widest mb-12">
                SIGNATURE COCKTAILS
              </h4>
              
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Midnight Cruise */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-yellow-400/30 pb-6"
                >
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                    MIDNIGHT CRUISE
                  </h5>
                  <p className="text-gray-300 text-base md:text-lg mb-2">
                    Vodka, espresso coffee, coffee liqueur
                  </p>
                  <p className="text-yellow-400/80 italic text-sm">
                    Garnish: Coffee beans
                  </p>
                </motion.div>

                {/* Tropical Departure */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="border-b border-yellow-400/30 pb-6"
                >
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                    TROPICAL DEPARTURE
                  </h5>
                  <p className="text-gray-300 text-base md:text-lg mb-1">
                    Vodka, mastiha, lemon juice, strawberry puree, vanilla syrup
                  </p>
                  <p className="text-gray-300 text-base md:text-lg mb-2">
                    Top up soda
                  </p>
                  <p className="text-yellow-400/80 italic text-sm">
                    Garnish: Dehydrated lemon wheel
                  </p>
                </motion.div>

                {/* Golden Voyage */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="border-b border-yellow-400/30 pb-6"
                >
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                    GOLDEN VOYAGE
                  </h5>
                  <p className="text-gray-300 text-base md:text-lg mb-2">
                    Gin, elderflower liqueur, lemon juice, sugar syrup
                  </p>
                  <p className="text-yellow-400/80 italic text-sm">
                    Garnish: Gold flakes
                  </p>
                </motion.div>

                {/* Pink Compass */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="border-b border-yellow-400/30 pb-6"
                >
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                    PINK COMPASS
                  </h5>
                  <p className="text-gray-300 text-base md:text-lg mb-2">
                    Beefeater pink gin, prosecco, top soda
                  </p>
                  <p className="text-yellow-400/80 italic text-sm">
                    Garnish: Berries
                  </p>
                </motion.div>

                {/* The Passport */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">
                    THE PASSPORT
                  </h5>
                  <p className="text-gray-300 text-base md:text-lg mb-2">
                    Gin, sugar syrup, sparkling lemonade
                  </p>
                  <p className="text-yellow-400/80 italic text-sm">
                    Garnish: Lemon slice
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
