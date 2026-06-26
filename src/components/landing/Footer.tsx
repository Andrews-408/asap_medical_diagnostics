import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_TARGET_AUDIENCES, SERVICE_DETAILS } from "../../constants";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-slate-400 py-16 px-6 border-t-8 border-emerald-600"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <div className="mb-6">
            <BrandLogo variant="footer" />
          </div>
          <p className="text-sm leading-relaxed">
            Empowering healthier futures through accurate, accessible, and
            innovative diagnostic solutions.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
            Strategic Values
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 underline decoration-emerald-600 decoration-2">
              Innovative & Forward-Thinking
            </li>
            <li>Trustworthy & Ethical </li>
            <li>Empathetic & Collaborative </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
            Target Audience
          </h4>
          <div className="flex flex-wrap gap-2">
            {FOOTER_TARGET_AUDIENCES.map((tag) => (
              <span
                key={tag}
                className="bg-slate-800 text-xs px-3 py-1 rounded-full border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 grid gap-4 rounded-2xl bg-slate-800 p-6 text-white shadow-lg md:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Hours
            </div>
            <div className="font-bold">{SERVICE_DETAILS.hours}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Location
            </div>
            <div className="font-bold">{SERVICE_DETAILS.location}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 shrink-0 text-emerald-400" />
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Email
            </div>
            <div className="truncate font-bold">{SERVICE_DETAILS.email}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Call
            </div>
            <div className="font-bold">{SERVICE_DETAILS.phone}</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} Azap Medical Diagnostics. Empowering
        Healthier Futures for All
      </div>
    </footer>
  );
}
