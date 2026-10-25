/**
 * PORTFOLIO CONFIGURATION DATA
 * Seluruh data portofolio dapat dikonfigurasi melalui file ini:
 * - Identitas & Personal Info
 * - Hero copy & cycling words
 * - Creative Explorations Showcase
 * - Featured Projects (Pesantren Raudlatussalam, Kopi Senja, Enterprise System)
 * - Work Experience & Testimonials
 * - Tech Stack & Skills
 * - Kontak (WA: 083119395328, GitHub: github.com/naufalilmi12)
 */

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & Design';
  icon: string;
  description: string;
  color: string;
  glowColor: string;
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Web App' | 'Information System' | 'Corporate' | 'Personal';
  description: string;
  fullDescription: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Active Dev' | 'Prototype';
  year: string;
  imageType: 'pesantren' | 'kopi' | 'system' | 'company' | 'webapp';
}

export interface CreativeExploration {
  id: string;
  title: string;
  category: string;
  description: string;
  accentColor: string;
  tag: string;
  aspect: string;
  previewGradient: string;
}

export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
  avatarText: string;
}

export interface PortfolioConfig {
  personal: {
    fullName: string;
    nickname: string;
    tagline: string;
    role: string;
    secondaryRole: string;
    education: string;
    university: string;
    location: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    availabilityStatus: string;
    isAvailable: boolean;
    heroLabel: string;
    heroHeading: string;
    heroSubheading: string;
    cyclingWords: string[];
  };
  explorations: CreativeExploration[];
  projects: ProjectItem[];
  experiences: WorkExperienceItem[];
  testimonials: TestimonialItem[];
  skills: SkillItem[];
  contact: {
    heading: string;
    subheading: string;
    ctaDescription: string;
    directEmail: string;
    officeHours: string;
    socials: {
      name: string;
      url: string;
      handle: string;
      icon: string;
    }[];
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    fullName: "Naufal Ilmi",
    nickname: "Naufal",
    tagline: "Full Stack Developer & Creative Technologist",
    role: "Full Stack Developer",
    secondaryRole: "Informatics Student",
    education: "Sistem Informasi / Teknik Informatika",
    university: "IT / Computer Science",
    location: "Indonesia",
    email: "naufalilmi27@gmail.com",
    phone: "+62 831-1939-5328",
    whatsappNumber: "6283119395328",
    whatsappUrl: "https://wa.me/6283119395328?text=Halo%20Naufal,%20saya%20tertarik%20berdiskusi%20tentang%20proyek%20web.",
    githubUrl: "https://github.com/naufalilmi12",
    linkedinUrl: "https://linkedin.com",
    availabilityStatus: "Available for Projects",
    isAvailable: true,
    heroLabel: "FULL STACK DEVELOPER • CREATIVE CODER",
    heroHeading: "FULL STACK\nDEVELOPER",
    heroSubheading: "Designing & crafting high-impact digital solutions through modern architecture, 3D interaction, and clean code.",
    cyclingWords: ["Dashboards", "Platforms", "Interfaces", "Animations", "Digital Systems"],
  },

