# Md Arif Ansari — Portfolio

A responsive, dark-first developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, and next-themes.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Create a production build:

```bash
npm run build
npm start
```

## Before publishing: personalize these values

1. Edit `src/data/site.ts`:
   - Replace `YOUR_EMAIL@example.com`
   - Replace the LinkedIn URL
   - Replace the GitHub URL
   - Replace the LeetCode URL if you want to show it
2. Edit `src/data/projects.ts`:
   - Replace placeholder GitHub URLs with each real repository URL.
   - Add live demo URLs when available.
   - Verify each project description and stack reflect the current implementation.
3. Add your resume as `public/resume.pdf`. The file is intentionally not fabricated or included.
4. Update the education and profile text in `src/components/PortfolioContent.tsx` if any details change.
5. Replace the page metadata in `src/app/layout.tsx` if you want a different title or description.

## Handwriting intro

The intro uses an SVG text stroke in the Caveat handwritten typeface. The stroke animates on page load. Scrolling through the intro section progressively clips and fades the signature. This is a lightweight text-based handwriting illusion, not a custom traced vector path of your exact handwriting. For a more authentic pen-on-tablet effect, replace the SVG text with a custom SVG path traced from lettering artwork.

## Contact

The contact link currently opens the visitor's email client with a `mailto:` link. It works without an API key. To add a server-backed form, connect Formspree or EmailJS and configure its public form credentials.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy.
5. Add your custom domain in Vercel project settings if you own one.

## Notes

- The theme toggle switches between dark and light modes.
- Social icons and theme control stay fixed near the bottom corners.
- The logo is an editable inline SVG in `src/components/BrandMark.tsx`.
- All portfolio text and project data are local and easy to edit.
- Replace all placeholder URLs and email before sharing the site publicly.
