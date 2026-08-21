export const projects = [
  {
    slug: 'kvantum-room',
    title: 'Kvantum Room',
    tagline: 'Real-time collaborative study platform',
    year: 'Feb 2026',
    liveHref: 'https://ayishanu17-crypto.github.io/study-room/',
    repoHref: null, // add your GitHub repo link here
    problem:
      'Students studying remotely juggle separate apps for chat, whiteboarding, and getting quick help — there was no single space to collaborate in real time.',
    solution:
      'A unified study room where classmates chat, draw on a shared whiteboard, and get instant AI-assisted answers, all synced live.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Firebase'],
    role: [
      'Engineered the real-time sync layer on Firebase, supporting 10+ concurrent users at sub-100ms latency',
      'Built 5+ core modules, including live chat, an AI-powered doubt solver, and a shared whiteboard',
      'Implemented a fully responsive UI tested across 3+ device viewports with Tailwind CSS',
    ],
    results: [
      { label: 'Concurrent users', value: '10+' },
      { label: 'Sync latency', value: '<100ms' },
      { label: 'Core modules shipped', value: '5+' },
    ],
    caseStudy: {
      challenge:
        'The hardest problem was keeping chat, whiteboard strokes, and doubt-solver state consistent across multiple users without introducing lag that would break the feel of a live room.',
      decisions:
        'I chose Firebase Realtime Database over a custom WebSocket server to move faster under the hackathon clock, structuring data so each module (chat, board, doubts) synced independently — a slow whiteboard render couldn\'t stall the chat.',
      tradeoffs:
        'Firebase made real-time sync fast to ship, but it meant less control over conflict resolution than a CRDT-based approach would give. For a v2, I\'d look at operational transforms for the whiteboard specifically, since freehand strokes are the most collision-prone part of the app.',
    },
  },
  {
    slug: 'crop-care',
    title: 'Crop Care',
    tagline: 'Plant disease detection from a leaf photo',
    year: 'Jan 2026',
    liveHref: 'https://cropcare-five.vercel.app/',
    repoHref: null, // add your GitHub repo link here
    problem:
      'Farmers often lack quick access to plant pathologists, so diseases can go undiagnosed until crop damage is severe.',
    solution:
      'A CNN that classifies common plant diseases from a single leaf photo, paired with a web app that returns a diagnosis and treatment steps in seconds.',
    stack: ['Python', 'TensorFlow', 'Keras', 'HTML/CSS/JS'],
    role: [
      'Built and trained a CNN on ~3,000 labeled images across 5 disease classes',
      'Improved accuracy through image preprocessing and data augmentation',
      'Shipped a web app for real-time prediction with treatment recommendations',
    ],
    results: [
      { label: 'Classification accuracy', value: '92%' },
      { label: 'Training images', value: '~3,000' },
      { label: 'Disease classes', value: '5' },
    ],
    caseStudy: null,
  },
];



