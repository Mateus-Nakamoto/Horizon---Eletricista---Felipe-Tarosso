import React from 'react';

const BenefitBadge = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-200 hover:bg-white/10">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
        <p className="text-white/70 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BenefitBadge;