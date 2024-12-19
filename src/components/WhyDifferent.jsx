import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaFlask, FaBolt } from 'react-icons/fa'
import { fadeInView, staggerContainer } from '../utils/animations'

export default function WhyDifferent() {
  const reasons = [
    {
      icon: <FaLeaf />,
      title: "مكونات طبيعية",
      description: "يحتوي على مكونات طبيعية 100% خالية من المواد الحافظة والملونات الاصطناعية"
    },
    {
      icon: <FaFlask />,
      title: "مستخلصات نباتية",
      description: "معزز بالطاقة من مستخلصات الأعشاب مثل الجينسنج وغاوستريا"
    },
    {
      icon: <FaBolt />,
      title: "فعالية سريعة",
      description: "يمنحك دفعة طاقة سريعة ضمن دقائق من تناوله"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          {...fadeInView}
        >
          ما الذي يجعل <span className="text-primary">RedBull</span> مختلفًا؟
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              {...fadeInView}
            >
              <div className="text-primary text-4xl mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}