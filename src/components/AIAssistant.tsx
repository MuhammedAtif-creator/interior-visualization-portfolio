import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bot, Info, MessageCircle, Minus } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Welcome. I am here to guide you through Muhammed Atif's architectural portfolio. How may I assist you?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const responses: Record<string, string> = {
    'Service Expertise': 'Atif provides comprehensive interior design, high-fidelity 3D visualization, architectural space planning, and luxury material orchestration.',
    'Collaboration Inquiry': 'For new project commissions or collaborative inquiries, please use the direct channels listed in the navigation or contact section.',
    'Tool Proficiency': 'The practice utilizes an advanced technical stack comprising 3ds Max, V-Ray, AutoCAD, and the Adobe Creative Suite.',
    'Global Operations': 'Based in Dubai, UAE, handling prestigious projects across the Emirates while maintaining an integrated remote workflow for international clients.'
  };

  const handeQuickQuestion = (question: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: question,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: responses[question] || "For specific architectural inquiries, I recommend direct communication with Muhammed Atif.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 w-20 h-20 bg-main-bg border border-accent rounded-full flex items-center justify-center text-accent shadow-2xl z-[100] group overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-x-4 inset-y-4 border border-white/10 rounded-full group-hover:border-accent/40 transition-colors duration-500" />
        <MessageCircle size={28} strokeWidth={1.5} className="relative z-10" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-32 right-10 w-[450px] max-w-[90vw] h-[650px] bg-secondary-bg border border-divider shadow-2xl z-[100] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-divider flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <div className="w-10 h-10 border border-accent flex items-center justify-center text-accent">
                    <Info size={16} />
                 </div>
                 <div>
                    <h3 className="label-sm text-primary-text">CONCIERGE</h3>
                    <p className="text-[9px] uppercase tracking-widest text-accent font-medium">Portfolio Guide</p>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-secondary-text hover:text-accent transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-8 no-scrollbar space-y-8">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] space-y-3`}>
                    <div className={`label-sm text-[8px] flex items-center gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                       {msg.type === 'bot' ? 'ATIF_CONCIERGE' : 'CLIENT'}
                       <div className="w-1 h-1 bg-accent/40 rounded-full" />
                    </div>
                    <div className={`p-6 text-sm font-light leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-accent text-main-bg italic font-medium' 
                        : 'bg-main-bg border border-divider text-primary-text'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                   <div className="flex gap-2">
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-accent" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 h-1 bg-accent" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 h-1 bg-accent" />
                   </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Inquiries */}
            <div className="p-8 border-t border-divider bg-main-bg">
              <span className="label-sm text-[8px] text-secondary-text mb-6 block">RECOMMENDED INQUIRIES</span>
              <div className="grid grid-cols-1 gap-3">
                {Object.keys(responses).map((q) => (
                  <button
                    key={q}
                    onClick={() => handeQuickQuestion(q)}
                    disabled={isTyping}
                    className="group flex items-center justify-between py-4 px-6 border border-divider hover:border-accent transition-all duration-500 text-left"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-secondary-text group-hover:text-primary-text">{q}</span>
                    <Minus size={12} className="text-divider group-hover:text-accent group-hover:translate-x-2 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
