// All portfolio content lives here. Edit this file to update the site.
//
// Sources merged into this file:
//   1. CV — USANASE-SHEJA-Joie-Darlene-CV.pdf
//   2. Written brief (AlphaSoft/AlphaBank details, Zac Electronics, link rules)
//
// Link rules enforced throughout:
//   - `repo` / `demo` are only ever set to URLs that genuinely exist.
//   - Private professional work uses status 'private' and shows no repo link.
//   - Unfinished work uses status 'in-progress' and shows no demo link.

export const profile = {
  name: 'Usanase Sheja Joie Darlene',
  shortName: 'Joie Darlene',
  title: 'Full-Stack Developer',
  subtitle: 'Backend Engineering · IoT & Embedded Systems',
  location: 'Kigali, Rwanda',
  email: 'joiedarlene02@gmail.com',
  phone: '+250 780 947 018', // displayed
  phoneLink: '+250780947018', // used in the tel: href
  github: 'https://github.com/joie-darlene',
  githubHandle: 'joie-darlene',
  // Served from public/. Set to null to show initials instead of a photo.
  photo: '/profile.jpg',
  initials: 'JD',
  summary:
    'Full-stack developer building production server-side systems and the interfaces on top of them. Day to day I work in C# and Blazor on banking software used by financial institutions, with SQL Server, Dapper and REST APIs underneath. Outside of that I build with Node.js, Python, React and Tailwind, and I have hands-on embedded experience with C/C++, Arduino and computer vision. Curious, flexible, and always learning something new.',
  highlights: [
    { value: '3+', label: 'Years building software' },
    { value: '5', label: 'Institutions running AlphaBank' },
    { value: 'Top 10', label: 'RCA Hackathon, 40 teams' },
  ],
}

export const about = {
  paragraphs: [
    'I started out on the backend — Node.js, Python and Java services, PostgreSQL and MySQL behind them, APIs in front. That is still where I am most at home: modelling the data properly, keeping the business logic honest, and making sure the thing holds up when real people depend on it.',
    'Right now that means banking software. At AlphaSoft I work on AlphaBank in C# and Blazor, writing business logic and SQL Server data access with Dapper and stored procedures, building REST APIs between modules and producing the reports institution staff rely on. It is software where correctness is not negotiable, and that has shaped how I write everything else.',
    'Alongside that I take on freelance web work with React and Tailwind, and I have a real soft spot for hardware. My smart parking system paired YOLOv8 and OCR with an Arduino to open a gate by reading a license plate — the kind of project where the code has to meet the physical world and actually work.',
  ],
  focus: [
    'C# and Blazor banking systems at AlphaSoft',
    'Freelance e-commerce build for Zac Electronics',
    'Sharpening React, Tailwind and API design',
  ],
}

