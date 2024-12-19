import React from 'react'
import { motion } from 'framer-motion'
import { scaleInView } from '../utils/animations'

export default function CTA() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center text-white"
          {...scaleInView}
        >
          <h2 className="text-3xl font-bold mb-6">لا تفوت الفرصة!</h2>
          <p className="text-xl mb-8">
            تبقى أقل من 50 عبوة بسعر العرض الخاص.
            <br />
            اطلب الآن واحصل على شحن مجاني!
          </p>
          
          <motion.button 
            className="bg-white text-primary text-xl px-8 py-3 rounded-full hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            اطلب الآن
          </motion.button>

          <p className="mt-8 text-lg">
            مشروب RedBull مشروب يمنحك القوة والحيوية التي تحتاجها لتعيش كل لحظة بأفضل شكل!
          </p>
        </motion.div>
      </div>
    </section>
  )
}