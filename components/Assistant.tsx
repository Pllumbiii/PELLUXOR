
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Loader2, Cpu } from 'lucide-react';
import { getAgencyAdvice } from '../geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; role: 'user' | 'ai' }[]>([
    { text: "Greetings. I am the Pelluxor Intelligence. How can I assist your digital evolution today?", role: 'ai' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, role: 'user' }]);
    setLoading(true);

    const aiResponse = await getAgencyAdvice(userMsg);
    setMessages(prev => [...prev, { text: aiResponse, role: 'ai' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-80 md:w-[400px] glass rounded-[2.5rem] shadow-2xl overflow-hidden border-[#6C3BFF]/20"
          >
            <div className="bg-gradient-to-r from-[#6C3BFF] to-[#00BFFF] p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3 text-white">
                <Cpu className="w-5 h-5 animate-pulse" />
                <span className="font-bold tracking-tight">Pelluxor Intelligence</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-black/40 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#6C3BFF] text-white rounded-br-none'
                        : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 rounded-bl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-[#00BFFF]" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-black/60 border-t border-white/10 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query digital services..."
                className="flex-1 text-sm bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#6C3BFF]"
              />
              <button
                type="submit"
                className="p-3 bg-[#6C3BFF] text-white rounded-xl hover:bg-[#5a31d6] transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-[#6C3BFF] to-[#00BFFF] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(108,59,255,0.4)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </div>
  );
};

export default Assistant;
