
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-6xl mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="bg-emerald-500 text-white p-2 rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </span>
            HealthGuard
          </h1>
          <p className="text-slate-500 font-medium">Medicine Tracking for Peach & Ezzy</p>
        </div>
        <div className="flex gap-2">
           <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm font-semibold">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-gray-800">Ezzy</span>
           </div>
           <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm font-semibold">
              <div className="w-3 h-3 rounded-full bg-sky-500"></div>
              <span className="text-gray-800">Peach</span>
           </div>
        </div>
      </header>
      <main className="w-full max-w-6xl">
        {children}
      </main>
      <footer className="mt-12 text-slate-400 text-sm pb-8">
        &copy; 2024 Healthy Family Assistant
      </footer>
    </div>
  );
};
