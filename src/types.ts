export type ProjectCategory = 
  | 'All' 
  | 'Residential' 
  | 'Residential Villa'
  | 'Luxury Residential Villa'
  | 'Luxury Residential'
  | 'Luxury Residential Apartment'
  | 'Commercial' 
  | 'Commercial Interior'
  | '3D Visualization' 
  | 'Space Planning' 
  | 'Interior Design'
  | 'Residential Layout'
  | 'Commercial / Concept';

export interface ProjectDetail {
  overview: string;
  scope: string[];
  designStyle?: string;
  materials: string[];
  software: string[];
  deliverables?: string[];
  workflow?: string;
  contribution?: string;
  approach?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  location: string;
  year: number;
  description?: string;
  shortDescription: string;
  image: string;
  images: string[]; // Exactly 6 images
  status: 'Completed' | 'In Progress';
  details: ProjectDetail;
}
