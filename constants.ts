
import { Patient } from './types';

export const START_DATE = new Date(2024, 4, 13); // May 13th, 2024 (Note: JS Month is 0-indexed)
// Note: In real use, we'd use current month. Let's stick to the 13th-25th range as requested.
// We'll set the year to current year, but hardcode 13th-25th as the view range.

export const PATIENTS: Patient[] = [
  {
    id: 'ezzy',
    name: 'Ezzy',
    color: 'emerald',
    medications: [
      {
        id: 'e1',
        name: 'Tamiflu',
        method: 'Dissolved in 4ml water/milk',
        quantity: '3ml (give to baby)',
        frequency: 2,
        durationDays: 5,
        timingLabels: ['Morning (Before food)', 'Evening (Before food)'],
        notes: 'Dissolve 1 capsule in 4ml liquid, give 3ml.'
      },
      {
        id: 'e2',
        name: 'Augmentin',
        method: 'Oral Suspension',
        quantity: '2.5ml',
        frequency: 2,
        durationDays: 7,
        timingLabels: ['8:00 AM', '8:00 PM'],
        notes: 'Take 12 hours apart.'
      },
      {
        id: 'e3',
        name: 'Eubiotic',
        method: 'Drops',
        quantity: '6 drops',
        frequency: 1,
        durationDays: 14,
        timingLabels: ['Once daily'],
      },
      {
        id: 'e4',
        name: 'Nebulizer (Fluicazona)',
        method: 'Inhalation',
        quantity: '1ml + 2ml serum',
        frequency: 2,
        durationDays: 5,
        timingLabels: ['Morning', 'Evening'],
      },
      {
        id: 'e5',
        name: 'Maxitrol',
        method: 'Nose drops',
        quantity: 'In nose',
        frequency: 3,
        durationDays: 5,
        timingLabels: ['Morning', 'Afternoon', 'Evening'],
      },
      {
        id: 'e6',
        name: 'Nurofen',
        method: 'Oral Suspension',
        quantity: '3.5ml',
        frequency: 3,
        durationDays: 2,
        timingLabels: ['Scheduled 1', 'Scheduled 2', 'Scheduled 3'],
        notes: 'After 2 days, only if fever occurs.',
        isAsNeeded: true
      }
    ]
  },
  {
    id: 'peach',
    name: 'Peach',
    color: 'sky',
    medications: [
      {
        id: 'p1',
        name: 'Ibusinus',
        method: 'Pills',
        quantity: '1 dose',
        frequency: 2,
        durationDays: 5,
        timingLabels: ['Morning', 'Evening'],
      },
      {
        id: 'p2',
        name: 'Vibrocil',
        method: 'Nasal Spray',
        quantity: '2 sprays',
        frequency: 3,
        durationDays: 7,
        timingLabels: ['Morning', 'Afternoon', 'Evening'],
      }
    ]
  }
];
