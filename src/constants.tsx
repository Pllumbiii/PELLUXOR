
import React from 'react';
import { Code, Share2, Palette, Cpu, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Service, Project, Testimonial } from '../types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web Development',
    description: 'High-performance, futuristic web applications built with cutting-edge tech stacks.',
    icon: <Code className="w-6 h-6" />,
    color: 'purple'
  },
  {
    id: 's2',
    title: 'Social Media Marketing',
    description: 'Strategic digital growth and engagement campaigns across all social platforms.',
    icon: <Share2 className="w-6 h-6" />,
    color: 'blue'
  },
  {
    id: 's3',
    title: 'Branding & Design',
    description: 'Distinctive visual identities that resonate with your target audience.',
    icon: <Palette className="w-6 h-6" />,
    color: 'purple'
  },
  {
    id: 's4',
    title: 'AI Automation',
    description: 'Custom AI solutions to streamline workflows and maximize efficiency.',
    icon: <Cpu className="w-6 h-6" />,
    color: 'blue'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Cyber-Vibe E-commerce',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1614332284683-51ebe9023b62?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: 'p2',
    title: 'Nova Branding Identity',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: 'p3',
    title: 'Lumina Social Growth',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: 'p4',
    title: 'Quantum AI Dashboard',
    category: 'AI Solutions',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

export const SOCIALS = [
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com' },
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com' },
  { name: 'X', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena Vance",
    role: "CEO, TechSphere",
    content: "Pelluxor transformed our digital presence. Their attention to futuristic detail is unmatched."
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Marketing Director",
    content: "The AI automation they built for us saved over 40 hours of manual labor per week. Game changer."
  }
];
