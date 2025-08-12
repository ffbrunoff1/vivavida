import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Activity, Stethoscope, Calendar, Shield, Clock, User, Phone, ArrowRight, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Consulta Cardiológica',
      description: 'Avaliação completa da saúde cardiovascular com exame físico detalhado e análise do histórico médico.',
      features: ['Anamnese detalhada', 'Exame físico cardiovascular', 'Avaliação de fatores de risco', 'Orientações preventivas'],
      duration: '45 min',
      price: 'Consulte valores'
    },
    {
      icon: Activity,
      title: 'Eletrocardiograma (ECG)',
      description: 'Exame que registra a atividade elétrica do coração para detectar arritmias e outras alterações.',
      features: ['Análise do ritmo cardíaco', 'Detecção de arritmias', 'Avaliação da condução elétrica', 'Laudo imediato'],
      duration: '20 min',
      price: 'Consulte valores'
    },
    {
      icon: Heart,
      title: 'Ecocardiograma',
      description: 'Ultrassom do coração que avalia a estrutura e função cardíaca em tempo real.',
      features: ['Avaliação das válvulas', 'Função ventricular', 'Análise doppler', 'Imagens em alta resolução'],
      duration: '30 min',
      price: 'Consulte valores'
    },
    {
      icon: Activity,
      title: 'Teste Ergométrico',
      description: 'Avaliação da capacidade cardiovascular durante exercício físico controlado.',
      features: ['Avaliação de isquemia', 'Capacidade funcional', 'Pressão arterial de esforço', 'Prescrição de exercícios'],
      duration: '60 min',
      price: 'Consulte valores'
    },
    {
      icon: Clock,
      title: 'Holter 24h',
      description: 'Monitoramento contínuo do ritmo cardíaco por 24 horas para detectar arritmias intermitentes.',
      features: ['Monitoramento contínuo', 'Detecção de arritmias', 'Análise de variabilidade', 'Relatório detalhado'],
      duration: '24 horas',
      price: 'Consulte valores'
    },
    {
      icon: Shield,
      title: 'Check-up Preventivo',
      description: 'Avaliação cardiológica completa para prevenção de doenças cardiovasculares.',
      features: ['Exames laboratoriais', 'Avaliação de risco', 'Orientação nutricional', 'Plano preventivo'],
      duration: '90 min',
      price: 'Consulte valores'
    }
  ]

  const emergencyFeatures = [
    'Atendimento 24 horas',
    'Equipe especializada',
    'Equipamentos de emergência',
    'Protocolos atualizados'
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
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
            <span>Nossos Serviços</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Cuidados{' '}
            <span className="gradient-text">Cardiológicos Completos</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de serviços cardiológicos, desde consultas preventivas até exames diagnósticos 
            avançados, sempre com foco na sua saúde e bem-estar.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card p-8 h-full flex flex-col group"
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
                <service.icon className="w-8 h-8 text-primary-600" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">{service.price}</span>
                </div>
              </div>

              <motion.button
                onClick={scrollToContact}
                className="btn-primary w-full group mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Phone className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold">Atendimento de Emergência</h3>
              </div>
              
              <p className="text-xl opacity-90 mb-8">
                Estamos disponíveis 24 horas por dia para atendimentos de emergência cardiológica. 
                Sua saúde não pode esperar.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {emergencyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <p className="text-lg font-bold mb-2">Linha de Emergência</p>
                <p className="text-2xl font-bold">0800 123 4567</p>
                <p className="text-sm opacity-90 mt-2">Disponível 24h/7 dias</p>
              </motion.div>
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
                Tecnologia de Ponta a Serviço da sua Saúde
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Utilizamos equipamentos de última geração para garantir diagnósticos precisos e tratamentos eficazes. 
                Nossa estrutura foi pensada para oferecer conforto e segurança em todos os procedimentos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada exame é realizado por profissionais altamente qualificados, seguindo protocolos rigorosos 
                de qualidade e segurança para garantir resultados confiáveis.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-xl">
                <User className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600 text-sm">Cada paciente recebe atenção individual e cuidados sob medida.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-accent-50 rounded-xl">
                <Shield className="w-6 h-6 text-accent-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Protocolos de Segurança</h4>
                  <p className="text-gray-600 text-sm">Seguimos rigorosos padrões de segurança e higiene.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-xl">
                <Clock className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Agilidade nos Resultados</h4>
                  <p className="text-gray-600 text-sm">Laudos e resultados entregues no menor tempo possível.</p>
                </div>
              </div>
            </div>

            <motion.button
              onClick={scrollToContact}
              className="btn-primary w-full group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Consulta Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}