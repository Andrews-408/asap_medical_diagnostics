import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

interface LandingNavigationProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
}

export function LandingNavigation({
  isMenuOpen,
  onMenuToggle,
  onMenuClose,
}: LandingNavigationProps) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <BrandLogo />

        <div className="hidden md:flex gap-8 font-semibold text-slate-600 text-sm uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo-900 transition-all duration-300 hover:scale-105 relative"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-900 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block relative">
          <a
            href="/appointment"
            className="bg-emerald-600 text-white px-6 py-2  cursor-pointer rounded-md font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-200 flex items-center gap-2"
          >
            Book an appointment
          </a>
        </div>

        <button className="md:hidden text-indigo-900" onClick={onMenuToggle}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-slate-600 hover:text-indigo-900 transition-all duration-300 hover:translate-x-2 font-semibold uppercase text-sm tracking-wide"
                onClick={onMenuClose}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200">
              <a
                href="/appointment"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-md cursor-pointer font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-200 flex items-center justify-center gap-2"
              >
                Book an appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
