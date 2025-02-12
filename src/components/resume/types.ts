import { ReactNode } from 'react';

export type HeaderProps = { children: string | ReactNode };

export type SectionProps = {
  children: React.ReactNode;
  title: string;
  gap?: number;
};

export type FooterProps = {
  children: string | ReactNode;
  companyKey: string;
};

export type PrintResumeProps = {
  company: string;
  title: string;
  description: string | null | undefined;
  companyKey: string;
};
