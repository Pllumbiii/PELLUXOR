
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const accentColor = service.color === 'purple' ? 'border-[#6C3BFF]/30 group-hover:border-[#6C3BFF]' : 'border-[#00BFFF]/30 group-hover:border-[#00BFFF]';
  const glowClass = service.color === 'purple' ? 'group-hover:shadow-[0_0_30px_rgba(108,59,255,0.2)]' : 'group-hover:shadow-[0_0_30px_rgba(0,191,255,0.2)]';
  const iconBg = service.color === 'purple' ? 'bg-[#6C3BFF]/20 text-[#6C3BFF]' : 'bg-[#00BFFF]/20 text-[#00BFFF]';

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group glass p-10 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden ${accentColor} ${glowClass}`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${iconBg}`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
        {service.description}
      </p>
      
      {/* Background Glow Element */}
      <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${service.color === 'purple' ? 'bg-[#6C3BFF]' : 'bg-[#00BFFF]'}`} />
    </motion.div>
  );
};

export default ServiceCard;
