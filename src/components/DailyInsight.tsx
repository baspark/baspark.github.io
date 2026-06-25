'use client';

interface Message {
  id: number;
  title: string;
  content: string;
}

interface DailyInsightProps {
  message: Message;
}

export default function DailyInsight({ message }: DailyInsightProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <article className="bg-zinc-900 border border-zinc-800 rounded-sm p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-light tracking-tight text-zinc-100 mb-4">
          {message.title}
        </h2>
        <p className="text-zinc-300 leading-relaxed text-base font-light">
          {message.content}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-zinc-500 uppercase tracking-widest">
            Message #{message.id}
          </span>
          <time className="text-xs text-zinc-500 uppercase tracking-widest">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </article>
    </div>
  );
}
