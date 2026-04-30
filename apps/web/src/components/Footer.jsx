import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton.jsx';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FALE CONOSCO AGORA MESMO
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Solicite um orçamento gratuito e sem compromisso. Nossa equipe está pronta para atender você.
          </p>
          <WhatsAppButton 
            variant="secondary" 
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          />
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
            <div className="w-11 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                 <img
                  src="/assets/logo.jpeg"
                  alt="Eletricista profissional trabalhando com segurança"
                  className="w-full h-auto"
                />
            </div>
              <span className="text-xl font-bold">FELIPE TAROSSO</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Soluções elétricas com segurança, qualidade e profissionalismo. Atendemos Catanduva-SP e região com excelência.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-200 group">
                <Facebook className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-200 group">
                <Instagram className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-secondary-foreground/80">Instalação Elétrica</span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Residencial</span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Comercial</span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Industrial</span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Extrusoras elétricas</span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Ar condicionado </span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Padrão CFPL</span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Iluminação LED</span>
              </li>
              <li>
                <span className="text-secondary-foreground/80">Emergência 24h</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">(17) 99733-7339</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">Catanduva, SP - Atendemos toda a região</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© 2026 FELIPE TAROSSO - Soluções Elétricas. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-primary transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link to="#" className="hover:text-primary transition-colors duration-200">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;