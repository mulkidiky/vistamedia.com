import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.25v7.39c.01 4.94-3.9 9.3-8.83 9.31-4.96.01-9.33-4.04-9.31-9.01.02-4.99 4.1-9.3 9.1-9.28.1 0 .21 0 .31.01V7.93c-2.31-.19-4.54 1.35-5.32 3.54-.78 2.2-.14 4.79 1.6 6.33 1.74 1.54 4.38 1.83 6.42.75 1.4-.73 2.29-2.26 2.3-3.83V.02z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center transition-transform hover:scale-105 overflow-hidden relative">
                <img
                  src="/logo.png"
                  alt="Vista Media Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "VM.png";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-3xl tracking-tight leading-none block uppercase">VISTA MEDIA IBRAHIMY</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2 block">SMKS IBRAHIMY 1 SUKOREJO</span>
              </div>
            </div>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-md italic">
              "Capturing excellence in every frame. Building the future of visual storytelling."
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/vistamedia.ibrahimy/' },
                { Icon: Youtube, href: 'https://www.youtube.com/@vistamediaibrahimy' },
                { Icon: TikTokIcon, href: 'https://www.tiktok.com/@vistamedia.ibrahimy' },
                { Icon: Mail, href: 'mailto:vistamediaibrahimy@gmail.com' }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-indigo-400">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'Our Crew'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    <span>{link}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all transform -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-indigo-400">Connection</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-indigo-400 shrink-0" size={20} />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Situbondo, East Java, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-indigo-400 shrink-0" size={20} />
                <span className="text-slate-400 text-sm">vistamediaibrahimy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            &copy; 2024 VISTA MEDIA IBRAHIMY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase font-bold text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase font-bold text-slate-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
