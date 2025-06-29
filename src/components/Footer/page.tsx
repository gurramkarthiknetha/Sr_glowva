export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#2d3a4a] py-8 md:py-10 px-2 sm:px-4 mt-10 md:mt-16 rounded-t-2xl md:rounded-t-3xl shadow-2xl border-t-4 border border-[#000000]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 px-2 sm:px-0">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <span className="text-xl sm:text-2xl font-extrabold font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#355c7d] via-[#f7cac9] to-[#b5ead7] drop-shadow-lg">Sr Glowva</span>
          <span className="text-xs sm:text-sm mt-1 font-mono text-[#2d3a4a]/80 text-center md:text-left">Handcrafted Art Supplies & Accessories</span>
        </div>
        {/* Contact & Social */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-3 sm:gap-4 mb-1 sm:mb-2">
            <a href="mailto:info@srglowva.com" className="hover:text-[#355c7d] transition-colors" aria-label="Email">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0l-4 4-4-4" /></svg>
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="hover:text-[#355c7d] transition-colors" aria-label="WhatsApp">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" /></svg>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener" className="hover:text-[#355c7d] transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
            </a>
          </div>
          <div className="text-xs sm:text-sm text-[#2d3a4a]/80 font-mono">Contact: +91 99999 99999</div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-end gap-0.5 sm:gap-1 mt-2 md:mt-0">
          <a href="/about" className="hover:text-[#f7786b] transition-colors font-mono text-xs sm:text-base">About</a>
          <a href="/categoriesPage" className="hover:text-[#f7786b] transition-colors font-mono text-xs sm:text-base">Categories</a>
          <a href="/contact" className="hover:text-[#f7786b] transition-colors font-mono text-xs sm:text-base">Contact</a>
        </div>
      </div>
      <div className="mt-6 md:mt-8 text-center text-[10px] sm:text-xs text-[#2d3a4a]/60 font-mono">
        &copy; {new Date().getFullYear()} Sr Glowva. All rights reserved.
      </div>
    </footer>
  );
}