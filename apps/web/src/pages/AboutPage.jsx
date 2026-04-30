import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Target, CheckCircle, Zap } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import BenefitCard from '../components/BenefitCard.jsx';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Segurança em Primeiro Lugar',
      description: 'Todos os nossos serviços seguem rigorosamente as normas técnicas NBR 5410 e NR-10, garantindo máxima segurança para você e sua família.'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Utilizamos apenas materiais de primeira linha e equipamentos modernos, oferecendo garantia em todos os serviços realizados.'
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais certificados e com vasta experiência no mercado, em constante atualização técnica e treinamento.'
    },
    {
      icon: Target,
      title: 'Compromisso com Resultados',
      description: 'Trabalhamos com foco na satisfação do cliente, cumprindo prazos e entregando soluções eficientes e duradouras.'
    }
  ];

  const credentials = [
    'Certificação NR-10 (Segurança em Instalações Elétricas)',
    'Registro no CREA (Conselho Regional de Engenharia)',
    'Mais de 10 anos de experiência no mercado',
    'Mais de 500 projetos concluídos com sucesso',
    'Equipe técnica especializada e certificada',
    'Parceria com as melhores marcas do mercado'
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós - FELIPE TAROSSO - Eletricista</title>
        <meta name="description" content="Conheça a ELECTRIC Soluções Elétricas: mais de 10 anos de experiência, equipe qualificada e compromisso com segurança e qualidade." />
      </Helmet>

      <Header />

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              FELIPE TAROSSO - <span className="text-primary">SOLUÇÕES ELÉTRICAS</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Excelência em serviços elétricos com segurança, qualidade e profissionalismo
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Felipe Tarosso - Soluções Elétricas nasceu da paixão por oferecer serviços elétricos de excelência, 
                  combinando segurança, qualidade e atendimento personalizado. Com mais de 10 anos de experiência 
                  no mercado, nos consolidamos como referência em instalações e manutenções elétricas.
                </p>
                <p>
                  Nossa equipe é formada por profissionais altamente qualificados e certificados, que passam por 
                  treinamentos constantes para estar sempre atualizados com as melhores práticas e tecnologias 
                  do setor elétrico.
                </p>
                <p>
                  Atendemos residências, comércios e indústrias em toda a região, sempre com o compromisso de 
                  entregar soluções eficientes, seguras e duradouras. Cada projeto é tratado com atenção aos 
                  detalhes e foco na satisfação total do cliente.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/profile.jpeg"
                  alt="Equipe trabalhando"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
              Nosso compromisso com excelência guia cada decisão e ação
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer soluções elétricas de excelência, garantindo segurança, qualidade e satisfação 
                  total dos nossos clientes através de serviços profissionais e atendimento personalizado.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a empresa referência em serviços elétricos na região, destacando-se 
                  pela qualidade técnica, inovação e compromisso com a segurança.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Segurança, qualidade, ética, transparência, compromisso com prazos, respeito ao cliente 
                  e busca constante pela excelência em cada serviço realizado.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Nossos Diferenciais
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BenefitCard {...value} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Credenciais e Certificações
            </h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
              Qualificação técnica e experiência comprovada
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{credential}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;