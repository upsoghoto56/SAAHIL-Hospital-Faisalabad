import { Phone, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0D6E6E] text-white text-[12px] px-8 py-2 shadow-sm z-50 relative hidden sm:block shrink-0">
      <div className="container mx-auto max-w-7xl flex justify-between items-center font-medium">
        <div className="flex items-center gap-2 hover:text-[#C9956C] transition-colors">
          <Phone className="w-3.5 h-3.5" />
          <a href="tel:+923206657377">+92 320 6657377</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-green-500 px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            Open 24 Hours
          </span>
        </div>
      </div>
    </div>
  );
}
