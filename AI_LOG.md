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
