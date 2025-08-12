import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Award, Clock, ArrowRight, Phone, Calendar } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Shield,
      title: 'Atendimento Especializado',
      description: 'Cuidados cardiológicos com os mais altos padrões de qualidade'
    },
    {
      icon: Award,
      title: 'Excelência Médica',
      description: 'Profissionais altamente qualificados e experientes'
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil',
      description: 'Consultas rápidas sem comprometer a qualidade do cuidado'
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center medical-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/90 to-accent-50/80"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-4 h-4" />
              <span>Cardiologia Especializada</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Vivavida:</span>
              <br />
              Salvando o seu{' '}
              <span className="relative">
                coração
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Com excelência e dedicação, oferecemos cuidados cardiológicos personalizados para garantir sua saúde e bem-estar.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-5 h-5 mr-2" />
                Saiba Mais
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-3">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className="inline-block"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="w-24 h-24 text-primary-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Coração Saudável
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold">
                    Vida Plena
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                    <span className="font-medium text-gray-700">Prevenção Cardíaca</span>
                    <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-accent-50 rounded-xl">
                    <span className="font-medium text-gray-700">Diagnóstico Preciso</span>
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse animation-delay-200"></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                    <span className="font-medium text-gray-700">Tratamento Eficaz</span>
                    <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse animation-delay-400"></div>
                  </div>
                </div>

                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-semibold">Emergência 24h</p>
                  <p className="text-sm opacity-90">Atendimento quando você precisar</p>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-accent-200 rounded-full opacity-60"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-primary-200 rounded-full opacity-60"
              animate={{ 
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}