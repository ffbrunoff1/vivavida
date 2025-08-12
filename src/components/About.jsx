import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Clock, CheckCircle, TrendingUp, Shield, Target } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '5000+', label: 'Pacientes Atendidos', icon: Users },
    { number: '98%', label: 'Taxa de Satisfação', icon: Heart },
    { number: '24/7', label: 'Atendimento Emergencial', icon: Clock }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Dedicação Médica',
      description: 'Comprometimento com os mais altos padrões de qualidade em cardiologia, utilizando tecnologia de ponta e técnicas avançadas.'
    },
    {
      icon: Heart,
      title: 'Cuidado Humanizado',
      description: 'Tratamento personalizado e acolhedor, onde cada paciente recebe atenção individual e cuidados adaptados às suas necessidades.'
    },
    {
      icon: Target,
      title: 'Prevenção Focada',
      description: 'Enfoque na medicina preventiva, orientando nossos pacientes sobre hábitos saudáveis e prevenção de doenças cardiovasculares.'
    },
    {
      icon: TrendingUp,
      title: 'Melhoria Contínua',
      description: 'Constante atualização em conhecimentos médicos e técnicas inovadoras para oferecer sempre o melhor tratamento disponível.'
    }
  ]

  const achievements = [
    'Especialização em Cardiologia Clínica e Intervencionista',
    'Certificação em Ecocardiografia Doppler',
    'Membro da Sociedade Brasileira de Cardiologia',
    'Pós-graduação em Medicina Preventiva',
    'Experiência em Hospitais de Referência',
    'Participação em Congressos Internacionais'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-primary-25 to-accent-25">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heart className="w-4 h-4" />
            <span>Sobre a Vivavida</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Dedicados à{' '}
            <span className="gradient-text">Saúde do seu Coração</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Vivavida nasceu da paixão por cuidar de vidas. Nossa missão é proporcionar cuidados cardiológicos excepcionais, 
            combinando expertise médica, tecnologia avançada e o calor humano que cada paciente merece.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-2xl opacity-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <motion.div
                    className="inline-block"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Nossa Filosofia
                  </h3>
                </div>

                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Comprometimento com a Dedicação
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Na Vivavida, entendemos que cada coração tem sua própria história. Por isso, oferecemos 
                um atendimento personalizado, onde a tecnologia de ponta se encontra com o cuidado humano genuíno.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa equipe está constantemente se atualizando com as mais recentes descobertas em cardiologia, 
                garantindo que nossos pacientes recebam sempre o melhor tratamento disponível.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card p-6 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center group"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <value.icon className="w-8 h-8 text-primary-600" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Sua Saúde Cardíaca é Nossa Prioridade
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Agende sua consulta hoje e descubra como podemos ajudar você a manter um coração saudável e uma vida plena.
            </p>
            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Agendar Consulta Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}