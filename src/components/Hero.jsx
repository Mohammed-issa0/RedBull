import React from 'react'
import { motion } from 'framer-motion'
import ProductSlider from "../ProductSlider/index"
function Hero() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            هل تبحث عن مشروب يمنحك القوة والنشاط طوال اليوم؟
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            اكتشف Redfox، مشروب الطاقة الذي يعزز حيويتك ويجعل كل لحظة مليئة بالحيوية والنشاط.
          </motion.p>
          
          <motion.button
            className="bg-primary text-white text-xl px-8 py-3 rounded-full hover:bg-red-600 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{scale:[.95 , 1.05]}}
            transition={{duration: .5}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            اطلب الآن
          </motion.button>
        </div>
        <ProductSlider />
      </div>
    </section>
  )
}

export default Hero