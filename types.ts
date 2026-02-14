
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'purple' | 'blue';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}