  explorations: [
    {
      id: "exp-01",
      title: "Sport Car Telemetry UI",
      category: "Automotive HUD",
      description: "Futuristic vehicle telemetry dashboard with real-time speed metrics, G-force mapping, and cyberpunk neon lighting.",
      accentColor: "#00f0ff",
      tag: "WebGL & HUD",
      aspect: "3D Spatial",
      previewGradient: "from-cyan-950 via-slate-900 to-blue-950",
    },
    {
      id: "exp-02",
      title: "Live Guts Beverage",
      category: "Brutalist E-Commerce",
      description: "Experimental bold typography and organic fluid 3D beverage showcase with dynamic product physics.",
      accentColor: "#f97316",
      tag: "Brutalist / Motion",
      aspect: "Editorial",
      previewGradient: "from-orange-950 via-slate-900 to-amber-950",
    },
    {
      id: "exp-03",
      title: "Creative Juice 3D",
      category: "Spatial Packaging",
      description: "Interactive liquid dynamics and iridescent metallic materials with WebGL chromatic aberration.",
      accentColor: "#d946ef",
      tag: "Creative Coding",
      aspect: "Iridescent",
      previewGradient: "from-purple-950 via-slate-900 to-fuchsia-950",
    },
    {
      id: "exp-04",
      title: "Training Pro Biometrics",
      category: "Athletic Health Tech",
      description: "Dark-mode biometric workout tracking with micro-interactions, pulse monitors, and performance analytics.",
      accentColor: "#84cc16",
      tag: "Data Viz",
      aspect: "Mobile App",
      previewGradient: "from-lime-950 via-slate-900 to-emerald-950",
    },
    {
      id: "exp-05",
      title: "Minimalist Dream Space",
      category: "Architectural Showcase",
      description: "Editorial spatial real estate layout with asymmetric grid typography, smooth transitions, and tactile depth.",
      accentColor: "#38bdf8",
      tag: "Editorial Web",
      aspect: "Architecture",
      previewGradient: "from-sky-950 via-slate-900 to-slate-950",
    },
    {
      id: "exp-06",
      title: "Neural Node AI Network",
      category: "AI Spatial Interface",
      description: "Multi-layered particle nodes visualizing connected neural pathways with interactive cursor force fields.",
      accentColor: "#a855f7",
      tag: "Generative Art",
      aspect: "AI Network",
      previewGradient: "from-violet-950 via-slate-900 to-cyan-950",
    },
  ],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Pesantren Modern Raudlatussalam",
      tagline: "Educational Portal & Islamic Boarding School Profile",
      category: "Corporate",
      description: "Website profil dan portal informasi terpadu untuk Pesantren Modern Raudlatussalam dengan tampilan elegan, responsif, dan komprehensif.",
      fullDescription: "Platform profil lembaga dan portal informasi terpadu yang dirancang untuk Pesantren Modern Raudlatussalam. Menyajikan profil lengkap pondok, kurikulum akademik dan keagamaan, galeri fasilitas, informasi kegiatan santri, dan alur pendaftaran santri baru (PSB) secara daring dengan visual modern yang bersih dan ramah mobile.",
      highlights: [
        "Antarmuka responsif dan modern dengan visual branding islami elegan",
        "Informasi kurikulum, jenjang pendidikan, dan kegiatan santri interaktif",
        "Portal informasi penerimaan santri baru (PSB) & kontak terintegrasi",
        "Struktur navigasi cepat, mobile-friendly, dan ramah pengguna",
      ],
      techStack: ["React", "Tailwind CSS", "JavaScript", "HTML5", "UI/UX Design"],
      liveUrl: "https://pesantren-modern-raudlatussalam.ai.studio",
      githubUrl: "https://github.com/naufalilmi12",
      featured: true,
      status: "Completed",
      year: "2024",
      imageType: "pesantren",
    },
    {
      id: "project-02",
      number: "02",
      title: "Kopi Senja",
      tagline: "Artisan Coffee Showcase & Landing Page",
      category: "Personal",
      description: "Website landing page dan showcase kedai kopi 'Kopi Senja' dengan nuansa visual estetis, katalog produk artisan, dan interaksi responsif.",
      fullDescription: "Website presentasi dan katalog digital untuk kedai kopi 'Kopi Senja'. Dirancang dengan konsep estetika warm & cozy, menampilkan katalog menu kopi artisan, racikan signature, cerita di balik biji kopi pilihan, serta pengalaman pengguna yang mulus dari penjelajahan menu hingga reservasi dan pemesanan.",
      highlights: [
        "Tampilan visual warm-ambient dengan tipografi modern dan responsive",
        "Katalog menu kopi artisan interaktif dengan deskripsi racikan",
        "Integrasi kontak langsung dan tautan pemesanan cepat",
        "Optimasi performa halaman statis cepat di-host via GitHub Pages",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "UI/UX Design"],
      liveUrl: "https://naufalilmi12.github.io/kopi-senja/",
      githubUrl: "https://github.com/naufalilmi12/kopi-senja",
      featured: true,
      status: "Completed",
      year: "2024",
      imageType: "kopi",
    },
    {
      id: "project-03",
      number: "03",
      title: "Information System Dashboard",
      tagline: "Enterprise Management & Data Dashboard",
      category: "Information System",
      description: "Sistem informasi berbasis web untuk membantu pengelolaan data, transaksi, dan efisiensi operasional sistem.",
      fullDescription: "Sistem Informasi Manajemen data terpadu berbasis web yang mengotomasi pencatatan data transaksi, inventaris, dan hak akses pengguna bertingkat (Multi-role Access Control). Dilengkapi visualisasi grafik interaktif, ekspor laporan berkala, serta skema basis data relasional terstruktur.",
      highlights: [
        "Autentikasi role-based (Administrator, Staff, Manajer)",
        "Dashboard analitik dengan ringkasan metrik statistik real-time",
        "Manajemen CRUD cepat dengan pencarian server-side & pagination",
        "Skema database terenkripsi & validasi input keamanan XSS/SQLi",
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Git & GitHub"],
      liveUrl: "https://pesantren-modern-raudlatussalam.ai.studio",
      githubUrl: "https://github.com/naufalilmi12",
      featured: true,
      status: "Completed",
      year: "2024",
      imageType: "system",
    },
  ],

  experiences: [
    {
      id: "exp-01",
      role: "Freelance Full-Stack Web Developer",
      company: "Independent Client Works",
      period: "2023 — Sekarang",
      location: "Remote / Indonesia",
      description: "Merancang dan membangun solusi web kustom untuk institusi, bisnis, dan personal brand. Menggabungkan arsitektur frontend performa tinggi dengan sistem database relasional yang andal.",
      skills: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "Three.js"],
      highlights: [
        "Membangun portal profil dan sistem informasi Pesantren Modern Raudlatussalam dengan responsifitas 100%",
        "Mengembangkan platform landing page Kopi Senja dengan performa sub-detik di GitHub Pages",
        "Menerapkan prinsip UI/UX berstandar industri dengan estetika modern dark-mode",
      ],
    },
    {
      id: "exp-02",
      role: "Web Systems & Database Engineer",
      company: "Academic & Collaborative Projects",
      period: "2022 — 2024",
      location: "Indonesia",
      description: "Memimpin perancangan skema basis data relasional, normalisasi SQL, dan perancangan REST API terpadu untuk efisiensi operasional data.",
      skills: ["PHP OOP", "MySQL Schema", "Git & GitHub", "REST APIs", "Bootstrap"],
      highlights: [
        "Merancang normalisasi skema database dari 1NF hingga 3NF untuk integritas data tinggi",
        "Mengoptimasi query SQL kompleks untuk meminimalkan beban latensi server",
        "Menerapkan autentikasi bertingkat berbasis role access control",
      ],
    },
  ],

  testimonials: [
    {
      id: "test-01",
      name: "Ustadz H. Ahmad",
      role: "Pimpinan Lembaga",
      organization: "Pesantren Modern Raudlatussalam",
      content: "Naufal menghadirkan website profil lembaga yang sangat representatif, modern, dan memudahkan calon wali santri dalam mencari informasi kurikulum serta pendaftaran online. Sangat direkomendasikan!",
      rating: 5,
      avatarText: "UA",
    },
    {
      id: "test-02",
      name: "Rian Pratama",
      role: "Founder & Roaster",
      organization: "Kopi Senja",
      content: "Desain landing page Kopi Senja benar-benar mencerminkan karakter tempat kami. Nuansanya estetik, cepat diakses dari ponsel, dan pelanggan sangat menyukai katalog menu yang interaktif.",
      rating: 5,
      avatarText: "RP",
    },
    {
      id: "test-03",
      name: "Kolega Pengembang",
      role: "Senior Software Engineer",
      organization: "Tech Partner",
      content: "Pemahaman Naufal mengenai struktur kode clean, modularitas komponen, dan eksplorasi grafis 3D sangat kuat untuk seorang talenta muda. Selalu antusias memberikan solusi terbaik.",
      rating: 5,
      avatarText: "KP",
    },
  ],

  skills: [
    {
      name: "HTML5 & Semantic Web",
      category: "Frontend",
      icon: "FileCode2",
      description: "Semantic web markup, SEO-ready structure, accessibility (a11y) & modern web standards.",
      color: "#e34f26",
      glowColor: "rgba(227, 79, 38, 0.4)",
      tags: ["Semantic", "SEO", "Accessibility"],
    },
    {
      name: "CSS3 & Modern Motion",
      category: "Frontend",
      icon: "Palette",
      description: "Modern layouting with Flexbox, CSS Grid, custom properties, responsive queries & keyframe animations.",
      color: "#1572b6",
      glowColor: "rgba(21, 114, 182, 0.4)",
      tags: ["Grid & Flexbox", "Responsive", "Keyframes"],
    },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      icon: "Zap",
      description: "ES6+ modern syntax, asynchronous programming, DOM manipulation, Fetch API & modular architecture.",
      color: "#f7df1e",
      glowColor: "rgba(247, 223, 30, 0.4)",
      tags: ["ES6+", "Async/Await", "DOM Engine"],
    },
    {
      name: "PHP (MVC & OOP)",
      category: "Backend",
      icon: "Server",
      description: "Server-side scripting, OOP architecture, MVC pattern, API endpoint routing & secure session handling.",
      color: "#777bb4",
      glowColor: "rgba(119, 123, 180, 0.4)",
      tags: ["OOP", "MVC Pattern", "REST APIs"],
    },
    {
      name: "MySQL & Database Tuning",
      category: "Database",
      icon: "Database",
      description: "Relational database design, schema normalization, complex SQL joins, indexing & query optimization.",
      color: "#00758f",
      glowColor: "rgba(0, 117, 143, 0.4)",
      tags: ["Relational Schema", "Complex Queries", "Optimization"],
    },
    {
      name: "React & TypeScript",
      category: "Frontend",
      icon: "Atom",
      description: "Component-driven development, custom hooks, strictly typed interfaces & state management.",
      color: "#61dafb",
      glowColor: "rgba(97, 218, 251, 0.4)",
      tags: ["Type Safety", "State Hooks", "Vite"],
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: "Wind",
      description: "Utility-first design architecture, custom theme tokens, modern glassmorphism & responsive styling.",
      color: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.4)",
      tags: ["Utility First", "Dark Mode", "Fluid Design"],
    },
    {
      name: "Three.js & WebGL 3D",
      category: "Tools & Design",
      icon: "Boxes",
      description: "Real-time 3D rendering in browser, procedural geometry, custom lighting, PBR materials & interactive shaders.",
      color: "#00f0ff",
      glowColor: "rgba(0, 240, 255, 0.4)",
      tags: ["WebGL", "3D Scene", "Interactive"],
    },
    {
      name: "Git & GitHub",
      category: "Tools & Design",
      icon: "GitBranch",
      description: "Distributed version control, branch management, collaborative workflows, PR reviews & CI/CD deployment.",
      color: "#f05032",
      glowColor: "rgba(240, 80, 50, 0.4)",
      tags: ["Branching", "Collaboration", "Version Control"],
    },
    {
      name: "UI/UX Design & Prototyping",
      category: "Tools & Design",
      icon: "LayoutDashboard",
      description: "User research, wireframing, high-fidelity interactive prototyping, design systems & micro-interactions.",
      color: "#06b6d4",
      glowColor: "rgba(6, 182, 212, 0.4)",
      tags: ["Figma", "Design Systems", "User Journey"],
    },
  ],

  contact: {
    heading: "LET'S CREATE\nSOMETHING EXTRAORDINARY.",
    subheading: "Ready to elevate your next project?",
    ctaDescription: "Punya ide, proyek digital, atau ingin membangun platform web yang luar biasa? Mari diskusikan visi Anda dan wujudkan bersama.",
    directEmail: "naufalilmi27@gmail.com",
    officeHours: "Senin – Sabtu, 08:00 – 21:00 WIB",
    socials: [
      {
        name: "WhatsApp",
        url: "https://wa.me/6283119395328?text=Halo%20Naufal,%20saya%20tertarik%20berdiskusi%20tentang%20proyek%20web.",
        handle: "0831-1939-5328",
        icon: "Phone",
      },
      {
        name: "GitHub",
        url: "https://github.com/naufalilmi12",
        handle: "github.com/naufalilmi12",
        icon: "Github",
      },
      {
        name: "Email",
        url: "mailto:naufalilmi27@gmail.com",
        handle: "naufalilmi27@gmail.com",
        icon: "Mail",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        handle: "linkedin.com/in/naufalilmi",
        icon: "Linkedin",
      },
    ],
  },
};
