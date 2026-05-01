import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import WhatsAppButton from './WhatsAppButton.jsx';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'INÍCIO', path: '/' },
    { name: 'SERVIÇOS', path: '/services' },
    { name: 'SOBRE', path: '/about' },
    { name: 'GALERIA', path: '/gallery' },
    { name: 'CONTATO', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground border-b border-white/10 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-19 rounded-lg bg-primary flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                 <img
                  src="/assets/logo.jpeg"
                  alt="Eletricista profissional trabalhando com segurança"
                  className="w-full h-auto"
                />
            </div>
            <span className="text-xl font-bold">
              FELIPE TAROSSO - <span className="text-primary">Soluções Elétricas</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                  isActive(item.path) ? 'text-primary' : 'text-secondary-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90" />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-secondary-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary text-secondary-foreground border-white/10 w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors duration-200 hover:text-primary ${
                      isActive(item.path) ? 'text-primary' : 'text-secondary-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <WhatsAppButton 
                    variant="default" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;