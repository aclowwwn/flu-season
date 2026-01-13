
export interface Dose {
  time: string;
  label: string;
}

export interface Medication {
  id: string;
  name: string;
  method: string;
  quantity: string;
  frequency: number;
  durationDays: number;
  timingLabels: string[];
  notes?: string;
  isAsNeeded?: boolean;
}

export interface Patient {
  id: string;
  name: string;
  color: string;
  medications: Medication[];
}

export interface LogEntry {
  patientId: string;
  medicationId: string;
  date: string; // ISO String or YYYY-MM-DD
  doseIndex: number;
  completed: boolean;
}
