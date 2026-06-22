"use client";

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-[#3a5070] text-sm">
          © {new Date().getFullYear()} Daniel Feigenbutz
        </p>
        <div className="flex gap-6">
          <a href="/impressum" className="text-[#3a5070] hover:text-[#c9a236] text-sm transition-colors duration-200">
            Impressum
          </a>
          <a href="/datenschutz" className="text-[#3a5070] hover:text-[#c9a236] text-sm transition-colors duration-200">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
