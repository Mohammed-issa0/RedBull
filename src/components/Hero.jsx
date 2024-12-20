import React from 'react'
import { motion } from 'framer-motion'
import ProductSlider from "../ProductSlider/index"
import vd from "../../public/vd.mp4"
function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-100 flex items-center justify-center py-16">
  <video
    src={vd}
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  />
  <div className="absolute inset-0 bg-black opacity-50" /> {/* طبقة شفافة */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
    <motion.h1
        className="text-6xl md:text-6xl font-bold mb-6 text-white" // إضافة لون النص
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className='text-primary '>Red</span>Bull
      </motion.h1>
      <motion.h1
        className="text-3xl md:text-6xl font-bold mb-6 text-white" // إضافة لون النص
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        هل تبحث عن مشروب يمنحك <span className='text-primary'>القوة</span> و<span className='text-primary'>النشاط</span> طوال اليوم؟
      </motion.h1>

      <motion.p
        className="text-2xl md:text-2xl text-gray-300 mb-8" // لون النص
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
        animate={{ scale: [.95, 1.05] }}
        transition={{ duration: .5 }}
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