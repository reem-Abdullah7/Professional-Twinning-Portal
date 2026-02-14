import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface TwinningSection {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FormLink {
  title: string;
  url: string;
  description: string;
}

export interface TimelineEvent {
  title: string;
  date?: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}