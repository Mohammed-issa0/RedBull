import React from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaRunning, FaSmile } from 'react-icons/fa'
import { scaleInView, staggerContainer } from '../utils/animations'

export default function Benefits() {
  const benefits = [
    {
      icon: <FaBrain />,
      title: "زيادة الإنتاجية",
      description: "يساعدك على البقاء مركزًا في عملك أو دراستك"
    },
    {
      icon: <FaRunning />,
      title: "تحسين الأداء الرياضي",
      description: "يزيد من قدرتك البدنية ويساعدك في تحقيق أهدافك الرياضية"
    },
    {
      icon: <FaSmile />,
      title: "راحة نفسية",
      description: "يساهم في التحسين العام للمزاج والشعور بالراحة والنشاط"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-yellow-400"
          {...scaleInView}
        >
          ماذا سيضيف <span className="text-primary">RedBull</span> إلى حياتك؟
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-yellow-400 p-6 rounded-lg shadow-lg text-center"
              {...scaleInView}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-primary text-4xl mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-2xl text-primary font-bold mb-3">{benefit.title}</h3>
              <p className="text-white">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}