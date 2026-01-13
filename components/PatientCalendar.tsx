
import React, { useState } from 'react';
import { Patient, LogEntry } from '../types';
import { MedicineItem } from './MedicineItem';

interface PatientCalendarProps {
  patient: Patient;
  logs: LogEntry[];
  onToggle: (medicationId: string, date: string, doseIndex: number) => void;
}

export const PatientCalendar: React.FC<PatientCalendarProps> = ({ patient, logs, onToggle }) => {
  const [selectedDay, setSelectedDay] = useState(13); // Default to starting day

  const days = Array.from({ length: 13 }, (_, i) => 13 + i); // 13th to 25th

  const getDayOfWeek = (day: number) => {
    // Note: May 2024. May 1st was Wednesday.
    const d = new Date(2024, 4, day); 
    return d.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const dateStr = `2024-05-${selectedDay < 10 ? '0' + selectedDay : selectedDay}`;

  const isDoseCompleted = (medId: string, doseIdx: number) => {
    return logs.some(
      (l) =>
        l.patientId === patient.id &&
        l.medicationId === medId &&
        l.date === dateStr &&
        l.doseIndex === doseIdx &&
        l.completed
    );
  };

  const activeMedications = patient.medications.filter(med => {
    const dayIndex = selectedDay - 13;
    // Nurofen is special: scheduled for 2 days, then as needed.
    if (med.id === 'e6') {
      return true; // Always show for logging purposes since it transitions to as-needed
    }
    return dayIndex < med.durationDays;
  });

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-12">
      <div className={`p-6 ${patient.color === 'emerald' ? 'bg-emerald-500' : 'bg-sky-500'} text-white`}>
        <div className="flex justify-between items-center">
          <div>
             <h2 className="text-2xl font-bold">{patient.name}'s Schedule</h2>
             <p className="opacity-90 font-medium">May 2024 Tracking</p>
          </div>
          <div className="hidden md:block bg-white/20 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
             {activeMedications.length} Medications Active
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 bg-slate-50/50 border-b border-slate-100">
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {days.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-2xl border-2 transition-all
                  ${isSelected 
                    ? (patient.color === 'emerald' ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200' : 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-200')
                    : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300'}`}
              >
                <span className="text-[10px] uppercase font-bold tracking-wider mb-1">{getDayOfWeek(day)}</span>
                <span className="text-xl font-bold">{day}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="M2 12h20"/><path d="m4.93 19.07 14.14-14.14"/></svg>
            Daily Checklist - May {selectedDay}
          </h3>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
            {dateStr}
          </div>
        </div>

        {activeMedications.length > 0 ? (
          <div className="space-y-4">
            {activeMedications.map((med) => (
              <MedicineItem
                key={med.id}
                med={med}
                dateStr={dateStr}
                color={patient.color}
                isCompleted={(idx) => isDoseCompleted(med.id, idx)}
                onToggle={(idx) => onToggle(med.id, dateStr, idx)}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium italic">No medications scheduled for this day.</p>
          </div>
        )}
      </div>
    </div>
  );
};
