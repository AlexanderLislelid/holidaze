# AI Usage Log

This file documents all use of AI tools in this project.

---

## 1. Breaking down the assignment brief

**Tool used:** Claude (Anthropic)
**Date:** 26 October 2026
**Purpose:** Explanation of the assignment brief in Norwegian, to get an overview of the requirements, user roles, pages needed and deliverables.
**Outcome:** Improved understanding of the scope of the project. Used as a starting point for my own planning.

---

## 2. Project and repository setup

**Tool used:** Claude (Anthropic)
**Date:** 26 October 2026
**Purpose:** Boilerplate scaffolding – terminal commands for creating a Next.js project, creating the GitHub repository and creating and linking a GitHub Projects board.
**Outcome:** Commands reviewed and run by me. Project, repository and board set up.

---

## 3. Issue descriptions, acceptance criteria and sizes

**Tool used:** Claude (Anthropic)
**Date:** 26 October 2026
**Purpose:** Drafting more detailed issue descriptions with acceptance criteria checklists, and suggesting size estimates (XS–L) for each issue.
**Outcome:** Descriptions reviewed and added to the issues on the project board, adjusted where needed.

---

## 4. Timeline

**Tool used:** Claude (Anthropic)
**Date:** 26 October 2026
**Purpose:** Brainstorming a weekly plan from now until the submission deadline (6 December 2026), for use in the Roadmap view.
**Outcome:** Used as a basis for start and target dates on the project board.

---

## 5. Figma style guide

**Tool used:** Claude (Anthropic)
**Date:** 26 October 2026
**Purpose:** Brainstorming what to include in the style guide and component library, and how to organise pages in Figma.
**Outcome:** Used as a checklist. Design, colours, typography and components created by me in Figma.

---

## 6. API helper

**Tool used:** Claude Code (Anthropic)
**Date:** 27 October 2026
**Purpose:** Step-by-step guidance on where to place an API helper and what it needs (base URL, API key, headers, error handling), plus code review of my version.
**Outcome:** I wrote constants.js and apiRequest() myself and fixed the issues found in review.

---

## 7. JSDoc

- **Tool used:** Claude (Anthropic)
- **Date:** 27 October 2026
- **Purpose:** Generate a skeleton JSDoc comment for apiRequest().
- **Outcome:** Received a JSDoc template, which I reviewed and adjusted.

---

## 8. Figma colors

- **Tool used:** Claude (Anthropic)
- **Date:** 27 October 2026
- **Purpose:** Generate hex codes for all my colors in the figma styleguide so that I could easily transfer them to my css file and use them in the project
- **Outcome:** Received hex codes, which I added as variables in Figma and as custom tokens in Tailwind's @theme.

---

## 9. Code review of NavMenu links

- **Tool used:** Claude Code (Anthropic)
- **Date:** 31 October 2026
- **Purpose:** Code review of the rendering logic in NavMenu.jsx. My version had three almost identical map() blocks (guest, user and venue manager)
- **Outcome:** Refactored the component based on the feedback. I now pick the correct link array first (guestLinks, userLinks or venueManagerLinks) and render it with a single map().

---

## 10. Venue amenities in VenueCard

- **Tool used:** Claude Code (Anthropic)
- **Date:** 2 November 2026
- **Purpose:** Hints on how to turn the meta object into an array so I can render the amenities (wifi, parking, breakfast, pets) on the venue cards.
- **Outcome:** Got hints about Object.entries() and created a filtered tags array that I could map over and render.

---

## 11. Replacing <img> with next/image

- **Tool used:** Claude Code (Anthropic)
- **Date:** 2 November 2026
- **Purpose:** After running npm run lint I had several warnings regarding using the regular <img> tags instead of <Image/> in VenueCard, Header, Footer and NavMenu.
  Asked AI to replace the img tags with next/image
- **Outcome:** Claude Code replaced the <img> tags with <Image /> and added images.remotePatterns to next.config.mjs so images from external URLs are allowed. I reviewed the changes and asked for a simpler sizes value on the venue cards. The lint warnings are gone.

---

## 12. Prerendering errors

- **Tool used:** Claude Code (Anthropic)
- **Date:** 2 November 2026
- **Purpose:** Fixing two Next.js errors on /venues/[id]: usePathname() in the Header was used outside of Suspense, and the fetch in apiRequest() was uncached data during prerendering.
- **Outcome:** Claude Code wrapped the Header in <Suspense> in the root layout with a HeaderFallback that only shows the logo, and added a loading.jsx. I chose to make it a global loader in src/app/loading.jsx. The build now passes.

---

## 13. Sorting venues

- **Tool used:** Claude Code (Anthropic)
- **Date:** 3 November 2026
- **Purpose:** Step by step hints on how to sort the venue list using the API's sort and sortOrder query parameters.
- **Outcome:** Following the hints and explanations I managed to get a working solution

---

## 14. Sort dropdown bug

- **Tool used:** Claude Code (Anthropic)
- **Date:** 3 November 2026
- **Purpose:** Debugging the sort dropdown in SortSelect.jsx. After sorting by highest price and then searching for "oslo", choosing "Highest price" again did nothing.
- **Outcome:** Got an explanation of the bug and hints on how to fix it.

---

## 15. Load more pagination

- **Tool used:** Claude Code (Anthropic)
- **Date:** 3 November 2026
- **Purpose:** My "Load more" solution used limit, which broke at 100 venues because of the API's max limit.
- **Outcome:** Got help switching to page-based pagination, and hints on fetching all pages with Promise.all

---

## 16. Debugging cache error

- **Tool used:** Claude Code (Anthropic)
- **Date:** 3 November 2026
- **Purpose:** Asked for a global fix for an "uncached data" error, so I wouldn't need Suspense everywhere.
- **Outcome:** Turned off Cache Components in next.config and removed "use cache" from Venues.jsx.

---

## 17. Code review of LoginForm

- **Tool used:** Claude Code (Anthropic)
- **Date:** 4 November 2026
- **Purpose:** Code review of my LoginForm.jsx (react-hook-form + zod). Asked it to find errors and suggest how to save the logged-in user with useAuthStore.
- **Outcome:** Got feedback on syntax errors and a missing "use client". Also got hints on saving the user and token with login() from useAuthStore, adding ?\_holidaze=true to get venueManager, and showing API errors with setError("root"). I fixed the issues myself, and the form now saves the user in the store.

---
