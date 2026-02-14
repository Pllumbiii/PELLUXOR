
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight, ArrowRight, MousePointer2, Mail, Send, Cpu, Star } from 'lucide-react';
import { SERVICES, PROJECTS, SOCIALS, TESTIMONIALS } from './constants.tsx';
import SectionWrapper from '../components/SectionWrapper.tsx';
import ServiceCard from '../components/ServiceCard.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import Assistant from '../components/Assistant.tsx';
import logo from '../assets/logo.png';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-[#6C3BFF]/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C3BFF] to-[#00BFFF] z-[1000] origin-left"
        style={{ scaleX }}
      />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6C3BFF]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00BFFF]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/10' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-25 h-25 bg-gradient-to-br from-[#6C3BFF] to-[#4C1D95] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(108,59,255,0.4)]">
              <img 
  src={logo} 
  alt="Logo" 
  className="w-20 h-20 object-contain" 
/>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">PËLLUXOR</span>
          </div>

          <nav className="hidden md:flex items-center space-x-12 text-sm font-semibold tracking-wide uppercase text-slate-400">
            <a href="#about" className="hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFFF] transition-all group-hover:w-full" />
            </a>
            <a href="#services" className="hover:text-white transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C3BFF] transition-all group-hover:w-full" />
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFFF] transition-all group-hover:w-full" />
            </a>
            <a href="#contact" className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all">
              Contact
            </a>
          </nav>

          <div className="md:hidden">
            {/* Mobile menu toggle would go here */}
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-[#6C3BFF]/20 text-sm font-bold mb-8 text-[#00BFFF]">
              <div className="w-2 h-2 bg-[#6C3BFF] rounded-full animate-ping" />
              <span className="tracking-widest uppercase">The Digital Frontier</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
              <span className="block">Pelluxor –</span>
              <span className="gradient-text">Digital Innovation & Creative Solutions</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mb-12 font-medium leading-relaxed">
              We engineer futuristic experiences that transcend the ordinary. From high-performance web applications to cutting-edge AI automation.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#services"
                className="px-10 py-5 bg-[#6C3BFF] text-white rounded-2xl font-bold flex items-center space-x-3 hover:bg-[#5a31d6] transition-all hover:scale-105 neon-purple"
              >
                <span>View Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="px-10 py-5 glass border-white/20 text-white rounded-2xl font-bold flex items-center space-x-3 hover:bg-white/10 transition-all hover:scale-105 neon-blue"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 p-12 glass rounded-[4rem] border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-1000">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="Cyber Technology"
                className="w-full rounded-[3rem] shadow-2xl h-[500px] object-cover"
              />
              <div className="absolute -top-10 -right-10 p-8 glass rounded-3xl animate-bounce shadow-xl border-[#00BFFF]/30">
                <MousePointer2 className="w-8 h-8 text-[#00BFFF]" />
              </div>
            </div>
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#6C3BFF]/30 to-[#00BFFF]/30 blur-[120px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper id="about" className="relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="aspect-square glass rounded-3xl overflow-hidden"><img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                   <div className="aspect-[4/5] glass rounded-3xl overflow-hidden"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                </div>
                <div className="space-y-4">
                   <div className="aspect-[4/5] glass rounded-3xl overflow-hidden"><img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                   <div className="aspect-square glass rounded-3xl overflow-hidden"><img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                </div>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter text-white">Redefining Digital Possible.</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              At Pelluxor, we don't follow trends; we create them. Our team of visionary designers and engineers collaborate to build digital products that are not only functional but awe-inspiring.
            </p>
            <div className="space-y-4">
              {['Innovation First Mindset', 'Data-Driven Strategies', 'Futuristic Visual Design', 'Scaleable Architecture'].map((point, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 glass rounded-2xl border-white/5 hover:border-white/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C3BFF] to-[#00BFFF] flex items-center justify-center font-bold text-xs text-white">
                    {i + 1}
                  </div>
                  <span className="font-bold text-white tracking-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">Our Core Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Harness the power of next-gen technology to scale your brand to the moon.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionWrapper>

      {/* Portfolio Section */}
      <SectionWrapper id="portfolio">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">Selected Works</h2>
            <p className="text-slate-400 text-lg">A glimpse into the digital masterpieces we've crafted.</p>
          </div>
          <button className="hidden md:flex items-center space-x-3 text-white font-bold hover:text-[#00BFFF] transition-colors group">
            <span>View All Projects</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Social Media Section */}
      <SectionWrapper className="bg-gradient-to-b from-transparent via-[#6C3BFF]/5 to-transparent rounded-[4rem]">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold tracking-widest uppercase text-[#00BFFF] mb-4">Connect with us</h3>
          <p className="text-slate-400">Join our digital ecosystem across the web.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          {SOCIALS.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6C3BFF] hover:shadow-[0_0_20px_rgba(108,59,255,0.4)] transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="grid lg:grid-cols-2 gap-20 glass p-12 md:p-20 rounded-[4rem] border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFFF]/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-10 leading-none">Ready to Evolve?</h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-[#6C3BFF]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <p className="text-slate-400">hello@pelluxor.io</p>
                </div>
              </div>
              <div className="p-8 glass rounded-3xl border-white/5 space-y-4">
                <p className="text-slate-300 italic font-medium">"Pelluxor didn't just build a website; they built a vision. The level of innovation is strictly next-level."</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800" />
                  <div>
                    <span className="block font-bold text-white">Dante Graves</span>
                    <span className="text-xs text-[#00BFFF] uppercase font-bold tracking-widest">Founder, CyberOps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]/50 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-[#6C3BFF] to-[#00BFFF] text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:scale-[1.02] transition-all shadow-xl"
            >
              <span>Initiate Transmission</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
               <div className="w-8 h-8 bg-gradient-to-br from-[#6C3BFF] to-[#00BFFF] rounded-lg flex items-center justify-center">
                  <Cpu className="text-white w-4 h-4" />
               </div>
               <span className="text-xl font-black text-white">PELLUXOR</span>
            </div>
            <div className="flex space-x-10 text-xs font-bold uppercase tracking-widest text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <p className="text-center text-slate-600 text-xs font-medium">© 2026 Pelluxor Innovation Agency. Engineered for the future.</p>
        </div>
      </footer>

      {/* Overlays */}
      <Assistant />
    </div>
  );
};

export default App;
