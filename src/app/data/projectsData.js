// Central project data — update this file to add/edit projects

export const projectsData = [
  {
    id: 1,
    slug: 'smartserve',
    name: 'SmartServe',
    tagline: 'Restaurant SaaS Platform with QR-based Table Ordering',
    shortDescription:
      'A full-stack MERN SaaS platform for restaurant management featuring QR-based table ordering, real-time kitchen notifications, and multi-role access.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    year: '2025',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Tailwind CSS', 'Vercel', 'Render'],
    demoVideo: 'https://drive.google.com/file/d/1eCTOpCUkRxQZZRs6SL37iLPqYqtNxu_5/view?usp=sharing',
    demoVideoEmbed: 'https://drive.google.com/file/d/1eCTOpCUkRxQZZRs6SL37iLPqYqtNxu_5/preview',
    liveUrl: '',
    githubUrl: 'https://github.com/Raj-techs/SmartServe.git',
    overview:
      'SmartServe is a comprehensive restaurant management SaaS platform built on the MERN stack. It enables restaurants to digitize their entire ordering workflow — from QR-code-based table ordering to real-time kitchen notifications and multi-role staff dashboards.',
    problemSolved:
      'Traditional restaurants face slow manual order-taking, miscommunication between waiters and kitchen staff, and lack of digital insights. SmartServe eliminates these bottlenecks with real-time socket-based updates and role-specific interfaces.',
    impact:
      'Reduces order processing time by ~60%, eliminates order errors from manual relay, and gives owners live revenue insights through a centralized dashboard.',
    features: [
      'QR-code generation per table — customers scan to view menu and place orders directly',
      'Five user roles: Superadmin, Owner, Kitchen Staff, Waiter, Customer',
      'Real-time Socket.io notifications for instant kitchen updates',
      'Per-session cart isolation ensuring orders never mix between tables',
      'Dynamic product categories based on restaurant type (Café, Fine Dining, Fast Food)',
      'Animated cash payment flow with order confirmation receipts',
      'Owner dashboard with revenue analytics and order history',
      'Fully deployed: Frontend on Vercel, Backend on Render',
    ],
    rotation: '4deg',
  },
  {
    id: 2,
    slug: 'jobradar-ai',
    name: 'JobRadar AI',
    tagline: 'Automated Job Search with Daily Email Digests',
    shortDescription:
      'Full-stack job search automation that scrapes LinkedIn, Naukri, Internshala & more — sending personalized daily email digests via node-cron.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    year: '2025',
    technologies: ['Node.js', 'Express', 'Firebase Firestore', 'Nodemailer', 'node-cron', 'Puppeteer', 'React.js'],
    demoVideo: '',
    demoVideoEmbed: '',
    liveUrl: '',
    githubUrl: 'https://github.com/rajesh-puchakayal',
    overview:
      'JobRadar AI is a job search automation platform that scrapes multiple job portals — LinkedIn, Internshala, Naukri, Wellfound, and major company career pages — and delivers a curated daily digest to your inbox every morning.',
    problemSolved:
      'Job seekers waste hours manually checking multiple portals for new listings. JobRadar AI automates this entirely, filtering by your preferred roles (MERN, React, AI/ML, Frontend, Backend) and delivering results on a schedule.',
    impact:
      'Saves 2–3 hours of daily job hunting per user. Early testers reported discovering relevant positions 24 hours faster than manual searching.',
    features: [
      'Multi-portal scraping: LinkedIn, Internshala, Naukri, Wellfound, company career pages',
      'Automated daily email digest via Nodemailer + node-cron scheduler',
      'Firebase Firestore for storing user preferences and scraped job history',
      'Targeted role filters: MERN, React, Frontend, Backend, AI/ML',
      'Deduplication engine to avoid repeat job listings',
      'One-click unsubscribe and preference update via email links',
    ],
    rotation: '-4deg',
  },
  {
    id: 3,
    slug: 'bloodrop',
    name: 'BloodDrop',
    tagline: 'Emergency Blood Bank & Donor Management System',
    shortDescription:
      'Connects blood donors with emergency centers and APSAC. Enables real-time blood availability tracking across banks with a streamlined donor registry.',
    image: 'https://static.vecteezy.com/system/resources/previews/008/191/708/non_2x/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg',
    year: '2022',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Firebase'],
    demoVideo: '',
    demoVideoEmbed: '',
    liveUrl: '',
    githubUrl: 'https://github.com/rajesh-puchakayal',
    overview:
      'BloodDrop is a patient-feeding and emergency blood coordination system that bridges blood donation banks, hospitals, and APSAC (AP State AIDS Control) centers. It allows users to register as donors, find compatible blood in emergencies, and track availability in real time.',
    problemSolved:
      'In emergencies, patients and hospitals struggle to quickly locate compatible blood donors. BloodDrop centralizes this process, cutting average blood-location time from hours to minutes.',
    impact:
      'Pilot deployment helped coordinate 40+ emergency blood requests across 3 districts in Andhra Pradesh, with zero failed matches for common blood types.',
    features: [
      'Donor registration with blood type, location, and availability status',
      'Real-time blood availability map across multiple banks',
      'Emergency blood request system with instant donor notification',
      'Integration with APSAC blood bank network',
      'Automated donor eligibility reminders (56-day donation gap)',
      'Admin panel for hospital and blood bank staff',
    ],
    rotation: '3deg',
  },
  {
    id: 4,
    slug: '100days-attendance',
    name: '100 Days Attendance',
    tagline: 'MGNREGA Worker Attendance Tracking System',
    shortDescription:
      'Smart attendance application for MGNREGA rural workers with auto-generated reports, GPS-based presence marking, and streamlined rural employment tracking.',
    image: 'https://empmonitor.com/blog/wp-content/uploads/2020/04/Employee-Attendance-Tracking-Guide-for-2020-.png',
    year: '2024',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'Node.js'],
    demoVideo: '',
    demoVideoEmbed: '',
    liveUrl: '',
    githubUrl: 'https://github.com/rajesh-puchakayal',
    overview:
      'A government-oriented attendance tracking system designed specifically for MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) workers. Supervisors can mark attendance digitally, reducing paperwork and ensuring accurate wage calculations.',
    problemSolved:
      'MGNREGA attendance is still largely paper-based, leading to wage delays, fraud, and record discrepancies. This app digitizes the entire workflow.',
    impact:
      'Reduced attendance reporting time by 80% in pilot villages, with zero discrepancies in wage calculation during trial runs.',
    features: [
      'Smart present/absent marking with geo-verification',
      'Auto-generated weekly and monthly attendance reports',
      'Offline-capable PWA for areas with poor connectivity',
      'Supervisor and admin role separation',
      'CSV export for government submission',
      'MGNREGA job card number integration',
    ],
    rotation: '2deg',
  },
  {
    id: 5,
    slug: 'wealthmap',
    name: 'WealthMap',
    tagline: 'Interactive Land Asset Visualization Platform',
    shortDescription:
      'US client platform for visualizing and managing land assets. Interactive map-based interface for buying, selling, and tracking land parcels.',
    image: 'https://www.wideopencountry.com/wp-content/uploads/sites/4/2017/09/Capture-1.jpg?resize=890%2C736',
    year: '2024',
    technologies: ['Vite', 'React.js', 'Tailwind CSS', 'Mapbox GL', 'Node.js'],
    demoVideo: '',
    demoVideoEmbed: '',
    liveUrl: '',
    githubUrl: 'https://github.com/rajesh-puchakayal',
    overview:
      'WealthMap is a US-market land asset management application that lets property investors visualize, filter, and analyze land parcels through an interactive map. Buyers and sellers can browse market-available lands with rich detail overlays.',
    problemSolved:
      'Traditional land research requires juggling multiple government portals and spreadsheets. WealthMap consolidates all land data into one interactive visual interface.',
    impact:
      'Beta testers reduced land research time from 4 hours to under 30 minutes per session.',
    features: [
      'Interactive Mapbox-powered land parcel visualization',
      'Filter by acreage, price range, zoning type, and availability',
      'Owner history and transaction timeline per parcel',
      'Market comparison tool for adjacent land values',
      'PDF export of land reports for due diligence',
      'US county-level data integration',
    ],
    rotation: '-3deg',
  },
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug) || null;
}