export const experience = [
  {
    company: 'AlphaSoft',
    role: 'Full-Stack Developer',
    period: 'Present',
    location: 'Kigali, Rwanda',
    current: true,
    summary:
      'Returned to AlphaSoft to work on AlphaBank, the proprietary core banking system we deliver to financial institutions across Rwanda. It is internal software — the users are the institutions’ own staff, not the public — so the work is about getting day-to-day banking operations right: backend business logic, data access, and the Blazor screens employees work in.',
    bullets: [
      'Develop and maintain features in AlphaBank, a C# and Blazor core banking system delivered to financial institutions.',
      'Write data access and business logic against SQL Server using Dapper and stored procedures.',
      'Build and consume REST APIs connecting modules across the platform.',
      'Produce operational and financial reports used by institution staff.',
    ],
    institutions: [
      'RIM',
      'CLECAM',
      'Umwarimu SACCO',
      'Zigama CSS',
      'AFOS (Army Shop)',
    ],
    tech: [
      'C#',
      'Blazor',
      'SQL Server',
      'Dapper',
      'Stored Procedures',
      'REST APIs',
    ],
    confidential: true,
    confidentialNote:
      'AlphaBank is core banking software. We deliver it to each institution as a closed internal system — only their own staff can reach it, and no part of it is exposed publicly. The source belongs to AlphaSoft and stays private, so there is no repository or demo to link. Happy to walk through the architecture and my contributions in an interview.',
  },
  {
    company: 'Africa Quantitative Sciences (AQS)',
    role: 'Full-Stack Developer Intern',
    period: 'Aug 2025 – Dec 2025',
    location: 'Kigali, Rwanda',
    current: false,
    summary:
      'Contributed to the development and maintenance of two internal platforms — a Budget Planning Application and the Health Resource Tracking Tool (HRTT) — working mainly on backend functionality, REST APIs and database operations for organisational planning and resource tracking.',
    bullets: [
      'Developed and maintained REST APIs with Flask-RESTX and FastAPI, supporting application features and communication between components.',
      'Worked with PostgreSQL to manage application data and support database operations.',
      'Built backend features for organisational management, including CRUD operations, administrative levels, program hierarchies and data retrieval.',
    ],
    tech: [
      'Python',
      'Flask-RESTX',
      'FastAPI',
      'PostgreSQL',
      'React',
      'Tailwind CSS',
      'Git',
    ],
    links: [{ label: 'CDRS — live site', href: 'https://cdrs-rca.org/' }],
  },
  {
    company: 'AlphaSoft',
    role: 'Full-Stack Developer',
    period: 'Jul 2024 – Dec 2024',
    location: 'Kigali, Rwanda',
    current: false,
    summary:
      'First period at AlphaSoft. Built a C# and Blazor resource management system that lets managers track company resources, inflows and outflows, and the dates attached to them.',
    bullets: [
      'Built resource tracking screens in Blazor backed by C# services.',
      'Modelled inflow, outflow and date-bound records so managers could follow resources over time.',
    ],
    tech: ['C#', 'Blazor', 'SQL Server'],
    confidential: true,
    confidentialNote: 'Internal company software — source code is private.',
  },
  {
    company: 'FOSEC',
    role: 'Backend Developer — Team Lead',
    period: '2023 – 2024',
    location: 'Nyabihu, Rwanda',
    current: false,
    summary:
      'Led the backend team on FOSEC, a food security application. The team placed in the top 10 of 40 at the RCA hackathon.',
    bullets: [
      'Led the backend team and coordinated the work into a shippable product.',
      'Designed and built the server-side APIs and data model behind the app.',
    ],
    tech: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
  },
  {
    company: 'Toursite',
    role: 'Backend Developer',
    period: 'Aug 2023 – Nov 2023',
    location: 'Kigali, Rwanda',
    current: false,
    summary:
      'An online platform letting tourists book tours and visit places virtually from home.',
    bullets: [
      'Built the backend services and database layer powering tour listings and bookings.',
    ],
    tech: ['Node.js', 'PostgreSQL', 'REST APIs'],
  },
]

