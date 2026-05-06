import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-4 backdrop-blur-md">
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden relative">
            <img
              src="VM.png"
              alt="Vista Media Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "VM.png";
              }}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight leading-none uppercase text-gradient">VISTA MEDIA IBRAHIMY</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest leading-none mt-1">SMKS IBRAHIMY 1 SUKOREJO</span>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-all uppercase tracking-widest"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-brand-dark z-[-1] flex flex-col items-center justify-center gap-8 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-display uppercase hover:text-brand-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
