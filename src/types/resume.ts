export default interface Resume {
  info: Info;
  contact: Contact;
  social: Social;
  education: School[];
  work: Job[];
  skills: Skills[];
}

export interface Info {
  first: string;
  last: string;
  title: string;
  summary: string;
  avatar: string;
  website: string;
}

export interface Address {
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: number;
  country: string;
}

export interface Contact {
  hidden: boolean;
  phone: string;
  email: string;
  location: Address;
}

export interface Social {
  [key: string]: string;
}

export type Award = [string, string];

export interface School {
  title: string;
  city: string;
  state: string;
  degree: string;
  type: string;
  description: string;
  start: number;
  end: number;
  honers: Award[];
}

export interface Job {
  company: string;
  description: string;
  city: string;
  state: string;
  onsite: boolean;
  website: string;
  title: string;
  type: string;
  start: number;
  end: number | string;
  details?: string;
  notes: string[];
  properties?: [string, string][];
}

export type Skills = [string, string[]];
