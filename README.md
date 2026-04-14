# Nuditos Web

Next.js project with token-efficient AI configuration.

## Quick Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React

## AI Configuration

This project includes `CLAUDE.md` and `RULES.md` to reduce AI response verbosity. See [claude-token-efficient](https://github.com/drona23/claude-token-efficient) for the original concept.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
nuditos-web/
├── app/              # Next.js app directory
├── public/           # Static assets
├── CLAUDE.md         # AI response configuration
├── RULES.md          # Session rules for AI
└── package.json
```
