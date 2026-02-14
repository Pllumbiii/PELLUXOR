
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover="hover"
      className="relative aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer group"
    >
      <motion.img
        variants={{ hover: { scale: 1.1 } }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500"
      >
        <span className="text-[#00BFFF] font-semibold text-sm mb-2 tracking-wider uppercase">{project.category}</span>
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <div className="flex items-center space-x-2 text-white/60 group-hover:text-white transition-colors">
          <span className="text-sm">View Project</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