export const projects = [
  {
    name: 'CDRS — Health Resource Tracking Tool',
    tagline: 'Cartographie Dynamique des Ressources Sanitaires',
    status: 'complete',
    statusLabel: 'Live',
    kind: 'Professional work at AQS',
    period: 'Aug 2025 – Dec 2025',
    description:
      'A platform for dynamically mapping and tracking health resources, built at Africa Quantitative Sciences alongside a Budget Planning Application. I worked on the backend: REST APIs, PostgreSQL data operations, and features for organisational management such as administrative levels and program hierarchies.',
    building: [
      'REST APIs with Flask-RESTX and FastAPI',
      'PostgreSQL data operations',
      'Administrative levels and program hierarchies',
      'CRUD and data retrieval for organisational management',
    ],
    tech: ['Python', 'FastAPI', 'Flask-RESTX', 'PostgreSQL', 'React', 'Tailwind CSS'],
    demo: 'https://cdrs-rca.org/',
    repo: null,
    note: 'Built as part of a team during my internship at AQS. The source code belongs to AQS and is not public.',
  },
  {
    name: 'Zac Electronics',
    tagline: 'E-commerce platform for an electronics retailer',
    status: 'in-progress',
    statusLabel: 'Freelance Web Development Project — In Progress',
    kind: 'Freelance client work',
    description:
      'An e-commerce website for Zac Electronics, a business selling electronic devices online. The goal is a professional shopping experience: a responsive homepage showcasing products, browsable categories and product details, search, a shopping cart and a customer ordering workflow, with order notifications emailed to the business and a contact section carrying the business information.',
    building: [
      'Responsive homepage showcasing electronic products',
      'Product listings, categories, product details and search',
      'Shopping cart and customer ordering workflow',
      'Order notifications sent to the business by email',
      'Contact section and business information',
      'Mobile and desktop friendly interface',
    ],
    tech: ['React', 'Tailwind CSS'],
    // No demo link until the site is actually deployed.
    demo: null,
    repo: 'https://github.com/joie-darlene/zac_electronics',
    repoLabel: 'Repository (private)',
    note: 'Client work in active development, so the repository is private and the link only opens for accounts with access. A live link will be added once the site is deployed.',
  },
  {
    name: 'AlphaBank',
    tagline: 'Core banking platform for financial institutions',
    status: 'private',
    statusLabel: 'Professional project — source code private',
    kind: 'Professional work at AlphaSoft',
    description:
      'Proprietary banking software used by microfinance institutions, a SACCO and a retail operation. My work covers backend business logic, SQL Server data access through Dapper and stored procedures, REST APIs between modules, reporting, and Blazor interfaces used by institution staff.',
    building: [
      'Business logic for core banking operations',
      'Data access with Dapper and stored procedures over SQL Server',
      'REST APIs between platform modules',
      'Operational and financial reports',
    ],
    tech: ['C#', 'Blazor', 'SQL Server', 'Dapper', 'REST APIs'],
    demo: null,
    repo: null,
    note: 'This is core banking software, delivered to each institution as a closed internal system that only their own staff can access. Nothing about it is public-facing, and the source belongs to AlphaSoft, so there is no repository or demo to link.',
  },
  {
    name: 'Smart Parking System',
    tagline: 'Automated gate access with computer vision',
    status: 'complete',
    statusLabel: 'Completed',
    kind: 'Embedded systems project',
    period: 'Sep 2024 – Jul 2025',
    description:
      'A smart parking system that opens a gate by reading the car in front of it. YOLOv8 detects the vehicle, Tesseract OCR reads the number plate, and an Arduino drives the servo on the barrier — but only when the plate matches the Rwandan format and has not just been logged. Every read is written to a timestamped CSV so the data can feed later work.',
    building: [
      'Vehicle detection with YOLOv8 over a webcam feed',
      'Plate extraction with Tesseract OCR and OpenCV',
      'Rwandan plate-format validation and duplicate filtering',
      'Gate control over serial to an Arduino servo',
      'Timestamped CSV logging of every plate read',
      'Exit flow with Arduino-based parking payment',
    ],
    tech: [
      'Python',
      'YOLOv8',
      'Tesseract OCR',
      'OpenCV',
      'pySerial',
      'Arduino',
      'C/C++',
    ],
    demo: null,
    repo: 'https://github.com/joie-darlene/Parking_management_system',
    links: [
      {
        label: 'car_exit — exit & payment',
        href: 'https://github.com/joie-darlene/car_exit',
      },
    ],
  },
  {
    name: 'KinyaWhisper Voice Assistant',
    tagline: 'A voice assistant that listens and replies in Kinyarwanda',
    status: 'complete',
    statusLabel: 'Completed',
    kind: 'Intelligent Robotics coursework',
    description:
      'A real-time voice assistant for Kinyarwanda. It transcribes speech with the KinyaWhisper model, fuzzy-matches the imperfect transcription against a set of known questions, and answers out loud in Kinyarwanda. Noise reduction and voice activity detection clean up the audio first, and the whole thing runs behind a Gradio interface in the browser.',
    building: [
      'Kinyarwanda speech recognition with the KinyaWhisper model',
      'Fuzzy matching so imperfect transcriptions still find the right question',
      'Kinyarwanda text-to-speech responses',
      'Noise reduction, voice activity detection and repetition filtering',
      'Gradio browser interface with conversation analytics',
    ],
    tech: [
      'Python',
      'Hugging Face Transformers',
      'Gradio',
      'Librosa',
      'WebRTC VAD',
      'FuzzyWuzzy',
      'FFmpeg',
    ],
    demo: null,
    repo: 'https://github.com/joie-darlene/kinya_whisper',
  },
  {
    name: 'AlphaStock',
    tagline: 'Production inventory and stock management system',
    status: 'private',
    statusLabel: 'In production — repository private',
    kind: 'Internal business system',
    description:
      'An inventory and stock management system that centralises products, suppliers, departments and the stock operations around them. Built on ASP.NET Core and Blazor over SQL Server, in a layered architecture that keeps the UI, services, API and shared contracts separate. It is actively used in production for day-to-day internal stock activity.',
    building: [
      'Product, supplier, department and category management (full CRUD)',
      'Stock quantity monitoring with configurable alert thresholds',
      'Transaction-based updates through stored procedures',
      'Audit tracking of created and modified records',
      'Modal-driven interactions with confirmation on critical actions',
      'Layered architecture — UI, Services, API and a shared DLL',
    ],
    tech: [
      'C#',
      'Blazor (Interactive Server)',
      'ASP.NET Core Web API',
      'SQL Server',
      'Dapper',
      'HttpClient',
      'Bootstrap',
    ],
    demo: null,
    // Private repository — the link only resolves for accounts with access.
    repo: 'https://github.com/joie-darlene/Alpha_STOCK',
    repoLabel: 'Repository (private)',
    note: 'AlphaStock runs in production as an internal business system, so the repository is private. The link below only opens for accounts with access.',
  },
  {
    name: 'Insurance Solution — Data Synchronisation',
    tagline: 'Keeping car insurance records in sync across systems',
    status: 'private',
    statusLabel: 'Team project — repository private',
    kind: 'Collaborative project',
    // TODO: correct this description and fill in `tech` — written from the
    // project name, since the repository is private and cannot be read.
    description:
      'A car insurance solution with a data synchronisation layer that keeps policy and client records consistent between systems, so the data each part of the business works from stays current.',
    building: [],
    tech: [], // TODO: list the languages, frameworks and database used
    demo: null,
    // Private repository under a collaborator's account.
    repo: 'https://github.com/enock-meston/InsuranceSolutionSyncroniseData',
    repoLabel: 'Repository (private)',
    note: 'Built with a collaborator. The repository is private, so the link only opens for accounts with access.',
  },
  {
    name: 'AI Data Labelling',
    tagline: 'Annotated dataset for training a vision model',
    status: 'complete',
    statusLabel: 'Completed',
    kind: 'Machine learning',
    description:
      'Dataset annotation work supporting model training — preparing and labelling around 100 samples so a computer vision model has consistent, usable ground truth to learn from. The unglamorous half of machine learning, and the half that decides whether the model is any good.',
    building: [],
    tech: ['Data Annotation', 'Computer Vision'],
    demo: null,
    repo: 'https://github.com/joie-darlene/Ai_data_labelling',
  },
  {
    name: 'Decoding Machine-Readable Codes',
    tagline: 'Barcodes, QR, PDF417 and Data Matrix',
    status: 'complete',
    statusLabel: 'Completed',
    kind: 'Computer vision coursework',
    description:
      'A set of Python scripts that read machine-readable codes out of images — barcodes, QR codes, PDF417 and Data Matrix — and write back the decoded result. Each script handles a different sample image and code type.',
    building: [
      'Barcode and QR code decoding from images',
      'PDF417 and Data Matrix decoding',
      'Decoded output written back as annotated images',
    ],
    tech: ['Python', 'Computer Vision', 'Image Processing'],
    demo: null,
    repo: 'https://github.com/joie-darlene/assignments_of_decoding',
  },
  {
    name: 'FOSEC',
    tagline: 'Food security application',
    status: 'complete',
    statusLabel: 'Hackathon — Top 10 of 40',
    kind: 'Team project, backend lead',
    period: '2023 – 2024',
    description:
      'A food security application built with a team I led on the backend. The project reached the top 10 of 40 teams at the RCA hackathon.',
    building: [
      'Backend APIs and data model',
      'Team coordination and delivery',
    ],
    tech: ['Node.js', 'Python', 'PostgreSQL'],
    demo: null,
    repo: null, // Add the GitHub URL here if a public repo exists.
  },
  {
    name: 'Toursite',
    tagline: 'Virtual tourism and booking platform',
    status: 'complete',
    statusLabel: 'Completed',
    kind: 'Team project, backend',
    period: 'Aug 2023 – Nov 2023',
    description:
      'An online platform that lets tourists book tours and explore destinations virtually from home. I built the backend services and database layer.',
    building: ['Tour listing and booking APIs', 'Database design'],
    tech: ['Node.js', 'PostgreSQL', 'REST APIs'],
    demo: null,
    repo: null, // Add the GitHub URL here if a public repo exists.
  },
]

