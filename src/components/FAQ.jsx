import React from 'react'
import { motion } from 'framer-motion'
import { fadeInView } from '../utils/animations'

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.div 
      className="border-b border-gray-200 py-4"
      {...fadeInView}
    >
      <button
        className="flex justify-between items-center w-full text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-primary">{isOpen ? '-' : '+'}</span>
      </button>
      
      {isOpen && (
        <motion.div 
          className="mt-2 text-gray-600"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: "هل RedBull مناسب للجميع؟",
      answer: "نعم، الشغف يناسب معظم الأفراد لكن يُنصح بعدم تناوله للأطفال أو الحوامل."
    },
    {
      question: "كيف يمكنني استخدامه؟",
      answer: "يمكن تناوله بمفرده أو مزجه مع العصائر الطازجة."
    },
    {
      question: "هل يمكنني إرجاع المنتج؟",
      answer: "نعم، نحن نقدم ضمان استبدال أو إرجاع خلال 30 يومًا من الشراء إذا لم تكن راضيًا."
    },
    {
      question: "هل يحتوي على كافيين؟",
      answer: "نعم، يحتوي على نسبة معتدلة من الكافيين، مثالي لتحفيز الطاقة."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          {...fadeInView}
        >
          أسئلة شائعة
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}