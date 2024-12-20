import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { FaQuoteRight } from 'react-icons/fa'
import { fadeInView } from '../utils/animations'

export default function Testimonials() {
  const testimonials = [
    {
      text: "شغف الطاقة هو أفضل مشروب جربته! أشعر بالقوة والطاقة طوال اليوم.",
      name: "رامي",
      age: "30"
    },
    {
      text: "لم أعد أشعر بالتعب خلال حصص الرياضة بعد استخدامه. منتج رائع!",
      name: "ليلى",
      age: "25"
    },
    {
      text: "أنا أحبه كوجبة خفيفة قبل العمل. ساعدني كثيرًا في زيادة الإنتاجية.",
      name: "سامي",
      age: "28"
    },
    {
      text: "كنت أبحث عن شيء يمنحني الطاقة الطبيعية، ووجدت ضالتي!",
      name: "سارة",
      age: "35"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-primary"
          {...fadeInView}
        >
          تجارب العملاء 
        </motion.h2>

        <motion.div
          {...fadeInView}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 text-right">
                <div className="bg-primary p-6 rounded-lg shadow-lg">
                  <FaQuoteRight className="text-yellow-400 w-full text-right text-4xl mb-4" />
                  <p className="text-white mb-4 font-semibold" dir='rtl'>{testimonial.text}</p>
                  <div className="font-bold text-yellow-400" dir='rtl'>
                    {testimonial.name}، {testimonial.age}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  )
}