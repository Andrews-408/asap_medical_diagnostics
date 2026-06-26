const MedicalDoc_SRC = "/medical_doc.png";

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-r from-indigo-900 to-indigo-800 text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            AZAP MEDICAL DIAGNOSTICS
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Diagnosing Today, <br />
            <span className="text-emerald-400">Empowering Tomorrow.</span>
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-lg leading-relaxed">
            Azap stands at the forefront of healthcare, committed to
            revolutionizing diagnostics through cutting-edge technology and
            unwavering excellence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#ceo-message"
              className="bg-transparent border-2 border-white/30 cursor-pointer hover:border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Our Mission
            </a>

            <a
              href="/price-list"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:bg-slate-100 hover:scale-105"
            >
              View Price List
            </a>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl float-animation"></div>
          <div className="bg-slate-200 p-4 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105">
            <img
              src={MedicalDoc_SRC}
              alt="Azap Technology"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
