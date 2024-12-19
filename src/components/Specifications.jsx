import React from 'react'
import { motion } from 'framer-motion'
import { FaBox, FaLeaf, FaWineBottle } from 'react-icons/fa'
import { slideInView, staggerContainer } from '../utils/animations'

export default function Specifications() {
  const specs = [
    {
      icon: <FaWineBottle />,
      title: "حجم العبوة",
      description: "250 مل"
    },
    {
      icon: <FaLeaf />,
      title: "المكونات",
      description: "مستخلصات طبيعية، كافيين، فيتامينات، ومواد معدنية"
    },
    {
      icon: <FaBox />,
      title: "تصميم العبوة",
      description: "سهل الحمل والتناول في أي مكان"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          {...slideInView("right")}
        >
          المواصفات الأساسية
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              {...slideInView(index % 2 === 0 ? "right" : "left")}
            >
              <div className="text-primary text-4xl mb-4 flex justify-center">
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
              <p className="text-gray-600">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}