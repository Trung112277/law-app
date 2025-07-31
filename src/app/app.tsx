import { MainList } from '@/components/feature/list/Main-list';
import { DaysOfWeek } from '@/components/feature/times/Days-of-week';
import { TodayTimes } from '@/components/feature/times/Today-times';
import { ToolBar } from '@/components/feature/toolbar/ToolBar';
import { DetentionProvider } from '@/context/detention-context';
import { useState } from 'react';

export function App() {
  const [query, setQuery] = useState('');
  return (
    <DetentionProvider>
      <main className="min-h-screen">
        <div className="border-b-2">
          <div className="container mx-auto p-5 py-8">
            <div className="text-center">
              <h1 className="text-5xl font-black uppercase">Law-app</h1>
              <p className="text-3xl mt-4">Ứng dụng tính ngày tạm giam</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5">
          <div className="mt-7 flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="border rounded-sm w-fit p-2 shadow-lg">
                <p className="text-xl font-medium text-center">
                  Hôm nay là thứ <DaysOfWeek />, ngày <TodayTimes />
                </p>
              </div>
            </div>
            <ToolBar onSearch={setQuery} value={query} />
            <hr />
            <MainList query={query} />
          </div>
        </div>
      </main>
    </DetentionProvider>
  );
}

export default App;
