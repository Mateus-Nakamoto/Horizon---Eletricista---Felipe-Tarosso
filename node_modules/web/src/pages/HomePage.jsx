import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Zap, Wrench, Lightbulb, AlertCircle, Grid3x3, CheckCircle, Target, Users, ThumbsUp } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import BenefitBadge from '../components/BenefitBadge.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import BenefitCard from '../components/BenefitCard.jsx';
import GalleryCard from '../components/GalleryCard.jsx';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const services = [
    {
      icon: Zap,
      title: 'Instalação Elétrica',
      description: 'Instalações elétricas residenciais, comerciais e industriais com segurança e qualidade garantida.'
    },
    {
      icon: Grid3x3,
      title: 'Quadros de Distribuição',
      description: 'Instalação e manutenção de quadros de distribuição com componentes de alta qualidade.'
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description: 'Manutenção periódica para evitar problemas e garantir o funcionamento seguro do seu sistema elétrico.'
    },
    {
      icon: Lightbulb,
      title: 'Extrusoras elétricas',
      description: 'Instalador de extrusoras elétricas especializado em montagem, manutenção e operação segura de sistemas industriais de extrusão.'
    },
    {
      icon: AlertCircle,
      title: 'Instalador de ar-condicionado',
      description: 'Instalador de ar-condicionado especializado em instalação, manutenção e otimização de sistemas de climatização residencial e comercial.'
    },
    {
      icon: Grid3x3,
      title: 'Infraestruturas elétricas',
      description: 'Inclui eletrodutos, canaletas, caixas, suportes e toda a infraestrutura necessária para uma instalação elétrica segura e conforme as normas.'
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 10 anos de experiência no mercado, atendendo clientes residenciais, comerciais e industriais com excelência.'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Todos os serviços seguem rigorosamente as normas técnicas NBR 5410 e NR-10, garantindo máxima segurança.'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas materiais de primeira linha e equipamentos modernos para garantir durabilidade e eficiência.'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Respeitamos prazos e horários combinados. Atendimento rápido e eficiente, inclusive em emergências 24h.'
    }
  ];

  const galleryItems = [
    {
      image: '/assets/industria2.jpeg',
      title: 'Serviços industriais e comerciais',
      category: 'Residencial'
    },
    {
      image: '/assets/industria5.jpeg',
      title: 'Quadro de Distribuição',
      category: 'Comercial'
    },
    {
      image: '/assets/led.jpeg',
      title: 'Infraestruturas elétricas',
      category: 'Iluminação'
    },
    {
      image: '/assets/industria3.jpeg',
      title: 'Manutenção Preventiva',
      category: 'Manutenção'
    }
  ];

  return (
    <>
      <Helmet>
        <title>FELIPE TAROSSO - Eletricista - Serviços Elétricos com Segurança e Qualidade</title>
        <meta name="description" content="Serviços elétricos residenciais, comerciais e industriais em São Paulo. Instalação, manutenção, emergência 24h. Orçamento grátis." />
      </Helmet>

      <Header />

      <section className="relative min-h-[100dvh] bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/95" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[100dvh] py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                SOLUÇÕES <span className="text-primary">ELÉTRICAS</span> COM SEGURANÇA E QUALIDADE
              </h1>
              <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                Profissionais qualificados e experientes para atender suas necessidades elétricas com excelência e segurança.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-10">
                <BenefitBadge
                  icon={Award}
                  title="Profissional Qualificado"
                  description="Equipe certificada e experiente"
                />
                <BenefitBadge
                  icon={Clock}
                  title="Atendimento Rápido"
                  description="Emergência 24 horas"
                />
                <BenefitBadge
                  icon={Shield}
                  title="Garantia em todos os serviços"
                  description="Qualidade e segurança garantidas"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  <Link to="/contact">SOLICITAR ORÇAMENTO</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  <Link to="/services">NOSSOS SERVIÇOS</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/home.png"
                  alt="Eletricista profissional trabalhando com segurança"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">ATENDIMENTO 24h EMERGÊNCIA</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">ORÇAMENTO GRÁTIS</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">PAGAMENTO FACILITADO</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">ATENDEMOS TODA A REGIÃO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NOSSOS SERVIÇOS</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferecemos soluções completas em serviços elétricos para residências, comércios e indústrias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">POR QUE ESCOLHER A FELIPE TAROSSO - Soluções Elétricas?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Compromisso com excelência, segurança e satisfação do cliente em cada projeto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BenefitCard {...benefit} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GALERIA DE SERVIÇOS</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Confira alguns dos nossos trabalhos realizados com qualidade e profissionalismo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GalleryCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            >
              <Link to="/gallery">VER GALERIA COMPLETA</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;