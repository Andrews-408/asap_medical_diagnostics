import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "../components/landing/BrandLogo";

const PRICE_CATEGORIES = {
  HAEMATOLOGY: [
    { test_name: "FULL BLOOD COUNT", price: 40 },
    { test_name: "BF FOR MPS", price: 40 },
    { test_name: "SICKLING TEST ONLY", price: 50 },
    { test_name: "HB ELECTROPHORESIS/GENOTYPE + SICKLING", price: 140 },
    { test_name: "BLOOD GROUPING", price: 50 },
    { test_name: "G6PD TEST", price: 50 },
    { test_name: "ERYTHROCYTE SEDIMENTATION RATE (ESR)", price: 50 },
    { test_name: "ANC(HB)", price: 20 },
  ],
  "CHEMICAL PATHOLOGY": [
    { test_name: "2 HOUR POST PRANDIAL", price: 50 },
    { test_name: "2 HOUR BREAKFAST, LUNCH, SUPPER", price: 50 },
    { test_name: "RANDOM BLOOD SUGAR", price: 20 },
    { test_name: "FASTING BLOOD SUGAR", price: 20 },
    { test_name: "GLYCATED HAEMOGLOBIN (HbA1c)", price: 150 },
    { test_name: "ORAL GLUCOSE TOLERANCS TEST (OGTT)", price: 100 },
    { test_name: "FASTING LIPID PROFLIE (FLP)", price: 150 },
    { test_name: "C-REACTING PROTIEN", price: 130 },
    { test_name: "RENAL FUNCTION TEST (RFT)", price: 180 },
    { test_name: "LIVER FUNCTION TEST (LFT)", price: 180 },
    { test_name: "SERUM BILIRUBIN (SBR)", price: 70 },
    { test_name: "SERUM URIC ACIDS", price: 70 },
    { test_name: "SERUM PREGNANCY TEST(SPT)", price: 50 },
    { test_name: "URINE GLUCOSE", price: null },
    { test_name: "URINE PREGNACY TEST(UPT)", price: 20 },
    { test_name: "SERUM ALBUMIN", price: 70 },
  ],
  SEROLOGY: [
    { test_name: "H.PYLORI (BLOOD)", price: 70 },
    { test_name: "H.PYLORI (STOOL)", price: 80 },
    { test_name: "HEPATITIS B SURFACE ANTIGEN (HBsAg)", price: 50 },
    { test_name: "HEPATITIS B VIRAL PROFILE", price: 120 },
    { test_name: "HVC/ Hep c", price: 80 },
    { test_name: "HIV/ RETROSCREEN", price: 100 },
    { test_name: "ORAL QUICK", price: 50 },
    { test_name: "TYPHOID(IgG/IgM)", price: 70 },
    { test_name: "VDRL(SYPHILIS)", price: 70 },
    { test_name: "MALARIA RDT", price: 25 },
  ],
  "HORMONES/TUMOURMARKERS": [
    { test_name: "BETA- HCG", price: 150 },
    { test_name: "THYROID FUNCTION TEST (TFT)", price: 330 },
    { test_name: "THYROID STIMULATING HORMONE (TSH)", price: 120 },
    { test_name: "PROSTATE SURFACE ANTIGEN (PSA)", price: 150 },
    { test_name: "GLYCATED HAEMOGLOBIN (HbA1c)", price: 150 },
    { test_name: "PROLACTIN", price: 150 },
    { test_name: "PROGESTRONE", price: 150 },
    { test_name: "TESTOSTRONE", price: 150 },
    { test_name: "ESTRADIOL /E2", price: 150 },
    { test_name: "FOLLICLE STIMULATING HORMONES (FSH)", price: 150 },
    { test_name: "LUTEINIZING HORMONES (LH)", price: 150 },
  ],
  PARASITOLOGY: [
    { test_name: "STOOL R/E", price: 50 },
    { test_name: "URINE R/E", price: 40 },
    { test_name: "HIGH VAGINAL SWAP R/E", price: 90 },
    { test_name: "URETHRAL SWAP R/E", price: 70 },
  ],
  MICROBIOLOGY: [
    { test_name: "GONORRHOEA", price: 120 },
    { test_name: "CHLAMYDIA", price: 120 },
    { test_name: "CSF C/S", price: 300 },
    { test_name: "STOOL C/S", price: 300 },
    { test_name: "URINE C/S", price: 300 },
    { test_name: "WOUND SWAP C/S", price: 300 },
    { test_name: "EAR/THROAT SWAP C/S", price: 300 },
    { test_name: "BLOOD C/S", price: 400 },
    { test_name: "URETHRAL SWAP C/S", price: 300 },
    { test_name: "ASPIRATE C/S", price: 300 },
    { test_name: "SPUTUM C/S", price: 300 },
    { test_name: "SEMEN C/S", price: 300 },
    { test_name: "HVS C/S", price: 300 },
    { test_name: "SEMEN ANALYSIS", price: 250 },
    { test_name: "PAP SMEAR", price: 450 },
  ],
  IMAGING: [
    { test_name: "ECG", price: 150 },
    { test_name: "PELVIC USG", price: 80 },
    { test_name: "ABDOMINO-PELVIC(FEMALE)", price: 160 },
    { test_name: "ABDOMINO-PELVIC (MALE)", price: 160 },
    { test_name: "UROLOGY PROSTATE", price: 150 },
    { test_name: "ABDOMINAL USG", price: 120 },
    { test_name: "BOTH BREAST", price: 200 },
    { test_name: "THYROID USG", price: 150 },
    { test_name: "EARLY OBSTETRICS", price: 50 },
    { test_name: "LATE OBSTETRICS", price: 50 },
  ],
};

export function PriceListPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <BrandLogo />
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-indigo-900 transition hover:border-emerald-300 hover:text-emerald-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </a>
        </div>
      </header>

      <div className="py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-6">
          <div className="rounded-3xl bg-white p-10 shadow-xl border border-slate-200">
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              Price List
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-indigo-900">
              Pricing and imaging services
            </h1>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {Object.entries(PRICE_CATEGORIES).map(([category, tests]) => (
              <div
                key={category}
                className="w-full rounded-3xl bg-white p-8 shadow-xl border border-slate-200"
              >
                <h2 className="text-md font-bold text-indigo-900">
                  {category}
                </h2>
                <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
                  {tests.map((test) => (
                    <div
                      key={test.test_name}
                      className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:items-center"
                    >
                      <span className="font-medium text-slate-800 text-sm">
                        {test.test_name}
                      </span>
                      <span className="text-right font-semibold text-sm text-emerald-700">
                        {test.price !== null
                          ? `GHS ${test.price}`
                          : "Price on request"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
