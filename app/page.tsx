const features = [
  "CV Match Score",
  "Missing Skills",
  "Cover Letter",
  "Interview Prep",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e40af55,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed44,transparent_30%)]" />

      <div className="absolute left-10 top-20 h-72 w-72 animate-blob rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 animate-blob-delay rounded-full bg-purple-500/20 blur-3xl" />

      <section className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="animate-fade-up mb-5 inline-flex rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            AI-powered job application assistant
          </p>

          <h1 className="animate-fade-up-delay max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Match your CV to jobs and apply with confidence.
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            HirePilot AI helps users upload a CV, paste a job description, get a
            match score, identify missing skills, generate tailored CV
            improvements, and prepare for interviews.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/dashboard"
              className="rounded-lg bg-white px-6 py-3 font-medium text-slate-950 transition hover:-translate-y-1 hover:bg-slate-200"
            >
              Go to Dashboard
            </a>

            <a
              href="/job-analyzer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Analyze a Job
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-slate-800 bg-white/5 p-3 text-center text-sm text-slate-300 backdrop-blur"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-float relative">
          <div className="rounded-3xl border border-slate-800 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Current Analysis</p>
                <h2 className="text-xl font-semibold">Frontend Developer</h2>
              </div>

              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                82% Match
              </div>
            </div>

            <div className="mb-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[82%] animate-progress rounded-full bg-white" />
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="mb-2 text-sm text-slate-400">Strong Areas</p>
                <p className="text-sm text-slate-200">
                  React, API integration, dashboard experience
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="mb-2 text-sm text-slate-400">Missing Skills</p>
                <div className="flex flex-wrap gap-2">
                  {["Testing", "Docker", "CI/CD"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="mb-2 text-sm text-slate-400">AI Suggestion</p>
                <p className="text-sm text-slate-200">
                  Add measurable impact to project bullets and mention
                  authentication workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}