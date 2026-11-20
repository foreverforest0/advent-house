ADVENT HOUSE — 31 windows
=========================

Files:
  index.html   the whole app (one page)
  facade.jpg   the hand-drawn house
  data.js      the 31 tasks (text, links, B1/B2)

Answers are stored in the student's browser (localStorage) —
each student sees only their own. Nothing is sent anywhere.

Deploy, option 1 — Netlify Drop (fastest, no CLI):
  1. open https://app.netlify.com/drop
  2. drag this folder onto the page
  3. you get a public URL in ~10 seconds

Deploy, option 2 — Firebase Hosting (from the folder above this one):
  npx firebase-tools login --reauth
  npx firebase-tools hosting:sites:create advent-house-2026 --project vocab-e1e70
  npx firebase-tools deploy --only hosting:advent-house-2026 --project vocab-e1e70
  → https://advent-house-2026.web.app

Local preview:
  cd site && python3 -m http.server 8000
  open http://localhost:8000
