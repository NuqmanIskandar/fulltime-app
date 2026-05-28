# ⚽ FullTime — Football Fixtures App

A React web app that displays match results for every matchweek in the **Premier League** and **La Liga**, built using the free [football-data.org](https://www.football-data.org/) API (v4).

---

## 🚀 Features

- Browse match results by gameweek using ← → navigation
- Displays home team, away team, score, and match status
- Shows club crests fetched from the API
- Covers Premier League (PL) and La Liga (PD)

---

## 🛠️ Tech Stack

- **React** (with React Router DOM for page routing)
- **football-data.org API v4** (free tier)
- **CSS Flexbox** for layout

---

## 📚 Concepts Learned

### React Hooks
- `useState` — tracks current matchday and match data
- `useEffect` — fetches new data whenever matchday changes
- `useRef` — caches fetched matchdays to avoid redundant API calls

### React Router DOM
- Set up client-side routing between Premier League and La Liga pages

### API Integration
- Fetching from football-data.org with an auth token header
- Accessing nested objects like `m.homeTeam.crest`, `m.score.fullTime.home`

### Performance
- **Debouncing** — delays the fetch by 200ms so spamming the arrow buttons doesn't fire multiple requests
- **Caching with useRef** — previously fetched matchdays are stored and reused instantly without re-fetching

### CSS
- Flexbox layout for the fixture rows (home | score | away)
- Responsive sizing with `clamp()`
- Alternating row colors with `nth-child`
- Rounded table corners with `border-radius` + `overflow: hidden`

---

## 🔑 Setup

1. Get a free API key from [football-data.org](https://www.football-data.org/)
2. Create a `.env` file in the root of your project:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```
3. Install dependencies and run:
   ```bash
   npm install
   npm start
   ```

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── PremierLeaguePage.jsx
│   ├── PremierLeaguePage.css
│   ├── LaLigaPage.jsx
│   └── LaLigaPage.css
├── App.jsx
└── index.js
```

---

## ⚠️ API Notes

- Free tier is limited to **10 requests per minute**
- Debouncing and caching are implemented to stay within the rate limit
- Premier League code: `PL`
- La Liga code: `PD` (Primera Division)