export const skills = [
  {
    group: 'Languages',
    level: 4,
    items: ['C#', 'Java', 'JavaScript', 'Python', 'C / C++'],
  },
  {
    group: 'Frameworks',
    level: 4,
    items: [
      'Blazor',
      'React',
      'Node.js',
      'FastAPI',
      'Flask / Flask-RESTX',
      'Spring Boot',
      'Django',
    ],
  },
  {
    group: 'Databases',
    level: 4,
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    group: 'Backend & Data Access',
    level: 4,
    items: [
      'REST API design',
      'Dapper',
      'Stored Procedures',
      'CRUD & Data Modelling',
      'Reporting',
    ],
  },
  {
    group: 'Frontend',
    level: 3,
    items: ['React', 'Tailwind CSS', 'Blazor Components'],
  },
  {
    group: 'IoT & Embedded',
    level: 3,
    items: ['Arduino', 'Embedded Systems', 'YOLOv8', 'Tesseract OCR'],
  },
  {
    group: 'Tools & Platforms',
    level: 3,
    items: ['Git', 'GitHub', 'Docker (basics)', 'Power BI'],
  },
  {
    group: 'Machine Learning',
    level: 3,
    items: ['Computer Vision', 'Model Integration'],
  },
]

export const softSkills = [
  'Teamwork',
  'Collaboration',
  'Communication',
  'Problem-solving',
  'Flexibility',
]

export const education = [
  {
    level: "A'Level",
    school: 'Rwanda Coding Academy',
    period: '2023 – 2025',
    location: 'Mukamira, Rwanda',
    description:
      'Hands-on software programming with embedded systems, working on a range of practical projects.',
  },
]

export const certificates = [
  {
    name: 'RCA Hackathon — Top 10 Team',
    issuer: 'Rwanda Coding Academy',
    description:
      'Placed in the top 10 of 40 teams. Certified as system analyst and backend developer.',
  },
  {
    name: 'Ideation and Prototyping',
    issuer: 'Rwanda Coding Academy, organised by GIZ',
    date: 'August 2024',
    description:
      'Programme covering idea development and prototyping practice.',
  },
  {
    name: 'iLead Certificate',
    issuer: 'iLead Programme',
    description:
      'Leadership, teamwork and effective communication.',
  },
]

export const languages = [
  { name: 'Kinyarwanda', level: 5 },
  { name: 'English', level: 4 },
  { name: 'Swahili', level: 1 },
  { name: 'French', level: 1 },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
