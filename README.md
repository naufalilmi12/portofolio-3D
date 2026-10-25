# Naufal Ilmi — Immersive 3D Creative Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r160+-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

An immersive, futuristic 3D creative developer portfolio built with React, TypeScript, Three.js, and Tailwind CSS. Features a scroll-driven humanoid cyber mech avatar, dynamic editorial typography, 3D perspective exploration showcases, and integrated project timelines.

---

## 🌟 Key Features

- **Futuristic 3D Humanoid Robot Scene**: Custom procedural WebGL/Three.js character with PBR metallic reflections, illuminated visor, arc reactor core, and orbiting vibrant liquid orbs.
- **Scroll-Driven Cinematic Storytelling**: Dynamic camera navigation and robot kinematics that gracefully evolve with scroll progress.
- **Dynamic Action Word Cycling**: Seamless typewriter/cycler for *Dashboards*, *Platforms*, *Interfaces*, *Animations*, and *Digital Systems*.
- **Continual Design Exploration**: 3D perspective fan-out card gallery showcasing creative experimental UI/UX concepts.
- **Recent Projects Timeline**: Split interactive timeline featuring real production platforms:
  - **Pesantren Modern Raudlatussalam** (`https://pesantren-modern-raudlatussalam.ai.studio`)
  - **Kopi Senja** (`https://naufalilmi12.github.io/kopi-senja/`)
  - **Enterprise Information System Dashboard**
- **Procedural Web Audio Synthesizer**: 100% zero-dependency Web Audio API micro-interaction sound effects (with toggle).
- **Direct Dual Contact Integration**: One-click consultation triggers via **WhatsApp (`0831-1939-5328`)** and **Email (`naufalilmi27@gmail.com`)**.
- **Centralized Configuration**: All personal info, projects, skills, and links managed in a single file (`src/data/portfolioData.ts`).

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/naufalilmi12/portfolio-3d.git
cd portfolio-3d
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The output will be in the `dist/` directory ready for deployment.

---

## 📦 How to Push to Your GitHub

Follow these steps to push this project to your GitHub repository:

### Step 1: Create a new repository on GitHub
1. Go to [https://github.com/new](https://github.com/new).
2. Set Repository name: e.g. `portfolio-3d` or `naufal-portfolio`.
3. Choose **Public** (or Private).
4. Do **not** initialize with README or .gitignore (we already created them).
5. Click **Create repository**.

### Step 2: Push local code to GitHub
Run the following commands in your terminal:

```bash
# Initialize git (already done in this repo)
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: immersive 3D creative developer portfolio"

# Rename branch to main
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/naufalilmi12/portfolio-3d.git

# Push code to GitHub
git push -u origin main
```

*(Note: Ganti `portfolio-3d` dengan nama repositori yang Anda buat di GitHub).*

---

## 🌐 Easy Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/) and click **Add New > Project**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your GitHub repository to [netlify.com](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 🛠️ Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── CyborgScene.tsx                 # 3D Humanoid Robot & Orbiting Orbs
│   │   ├── HeroSection.tsx                 # Giant Editorial Typography & Cycling Words
│   │   ├── ProjectsShowcaseSection.tsx     # Split Projects Timeline & Live Demos
│   │   ├── CreativeExplorationSection.tsx  # 3D Perspective Fan-out Gallery
│   │   ├── ExperienceSection.tsx           # Work Experience & History
│   │   ├── TestimonialsSection.tsx         # Client Reviews & Star Ratings
│   │   ├── TechStackSection.tsx            # Interactive Tech Stack Cards
│   │   ├── ContactFinalSection.tsx         # Consultation Form & WA Trigger
│   │   ├── Navbar.tsx                      # Floating Minimalist Header
│   │   ├── Footer.tsx                      # Modern Footer & Back-to-Top
│   │   ├── TiltCard.tsx                    # Physics 3D Tilt Component
│   │   └── CustomCursor.tsx                # Cyber Reticle Desktop Cursor
│   ├── data/
│   │   └── portfolioData.ts                # Central Portfolio Config
│   ├── utils/
│   │   └── audioFx.ts                      # Procedural Web Audio Synthesizer
│   ├── App.tsx                             # Main Application Layout & Scroll Sync
│   ├── main.tsx                            # React Entry Point
│   └── index.css                           # Global Styles & Cyber Grid
├── package.json                            # Project Dependencies & Scripts
├── tsconfig.json                           # TypeScript Configuration
└── vite.config.ts                          # Vite Bundler Setup
```

---

## 👤 Author

**Naufal Ilmi**
- GitHub: [@naufalilmi12](https://github.com/naufalilmi12)
- WhatsApp: [+62 831-1939-5328](https://wa.me/6283119395328)
- Email: [naufalilmi27@gmail.com](mailto:naufalilmi27@gmail.com)

---

## 📄 License
This project is licensed under the Apache-2.0 License.
