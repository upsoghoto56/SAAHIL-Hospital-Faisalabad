export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-8 px-4 md:px-8 border-t border-[#0D6E6E]/30 shrink-0">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-[13px]">
        <div className="text-center md:text-left">
          <div className="font-bold text-[15px] mb-1">SAAHIL Hospital Faisalabad</div>
          <div className="text-gray-400 text-[11px] uppercase tracking-wide">Caring for Women, Every Step of the Way</div>
        </div>
        <div className="text-center space-y-2 text-gray-300">
          <div>📍 1-Sheikhupura Road, Faisalabad</div>
          <div>📞 +92 320 6657377</div>
        </div>
        <div className="text-center md:text-right">
          <div className="text-[11px] text-gray-400">© 2025 SAAHIL Hospital | Dr. Abeera Ali</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#C9956C] mt-2">Best Gynecologist in Faisalabad</div>
        </div>
      </div>
    </footer>
  );
}
