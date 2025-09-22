"use client"

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/events.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onLoadedData={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play().catch(() => {
            // If video fails to play, it will show the poster image
            console.log('Video autoplay failed, showing poster image');
          });
        }}
      >
        <source src="/1000026174.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Mobile fallback background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 md:hidden mobile-bg-fallback"
        style={{ backgroundImage: 'url("/events.jpg")' }}
      />
      
      {/* Dark overlay to maintain theme */}
      <div className="absolute inset-0 bg-black/75 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50 z-10" />
      
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Logos Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-8 md:space-x-16"
          >
            {/* Le Bar Logo */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Image
                  src="/lebarlogo.png"
                  alt="Le Bar Logo"
                  width={120}
                  height={120}
                  className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 object-contain filter drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Elegant Separator */}
            <motion.div 
              className="flex flex-col items-center justify-center space-y-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Three elegant dots */}
              <div className="flex flex-col space-y-2">
                <motion.div 
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Bar Voyage Logo */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Image
                  src="/barvouagelogo.png"
                  alt="Bar Voyage Logo"
                  width={120}
                  height={120}
                  className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 object-contain filter drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-wide logo-font">
              LE BAR <span className="text-yellow-400">X</span> BAR VOYAGE
            </h1>
            <p className="text-lg md:text-xl text-yellow-400/90 font-light tracking-wider uppercase">
              Premium Bar Services Partnership
            </p>
          </motion.div>

          {/* Transparent Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-black/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl" />
              <div className="relative z-10 text-center space-y-4">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  Two exceptional bars united in partnership, delivering 
                  <span className="text-yellow-400 font-medium"> premium cocktail experiences</span> 
                  {" "}for your special events and gatherings.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-yellow-400/80">
                  <span>• Custom Cocktails</span>
                  <span>• Expert Bartenders</span>
                  <span>• Event Catering</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtle Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex justify-center mt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2 text-yellow-400/50 hover:text-yellow-400/80 transition-colors cursor-pointer"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero