export interface IJob {
  company: string;
  description: string;
  city: string;
  state: string;
  onsite: 'On-Site' | 'Remote' | 'Hybrid';
  website: string;
  title: string;
  type: string;
  start: string;
  end: string;
  details?: string;
  notes?: string[];
  properties?: string[][];
}
