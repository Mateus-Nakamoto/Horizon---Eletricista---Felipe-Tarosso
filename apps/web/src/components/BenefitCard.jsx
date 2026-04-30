import React from 'react';

const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
        <Icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitCard;