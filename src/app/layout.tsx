import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Business Analyst Spark',
  description: 'Daily insights on Business Analysis, Data Science, and Strategy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
          <nav className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="text-lg font-light tracking-tight hover:text-zinc-300 transition-colors">
              Business Analyst Spark
            </Link>
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                  Daily
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                  Info
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-zinc-800 mt-16 py-8 text-center text-xs text-zinc-500 uppercase tracking-widest">
          <p>© 2026 Business Analyst Spark. All insights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
