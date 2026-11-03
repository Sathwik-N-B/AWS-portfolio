# Sathwik's Portfolio: Build Your Tech Superpower

Personal portfolio built for the **AWS Student Builder Challenge: Build Your Tech Superpower**, deployed with **AWS Amplify Hosting**.

**Live site:** https://main.d3hq0ippp1vi9w.amplifyapp.com/

## What's on the site
- **About Me**: who I am, my background and certifications
- **Tech Superpowers**: my skills grouped by area (GenAI and agentic, cloud and DevOps, languages, backend, data and frontend, dev tools)
- **Projects**: things I've built, with links to the code
- **Creative feature: the Superpower Terminal** (see below)

## The creative feature: Superpower Terminal
A pulsing **Find my superpower** button (bottom-right) and a hint line on the hero open a small terminal. Visitors can type commands, or tap the command chips on a phone.

| Command | What it does |
|---|---|
| `help` | List all commands |
| `about`, `skills`, `projects`, `contact` | Explore the portfolio from the terminal |
| `superpower` | A vending machine dispenses a random superpower card |
| `theme dark/neon/pastel/halloween` | Re-skin the whole site (bare names like `neon` work too) |
| `cauldron` | Brews a "potion" from a random mix of my skills |
| `halloween` | 🎃 Spooky mode (below) |
| `boo`, `trick`, `ghost` | Spooky tricks, available in Halloween mode |
| `sound on/off` | Opt-in synthesized sound effects (off by default) |

**Halloween mode** adds a flickering vignette, fog, a moon, bats, floating ghosts you can pop, a spider that drops as you scroll, and a **flashlight hunt**: the page goes dark, a spotlight follows your mouse or finger, and five hidden pumpkins reveal facts about me. Find all five to unlock a surprise. Everything is switched off by `theme dark`, and the animations respect the `prefers-reduced-motion` setting.

## AWS services used
| Service | How it's used |
|---|---|
| **AWS Amplify Hosting** | Hosts and deploys the site. It is connected to this GitHub repo, builds with `npm run build` and publishes the `dist` folder. Every push to `main` triggers an automatic rebuild and redeploy. |

## Tech stack
- React 19 and Vite 8
- Plain CSS (CSS variables drive the themes), no UI libraries
- Web Audio API for the opt-in sound effects (no audio files)

## Project structure
```
src/
  data/content.js              all site text: bio, skills, projects, superpowers
  components/                  Nav, Hero, About, Skills, Projects, Footer
  components/SuperpowerTerminal.jsx   the terminal and its commands
  components/VendingMachine.jsx       the superpower dispenser
  components/HalloweenLayer.jsx       Halloween effects and the flashlight hunt
  sfx.js                       synthesized sound effects
  styles/                      global, terminal and halloween CSS
```
To change the content, edit `src/data/content.js`.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```
The output goes to `dist/`.
