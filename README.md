# ENOMIS EVENTI — Official Web Platform

<div align="center">

![ENOMIS EVENTI](https://img.shields.io/badge/ENOMIS-EVENTI-b86b77?style=for-the-badge&labelColor=2C1810)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=20232A)
![i18n](https://img.shields.io/badge/i18n-FR%20%7C%20IT-4A7FA5?style=for-the-badge&labelColor=2C1810)
![Status](https://img.shields.io/badge/Status-In%20Development-f6cfca?style=for-the-badge&labelColor=b86b77)
![License](https://img.shields.io/badge/License-Private%20Client-eabfb9?style=for-the-badge&labelColor=6B4423)

<br/>

> **"L'icône italienne qui transforme vos événements en souvenirs inoubliables"**
>
> Premium digital platform for ENOMIS EVENTI —
> Italy's iconic vintage Fiat 500 mobile bar & restaurant experience.

<br/>

[🌐 Live Site](#) &nbsp;·&nbsp; [📸 Design Preview](#) &nbsp;·&nbsp; [📋 Report a Bug](#) &nbsp;·&nbsp; [📬 Contact](#contact)

</div>

---

## Overview

**ENOMIS EVENTI** is a premium Italian event company that has reinvented mobile catering through an iconic symbol: a vintage Fiat 500 transformed into a fully-equipped luxury bar and restaurant. From intimate weddings to high-end corporate events, every service is a curated sensory experience.

This repository contains the **full source code** of the company's official website — a modern, bilingual (French & Italian), fully responsive React application, built to reflect the brand's identity: elegance, warmth, and Italian excellence.

---

## Table of Contents

- [Brand Identity](#brand-identity)
- [Live Features](#live-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Internationalization](#internationalization)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Changelog](#changelog)
- [Contact](#contact)

---

## Brand Identity

| | |
|---|---|
| **Company** | ENOMIS EVENTI |
| **Concept** | Vintage Fiat 500 · Mobile Bar & Restaurant · Premium Events |
| **Tagline** | *L'icône italienne qui transforme vos événements en souvenirs inoubliables* |
| **Markets** | Italy · France · International |
| **Services** | Weddings · Private Dinners · Corporate Events · Brand Launches · VIP Soirées |
| **Positioning** | Ultra-premium, intimate, bespoke — never mass-market |

---

## Live Features

### 🎬 Hero Section
- Staggered entrance animations (fade + slide, 6-level delay system)
- Dual CTA: *Book an Event* + *Request a Quote*
- Live stats: 200+ events · 5★ reviews · 8+ years
- Mini gallery grid with hover effects and overlay
- Elegant scroll indicator

### 🌍 Bilingual Experience
- Full French / Italian toggle via `react-i18next`
- Fallback system — real text always displayed, never raw keys like `header.title`

### 🌙 Dark / Light Mode
- System-aware theme toggle
- Full palette adaptation via CSS custom properties

### 📜 Scroll Animations
- `IntersectionObserver`-based reveals on every section
- Directional animations: from-left · from-right · from-bottom · zoom-in
- Staggered delays for natural rhythm

### 🍾 Services Menu
- Curated wine, champagne & cocktail selections
- Structured with pricing, descriptions, and category headings

### 🏆 Awards & Distinctions
- Visual recognition section with award imagery

### 📍 Contact Section
- Location card, Email card, WhatsApp card
- Professional icons (react-icons: `MdLocationOn`, `MdEmail`, `MdWhatsapp`)

### 🎞 Gallery Strip
- Infinite auto-scroll carousel
- Pause on hover
- Masked edges for seamless loop

### 📱 Fully Responsive
- Mobile-first breakpoints: 580px · 900px · 1100px
- Stacked layout on mobile, side-by-side on desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 (Create React App) |
| **Styling** | Pure CSS + CSS Custom Properties (no CSS-in-JS) |
| **Animations** | CSS keyframes + `IntersectionObserver` |
| **Internationalization** | `i18next` + `react-i18next` |
| **Icons** | `react-icons` — Md, Gi, Fa, Fi families |
| **Fonts** | Cormorant Upright (display) · Open Sans (body) via Google Fonts |
| **Package Manager** | npm |
| **Node** | v18.x / v20.x LTS |

---

## Getting Started

### Prerequisites

- **Node.js** `v18.x` or `v20.x` (LTS) — [Download](https://nodejs.org)
- **npm** `v8+`

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/enomis-eventi.git
cd enomis-eventi

# Install dependencies
npm install

# Start the development server
npm start
```

App runs at → `http://localhost:3000`

---

### Windows / PowerShell — Troubleshooting

If you encounter script execution errors:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

If dependencies are broken or cache is stale:

```bash
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm cache clean --force
npm install
npm start
```

---

## Project Structure

```
enomis-eventi/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                    # All images, photos, SVGs
│   │
│   ├── components/                # Shared UI components
│   │   ├── Navbar/
│   │   ├── SubHeading/
│   │   ├── MenuItem/
│   │   └── FooterOverlay/
│   │
│   ├── container/                 # Full page sections
│   │   ├── Header/                # Hero — main landing section
│   │   ├── AboutUs/               # Brand story
│   │   ├── SpecialMenu/           # Wine & cocktail menu
│   │   ├── Laurels/               # Awards & distinctions
│   │   ├── Gallery/               # Photo gallery
│   │   ├── FindUs/                # Contact & location
│   │   └── Footer/                # Footer with newsletter
│   │
│   ├── constants/                 # images.js · menu data · awards data
│   ├── hooks/                     # Custom React hooks
│   ├── i18n/                      # Translation files
│   │   ├── fr.json                # French
│   │   └── it.json                # Italian
│   │
│   ├── App.js
│   ├── App.css                    # Section-level styles
│   ├── index.js                   # Entry point + scroll observer
│   └── index.css                  # Global tokens, layout, typography
│
└── package.json
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#FAF6EF` | Primary page background |
| `--beige` | `#F0E8D8` | Alternate section backgrounds |
| `--rose-1` | `#b86b77` | Primary accent · Buttons · Active states |
| `--rose-2` | `#d2aba6` | Subtitles · Secondary icons |
| `--rose-3` | `#eabfb9` | Borders · Dividers |
| `--rose-4` | `#f6cfca` | Hover fills · Badge backgrounds |
| `--rose-5` | `#ffe8e5` | Gallery strip · Light section fills |
| `--blue` | `#4A7FA5` | Stats · Contact icons · Fresh accents |
| `--text-dark` | `#2C1810` | H1 · H2 · Primary headings |
| `--text-mid` | `#6B4423` | Body text · Paragraphs |
| `--text-light` | `#9A7055` | Captions · Meta information |

> ⚠️ **Rule:** No black (`#000`, `#0c0c0c`) or pure white (`#fff`) in the UI. All backgrounds use the cream/beige/rose palette. All text uses the brown scale.

### Typography

| Role | Font Family | Weight |
|---|---|---|
| Display headings | Cormorant Upright | 700 |
| Section titles | Cormorant Upright | 600 |
| Body text | Open Sans | 400 |
| UI labels, badges | Open Sans | 600 |

### Spacing & Shadows

```css
/* Padding system */
--space-section: 4rem 5rem;   /* Desktop sections */
--space-mobile:  2.5rem 1.5rem; /* Mobile sections */

/* Shadow scale */
--shadow-s: 0 4px 16px rgba(184,107,119,0.10);
--shadow-m: 0 8px 32px rgba(184,107,119,0.18);
--shadow-l: 0 16px 50px rgba(184,107,119,0.24);
```

---

## Internationalization

The platform is fully bilingual: **French (FR)** and **Italian (IT)**.

```
src/i18n/
├── fr.json    ← French (primary market)
└── it.json    ← Italian (origin market)
```

All translation keys are namespaced by section:

```json
{
  "hero": { "title": "...", "cta_primary": "..." },
  "nav":  { "home": "Accueil", "about": "À Propos" },
  "menu": { "wine": "Vins & Champagnes" }
}
```

A built-in **fallback system** ensures real content is always visible — if a translation key is missing, the French default renders automatically. Keys like `hero.title` never appear in the UI.

---

## Available Scripts

```bash
npm start         # Development server → localhost:3000
npm run build     # Production build  → /build
npm test          # Run test suite
npm run eject     # Eject CRA (⚠️ irreversible)
```

---

## Deployment

### Production Build

```bash
npm run build
```

The `/build` directory contains fully optimized static files.

### Hosting Options

| Platform | Steps |
|---|---|
| **Netlify** | Drag & drop `/build` folder into Netlify dashboard |
| **Vercel** | Connect GitHub repo · Build command: `npm run build` · Output: `build` |
| **cPanel / FTP** | Upload contents of `/build` to `public_html/` |

---

## Changelog

### `v1.1.0` — Current
- Hero section complete redesign with stagger animations
- Rose gold + cream color palette applied globally
- Dark/light mode implemented
- Bilingual FR/IT system with fallback
- Scroll animations on all sections
- Infinite gallery strip

### `v1.0.0` — Initial
- Project initialized from Gericht restaurant template
- ENOMIS EVENTI branding applied
- Basic content adaptation (FR/IT)

---

## Contact

**ENOMIS EVENTI**



---

<div align="center">

<br/>

Built with care for **ENOMIS EVENTI** &nbsp;·&nbsp; All rights reserved © 2025

<br/>

*This is a private client project. The source code is confidential.*
*Unauthorized reproduction, distribution, or public deployment is strictly prohibited.*

</div>
