import { Heart } from "lucide-react";

export function CeoMessageSection() {
  return (
    <section className="py-24 bg-white relative" id="ceo-message">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Heart className="w-12 h-12 text-red-600 mx-auto mb-8 float-animation hover:scale-110 transition-transform duration-300" />
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 italic hover:text-indigo-900 transition-colors duration-300">
          "To provide world-class, accurate and affordable medical diagnostics
          that enable timely Healthcare decisions and elevate the standard of
          living for everyone."
        </h2>
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 rounded-full bg-slate-200 mb-4 border-2 border-red-600 flex items-center justify-center font-bold text-blue-900 hover:border-emerald-600 transition-colors duration-300">
            CEO
          </div>
          <h4 className="font-bold text-lg text-blue-900 uppercase hover:text-emerald-700 transition-colors duration-300">
            Dr. Agyapong Afriyie Jephthah
          </h4>
          <p className="text-slate-500 hover:text-slate-700 transition-colors duration-300">
            CEO, Azap Medical Diagnostics
          </p>
        </div>
      </div>
    </section>
  );
}
