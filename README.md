# Personal Portfolio & iOS Jailbreak Repository

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?logo=github&logoColor=white&style=for-the-badge)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, highly interactive, and optimized Single Page Application (SPA) portfolio built with **React** and **Vite**. This web application acts as a personal developer portfolio, tech showcase, and an **iOS Jailbreak Repository** equipped with real-time API integrations.

🔗 **Live Demo:** [https://qilskcter.github.io](https://qilskcter.github.io/)

---

## Core Features

* **Ultra-Smooth Navigation:** Built as a proper Single Page Application (SPA) using `react-router-dom` for instant page switching without full-page reloads. It features professional cinematic fade & blur page transitions.
* **Fully Responsive Design:** Modern Dark Mode layout utilizing a clean Glassmorphism aesthetic with iOS-inspired rounded elements. Completely optimized for mobile viewports with corrected navbar alignments and non-wrapping typography.
* **Real-Time Discord Status:** Integrates **Lanyard API** via WebSockets to stream live Discord profile activity—displaying your current avatar, status dot (Online, DND, Idle, Offline), and active gaming status on the Home page.
* **Spotify Integration:** Automatically detects and displays currently playing track data fetched instantly from Spotify.
* **🖥️ Tech Showcase (My Devices):** Trưng bày (Showcases) all active workstations and gadgets with high-fidelity asset images scaled natively to prevent distortion, backed by structural spec breakdowns.
* **iOS Jailbreak Repository:** Features quick-action installation buttons utilizing package manager URL Schemes (`cydia://`, `sileo://`, `zebra://`) mapped alongside uniform, custom-sized mobile app icons.
* **Ambient FX & Security:** Ambient interactive falling snowflake system and built-in window guards blocking basic DevTools inspection (`F12`, `Ctrl+Shift+I`) for an immersive presentation.

---

##  Tech Stack

* **Front-end Library:** React (Hooks, Context, useMemo)
* **Build Tooling:** Vite (Fast Refresh & HMR)
* **Routing Engine:** React Router DOM (Clean URLs stripping the old `.html` extensions)
* **API/Real-time Layer:** Lanyard API (via `react-use-lanyard` WebSocket client)
* **Styling Framework:** Custom Semantic CSS3 (Flexbox, Grid, Glassmorphic layers, Keyframe Animations)
* **Hosting Platform:** GitHub Pages

---

## Key Project Structure

```text
├── public/
│   ├── assets/              # Core image assets, tech components, app icons (Cydia, Sileo...)
│   └── 404.html             # Multi-routing SPA fallback layout handler for GitHub Pages
├── src/
│   ├── data.js              # Centralized data model matrix (About, Projects, Awards, Devices...)
│   ├── App.jsx              # Application Shell orchestrating routing states and global layouts
│   ├── main.jsx             # Entry script bootstrap mounted to the BrowserRouter context
│   └── styles.css           # Monolithic core stylesheet holding global responsive variables
├── package.json             # Core dependency manifest and operational automation script aliases
└── vite.config.js           # Production compiler configurations setting up the dynamic subfolder base

```

---

## Local Installation & Set Up

Ensure you have [Node.js](https://nodejs.org/) installed locally (LTS recommended) before starting.

1. **Clone the repository instance:**
```bash
git clone [https://github.com/qilskcter/qilskcter-github-io.git](https://github.com/qilskcter/qilskcter-github-io.git)
cd qilskcter-github-io

```


2. **Install node package modules:**
```bash
npm install

```


3. **Fire up the local development environment:**
```bash
npm run dev

```


*Open up your browser and point it to `http://localhost:5173` to see it running.*

---

## Automation Pipelines (Deploy to GitHub Pages)

The repository has integrated `gh-pages` build automation tools allowing one-click compilation and remote cloud deployment.

1. **Confirm Base Variable:** Ensure the `base` field inside `vite.config.js` mirrors your target GitHub repository name correctly.
2. **Hook Up Discord Client:** Swap out the fallback ID within the `useLanyard` initialization hook inside `App.jsx` with your individual numeric Discord User ID.
3. **Trigger Deployment Bundle Script:**
```bash
npm run deploy

```


*This single execution runs `npm run build` to output optimized browser bundles inside `/dist`, then automatically updates and forces the upstream remote `gh-pages` deployment branch branch.*

---

## License

This open-source portfolio distribution is licensed directly under the **MIT License**. Feel free to fork, customize, and refactor it to construct your personal space on the web!

```

```