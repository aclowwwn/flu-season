
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './components/Layout';
import { PatientCalendar } from './components/PatientCalendar';
import { PATIENTS } from './constants';
import { LogEntry } from './types';

const App = () => {
  const [logs, setLogs] = useState<LogEntry[]>(() => {
    const saved = localStorage.getItem('health_calendar_logs_v1');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('health_calendar_logs_v1', JSON.stringify(logs));
  }, [logs]);

  const handleToggle = (patientId: string, medicationId: string, date: string, doseIndex: number) => {
    setLogs((prev) => {
      const existing = prev.find(
        (l) =>
          l.patientId === patientId &&
          l.medicationId === medicationId &&
          l.date === date &&
          l.doseIndex === doseIndex
      );

      if (existing) {
        return prev.filter((l) => l !== existing);
      } else {
        return [
          ...prev,
          {
            patientId,
            medicationId,
            date,
            doseIndex,
            completed: true,
          },
        ];
      }
    });
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {PATIENTS.map((patient) => (
          <PatientCalendar
            key={patient.id}
            patient={patient}
            logs={logs}
            onToggle={(medId, date, doseIdx) => handleToggle(patient.id, medId, date, doseIdx)}
          />
        ))}
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4">
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 1 0-.2.3Z"/><path d="M10 22v-2"/><path d="M7 22v-2"/><path d="M11 16h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2"/><path d="M15 22v-2"/></svg>
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Health Progress Tracking</h4>
          <p className="text-sm text-blue-700">All data is saved locally on your device. Ensure you complete the full course as prescribed by your doctor.</p>
        </div>
        <button 
          onClick={() => {
            if(confirm('Are you sure you want to clear all tracking history?')) {
              setLogs([]);
            }
          }}
          className="ml-auto text-xs font-bold text-blue-400 hover:text-blue-600 uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Reset Logs
        </button>
      </div>
    </Layout>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
