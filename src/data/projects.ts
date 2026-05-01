import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Al Mahra Villa',
    category: ['Residential', 'Villa', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2024,
    shortDescription: 'Luxury villa with modern minimal interiors and high-end finishes.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'A high-end residential interior project focused on a seamless blend of luxury materials and warm minimalism.',
      scope: ['Interior Design', '3D Visualization', 'Material Selection'],
      designStyle: 'Modern Luxury / Minimalist',
      materials: ['Travertine', 'Warm Walnut', 'Fluted Glass'],
      software: ['Blender', 'Photoshop'],
      deliverables: ['High-res interior renders', 'Moodboards'],
      workflow: 'Concept → Modeling → Lighting → Rendering',
      output: '8K Photorealistic Interior Stills'
    }
  },
  {
    id: '2',
    title: 'Arabian Ranches Residence',
    category: ['Residential', 'Villa'],
    location: 'Dubai, UAE',
    year: 2024,
    shortDescription: 'Comprehensive interior design and space planning for a luxury family residence.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Redefining family living through logical flow and sophisticated materiality.',
      scope: ['Interior Design', 'Space Planning', 'Visualization'],
      designStyle: 'Contemporary Elegance',
      materials: ['Oak Flooring', 'Textured Plaster', 'Brass Accents'],
      software: ['3ds Max', 'V-Ray', 'AutoCAD'],
      deliverables: ['Technical Drawings', '3D Renders'],
      workflow: 'Space usage analysis → Layout Design → Visualization'
    }
  },
  {
    id: '3',
    title: 'Palm Jumeirah Villas',
    category: ['Residential', 'Villa', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2023,
    shortDescription: 'Multiple high-end interior visualizations for signature villas on the Palm Jumeirah.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Creating atmospheric and emotionally engaging interior visuals for ultra-luxury real estate.',
      scope: ['3D Interior Visualization', 'Lighting Design'],
      designStyle: 'Ultra-Luxury Modern Interior',
      materials: ['Marble', 'Polished Stone', 'Luxury Fabrics'],
      software: ['3ds Max', 'V-Ray', 'Corona'],
      deliverables: ['Cinematic Interior Renders', 'Walkthroughs']
    }
  },
  {
    id: '4',
    title: 'Falcon Aviation Project',
    category: ['Commercial', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2024,
    shortDescription: 'Commercial interior visualization project for premium aviation facilities.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Focusing on clean, professional interior aesthetics and structural clarity for aviation lounges.',
      scope: ['Commercial Interior Visualization'],
      designStyle: 'Aviation Luxury',
      materials: ['Aluminium', 'Glass', 'Steel'],
      software: ['Blender', 'V-Ray'],
      deliverables: ['Interior Lounge Renders', 'Lobby Visualization']
    }
  },
  {
    id: '5',
    title: 'Global Village Project',
    category: ['Commercial', '3D Visualization'],
    location: 'Dubai, UAE',
    year: 2023,
    shortDescription: 'Detailed interior concept visualization for exhibition pavillions.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Dynamic and vibrant interior visualization of high-traffic public exhibition spaces.',
      scope: ['Concept Interior Visualization'],
      designStyle: 'Eclectic / Exhibition',
      materials: ['Variable textures', 'Dynamic lighting'],
      software: ['Blender', 'Photoshop'],
      deliverables: ['Atmospheric interior renders']
    }
  },
  {
    id: '6',
    title: 'Kozhikode 4BHK Residences',
    category: ['Residential', 'Apartment', 'Space Planning'],
    location: 'Kerala, India',
    year: 2022,
    shortDescription: 'Layout planning for two 4BHK residencies focusing on circulation and flow.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Two residential projects focused on optimizing space utilization and functional zoning for large families.',
      scope: ['Space Planning', 'Layout Design'],
      designStyle: 'Functional / Modern',
      materials: ['Local Stone', 'Wood Work'],
      software: ['AutoCAD'],
      deliverables: ['Detailed Layout Plans', 'Zoning Diagrams'],
      workflow: 'Circulation analysis → Bedroom allocation → Zoning'
    }
  },
  {
    id: '7',
    title: 'Pathanamthitta Residence',
    category: ['Residential', 'Space Planning'],
    location: 'Kerala, India',
    year: 2021,
    shortDescription: 'Residential layout design focused on efficient space usage and logical planning.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    status: 'Completed',
    details: {
      overview: 'Optimizing small-footprint residential living without sacrificing functionality.',
      scope: ['Space Planning', 'Layout Design'],
      designStyle: 'Contemporary Regional',
      materials: ['Mixed Media'],
      software: ['AutoCAD'],
      deliverables: ['Zoning Plans', 'Furniture Layout']
    }
  }
];
