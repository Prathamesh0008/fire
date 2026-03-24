export interface ViewerHotspot {
  id: string
  title: string
  description: string
  x: number
  y: number
}

export interface Product {
  id: number
  name: string
  slug: string
  category: string
  useCases: string[]
  description: string
  longDescription: string
  image: string
  viewerFrames: string[]
  hotspots: ViewerHotspot[]
  features: string[]
  specifications: { label: string; value: string }[]
  applications: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Fire Hydrant System',
    slug: 'fire-hydrant-system',
    category: 'Water-Based Systems',
    useCases: ['Industrial', 'Commercial'],
    description: 'Complete fire hydrant system for commercial and industrial buildings',
    longDescription:
      'Our fire hydrant systems provide reliable water supply for firefighting operations. Designed for high-rise buildings, industrial complexes, and commercial spaces, these systems ensure immediate water availability at strategic points.',
    image: '/assets/hydrant-system.jpeg',
    viewerFrames: [
      '/assets/hydrant-system.jpeg',
      '/Fire Hydrant System.jpeg',
      '/images/hydrant-system.svg',
      '/assets/hydrant-system.jpeg'
    ],
    hotspots: [
      {
        id: 'hydrant-valve',
        title: 'High-Pressure Valve Cluster',
        description: 'Engineered to maintain reliable pressure during peak firefighting demand.',
        x: 34,
        y: 54
      },
      {
        id: 'hydrant-riser',
        title: 'Main Riser Connection',
        description: 'Provides rapid water flow from main supply to vertical distribution points.',
        x: 62,
        y: 46
      },
      {
        id: 'hydrant-cabinet',
        title: 'Service Access Cabinet',
        description: 'Quick inspection and maintenance access for emergency readiness.',
        x: 76,
        y: 67
      }
    ],
    features: [
      'High-pressure water supply',
      'Corrosion-resistant materials',
      'Easy accessibility',
      'Compliant with NFPA standards',
      '24/7 operational readiness'
    ],
    specifications: [
      { label: 'Pressure Rating', value: 'Up to 10 kg/cm^2' },
      { label: 'Material', value: 'Cast Iron / Stainless Steel' },
      { label: 'Pipe Size', value: '150mm - 200mm' },
      { label: 'Certification', value: 'ISO 9001:2015' }
    ],
    applications: [
      'High-rise buildings',
      'Industrial facilities',
      'Commercial complexes',
      'Warehouses',
      'Petrochemical plants'
    ]
  },
  {
    id: 2,
    name: 'Sprinkler System',
    slug: 'sprinkler-system',
    category: 'Water-Based Systems',
    useCases: ['Commercial', 'Institutional', 'Residential'],
    description: 'Automatic fire sprinkler systems for rapid response',
    longDescription:
      'Advanced automatic sprinkler systems that activate instantly when heat is detected. Ideal for offices, hotels, hospitals, and residential complexes.',
    image: '/assets/sprinkler-system.jpeg',
    viewerFrames: [
      '/assets/sprinkler-system.jpeg',
      '/Sprinkler System.jpeg',
      '/images/sprinkler-system.svg',
      '/assets/sprinkler-system.jpeg'
    ],
    hotspots: [
      {
        id: 'sprinkler-head',
        title: 'Quick-Response Head',
        description: 'Activates in seconds to suppress fire before escalation.',
        x: 52,
        y: 34
      },
      {
        id: 'sprinkler-branch',
        title: 'Branch Line Network',
        description: 'Even pressure distribution across coverage zones.',
        x: 32,
        y: 56
      },
      {
        id: 'sprinkler-control',
        title: 'Control Valve Assembly',
        description: 'Centralized flow isolation for safe maintenance and testing.',
        x: 72,
        y: 62
      }
    ],
    features: [
      'Automatic activation',
      'Quick response time',
      'Minimal water damage',
      'Multiple temperature ratings',
      'Reliable performance'
    ],
    specifications: [
      { label: 'Response Time', value: '< 60 seconds' },
      { label: 'Temperature Rating', value: '68 deg C - 93 deg C' },
      { label: 'Coverage Area', value: 'Up to 12m^2 per head' },
      { label: 'Material', value: 'Brass / Chrome' }
    ],
    applications: [
      'Hotels',
      'Hospitals',
      'Office buildings',
      'Shopping malls',
      'Residential complexes'
    ]
  },
  {
    id: 3,
    name: 'Fire Extinguisher',
    slug: 'fire-extinguisher',
    category: 'Portable Protection',
    useCases: ['Commercial', 'Residential', 'Industrial'],
    description: 'Portable fire extinguishers for all types of fires',
    longDescription:
      'High-quality portable fire extinguishers available in various types (ABC, CO2, Foam) to handle different classes of fires. Essential for every building.',
    image: '/assets/fire-extinguisher.jpeg',
    viewerFrames: [
      '/assets/fire-extinguisher.jpeg',
      '/Fire Extinguisher.jpeg',
      '/images/fire-extinguisher.svg',
      '/assets/fire-extinguisher.jpeg'
    ],
    hotspots: [
      {
        id: 'extinguisher-gauge',
        title: 'Pressure Gauge',
        description: 'Instantly indicates readiness with clear safe-zone readings.',
        x: 47,
        y: 26
      },
      {
        id: 'extinguisher-pin',
        title: 'Safety Pin & Seal',
        description: 'Tamper-evident lock ensures unit is armed but protected from accidental discharge.',
        x: 58,
        y: 18
      },
      {
        id: 'extinguisher-nozzle',
        title: 'Discharge Nozzle',
        description: 'Controlled directional spray for safer first-response handling.',
        x: 72,
        y: 33
      }
    ],
    features: [
      'Multiple types available',
      'Easy to operate',
      'ISI marked',
      'Rechargeable',
      'Long shelf life'
    ],
    specifications: [
      { label: 'Capacity', value: '1kg - 9kg' },
      { label: 'Types', value: 'ABC, CO2, Foam, DCP' },
      { label: 'Certification', value: 'ISI, CE' },
      { label: 'Operating Temperature', value: '-20 deg C to 55 deg C' }
    ],
    applications: ['Homes', 'Offices', 'Vehicles', 'Kitchens', 'Electrical rooms']
  },
  {
    id: 4,
    name: 'Fire Door & Assembly',
    slug: 'fire-door-assembly',
    category: 'Passive Fire Safety',
    useCases: ['Commercial', 'Institutional', 'Industrial'],
    description: 'Certified fire-rated doors for compartmentalization',
    longDescription:
      'Premium fire-rated doors that prevent fire spread between compartments. Available in various sizes and finishes for commercial and residential applications.',
    image: '/assets/fire-door-assembly.jpeg',
    viewerFrames: [
      '/assets/fire-door-assembly.jpeg',
      '/Fire Door & Assembly.jpeg',
      '/images/fire-door.svg',
      '/assets/fire-door-assembly.jpeg'
    ],
    hotspots: [
      {
        id: 'door-core',
        title: 'Fire-Rated Core',
        description: 'High-density core slows heat transfer and flame penetration.',
        x: 52,
        y: 51
      },
      {
        id: 'door-closer',
        title: 'Automatic Door Closer',
        description: 'Ensures doors return to closed position after every use.',
        x: 66,
        y: 17
      },
      {
        id: 'door-seal',
        title: 'Intumescent Smoke Seal',
        description: 'Expands during heat to block smoke spread across compartments.',
        x: 30,
        y: 68
      }
    ],
    features: [
      'Fire-resistant materials',
      'Automatic closing mechanism',
      'Smoke seals included',
      'Multiple finishes',
      'Certified ratings'
    ],
    specifications: [
      { label: 'Fire Rating', value: '30min - 120min' },
      { label: 'Material', value: 'Steel / Timber' },
      { label: 'Size', value: 'Customizable' },
      { label: 'Standard', value: 'IS 3614' }
    ],
    applications: ['Staircases', 'Server rooms', 'Electrical rooms', 'Corridors', 'Emergency exits']
  },
  {
    id: 5,
    name: 'Fire Hose Reel System',
    slug: 'fire-hose-reel-system',
    category: 'Water-Based Systems',
    useCases: ['Commercial', 'Institutional', 'Industrial'],
    description: 'Manual fire fighting equipment for first responders',
    longDescription:
      'Durable fire hose reel systems for manual firefighting operations. Easy to operate and maintain.',
    image: '/assets/fire-hose-reel-system.jpeg',
    viewerFrames: [
      '/assets/fire-hose-reel-system.jpeg',
      '/Fire Hose Reel System.jpeg',
      '/images/hose-reel.svg',
      '/assets/fire-hose-reel-system.jpeg'
    ],
    hotspots: [
      {
        id: 'hose-drum',
        title: 'Reinforced Drum',
        description: 'Designed for quick pull-out and rewind under pressure.',
        x: 48,
        y: 55
      },
      {
        id: 'hose-nozzle',
        title: 'Jet/Fog Nozzle',
        description: 'Supports flexible stream patterns for different fire classes.',
        x: 72,
        y: 58
      },
      {
        id: 'hose-bracket',
        title: 'Wall-Mount Bracket',
        description: 'Heavy-duty support keeps the reel stable in high-traffic areas.',
        x: 32,
        y: 67
      }
    ],
    features: [
      'Heavy-duty construction',
      'Easy operation',
      'Corrosion resistant',
      'Complete with nozzle',
      'Wall-mounted design'
    ],
    specifications: [
      { label: 'Hose Length', value: '30m - 45m' },
      { label: 'Hose Diameter', value: '19mm - 25mm' },
      { label: 'Material', value: 'PVC / Rubber' },
      { label: 'Working Pressure', value: '6 kg/cm^2' }
    ],
    applications: ['Shopping malls', 'Factories', 'Schools', 'Hospitals', 'Parking areas']
  },
  {
    id: 6,
    name: 'Fire Alarm System',
    slug: 'fire-alarm-system',
    category: 'Detection & Alert',
    useCases: ['Commercial', 'Institutional', 'Industrial'],
    description: 'Early warning detection and alarm systems',
    longDescription:
      'Advanced fire alarm systems with smoke detectors, heat sensors, and manual call points. Provides early warning for quick evacuation.',
    image: '/assets/fire-alarm-system.jpeg',
    viewerFrames: [
      '/assets/fire-alarm-system.jpeg',
      '/Fire Alarm System.jpeg',
      '/images/alarm-system.svg',
      '/assets/fire-alarm-system.jpeg'
    ],
    hotspots: [
      {
        id: 'alarm-detector',
        title: 'Smoke/Heat Detector',
        description: 'Multi-sensor detection enables early warning and fewer false alarms.',
        x: 43,
        y: 34
      },
      {
        id: 'alarm-panel',
        title: 'Addressable Control Panel',
        description: 'Pinpoints exact zone and event source for rapid response.',
        x: 66,
        y: 52
      },
      {
        id: 'alarm-sounder',
        title: 'Audio-Visual Sounder',
        description: 'High-decibel alarm with visual cue for fast building evacuation.',
        x: 27,
        y: 62
      }
    ],
    features: [
      'Early detection',
      'Loud audible alarms',
      'Visual indicators',
      'Addressable systems available',
      'Integration capability'
    ],
    specifications: [
      { label: 'Detection Type', value: 'Smoke, Heat, Multi' },
      { label: 'Power Supply', value: '230V AC + Battery backup' },
      { label: 'Standards', value: 'IS 2189' },
      { label: 'Zones', value: '4 - 64 zones' }
    ],
    applications: [
      'Hotels',
      'Hospitals',
      'Educational institutions',
      'Office buildings',
      'Industrial plants'
    ]
  }
]
