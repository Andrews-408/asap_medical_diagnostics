import { SERVICES } from "../../constants";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-indigo-900">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive laboratory services and ultrasound imaging delivered
            with reliable turnaround for patients and clinicians.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="text-black bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-200 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-all duration-300">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="mt-6 font-bold text-2xl text-indigo-900 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
