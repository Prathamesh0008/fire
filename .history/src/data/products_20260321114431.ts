export interface Product {
  id: number
  name: string
  slug: string
  description: string
  longDescription: string
  image: string
  features: string[]
  specifications: { label: string; value: string }[]
  applications: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Fire Hydrant System',
    slug: 'fire-hydrant-system',
    description: 'Complete fire hydrant system for commercial and industrial buildings',
    longDescription: 'Our fire hydrant systems provide reliable water supply for firefighting operations. Designed for high-rise buildings, industrial complexes, and commercial spaces, these systems ensure immediate water availability at strategic points.',
    image: 'https://images.unsplash.com/photo-1597002641620-35d6aaf3b1c7',
    features: [
      'High-pressure water supply',
      'Corrosion-resistant materials',
      'Easy accessibility',
      'Compliant with NFPA standards',
      '24/7 operational readiness'
    ],
    specifications: [
      { label: 'Pressure Rating', value: 'Up to 10 kg/cm²' },
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
    description: 'Automatic fire sprinkler systems for rapid response',
    longDescription: 'Advanced automatic sprinkler systems that activate instantly when heat is detected. Ideal for offices, hotels, hospitals, and residential complexes.',
    image: 'https://images.unsplash.com/photo-1620146344904-097a0002d797',
    features: [
      'Automatic activation',
      'Quick response time',
      'Minimal water damage',
      'Multiple temperature ratings',
      'Reliable performance'
    ],
    specifications: [
      { label: 'Response Time', value: '< 60 seconds' },
      { label: 'Temperature Rating', value: '68°C - 93°C' },
      { label: 'Coverage Area', value: 'Up to 12m² per head' },
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
    description: 'Portable fire extinguishers for all types of fires',
    longDescription: 'High-quality portable fire extinguishers available in various types (ABC, CO2, Foam) to handle different classes of fires. Essential for every building.',
    image: 'https://images.unsplash.com/photo-1607083206325-caf1edba7a0f',
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
      { label: 'Operating Temperature', value: '-20°C to 55°C' }
    ],
    applications: [
      'Homes',
      'Offices',
      'Vehicles',
      'Kitchens',
      'Electrical rooms'
    ]
  },
  {
    id: 4,
    name: 'Fire Door & Assembly',
    slug: 'fire-door-assembly',
    description: 'Certified fire-rated doors for compartmentalization',
    longDescription: 'Premium fire-rated doors that prevent fire spread between compartments. Available in various sizes and finishes for commercial and residential applications.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
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
    applications: [
      'Staircases',
      'Server rooms',
      'Electrical rooms',
      'Corridors',
      'Emergency exits'
    ]
  },
  {
    id: 5,
    name: 'Fire Hose Reel System',
    slug: 'fire-hose-reel-system',
    description: 'Manual fire fighting equipment for first responders',
    longDescription: 'Durable fire hose reel systems for manual firefighting operations. Easy to operate and maintain.',
    image: 'https://images.unsplash.com/photo-1600679472829-3044539ce8c3',
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
      { label: 'Working Pressure', value: '6 kg/cm²' }
    ],
    applications: [
      'Shopping malls',
      'Factories',
      'Schools',
      'Hospitals',
      'Parking areas'
    ]
  },
  {
    id: 6,
    name: 'Fire Alarm System',
    slug: 'fire-alarm-system',
    description: 'Early warning detection and alarm systems',
    longDescription: 'Advanced fire alarm systems with smoke detectors, heat sensors, and manual call points. Provides early warning for quick evacuation.',
    image: 'https://images.unsplash.com/photo-1581091215367-59ab6b1d5f6d',
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