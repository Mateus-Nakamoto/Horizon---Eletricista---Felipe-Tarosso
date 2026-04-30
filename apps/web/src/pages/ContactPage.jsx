import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
			content: '(17) 99733-7339',
      link: 'tel:+5517997337339'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@electric.com.br',
      link: 'mailto:contato@electric.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Catanduva, SP - Atendemos toda a região',
      link: null
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 8h às 18h | Emergências: 24h',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - FELIPE TAROSSO - Eletricista</title>
        <meta name="description" content="Entre em contato com a ELECTRIC. Solicite um orçamento gratuito ou tire suas dúvidas. Atendimento 24h para emergências." />
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
              ENTRE EM <span className="text-primary">CONTATO</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Solicite um orçamento gratuito ou tire suas dúvidas. Estamos prontos para atender você.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Envie sua Mensagem</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível. 
                Para emergências, utilize nosso atendimento via WhatsApp disponível 24 horas.
              </p>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Atendimento via WhatsApp</h3>
                <p className="mb-6 leading-relaxed">
                  Precisa de atendimento rápido? Fale conosco diretamente pelo WhatsApp e receba 
                  resposta imediata para suas dúvidas ou emergências.
                </p>
                <WhatsAppButton 
                  variant="secondary"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Nossa Localização</h2>
            <div className="bg-muted rounded-2xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-49.0%2C-21.4%2C-48.7%2C-21.1&layer=mapnik&marker=-21.2802%2C-48.9842"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Mapa de localização ELECTRIC Soluções Elétricas em Catanduva, SP"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Catanduva - SP, Brasil
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;