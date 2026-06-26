import { UserRound } from "lucide-react";
import { TEAM_MEMBERS } from "../../constants";

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white">Meet Our Team</h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A focused clinical team supporting dependable diagnostics, patient
            care, and accurate laboratory workflows.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.role}
              className="team-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="flex aspect-4/3 items-center justify-center bg-slate-100 overflow-hidden">
                {member.role === "Nurse" ? (
                  <img
                    src="/nurse.jpeg"
                    alt={member.imageAlt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="team-avatar flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
                    <UserRound className="h-12 w-12 text-slate-400" />
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="text-sm font-bold uppercase tracking-wide text-emerald-600">
                  {member.role}
                </div>
                <h3 className="mt-3 text-2xl font-bold text-indigo-900">
                  {member.name}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {member.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
