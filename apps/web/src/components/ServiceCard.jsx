import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link = '/services' }) => {
  return (
    <Link to={link} className="block group">
      <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-white/5">
        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-secondary-foreground/80 leading-relaxed mb-6">{description}</p>
        <div className="flex items-center text-primary font-semibold transition-all duration-200 group-hover:gap-3 gap-2">
          <span>Saiba mais</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;