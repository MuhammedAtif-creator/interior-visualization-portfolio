import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AL MAHRA Signature Villa',
    category: ['Residential', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2024,
    shortDescription: 'Ultra-luxury interior visualization featuring bespoke materiality and cinematic lighting.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'A flagship visualization project demanding high-fidelity simulation of luxury finishes and light behavior.',
      scope: ['3D Interior Visualization', 'Material Simulation', 'Lighting Design'],
      designStyle: 'Modern Cinematic Luxury',
      materials: ['Travertine', 'Smoked Oak', 'Liquid Metal'],
      software: ['Blender', '3ds Max', 'V-Ray'],
      deliverables: ['8K Photorealistic Renders', 'Cinematic Walkthrough'],
      workflow: 'Atmospheric Research → Advanced Modeling → Light Physics → Post-Production',
      output: 'High-Fidelity Visual Narrative'
    }
  },
  {
    id: '2',
    title: 'ARABIAN RANCHES Estate',
    category: ['Residential', 'Interior Design'],
    location: 'Dubai, UAE',
    year: 2024,
    shortDescription: 'Comprehensive interior architecture and spatial curation for a premium family estate.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Redefining the boundaries of contemporary family living through strategic spatial flow and curated materiality.',
      scope: ['Interior Design', 'Space Planning', '3D Visualization'],
      designStyle: 'Contemporary Sophistication',
      materials: ['Textured Plaster', 'Natural Stone', 'Bespoke Joinery'],
      software: ['AutoCAD', '3ds Max', 'Photoshop'],
      deliverables: ['Concept Presentation', 'Detailed Floor Plans', 'Visual Proofs'],
      workflow: 'Spatial Logic → Conceptual Mood → Technical Draft → Visual Synthesis'
    }
  },
  {
    id: '3',
    title: 'PALM JUMEIRAH Signature Series',
    category: ['Residential', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2023,
    shortDescription: 'A series of high-stakes interior visualizations for iconic beachfront villas.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Capturing the unique light qualities and reflective surfaces of coastal luxury environments.',
      scope: ['3D Interior Visualization', 'Cinematic Rendering', 'Lighting Design'],
      designStyle: 'Coastal Luxury Modern',
      materials: ['Calacatta Marble', 'Clear Glass', 'Polished Chrome'],
      software: ['3ds Max', 'V-Ray', 'Adobe Premiere'],
      deliverables: ['Interior Marketing Renders', 'VR Experience'],
      workflow: 'Environmental Analysis → Surface Optics → Narrative Lighting'
    }
  },
  {
    id: '4',
    title: 'FALCON AVIATION Lounges',
    category: ['Commercial', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2024,
    shortDescription: 'Premium commercial interior visualization for high-end aviation infrastructure.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Precision-critical visualization of professional interior aesthetics and high-traffic spatial flow.',
      scope: ['Commercial Interior Visualization', 'Structural Detail'],
      designStyle: 'Corporate Aviation Luxury',
      materials: ['Brushed Aluminium', 'Structural Glass', 'Architectural Steel'],
      software: ['Blender', 'Photoshop'],
      deliverables: ['Lounge Renders', 'Material Verification Specs']
    }
  },
  {
    id: '5',
    title: 'GLOBAL VILLAGE Experience',
    category: ['Commercial', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2023,
    shortDescription: 'Interior concept visualization for immersive exhibition pavilions.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Capturing dynamic energy and cultural narratives through complex lighting and eclectic materiality.',
      scope: ['Exhibition Interior Visualization', 'Thematic Lighting'],
      designStyle: 'Dynamic Eclectic',
      materials: ['Thematic Textures', 'Neon elements'],
      software: ['Blender', 'Photoshop'],
      deliverables: ['Pavilion Interior Renders', 'Fly-through Animation']
    }
  },
  {
    id: '6',
    title: 'KOZHIKODE Dual 4BHK',
    category: ['Residential', 'Space Planning'],
    location: 'Kerala, India',
    year: 2022,
    shortDescription: 'Strategic spatial planning for two large-scale luxury apartments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Focused strictly on the logical optimization of residential footprint and multi-generational flow.',
      scope: ['Space Planning', 'Layout Logic'],
      designStyle: 'Logical Modernism',
      materials: ['NA (Layout focused)'],
      software: ['AutoCAD'],
      deliverables: ['Detailed Zoning Plans', 'Flow Analysis Diagrams'],
      workflow: 'Client Requirement Matrix → Zoning → Circulation Optimization'
    }
  },
  {
    id: '7',
    title: 'PATHANAMTHITTA Residence',
    category: ['Residential', 'Space Planning'],
    location: 'Kerala, India',
    year: 2021,
    shortDescription: 'Advanced spatial layout design for a contemporary residential project.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Maximizing the functional potential of a mid-sized footprint through intellectual layout design.',
      scope: ['Layout Planning', 'Furniture Strategy'],
      designStyle: 'Contemporary Regional',
      materials: ['NA'],
      software: ['AutoCAD'],
      deliverables: ['Final Floor Plan', 'Spatial Allocation Spec']
    }
  }
];
