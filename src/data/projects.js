// Resolve a public asset path relative to the deployment base URL
const shot = (file) => `${import.meta.env.BASE_URL}${file}`;

export const projects = [
  {
    slug: 'roomora',
    title: 'Roomora',
    category: 'AI & Generative Interior Design',
    tagline: 'AI-powered interior design & room makeover studio',
    timeline: 'Mar 2026 · Full-Stack AI Platform',
    year: 'Mar 2026',
    image: `${import.meta.env.BASE_URL}shots/roomora-live.png`,
    liveHref: 'https://roomora-ecru-eight.vercel.app/',
    repoHref: null,
    screenshots: [
      { file: shot('shots/roomora-live.png'), caption: 'Roomora — live landing page and hero showcase', tag: 'Deployed capture' },
      { file: shot('shots/roomora-studio.png'), caption: 'Design studio — room photo upload, 12 aesthetic styles & budget matrix', tag: 'Studio view' },
      { file: shot('shots/roomora-shop.png'), caption: 'Inspiration gallery — curated aesthetic styles and themes', tag: 'Interface view' },
      { file: shot('shots/roomora-live-full.png'), caption: 'Workflow overview — 3-step design pipeline', tag: 'Workflow view' },
    ],
    problem:
      'Hiring professional interior designers is cost-prohibitive for most homeowners and renters, while traditional 3D architectural software involves steep learning curves and hours of manual modeling.',
    solution:
      'An intelligent room makeover platform that leverages Google Gemini multimodal AI to analyze room photos, generate photorealistic redesigns across 12 distinct interior styles, provide conversational design advisory with voice recognition, and suggest budget-matched furniture shopping links.',
    stack: ['React', 'Google Gemini', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
    features: [
      {
        title: 'Multimodal Room Transformation',
        desc: 'Analyzes user-uploaded space photos and generates tailored photorealistic redesigns mapped to 12 curated styles (Japandi, Scandinavian, Dark Academia, Biophilic, etc.).',
      },
      {
        title: 'Voice-Enabled AI Design Assistant',
        desc: 'Integrated conversational designer with Web Speech API recognition, answering layout queries and offering contextual color, lighting, and placement advice.',
      },
      {
        title: 'Contextual Shopping Curations',
        desc: 'Extracts furniture recommendations directly from AI advisory and parses product links into clickable shopping actions with budget constraints.',
      },
      {
        title: 'Client-Side Adaptive Compression',
        desc: 'Dynamic progressive multi-pass image compression ensuring fast uploads and sub-2MB Firestore storage limits without visual fidelity loss.',
      },
    ],
    role: [
      'Architected the full-stack system with React 19, Vite, Express, and Google GenAI SDK integration',
      'Engineered conversational AI assistant with speech recognition, automated shopping URL extractors, and prompt pipelines',
      'Implemented Firebase Authentication and Cloud Firestore syncing with multi-pass client-side canvas image compression',
    ],
    results: [
      { label: 'Design Styles', value: '12' },
      { label: 'AI Turnaround', value: '<3s' },
      { label: 'Payload Reduction', value: '~70%' },
    ],
    caseStudy: {
      challenge:
        'Handling high-resolution image uploads fast while keeping Cloud Firestore documents within quota limits.',
      architecture:
        'A Vite + React 19 frontend talks to a Node.js/Express backend wrapping Google Gemini\'s multimodal endpoints. Auth and saved designs persist in Firebase, with adaptive client-side image compression via HTML5 Canvas before upload.',
      dataFlow:
        'The user picks a style and budget, then uploads a room photo. After progressive multi-pass compression in the browser, Express sends it to Gemini and streams back advice, furniture links, and rendered concepts that sync to Firestore.',
      decisions:
        'I offloaded image optimization to the browser via HTML5 Canvas instead of server-side sharp workers, cutting backend compute to zero for faster API roundtrips.',
      tradeoffs:
        'Remote multimodal APIs need connectivity and API keys. A v2 could add client-side WebGPU diffusion for instant offline previews.',
    },
  },
  {
    slug: 'crop-care',
    title: 'Crop Care',
    category: 'Computer Vision & Deep Learning',
    tagline: 'Plant disease detection from a leaf photo',
    timeline: 'Jan 2026 · AI/ML System',
    year: 'Jan 2026',
    image: `${import.meta.env.BASE_URL}shots/crop-care-live.png`,
    liveHref: 'https://cropcare-five.vercel.app/',
    repoHref: null,
    screenshots: [
      { file: shot('shots/crop-care-live.png'), caption: 'Crop Care — live landing page', tag: 'Deployed capture' },
      { file: shot('shots/crop-care-live-full.png'), caption: 'Crop Care — full-page view', tag: 'Deployed capture' },
      { file: shot('shots/crop-treatment-plan.jpg'), caption: 'Treatment plan output', tag: 'Interface view' },
    ],
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
        'Getting inference fast enough to feel real-time in a browser with no GPU on the client side.',
      architecture:
        'The CNN is trained offline in TensorFlow/Keras and exported, then served through a lightweight prediction endpoint the web app calls with an uploaded image. The frontend handles the upload and renders the diagnosis.',
      dataFlow:
        'An uploaded leaf photo is resized and normalized, then sent to the model endpoint, which returns a class-probability distribution. The app shows the top match, its confidence, and matching treatment notes.',
      decisions:
        'I prioritized a smaller, faster CNN over extra accuracy, since a 10+ second diagnosis defeats the point for someone in a field.',
      tradeoffs:
        'Trading a little accuracy for speed fit this use case. A v2 with on-device TensorFlow.js inference would remove the network round-trip.',
    },
  },
  {
    slug: 'debugique',
    title: 'Debugique',
    category: 'Developer Tooling & Static Analysis',
    tagline: 'Multi-language static code analysis application',
    timeline: 'Feb 2026 · Full-Stack Platform',
    year: 'Feb 2026',
    // HOME PAGE SCREENSHOT → add the file at: public/shots/debugique-home.png
    image: `${import.meta.env.BASE_URL}shots/debugique-home.png`, // Projects section card image
    liveHref: 'https://bug-detection-gpwe.onrender.com',
    repoHref: null,
    screenshots: [
      // Front card — home page screenshot → add the file at: public/shots/debugique-home.png
      { file: shot('shots/debugique-home.png'), caption: 'Debugique — home page dashboard', tag: 'Homepage' },
      // Back card (second image, layered behind the home page) → file at: public/shots/debugique-analysis1.jpeg
      { file: shot('shots/debugique-analysis1.jpeg'), caption: 'Debugique — static analysis engine in action', tag: 'Interface view' },
    ],
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
        'Running reliable server-side analyzers across several languages without heavy resource footprints or silent failures when local compilers (like g++ or python3) are missing.',
      architecture:
        'The Express server exposes a central analyze endpoint that checks system capability at runtime — native compiler flags (-fsyntax-only), interpreter AST validation, or fallbacks to AST libraries (Acorn) and regex heuristics.',
      dataFlow:
        'Code is submitted via React; the backend runs the matching analyzer asynchronously, saves the result to MongoDB Atlas (or a local JSON fallback), and streams syntax, smells, and fixes back to the client UI.',
      decisions:
        'I used hybrid persistence (Atlas + local JSON) so the app still works in offline or sandbox environments, silently merging local and remote logs on the history endpoint.',
      tradeoffs:
        'Regex heuristics for C++ and Java avoided install bottlenecks but lack full type checking. A v2 would dockerize language-specific runners for deeper static analysis.',
    },
  },
  {
    slug: 'kvantum-room',
    title: 'Kvantum Room',
    category: 'Real-Time Web Application',
    tagline: 'Real-time collaborative study platform',
    timeline: 'Feb 2026 · Hackathon Project',
    year: 'Feb 2026',
    image: `${import.meta.env.BASE_URL}shots/kvantum-room-live.png`,
    liveHref: 'https://ayishanu17-crypto.github.io/study-room/',
    repoHref: null,
    screenshots: [
      { file: shot('shots/kvantum-room-live.png'), caption: 'Kvantum Room — live app landing view', tag: 'Deployed capture' },
      { file: shot('shots/kvantum-room-live-full.png'), caption: 'Kvantum Room — full-page view', tag: 'Deployed capture' },
      { file: shot('shots/kvantum-dashboard.jpg'), caption: 'Study dashboard', tag: 'Interface view' },
      { file: shot('shots/kvantum-chat-room.jpg'), caption: 'Real-time chat room', tag: 'Interface view' },
      { file: shot('shots/kvantum-ai-solver.jpg'), caption: 'AI doubt assistant', tag: 'Interface view' },
    ],
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
        'Keeping chat, whiteboard strokes, and doubt-solver state consistent across users without lag that would break the live feel.',
      architecture:
        'A Vite + React app talks directly to Firebase with no custom backend. Each study room is a Realtime Database node with child nodes for chat, whiteboard, and doubts, so clients subscribe only to the slices they need.',
      dataFlow:
        'A message or stroke is written straight to the room\'s node, and Firebase pushes the diff to every subscribed client. That direct write-and-push path keeps updates under 100ms with no server round-trip.',
      decisions:
        'I chose Firebase Realtime Database over a custom WebSocket server to ship fast under the hackathon clock, structuring data so each module synced independently.',
      tradeoffs:
        'Firebase made sync quick to ship but offered less conflict control than a CRDT approach. A v2 would use operational transforms for the whiteboard, the most collision-prone part.',
    },
  },
];
