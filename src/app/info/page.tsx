export default function InfoPage() {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-light tracking-tight text-zinc-100 mb-12">
          About This Project
        </h1>

        <section className="mb-12">
          <h2 className="text-xl font-light text-zinc-100 mb-4">Creator</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            <strong>Rafael Rodrigues Troiani</strong> (Rafa Tro) is a Business Analyst and content creator passionate about bridging the gap between business strategy, data science, and financial analysis. Through daily insights and educational content, Rafael shares practical knowledge about core competencies, strategic decision-making, and analytical rigor.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light text-zinc-100 mb-4">Purpose</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            Business Analyst Spark delivers daily micro-insights on business analysis techniques, data analysis principles, hypothesis testing, corporate finance, tax planning, and strategic business practices. Each message is designed to be concise yet intellectually rigorous, challenging conventional thinking while staying grounded in real-world application.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light text-zinc-100 mb-4">Technical Architecture</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-2">
                Frontend
              </h3>
              <p className="text-sm text-zinc-400 font-light">
                Built with <strong>Next.js</strong> (App Router) and <strong>TypeScript</strong> for type-safe, modern React development.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-2">
                Design System
              </h3>
              <p className="text-sm text-zinc-400 font-light">
                Styled with <strong>Tailwind CSS</strong> for utility-first, dark-mode-first aesthetic. Premium minimalism with razor-thin borders and crisp typography.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-2">
                Static Generation
              </h3>
              <p className="text-sm text-zinc-400 font-light">
                Configured with <code className="text-xs bg-zinc-800 px-2 py-1 rounded">output: 'export'</code> for zero-cost static hosting on <strong>GitHub Pages</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-2">
                Daily Rotation
              </h3>
              <p className="text-sm text-zinc-400 font-light">
                Messages are injected at build time using date-matching algorithms. No client-side data fetching. Pure static HTML.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest mb-2">
                Automation
              </h3>
              <p className="text-sm text-zinc-400 font-light">
                <strong>GitHub Actions</strong> runs on daily cron schedule (midnight UTC) and on every push to <code className="text-xs bg-zinc-800 px-2 py-1 rounded">main</code>. Builds and deploys the static <code className="text-xs bg-zinc-800 px-2 py-1 rounded">out/</code> directory automatically.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-light text-zinc-100 mb-4">Built with AI Assistance</h2>
          <p className="text-zinc-300 leading-relaxed font-light">
            This project was scaffolded and deployed using <strong>GitHub Copilot Agent Mode</strong>, demonstrating how AI can accelerate full-stack development from ideation to production deployment.
          </p>
        </section>
      </div>
    </div>
  );
}
