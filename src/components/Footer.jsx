import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const services = [
    'Consulta Cardiológica',
    'Eletrocardiograma',
    'Ecocardiograma',
    'Teste Ergométrico',
    'Holter 24h',
    'Check-up Preventivo'
  ]

  const contactInfo = [
    { icon: Phone, text: '(11) 9999-8888' },
    { icon: Mail, text: 'contato@vivavida.com.br' },
    { icon: MapPin, text: 'São Paulo, SP' },
    { icon: Clock, text: 'Seg-Sex: 8h às 18h' }
  ]

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="relative z-10">
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <Heart className="w-10 h-10 text-primary-400 heart-pulse" />
                  <div className="absolute inset-0 heart-pulse">
                    <Heart className="w-10 h-10 text-accent-400 opacity-30" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Vivavida</h1>
                  <p className="text-sm font-medium text-primary-400">Cardiologia</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dedicados a cuidar da sua saúde cardíaca com excelência, tecnologia avançada e 
                o cuidado humano que você merece.
              </p>
              
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-2">Coração Saudável</h4>
                <p className="text-white/90 text-sm">Vida Plena</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Navegação</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-300 hover:text-accent-400 transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <contact.icon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300">{contact.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 bg-gray-700 rounded-2xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-white mb-2">Emergência 24h</h4>
                <p className="text-red-400 font-bold text-lg">192 (SAMU)</p>
                <p className="text-gray-400 text-sm">Atendimento de urgência</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.p
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                © 2023 Vivavida. Todos os direitos reservados. Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  Papum
                </a>
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">Voltar ao Topo</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl"></div>
    </footer>
  )
}