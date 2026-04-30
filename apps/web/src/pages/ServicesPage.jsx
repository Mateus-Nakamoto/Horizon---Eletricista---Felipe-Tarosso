import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Wrench, Grid3x3, Lightbulb, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: Zap,
      title: 'Instalação Elétrica',
      description: 'Realizamos instalações elétricas completas para residências, comércios e indústrias, seguindo rigorosamente as normas técnicas NBR 5410.',
      features: [
        'Projeto elétrico completo',
        'Instalação de tomadas e interruptores',
        'Cabeamento estruturado',
        'Instalação de disjuntores e proteções',
        'Aterramento e SPDA'
      ],
      image: '/assets/industria2.jpeg',
      pricing: 'Consulte-nos para orçamento personalizado'
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description: 'Manutenção periódica do sistema elétrico para identificar e corrigir problemas antes que se tornem emergências, garantindo segurança e economia.',
      features: [
        'Inspeção termográfica',
        'Teste de disjuntores e proteções',
        'Verificação de conexões',
        'Medição de corrente e tensão',
        'Relatório técnico detalhado'
      ],
      image: '/assets/industria3.jpeg',
      pricing: 'Consulte-nos para orçamento personalizado'
    },
    {
      icon: Grid3x3,
      title: 'Montagem de painéis',
      description: 'Serviço especializado em montagem de painéis elétricos para aplicações residenciais, comerciais e industriais. O objetivo é garantir organização, segurança, proteção dos circuitos e facilidade de manutenção, seguindo normas técnicas e boas práticas da elétrica.',
      features: [
        'Montar painéis elétricos organizados e seguros',
        'Distribuir corretamente os circuitos',
        'Proteger equipamentos e instalações',
        'Facilitar manutenção futura',
        'Atender normas técnicas (NR-10 / NBR 5410 quando aplicável)'
      ],
      image: '/assets/industria5.jpeg',
      pricing: 'Consulte-nos para orçamento personalizado'
    },
    {
      icon: Lightbulb,
      title: 'Serviços  industriais comerciais',
      description: 'Serviços elétricos industriais e comerciais voltados para instalação, manutenção e adequação de sistemas elétricos em empresas, comércios, indústrias e galpões. O foco é garantir segurança, eficiência energética, confiabilidade e funcionamento contínuo das operações.',
      features: [
        'Garantir funcionamento seguro da instalação elétrica',
        'Atender demandas industriais e comerciais',
        'Evitar paradas por falhas elétricas',
        'Melhorar distribuição de carga',
        'Aumentar eficiência energética',
        'Adequar instalações às normas técnicas'
      ],
      image: '/assets/gancho.jpeg',      
      pricing: 'Consulte-nos para orçamento personalizado'
    },
    {
      icon: AlertCircle,
      title: 'Emergência Elétrica 24h',
      description: 'Atendimento emergencial 24 horas para resolver problemas elétricos urgentes com rapidez e segurança, evitando riscos e prejuízos.',
      features: [
        'Atendimento imediato',
        'Equipe disponível 24/7',
        'Diagnóstico rápido',
        'Solução definitiva',
        'Garantia do serviço'
      ],
      image: '/assets/emergencia.jpeg',      
      pricing: 'Consulte-nos para orçamento personalizado'
    },
    {
      icon: Grid3x3,
      title: 'Infraestrutura elétricas',
      description: 'Serviço de infraestrutura elétrica para preparar o local antes da instalação dos cabos e equipamentos. Inclui passagem de eletrodutos, canaletas, caixas, suportes e toda a base necessária para uma instalação elétrica organizada, segura e dentro das normas.',
      features: [
        'Preparar estrutura para instalação elétrica',
        'Organizar passagem dos cabos',
        'Garantir segurança e proteção dos fios',
        'Facilitar manutenção futura',
        'Evitar improvisos na instalação',
        'Seguir padrões técnicos profissionais'
      ],
      image: '/assets/infraestrutura.jpeg',     
      pricing: 'Consulte-nos para orçamento personalizado'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços Elétricos - FELIPE TAROSSO - Eletricista</title>
        <meta name="description" content="Conheça todos os nossos serviços elétricos: instalação, manutenção, padrão CFPL, iluminação LED, emergência 24h e quadros de distribuição." />
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
              NOSSOS <span className="text-primary">SERVIÇOS</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Soluções completas em serviços elétricos com qualidade, segurança e garantia. Atendemos residências, comércios e indústrias.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-muted rounded-xl px-6 py-3">
                      <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                      <p className="font-bold text-lg">{service.pricing}</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    <Link to="/contact">
                      SOLICITAR ORÇAMENTO
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;