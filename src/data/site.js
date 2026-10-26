// All site copy and data in one place. Components only render what is here.
// Anything in [square brackets] is a placeholder waiting for real content.

export const person = {
  name: 'Hammad A. Khawaja',
  email: 'hammadakhawaja@outlook.com',
  phone: '+92 300 522 9963',
  phoneHref: 'tel:+923005229963',
  location: 'Islamabad, Pakistan',
  resumeUrl: '', // [Résumé PDF link] — the button is hidden until this is set
}

export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hammad-a-khawaja-bb3bab39/' },
  { label: 'Behance', href: 'https://www.behance.net/hammadkhawaja' },
  { label: 'Instagram', href: 'https://www.instagram.com/hammadakhawaja1/' },
]

// Header menu: ids are section ids on the homepage
export const nav = [
  { id: 'work', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  location: ['Based in Islamabad', 'working with clients', 'in the UK and worldwide'],
  eyebrow: 'Creative Head | Brand strategist | ux expert',
  // Each line fades in per character; `serif` marks the italic accent word
  lines: [
    [{ text: 'Brands & Products' }],
    [{ text: 'Crafted for People' }],
    [{ text: 'Not ' }, { text: 'Pixels', serif: true }],
  ],
  sub: '18+ years leading brand strategy, UI/UX and multimedia — now building fully functional prototypes with AI.',
  stats: [
    { value: '18+', label: 'Years in design' },
    { value: '16', label: 'Years running my studio', tint: true },
    { value: '[N]', label: 'Projects delivered' },
  ],
  orgs: ['31G', 'At Tech', 'Zigron', 'CareCloud', 'UNDP', 'MicroArts'],
}

// ---------- Portfolio ----------
const C = 'https://www.coroflot.com/HammadKhawaja/'
const B = 'https://www.behance.net/gallery/'

export const portfolioCategories = ['All', 'Branding', 'UI/UX', 'Product', 'Publishing', 'Illustration & Art', 'Print']

// Featured items link to an internal case study (`to`); archive items link out (`href`).
// Add `img: '/img/...'` to an archive item to replace its placeholder tile.
export const portfolio = [
  { title: 'Iylus', cat: 'Branding', to: '/work/iylus', featured: true, img: '/img/work-iylus.webp', alt: 'Iylus logo above two black Iylus home devices' },
  { title: 'Dr. iQ', cat: 'Product', to: '/work/dr-iq', featured: true, img: '/img/work-driq.webp', alt: 'Dr. iQ app dashboard on a phone, showing appointment summary and a radial menu' },
  { title: 'Abode', cat: 'UI/UX', to: '/work/abode', featured: true, img: '/img/work-abode.webp', alt: 'Abode smart-home devices arranged on white plinths against a blue wall' },
  { title: 'Artwork', cat: 'Illustration & Art', to: '/work/artwork', featured: true, img: '/img/work-artwork.webp', alt: 'Monochrome digital portrait painting, signed by Hammad A. Khawaja' },
  { title: 'Patient Portal Application', cat: 'UI/UX', href: C + 'Paient-Portal-Application' },
  { title: 'Prescription Application', cat: 'UI/UX', href: C + 'Prescription-Application' },
  { title: 'Billing Application', cat: 'UI/UX', href: C + 'Billing-Application' },
  { title: 'Dictation Application', cat: 'UI/UX', href: C + 'Dictating-Application' },
  { title: 'Tablet App UI', cat: 'UI/UX', href: C + 'Tablet-App-UI' },
  { title: 'Online Game Portal Concept', cat: 'UI/UX', href: C + 'Online-Game-Portal-Concept' },
  { title: 'Corporate Branding ID Kit', cat: 'Branding', href: C + 'Corporate-Branding-ID-Kit' },
  { title: 'Product Concept Branding', cat: 'Branding', href: C + 'Product-Concept-Branding' },
  { title: 'Brand Logo Designs', cat: 'Branding', href: C + 'Brand-Logo-Designs' },
  { title: 'Book Cover Design', cat: 'Publishing', href: C + 'Book-Cover-Design' },
  { title: 'eBook Covers', cat: 'Publishing', href: C + 'eBook-Covers' },
  { title: 'DVD Cover Design', cat: 'Publishing', href: C + 'DVD-Cover-Design' },
  { title: 'Portrait Painting Study', cat: 'Illustration & Art', href: B + '15880857/Portrait-Painting-Study' },
  { title: 'Concepts, Drawings & Paintings', cat: 'Illustration & Art', href: C + 'Concepts-Drawings-and-paintings' },
  { title: 'Book Illustration', cat: 'Illustration & Art', href: C + 'Book-Illustration' },
  { title: 'Fashion Illustrations', cat: 'Illustration & Art', href: C + 'Fashion-Illustrations' },
  { title: 'Illustrations', cat: 'Illustration & Art', href: C + 'Illustrations' },
  { title: 'Press Ads', cat: 'Print', href: C + 'Press-Ads' },
  { title: 'Brochure Design', cat: 'Print', href: C + 'Brochure-Design' },
  { title: 'Bi & Tri Folds', cat: 'Print', href: C + 'Bi-n-Tri-Folds' },
  { title: 'WiDrive Flyer', cat: 'Print', href: B + '15737825/WiDrive-Flyer' },
]

// ---------- Services (homepage list + one page each) ----------
export const services = [
  {
    slug: 'brand-strategy',
    no: '01',
    title: 'Brand Strategy & Visual Identity',
    summary: 'Positioning, messaging and a visual language — logo, type, colour and guidelines — that stays consistent on every platform.',
    points: ['Brand strategy', 'Visual identity', 'Digital presence'],
    intro: 'I help businesses define what they stand for and give it a visual language that communicates with clarity and confidence — everywhere the brand shows up.',
    imageLabel: 'brand identity sheet from a real project',
    deliver: [
      { title: 'Brand strategy', body: 'Clear positioning, values and a messaging framework the whole team can use.' },
      { title: 'Visual identity', body: 'Logo, typography, colour palette and design guidelines.' },
      { title: 'Digital presence', body: 'Cohesive brand expression across websites, apps and social media.' },
    ],
    steps: [
      { title: 'Discover', body: '[What happens in this step — audits, interviews, workshop]' },
      { title: 'Define', body: '[Positioning and messaging you sign off on]' },
      { title: 'Design', body: '[Identity routes, refinement rounds]' },
      { title: 'Deliver', body: '[Guidelines, asset files, handover]' },
    ],
    benefits: [
      'A unique, memorable identity that sets you apart',
      'Trust and credibility through consistent visuals',
      'A clear, authentic message your audience engages with',
      'A brand system that grows with your business',
    ],
    related: { label: 'Iylus — brand identity', to: '/work/iylus' },
    cta: { label: 'Discuss a brand project', subject: 'Brand strategy project' },
  },
  {
    slug: 'product-design',
    no: '02',
    title: 'Product Design — UI & UX',
    summary: 'User-centred web and mobile products, from research and flows to prototypes, tested before launch.',
    points: ['UX research & flows', 'UI & component libraries', 'Prototyping & testing'],
    intro: 'I craft intuitive, user-centred digital experiences that balance beauty with functionality — from first research to interactive prototypes, so your product is engaging to look at and effortless to use on every platform.',
    imageLabel: 'app screens or a flow from a real project',
    deliver: [
      { title: 'User experience', body: 'Research, user flows, wireframes and journey mapping for effortless interactions.' },
      { title: 'User interface', body: 'Pixel-perfect visual design, component libraries and responsive layouts.' },
      { title: 'Prototyping & testing', body: 'Interactive prototypes and usability testing to refine ideas before launch.' },
    ],
    steps: [
      { title: 'Research', body: '[Interviews, analytics, audit of the current product]' },
      { title: 'Map', body: '[User flows, journeys and wireframes you sign off on]' },
      { title: 'Design', body: '[UI, components, responsive layouts]' },
      { title: 'Test & hand over', body: '[Usability rounds, developer handover]' },
    ],
    benefits: [
      'Products that delight users and drive engagement',
      'Less friction, through clear, efficient and accessible design',
      'A scalable design system that grows with your product',
      'Faster development, thanks to well-structured design assets',
    ],
    related: { label: 'Dr. iQ — healthcare product design', to: '/work/dr-iq' },
    cta: { label: 'Discuss a product project', subject: 'Product design project' },
  },
  {
    slug: 'communication-multimedia',
    no: '03',
    title: 'Communication & Multimedia',
    summary: 'Visual stories that explain and persuade — animation, video, infographics and interactive presentations.',
    points: ['Visual communication', 'Multimedia production', 'Interactive media'],
    intro: 'I design visual stories that connect ideas, emotions and audiences — from motion graphics to interactive media, blending creativity with strategy so the content informs, inspires and stays with people.',
    imageLabel: 'a frame from a motion piece, deck or infographic',
    deliver: [
      { title: 'Visual communication', body: 'Brand storytelling through infographics, presentations and campaign visuals.' },
      { title: 'Multimedia production', body: 'Animation, video editing and motion graphics for digital and social platforms.' },
      { title: 'Interactive media', body: 'Immersive digital experiences that combine sound, visuals and interaction.' },
    ],
    steps: [
      { title: 'Brief', body: '[Audience, message and where it will run]' },
      { title: 'Story', body: '[Script, storyboard or content outline you approve]' },
      { title: 'Produce', body: '[Design, animation, edit and sound]' },
      { title: 'Deliver', body: '[Final files cut for each platform]' },
    ],
    benefits: [
      'Storytelling that engages audiences and stays memorable',
      'A stronger brand presence across digital and physical media',
      'Complex information made simple through clear visuals',
      'Marketing, training and promotional material with more impact',
    ],
    related: { label: 'Press ads & campaign visuals', href: C + 'Press-Ads' },
    cta: { label: 'Discuss a content project', subject: 'Communication and multimedia project' },
  },
  {
    slug: 'art-direction',
    no: '04',
    title: 'Art Direction & Consulting',
    summary: 'Creative leadership for teams — design audits, workshops, and direction for campaigns, shoots and productions.',
    points: ['Art direction', 'Creative consulting', 'Project oversight'],
    intro: 'I provide strategic art direction and creative consulting that align your visual identity with your business goals — from first concept to execution, so every creative decision reflects what your brand stands for.',
    imageLabel: 'a campaign, shoot or workshop you directed',
    deliver: [
      { title: 'Art direction', body: 'Concept creation, visual style development and campaign guidance.' },
      { title: 'Creative consulting', body: 'Expert advice on branding, design systems and visual storytelling — including design audits and team workshops.' },
      { title: 'Project oversight', body: 'Direction for photo shoots, video productions and brand campaigns.' },
    ],
    steps: [
      { title: 'Audit', body: '[Review of current visuals, team and goals]' },
      { title: 'Direction', body: '[Concept and visual style you agree on]' },
      { title: 'Oversee', body: '[On-set or in-studio direction of the work]' },
      { title: 'Review', body: '[Quality checks and guidance for your team]' },
    ],
    benefits: [
      'A unified, distinctive creative direction for your brand',
      'Higher quality and impact across all visual communication',
      'Clarity and confidence in creative decisions across teams',
      'A stronger brand perception through consistent, high-level execution',
    ],
    related: { label: 'Abode — marketing site', to: '/work/abode' },
    cta: { label: 'Discuss creative direction', subject: 'Art direction and consulting' },
  },
  {
    slug: 'ai-prototyping',
    no: '05',
    title: 'AI Prototyping & Enablement',
    summary: 'Fully functional prototypes built with AI in days, not static mockups — and the policies, standards and skills that help whole teams use Claude and ChatGPT well.',
    points: ['Vibe-coded working prototypes', 'AI-to-Figma & AI-to-web workflows', 'Team AI adoption & Claude skills'],
    intro: 'Fully functional prototypes built with AI in days, not static mockups — and the policies, standards and skills that help whole teams use Claude and ChatGPT well.',
    imageLabel: 'screen recording or still of a working prototype',
    deliver: [
      { title: 'Working prototypes', body: 'Vibe-coded, clickable web and app prototypes that users and stakeholders can test before any development budget is spent.' },
      { title: 'Design-to-code workflows', body: 'AI-to-Figma and AI-to-web pipelines that move ideas from prompt to editable design to live page.' },
      { title: 'Team AI adoption', body: 'Policies, usage standards and custom Claude skills so design, marketing, HR and development teams use AI safely and consistently.' },
    ],
    steps: [
      { title: 'Frame', body: '[The question the prototype must answer]' },
      { title: 'Build', body: '[A working prototype in days]' },
      { title: 'Test', body: '[Real users click through it; we refine]' },
      { title: 'Hand over', body: '[Code, design files and team guidance]' },
    ],
    benefits: [
      'Real user feedback before you commit to building',
      'A shorter path from idea to something stakeholders can use',
      'Teams that use AI safely, consistently and with confidence',
      'Design craft and AI speed in the same process',
    ],
    related: { label: '[AI prototype case study]' }, // no link until a real case study exists
    cta: { label: 'Discuss an AI prototype', subject: 'AI prototyping project' },
  },
]

// ---------- Case studies ----------
// A study shows its own content where it has it; any part it leaves out shows `caseStudyPlaceholder`.
export const caseStudyPlaceholder = {
  outcome: '[One sentence: the outcome you achieved for the client]',
  facts: { client: '[Client / industry]', timeline: '[Month Year – Month Year]', role: '[Your actual role]', scope: '[Strategy, identity, guidelines…]' },
  problem: [
    '[What was wrong before you arrived? Who was the audience, and what was getting in the way? 2–3 sentences, specific to this client.]',
    '[Constraints you worked within — budget, deadline, legacy assets, stakeholders.]',
  ],
  did: ['[Decision 1 you led, and why]', '[Decision 2 you led, and why]', '[Decision 3 you led, and why]'],
  process: [
    { label: 'research / moodboard', caption: '[Caption: what this shows]' },
    { label: 'sketches / routes', caption: '[Caption: what this shows]' },
    { label: 'final system / guidelines', caption: '[Caption: what this shows]' },
  ],
  results: [
    { value: '[X]', label: '[Measurable result — or a concrete deliverable count]' },
    { value: '[X]', label: '[Second result]' },
    { value: '[X]', label: '[Third result]' },
  ],
  quote: { text: '[Optional: one line from the client about the result.]', name: '[Name, title]', title: '' },
  sources: [],
}

export const caseStudies = [
  { slug: 'iylus', title: 'Iylus', discipline: 'Brand Strategy & Visual Identity', img: '/img/work-iylus.webp', alt: 'Iylus logo above two black Iylus home devices' },
  {
    slug: 'dr-iq',
    title: 'Dr. iQ',
    discipline: 'UX & Product Design · Healthcare',
    img: '/img/work-driq.webp',
    alt: 'Dr. iQ app dashboard on a phone, showing appointment summary and a radial menu',
    outcome: 'A GP practice in your pocket: one trusted NHS app where AT Medics patients book, consult and manage their care without waiting on the phone.',
    facts: {
      client: 'AT Medics — NHS GP practices across London',
      timeline: 'Apr 2021 – Aug 2023',
      role: 'UX expert & product designer',
      scope: 'Product UX, UI and design system, brand expression, app-store presence',
    },
    problem: [
      'AT Medics ran 49 GP practices across London, caring for around 370,000 NHS patients. After the pandemic, demand for remote care outgrew the phone lines: patients waited on hold for routine requests, and practice teams spent their days on calls an app could handle.',
      'Dr. iQ had to carry the whole practice: appointments, video and audio consultations, repeat prescriptions, messaging, medical records and a symptom checker built on NHS clinical pathways. It had to work for patients of every age and confidence level, meet NHS clinical and data standards, and feel safe enough to share health information with.',
    ],
    did: [
      'Scoped the real problem first. I mapped the requests that filled the phone lines — appointments, prescriptions, sick notes, everyday questions — and made them the front door of the app.',
      'Designed one calm home for every service. A single dashboard with an appointment summary and a radial menu puts booking, consultations, prescriptions and messages one tap away.',
      'Built trust into every screen. Plain NHS-style language, clear status at every step and one consistent design system, so patients always knew what happens next and clinicians could rely on what arrived.',
      'Stayed hands-on through build. I worked alongside At Tech’s developers on iOS and Android, refining flows from app-store reviews and practice feedback.',
    ],
    process: [
      { label: 'journey map / research', caption: 'Scoping: mapping patient and practice journeys to find what was filling the phone lines.' },
      { label: 'key screens / flows', caption: 'Crafting: dashboard, consultation and prescription flows on one design system.' },
      { label: 'app store screens', caption: 'Building trust: shipped and refined with developers on iOS and Android.' },
    ],
    results: [
      { value: '4.0★', label: 'Average rating from around 12,400 App Store reviews in the UK.' },
      { value: '74%', label: 'of surveyed patients in Croydon practices had used Dr. iQ; 91% knew about it (Healthwatch Croydon, 2021).' },
      { value: '#2', label: 'Healthcare app in the UK by app-store ranking. [Confirm with a screenshot or link before launch.]' },
    ],
    quote: { text: 'A perfect example of a UI-UX and creative head, and he brings all the abilities to the table.', name: 'Naveed Ramzan', title: 'Development Head, At Tech' },
    sources: [
      { label: 'Dr. iQ on the App Store (ratings via AppFollow)', href: 'https://apps.appfollow.io/ios/dr-iq/1345802108?country=gb' },
      { label: 'Healthwatch Croydon patient survey, 2021', href: 'https://nds.healthwatch.co.uk/sites/default/files/reports_library/20B411~1.PDF' },
      { label: 'Operose Health acquires AT Medics — HealthInvestor', href: 'https://healthinvestor.co.uk/deals/operose-health-acquires-at-medics/' },
      { label: 'What is Dr. iQ? — Dr. iQ support', href: 'https://support.dr-iq.com/hc/en-gb/articles/360004570997-What-is-Dr-iQ' },
    ],
  },
  { slug: 'abode', title: 'Abode', discipline: 'Marketing site design & build', img: '/img/work-abode.webp', alt: 'Abode smart-home devices arranged on white plinths against a blue wall' },
  { slug: 'artwork', title: 'Artwork', discipline: 'Fine art & illustration', img: '/img/work-artwork.webp', alt: 'Monochrome digital portrait painting, signed by Hammad A. Khawaja' },
]

// ---------- About ----------
export const about = {
  title: 'An artist at heart, a strategist by trade.',
  bio: [
    'For more than 18 years I have led brand, UI/UX and multimedia work for product companies, healthcare technology and international organisations. Today I head creative at 31G, directing brand systems and digital products end to end. Since 2010 I have also run NANDITS, the design studio I co-founded.',
    'My training as a fine artist shapes how I lead: strong concepts, careful craft, and design that stays true to what users actually need.',
    'AI is now part of that craft. I vibe-code fully functional prototypes with Claude and ChatGPT so clients test real products before development starts, and I lead 31G’s company-wide Claude Enterprise adoption — policies, standards and custom skills for every department.',
  ],
  experience: [
    { role: 'Head of Creatives', company: '31G', dates: 'Sep 2023 – Present' },
    { role: 'Co-founder', company: 'NANDITS — design studio', dates: 'Mar 2010 – Present' },
    { role: 'Creative Manager, UI/UX', company: 'At Tech | AT Medics', dates: 'Apr 2021 – Aug 2023' },
    { role: 'Creative Head', company: 'Zigron, Inc.', dates: 'Jan 2016 – Mar 2021' },
    { role: 'Lead UI/UX & Multimedia', company: 'CareCloud', dates: 'Jun 2010 – Dec 2015' },
    { role: 'Creative Design Consultant', company: 'UNDP', dates: 'Aug 2013 – Mar 2015' },
    { role: 'Art Teacher', company: 'Fountainhead School', dates: 'Aug 2010 – Jun 2011' },
    { role: 'Illustrator & Creative Designer', company: 'MicroArts', dates: 'Aug 2007 – Mar 2010' },
  ],
  education: { degree: 'BFA, Painting', school: '[University name]', dates: '2003 – 2007' },
  toolkit: 'Figma · Framer · Adobe Photoshop · Illustrator · InDesign · Dimension · Lightroom · Webflow · Elementor',
  aiStack: 'Claude (Claude Code, Claude Design, Enterprise) · ChatGPT · html.to.design · Anima · [other AI tools you use]',
  aiSkills: [
    'Vibe coding fully functional HTML/React prototypes',
    'Design-to-code and AI-to-Figma workflows',
    'Prompt engineering and custom Claude skills',
    'AI-generated decks, brand assets and imagery',
    'Enterprise AI policy, standards and rollout',
  ],
}

export const quotes = [
  { text: 'A perfect example of a UI-UX and creative head, and he brings all the abilities to the table.', name: 'Naveed Ramzan', title: 'Development Head, At Tech' },
  { text: 'He possesses an extraordinary blend of creativity, strategic thinking, and leadership skills, inspiring the team to consistently deliver outstanding results.', name: 'Junaid Ahmad Sheikh', title: 'Senior UX Designer, Ooredoo Qatar' },
  { text: 'A rare creative manager who has this ability to deal with conflicting projects in high-pressure situations with so much easiness.', name: 'Bilawal Shah', title: 'Founder, Bilzimo' },
]
// ---------- Contact / project enquiry ----------
// Service options come from `services` (title + points); `prompts` tailors the message box to each.
export const contact = {
  title: 'Have a brand or product that needs direction?',
  intro: 'Tell me what you’re working on. Pick the service closest to your need and I’ll reply with next steps.',
  prompts: {
    'brand-strategy': 'What does the business do, who is it for, and what isn’t working about the brand today?',
    'product-design': 'What is the product, who uses it, and where are users getting stuck?',
    'communication-multimedia': 'What do you need to communicate, to whom, and in which formats?',
    'art-direction': 'What is the campaign or project, and where do you need creative leadership?',
    'ai-prototyping': 'What idea do you want to test, or which team do you want using AI well?',
  },
  timelines: ['As soon as possible', 'In 1–3 months', 'In 3+ months', 'Just exploring'],
}

// Keep in sync with the FAQPage structured data in index.html
export const faq = [
  { q: 'Who is Hammad A. Khawaja?', a: 'Hammad A. Khawaja is a creative director, brand strategist and UI/UX designer with 18+ years of experience. He is Head of Creatives at 31G and a trained fine artist.' },
  { q: 'Can you build a working prototype, not just mockups?', a: 'Yes. Using AI tools such as Claude and ChatGPT, I build fully functional, clickable prototypes that clients and users can test before any development budget is spent.' },
  { q: 'Do you help teams adopt AI?', a: 'Yes. I set up AI policies, usage standards and custom Claude skills so design, marketing, HR and development teams use AI safely and consistently.' },
  { q: 'What industries have you worked in?', a: 'Healthcare technology, consumer products, smart-home devices, and international development, with organisations including CareCloud, UNDP, Zigron and 31G.' },
  { q: 'Do you work with clients outside Pakistan?', a: 'Yes. I work remotely with clients in the UK and worldwide. [Confirm your regions.]' },
]
