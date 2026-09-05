export const projects = [
  {
    slug: 'kvantum-room',
    title: 'Kvantum Room',
    category: 'Real-Time Web Application',
    tagline: 'Real-time collaborative study platform',
    timeline: 'Feb 2026 · Hackathon Project',
    year: 'Feb 2026',
    image: `${import.meta.env.BASE_URL}shots/kvantum-room.jpg`,
    liveHref: 'https://ayishanu17-crypto.github.io/study-room/',
    repoHref: null,
    problem:
      'Students studying remotely juggle separate apps for chat, whiteboarding, and getting quick help — there was no single space to collaborate in real time.',
    solution:
      'A unified study room where classmates chat, draw on a shared whiteboard, and get instant AI-assisted answers, all synced live.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Firebase'],
    features: [
      {
        title: 'Instant Multi-User Sync',
        desc: 'Sub-100ms bidirectional synchronization between 10+ participants across chat and board.',
      },
      {
        title: 'Collaborative Vector Canvas',
        desc: 'Interactive whiteboard allowing multiple students to draw, annotate, and brainstorm concurrently.',
      },
      {
        title: 'AI Doubt Assistant',
        desc: 'Contextual AI solver integrated directly inside the room for rapid conceptual resolution.',
      },
      {
        title: 'Zero-Server Architecture',
        desc: 'Serverless client-to-Firebase architecture reducing infrastructure overhead to zero.',
      },
    ],
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
      architecture:
        'The frontend is a Vite + React app talking directly to Firebase — no custom backend. Each study room is a top-level node in the Realtime Database, with separate child nodes for chat, whiteboard strokes, and doubt threads, so clients only subscribe to the slices they actually need.',
      dataFlow:
        'When someone sends a message or draws a stroke, the client writes straight to that room\'s node; Firebase pushes the diff to every subscribed client. That direct write-and-push path is what keeps updates under 100ms without a server round-trip in the middle.',
      decisions:
        'I chose Firebase Realtime Database over a custom WebSocket server to move faster under the hackathon clock, structuring data so each module (chat, board, doubts) synced independently — a slow whiteboard render couldn\'t stall the chat.',
      tradeoffs:
        'Firebase made real-time sync fast to ship, but it meant less control over conflict resolution than a CRDT-based approach would give. For a v2, I\'d look at operational transforms for the whiteboard specifically, since freehand strokes are the most collision-prone part of the app.',
    },
  },
  {
    slug: 'crop-care',
    title: 'Crop Care',
    category: 'Computer Vision & Deep Learning',
    tagline: 'Plant disease detection from a leaf photo',
    timeline: 'Jan 2026 · AI/ML System',
    year: 'Jan 2026',
    image: `${import.meta.env.BASE_URL}shots/crop-care.jpg`,
    liveHref: 'https://cropcare-five.vercel.app/',
    repoHref: null,
    problem:
      'Farmers often lack quick access to plant pathologists, so diseases can go undiagnosed until crop damage is severe.',
    solution:
      'A CNN that classifies common plant diseases from a single leaf photo, paired with a web app that returns a diagnosis and treatment steps in seconds.',
    stack: ['Python', 'TensorFlow', 'Keras', 'HTML/CSS/JS'],
    features: [
      {
        title: 'Deep CNN Classifier',
        desc: 'Trained on 3,000+ augmented plant leaf images achieving 92% overall validation accuracy.',
      },
      {
        title: 'Instant Treatment Advisory',
        desc: 'Maps detected pathology directly to practical botanical recommendations and organic treatment steps.',
      },
      {
        title: 'Low-Bandwidth Optimization',
        desc: 'Pre-processes and resizes image payloads on the browser to minimize upload bandwidth for rural users.',
      },
      {
        title: '5 Multi-Class Pathologies',
        desc: 'Detects diverse leaf conditions ranging from fungal blights to bacterial spots.',
      },
    ],
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
    caseStudy: {
      challenge:
        'The trickiest part wasn\'t training the model — it was getting inference fast enough to feel real-time in a browser with no GPU on the client side.',
      architecture:
        'The CNN is trained offline in TensorFlow/Keras and exported, then served through a lightweight prediction endpoint the web app calls with an uploaded image. The frontend just handles the upload and renders the returned diagnosis.',
      dataFlow:
        'An uploaded leaf photo is resized and normalized before being sent to the model endpoint, which returns a class-probability distribution. The app surfaces the top match, its confidence, and matching treatment notes.',
      decisions:
        'I prioritized a smaller, faster CNN architecture over squeezing out extra accuracy points, since a diagnosis that takes 10+ seconds to load defeats the point for someone standing in a field.',
      tradeoffs:
        'Trading a little accuracy for speed felt like the right call for this use case. A v2 with on-device inference (TensorFlow.js) would remove the network round-trip entirely.',
    },
  },
  {
    slug: 'debugique',
    title: 'Debugique',
    category: 'Developer Tooling & Static Analysis',
    tagline: 'Multi-language static code analysis application',
    timeline: 'Feb 2026 · Full-Stack Platform',
    year: 'Feb 2026',
    image: `${import.meta.env.BASE_URL}shots/debugique.jpg`,
    liveHref: 'https://bug-detection-gpwe.onrender.com',
    repoHref: null,
    problem:
      'Identifying code smells, syntax errors, and compatibility issues across multiple languages traditionally requires setting up complex, language-specific linters and environments.',
    solution:
      'A multi-language static analysis platform that runs local compile/AST checks (or falls back to heuristics) for JavaScript, Python, C/C++, and Java in a single interface, featuring dual-persistence history.',
    stack: ['React', 'Tailwind CSS', 'Vite', 'Express', 'Node.js', 'MongoDB', 'Acorn'],
    features: [
      {
        title: 'Multi-Language AST Engine',
        desc: 'AST-driven lexical analysis for JavaScript, Python, C/C++, and Java with sub-200ms turnaround.',
      },
      {
        title: 'Dual-Persistence Engine',
        desc: 'Seamless hybrid architecture writing to MongoDB Atlas while buffering to local JSON offline.',
      },
      {
        title: 'Code Smell & Lint Diagnostics',
        desc: 'Pinpoints antipatterns, missing delimiters, unreachable branches, and performance pitfalls.',
      },
      {
        title: 'Audit History & Diffing',
        desc: 'Tracks up to 50 historical audits with one-click restore and comparison views.',
      },
    ],
    role: [
      'Architected the React frontend and Express backend, organizing the codebase as a cohesive concurrently-managed monorepo',
      'Engineered custom syntax engines using Acorn AST parsing for JS, Python AST interpreter, and compiler CLI flags (-fsyntax-only for C/C++) with regex fallbacks',
      'Designed a hybrid history persistence system with MongoDB Atlas backend sync and local JSON file logging to prevent data loss offline',
    ],
    results: [
      { label: 'Supported languages', value: '4' },
      { label: 'Analysis speed', value: '<200ms' },
      { label: 'History depth limit', value: '50' },
    ],
    caseStudy: {
      challenge:
        'Configuring reliable, server-side code analyzers for multiple languages without introducing heavy resource footprints or failing silently when local compiler binaries (like g++ or python3) were not installed.',
      architecture:
        'The Express server exposes a central analyze endpoint. It checks system environment capability at runtime: utilizing native compilation flags (-fsyntax-only for GCC) or interpreter AST validation if available, and gracefully falling back to AST parser libraries (Acorn) or robust regex heuristics otherwise.',
      dataFlow:
        'Code snippets are submitted via React. The backend runs the corresponding analyzer engine asynchronously, saves the analysis result to MongoDB Atlas (or drops back to local-history.json), and streams the syntax, smells, and fixes back to the client UI.',
      decisions:
        'I chose a hybrid persistence architecture (Atlas + Local JSON) to ensure the application remains functional in sandbox or offline server environments where MongoDB is not configured, silently merging local logs with remote logs on the history endpoint.',
      tradeoffs:
        'While regex heuristics for C++ and Java allowed the system to bypass environment installation bottlenecks, they lack full context scope and type checking compared to full-blown semantic compilers. A v2 would dockerize language-specific build-runners for deep static analysis.',
    },
  },
];
