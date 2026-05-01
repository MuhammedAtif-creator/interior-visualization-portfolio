export type ProjectCategory = 'Residential' | 'Commercial' | 'Villa' | 'Apartment' | '3D Visualization' | 'Furniture Sourcing' | 'Living Rooms' | 'Bedrooms' | 'Space Planning';

export interface ProjectDetail {
  overview: string;
  scope: string[];
  designStyle: string;
  materials: string[];
  software: string[];
  deliverables: string[];
  workflow?: string;
  output?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  location: string;
  year: number;
  shortDescription: string;
  image: string;
  gallery?: string[];
  status: 'Completed' | 'In Progress';
  details: ProjectDetail;
}
