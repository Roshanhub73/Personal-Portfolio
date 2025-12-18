# Personal Portfolio (HTML/CSS/JS)

Simple, single-page portfolio you can edit quickly. Includes hero, about, skills, projects, resume download, and contact sections.

## Files
- `index.html` — content and layout
- `styles.css` — theme and layout styles
- `script.js` — smooth scrolling, active nav highlight, theme toggle
- `assets/resume.pdf` — replace with your real resume file (keep the same name)
- `assets/profile.svg` — swap with your headshot/photo

## How to edit
Open `index.html` and update:
- **Header/brand**: `Your Name`
- **Hero**: headline, subtitle, buttons
- **About**: intro text and bullet points
- **Skills**: replace pills with your tech stack
- **Projects**: edit titles, descriptions, and links
- **Resume**: replace `assets/resume.pdf` with your PDF
- **Contact**: update email/LinkedIn/GitHub links

## Quick preview
Double-click `index.html` or run a local server:
```bash
npx serve
# or
python -m http.server 8000
```
Then open http://localhost:8000

## Theme
- Light/dark toggle in the top-right (`script.js` handles it)
- Accent colors set in `styles.css` under `:root`

## Replace the resume
Put your PDF at `assets/resume.pdf`. The download/view buttons will keep working if you keep the same name.

