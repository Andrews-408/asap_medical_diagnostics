import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowLeft, Mail, MessageSquare, Phone, UserRound } from "lucide-react";
import { SERVICE_DETAILS } from "../constants";
import { BrandLogo } from "../components/landing/BrandLogo";

export function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Extract form values
    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get("name") as string) || "";
    const contact = (fd.get("contact") as string) || "";
    const message = (fd.get("message") as string) || "";

    // Build mailto link
    const to = "azapmedicaldiagnostics@gmail.com";
    const subject = encodeURIComponent(`Appointment request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\n\nMessage:\n${message}`,
    );
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    // Open user's mail client with populated message
    try {
      window.location.href = mailto;
    } catch (e) {
      // fallback: open in new tab
      window.open(mailto, "_blank");
    }

    // Show confirmation and reset form
    setIsSubmitted(true);
    form.reset();
  };

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
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              Appointment Request
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-indigo-900 md:text-5xl">
              Contact Azap Medical Diagnostics
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Send your details and a short message. Our team will use your
              contact information to follow up about your appointment request.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl bg-indigo-900 p-6 text-white">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="font-bold">{SERVICE_DETAILS.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="break-all font-bold">
                  {SERVICE_DETAILS.email}
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8"
          >
            {isSubmitted && (
              <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                Thank you. Your appointment request has been sent.
              </div>
            )}

            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <UserRound className="h-4 w-4 text-emerald-600" />
                  Name
                </span>
                <input
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  type="text"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  Contact
                </span>
                <input
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  name="contact"
                  placeholder="Phone number or email"
                  required
                  type="text"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <MessageSquare className="h-4 w-4 text-emerald-600" />
                  Message
                </span>
                <textarea
                  className="min-h-40 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  name="message"
                  placeholder="Tell us what service you need or your preferred appointment time"
                  required
                />
              </label>
            </div>

            <button
              className="mt-8 w-full rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white shadow-md shadow-emerald-100 transition hover:bg-emerald-700"
              type="submit"
            >
              Send Appointment Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
