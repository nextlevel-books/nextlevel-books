"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Daniel Feigenbutz
        </p>
        <div className="flex gap-6">
          <a
            href="/impressum"
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
