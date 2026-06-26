import DailyInsight from '@/components/DailyInsight';
import messages from '@/data/messages.json';

function getTodayMessage() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const messageIndex = (dayOfYear - 1) % messages.length;
  return messages[messageIndex];
}

export default function Home() {
  const todayMessage = getTodayMessage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-light tracking-tight text-zinc-100 mb-2">
          Daily Insight
        </h1>
      </div>
      <DailyInsight message={todayMessage} />
    </div>
  );
}
