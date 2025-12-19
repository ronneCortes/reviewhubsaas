import React from 'react';

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Google' | 'Yelp' | 'Facebook';
  content: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  response?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  recommended?: boolean;
}

export enum AIAnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}