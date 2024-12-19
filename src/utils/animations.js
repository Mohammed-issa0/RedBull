export const fadeInView = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  
  transition: { duration: 0.6 }
}

export const scaleInView = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  
  transition: { duration: 0.5 }
}

export const slideInView = (direction = "right") => ({
  initial: { 
    opacity: 0, 
   
  },
  whileInView: { 
    opacity: 1, 
   
  },
 
  transition: { duration: 0.5 }
})

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  },
  
}