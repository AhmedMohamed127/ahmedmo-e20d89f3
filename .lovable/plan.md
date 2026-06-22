## Goal
Make the Projects section on your portfolio always reflect what's in your CV (the Google Drive file you linked), with zero code changes when you update the CV.

## How it will work

```text
Your CV in Drive ──► Edge function (download + AI parse) ──► Cached JSON in DB ──► Portfolio Projects section
                                                              ▲
                                                              └─ auto-refresh every 6h, or on demand
```

1. **Connect Google Drive** so the site can read your CV file (`1dwUr15S9XyhDWuiIAIMC-aGTLMWlBURD`) on the server side, securely.
2. **Edge function `sync-cv-projects`**:
   - Downloads the CV from Drive (handles both PDF and Google Doc export).
   - Sends its text to the Lovable AI Gateway with a strict schema prompt to extract: `title`, `description`, `tech[]`, `links[] (playStore/appStore/github/web)`, `accent`.
   - Stores the result in a `cv_projects_cache` table (single row, JSON column + `updated_at`).
3. **Edge function `get-cv-projects`** (public, read-only):
   - Returns the cached JSON.
   - If cache is older than 6 hours, triggers `sync-cv-projects` first.
4. **Frontend**: `Projects.tsx` keeps the exact same 3D carousel UI but loads its `projects` array from `get-cv-projects` via TanStack Query (with the current hardcoded list as a fallback while loading / if the API fails).
5. **Manual refresh**: a tiny hidden `?refresh-cv=1` query param on the homepage forces a re-sync, so you can update the CV and instantly see changes.

## What you'll need to do once
- Approve connecting the Google Drive connector (one click).
- Make sure the CV file is accessible to the connected Google account (it already is, since you own it).

## Technical details
- **Backend**: Lovable Cloud enabled; one table `cv_projects_cache(id, data jsonb, updated_at)` with public read RLS, service-role write only.
- **AI parsing**: `google/gemini-2.5-flash` via Lovable AI Gateway, JSON-mode with a Zod-validated schema. Falls back to keeping the last cached value on parse failure.
- **PDF handling**: if Drive returns `application/pdf`, use `unpdf` (Deno-compatible) to extract text before sending to the LLM.
- **No UI changes**: the carousel, glass cards, accents, and animations stay exactly as they are now — only the data source changes.
- **Loading state**: skeleton card during first fetch; cached after that so it's instant.

## What stays the same
- All visual design of the Projects section (3D coverflow, glass cards, accent colors).
- The rest of the portfolio (hero, about, contact, etc.) is untouched.
- The separate dashboard project is untouched — this update is self-contained.
