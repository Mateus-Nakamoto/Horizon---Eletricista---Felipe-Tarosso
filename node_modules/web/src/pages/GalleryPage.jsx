import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import GalleryCard from '../components/GalleryCard.jsx';

const GalleryPage = () => {
  const galleryItems = [
    {
      image: '/assets/casa2.jpeg',
      title: 'Instalação Elétrica Residencial Completa',
      category: 'Residencial'
    },
    {
     image: '/assets/casa1.jpeg',
      title: 'Instalação de Tomadas e Interruptores',
      category: 'Residencial'
    },
    {
     image: '/assets/industria5.jpeg',
      title: 'Quadro de Distribuição Industrial',
      category: 'Industrial'
    },
    {
     image: '/assets/industria3.jpeg',
      title: 'Quadro de Distribuição Industrial',
      category: 'Industrial'
    },
    {
     image: '/assets/industria6.jpeg',
      title: 'Quadro de Distribuição Industrial',
      category: 'Industrial'
    },
    {
     image: '/assets/led.jpeg',
      title: 'Projeto de Iluminação LED Comercial',
      category: 'Iluminação'
    },
    {
     image: '/assets/iluminacao1.jpeg',
      title: 'Iluminação Decorativa Externa',
      category: 'Iluminação'
    },
    {
     image: '/assets/iluminacao2.jpeg',
      title: 'Manutenção Preventiva em Indústria',
      category: 'Manutenção'
    },
    {
     image: '/assets/padrao.jpeg',
      title: 'Instalação de Padrão CFPL',
      category: 'Padrão'
    },
    {
     image: '/assets/emergencia.jpeg',
      title: 'Serviço de Emergência Elétrica',
      category: 'Emergência'
    },
    {
     image: '/assets/automacao.jpeg',
      title: 'Automação Residencial',
      category: 'Automação'
    },
    {
     image: '/assets/aterramento.jpeg',
      title: 'Instalação de Sistema de Aterramento',
      category: 'Segurança'
    },
    {
     image: '/assets/quadro2.jpeg',
      title: 'Retrofit de Instalações Elétricas',
      category: 'Retrofit'
    },
    {
     image: '/assets/quadro.jpeg',
      title: 'Quadro de Comando e Proteção',
      category: 'Comercial'
    }
  ];

  const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Iluminação', 'Manutenção', 'Padrão', 'Emergência'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredItems = selectedCategory === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Galeria de Serviços - FELIPE TAROSSO - Eletricista</title>
        <meta name="description" content="Confira nossa galeria de projetos realizados: instalações elétricas, iluminação LED, manutenção e muito mais." />
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
              GALERIA DE <span className="text-primary">SERVIÇOS</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Confira alguns dos nossos trabalhos realizados com qualidade, segurança e profissionalismo
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <GalleryCard {...item} />
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;