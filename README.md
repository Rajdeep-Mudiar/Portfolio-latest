# Rajdeep Mudiar — Developer Portfolio 🚀

> Modern, interactive, and responsive personal developer portfolio website built for **Rajdeep Mudiar**, Computer Science Engineering Undergraduate at Gauhati University specializing in **AI/ML, Generative AI, RAG Architectures, Full-Stack Development, and Quantum Communication Research**.

---

## 🌟 Key Highlights & Features

- **Futuristic Dark Aesthetic**: Tailored color palette (`#070B14`, `#0D1321`, electric blue & purple accents, glassmorphic cards, subtle neural grid animations).
- **Interactive Hero & Neural Visual**: Animated role typewriter, instant resume download, social quick-links, and interactive node diagram.
- **Structured Skills Matrix**: Filterable category tabs (`All`, `Programming`, `AI/ML`, `LLM/RAG`, `Full Stack`, `Database & Tools`, `Research`) powered by Framer Motion.
- **Experience Accordion Timeline**: Expandable career trajectory featuring internships & fellowships at **Dev Weekends**, **IIT Guwahati (under Prof. Prithwijit Guha)**, **Coding Blocks**, **Assam Engineering College (Quantum QKD)**, and **Frint.in**.
- **Project Showcase & Interactive Modals**: Filterable cards for **CareBridge** (ET-AI Hackathon Semi-Finalist — Top 6,000 / 55,000+ teams), **SahayaKISSAN**, **HackDays 3.0**, and **SIH 2024**, complete with detailed architecture pop-ins.
- **Hackathons Matrix**: Dedicated competitive innovation showcase.
- **Academic Milestones**: Gauhati University (B.Tech CSE 2024–2028) and Gurukul Grammar Senior Secondary School.
- **GitHub Integration**: Public repositories showcase and activity heatmap visualization with offline rate-limit resilience.
- **Contact Hub**: Accessible contact form with mailto and webhook integration support, plus one-click email copying.
- **Fully Responsive & Accessible**: Flawlessly optimized across mobile, tablet, laptop, and ultra-wide displays with `prefers-reduced-motion` compliance and keyboard accessibility.

---

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via automated GitHub Actions workflow

---

## 📁 Repository Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg           # High-tech monogram SVG favicon
│   └── resume.pdf            # ATS-friendly downloadable & viewable resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx         # Background & core focus areas
│   │   ├── BackgroundEffects.jsx # Ambient glowing particles & mesh canvas
│   │   ├── Contact.jsx       # Contact form & communication cards
│   │   ├── CustomCursor.jsx  # Subtle desktop cursor glow effect
│   │   ├── Education.jsx     # Academic milestones
│   │   ├── Experience.jsx    # Interactive accordion career timeline
│   │   ├── Footer.jsx        # Footer & navigation return
│   │   ├── GithubSection.jsx # GitHub profile & repo cards
│   │   ├── Hackathons.jsx    # Competitive hackathons showcase
│   │   ├── Hero.jsx          # Hero section with animated role switcher
│   │   ├── HeroVisual.jsx    # Interactive neural AI system node visual
│   │   ├── Navbar.jsx        # Glassmorphic sticky navbar with active spy
│   │   ├── ProjectModal.jsx  # Accessible modal for deep architecture review
│   │   ├── Projects.jsx      # Filterable project gallery
│   │   ├── ResumeSection.jsx # Resume callout section
│   │   └── Skills.jsx        # Filterable skills matrix with layout transitions
│   ├── data/
│   │   ├── education.js      # Degree and school details
│   │   ├── experience.js     # Internships and fellowship data
│   │   ├── hackathons.js     # Hackathon highlights
│   │   ├── profile.js        # Bio, headline, and contact links
│   │   ├── projects.js       # Projects dataset
│   │   └── skills.js         # Categorized skills dataset
│   ├── App.jsx               # Root application component
│   ├── index.css             # Tailwind base styles and utility classes
│   └── main.jsx              # Application entry point
├── .gitignore
├── index.html                # SEO meta tags and Google fonts
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js            # Relative base configuration for GitHub Pages
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚀 GitHub Pages Deployment Instructions

This repository is already configured with automated deployment via **GitHub Actions** (`.github/workflows/deploy.yml`).

### Step 1: Push Code to GitHub
Run the following commands in your terminal:

```bash
git add .
git commit -m "feat: initial interactive developer portfolio release"
git remote add origin https://github.com/Rajdeep-Mudiar/Portfolio-latest.git
git branch -M main
git push -u origin main
```

*(Note: If `origin` is already configured, you can simply run `git push -u origin main`)*

### Step 2: Enable GitHub Pages in Repository Settings
1. Open your repository on GitHub: **`https://github.com/Rajdeep-Mudiar/Portfolio-latest`**
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! GitHub Actions will automatically run the build and publish the site.

### Step 3: Access Your Live Portfolio
Once the workflow completes (usually ~1 minute), your site will be live at:
**`https://rajdeep-mudiar.github.io/Portfolio-latest/`**

### How to update the website later:
Whenever you make updates in the future, simply commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

---

## ⚙️ Customization Guide

- **Profile & Links**: Update details in [`src/data/profile.js`](src/data/profile.js).
- **Projects**: Add or edit projects in [`src/data/projects.js`](src/data/projects.js).
- **Experience**: Modify internships and fellowships in [`src/data/experience.js`](src/data/experience.js).
- **Skills**: Adjust technology categories in [`src/data/skills.js`](src/data/skills.js).
- **Resume File**: Replace [`public/resume.pdf`](public/resume.pdf) with your updated PDF at any time.

---

## 📄 License
© 2026 Rajdeep Mudiar. Built with React & Tailwind CSS.
