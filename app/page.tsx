export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
          AI-powered job application assistant
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Match your CV to jobs and apply with confidence.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          HirePilot AI helps users upload a CV, paste a job description, get a
          match score, identify missing skills, generate tailored CV
          improvements, and prepare for interviews.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/dashboard"
            className="rounded-lg bg-white px-6 py-3 font-medium text-slate-950"
          >
            Go to Dashboard
          </a>

          <a
            href="/job-analyzer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white"
          >
            Analyze a Job
          </a>
        </div>
      </section>
    </main>
  );
}