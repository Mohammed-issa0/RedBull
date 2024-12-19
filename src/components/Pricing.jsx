import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaShippingFast } from 'react-icons/fa'

function Pricing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">السعر</h2>
            <div className="text-4xl font-bold text-primary mb-4">
              $6 <span className="text-sm text-gray-500">$10</span>
            </div>
            <div className="text-red-500  mb-6">وفر 40% لفترة محدودة!</div>
            
            <ul className="text-right mb-8">
              <li className="flex items-center mb-2">
                <FaShippingFast className="text-primary" />
                <span className="mr-2">شحن مجاني</span>
              </li>
              <li className="flex items-center  mb-2">
                <FaCheck className="text-primary" />
                <span className="mr-2">ضمان استرجاع لمدة 30 يوم</span>
              </li>
            </ul>

            <motion.button 
              className="bg-primary text-white text-xl px-8 py-3 rounded-full hover:bg-red-600 transition w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              اطلب الآن
            </motion.button>

            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing