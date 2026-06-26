import { useState } from "react";

const PACKAGES = [
  {
    package_name: "BASIC PACKAGE",
    price_ghc: 325,
    included_services: [
      "FULL BLOOD COUNT",
      "FBS",
      "URINE R/E",
      "HEPATITIS B",
      "HEPATITIS C",
      "MALARIA SCREENING",
      "THYPHOID SCREENING",
      "CONSULTATION",
    ],
  },
  {
    package_name: "MEDIUM PACKAGE",
    price_ghc: 860,
    included_services: [
      "FULL BLOOD COUNT",
      "FASTING GLUCOSE TEST",
      "LIVER FUNCTION TEST",
      "HEPATITIS B",
      "URINE ANALYSIS",
      "RENAL FUNCTION TEST",
      "H. PYLORI TEST",
      "LIPID PROFILE",
      "HEPATITIS C",
      "CONSULTATION",
    ],
  },
  {
    package_name: "ODO NSO PACKAGE",
    price_ghc: 800,
    included_services: [
      "BLOOD GROUPING",
      "HEPATITIS B",
      "HB ELECTROPHORESIS",
      "HEPATITIS C",
      "VDRL (SYPHILIS)",
      "RETRO SCREEN",
      "GONORRHOEA",
      "CHLAMYDIA",
      "CONSULTATION",
    ],
  },
  {
    package_name: "PREMIUM PACKAGE",
    price_ghc: 1100,
    included_services: [
      "FULL BLOOD COUNT",
      "LIVER FUNCTION TEST",
      "HEPATITIS B",
      "URINE ANALYSIS",
      "RENAL FUNCTION TEST",
      "H. PYLORI TEST",
      "LIPID PROFILE/CHOLESTROL",
      "HEPATITIS C",
      "E C G",
      "CONSULTATION",
    ],
  },
  {
    package_name: "QUEEN'S PACKAGE",
    price_ghc: 1390,
    included_services: [
      "FULL BLOOD COUNT",
      "ABDOMENOPELVIC SCAN",
      "LIVER FUNCTION TEST",
      "HEPATITIS B",
      "RENAL FUNCTION TEST",
      "H. PYLORI TEST",
      "LIPID PROFILE/CHOLESTROL",
      "HEPATITIS C",
      "THYROID FUNCTION TEST",
      "E C G",
      "CONSULTATION",
    ],
  },
  {
    package_name: "KING'S PACKAGE",
    price_ghc: 1410,
    included_services: [
      "FULL BLOOD COUNT",
      "LIVER FUNCTION TEST",
      "HEPATITIS B",
      "URINE ANALYSIS",
      "RENAL FUNCTION TEST",
      "H. PYLORI TEST",
      "LIPID PROFILE/CHOLESTROL",
      "HEPATITIS C",
      "THYROID FUNCTION TEST",
      "E C G",
      "PSA SCAN",
      "CONSULTATION",
    ],
  },
];

export function PackagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePackage = PACKAGES[activeIndex];

  return (
    <section id="packages" className="py-20 bg-indigo-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Packages
          </p>
          <h2 className="mt-6 text-4xl font-extrabold text-white">
            Choose the health package that fits your needs
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">
            Our packages bundle the most requested diagnostics and consultations
            into clear, value-driven options.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="inline-flex gap-3">
              {PACKAGES.map((pkg, index) => (
                <button
                  key={pkg.package_name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    index === activeIndex
                      ? "border-emerald-400 bg-emerald-500/15 text-emerald-200"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {pkg.package_name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-3xl bg-slate-950/95 p-8 border border-white/10">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                    Selected package
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold text-white">
                    {activePackage.package_name}
                  </h3>
                </div>
                <div className="rounded-3xl bg-emerald-500/10 px-4 py-3 text-emerald-200">
                  <span className="block text-sm uppercase text-emerald-300">
                    Price
                  </span>
                  <span className="mt-2 block text-3xl font-bold">
                    GHS {activePackage.price_ghc}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-slate-300">
                This package includes the following diagnostic services and
                consultation.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950/95 p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white">
                Included services
              </h4>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {activePackage.included_services.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
