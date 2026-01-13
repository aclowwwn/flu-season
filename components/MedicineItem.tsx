
import React from 'react';
import { Medication } from '../types';

interface MedicineItemProps {
  med: Medication;
  dateStr: string;
  isCompleted: (doseIdx: number) => boolean;
  onToggle: (doseIdx: number) => void;
  color: string;
}

export const MedicineItem: React.FC<MedicineItemProps> = ({ med, isCompleted, onToggle, color }) => {
  const accentColors: Record<string, string> = {
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    sky: 'bg-sky-50 text-sky-700 border-sky-200',
  };

  const ringColors: Record<string, string> = {
    emerald: 'ring-emerald-500',
    sky: 'ring-sky-500',
  };

  const bgChecked: Record<string, string> = {
    emerald: 'bg-emerald-500',
    sky: 'bg-sky-500',
  };

  return (
    <div className={`p-4 rounded-xl border-l-4 ${accentColors[color]} shadow-sm mb-3 bg-white border border-slate-100 transition-all hover:shadow-md`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-lg text-slate-800">{med.name}</h4>
          <p className="text-sm opacity-80 font-medium">{med.method} • {med.quantity}</p>
          {med.notes && (
            <div className="mt-1 flex items-start gap-1 text-xs italic bg-white/50 p-1.5 rounded border border-white/20">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
               {med.notes}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {med.timingLabels.map((label, idx) => {
          const completed = isCompleted(idx);
          return (
            <button
              key={idx}
              onClick={() => onToggle(idx)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-lg border transition-all text-sm font-semibold 
                ${completed 
                  ? `${bgChecked[color]} text-white border-transparent` 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
            >
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors 
                ${completed ? 'bg-white border-white' : 'border-slate-300 group-hover:border-slate-400'}`}>
                {completed && (
                  <svg className={`w-4 h-4 ${color === 'emerald' ? 'text-emerald-500' : 'text-sky-500'}`} fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
