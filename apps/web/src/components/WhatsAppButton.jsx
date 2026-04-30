import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = ({ variant = 'default', size = 'default', className = '', message = '' }) => {
  const phoneNumber = '5517997337339';
  const defaultMessage = message || 'Olá! Gostaria de solicitar um orçamento para serviços elétricos.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`transition-all duration-200 ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      CHAMAR NO WHATSAPP
    </Button>
  );
};

export default WhatsAppButton;