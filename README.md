# Airplane Management System

Single-page static dashboard and supporting pages for an airplane operations dashboard — built as an internship/portfolio project. The UI is authored with semantic HTML, custom CSS and uses Bootstrap (CDN) for base layout utilities and Bootstrap Icons for glyphs.

**Status:** Prototype / static demo (no build step required).

**Screenshot:** See the project pages (`index.html`, `arrivals.html`, `departures.html`, `ticket-management.html`) for live UI examples.

**Tech stack**
- **HTML:** Semantic HTML5 pages (`index.html`, `arrivals.html`, `departures.html`, `ticket-management.html`).
- **CSS:** Plain CSS in [css/style.css](css/style.css) with custom variables and components.
- **Frameworks / Icons:** Bootstrap 5 (CDN) and Bootstrap Icons (CDN) for layout/utilities and iconography.

**Features**
- Dashboard overview with stats, recent bookings and activity cards.
- Tabular booking lists with status badges and accessible markup.
- Responsive layout across desktop, tablet and mobile breakpoints.
- Small UI animations and hover states for improved affordance.

**Project structure**

```
Airplane-Management-System/
├── index.html             # Dashboard / Home
├── arrivals.html          # Arrivals overview
├── departures.html        # Departures overview
├── ticket-management.html # Ticket listing & management
├── css/
│   └── style.css          # Main stylesheet
└── README.md
```

**Quick start**
- Open `[index.html](index.html)` directly in your browser for a quick preview.
- Or serve the folder locally (recommended to avoid mixed-content or icon CDN issues):

```powershell
python -m http.server 8000
# then open http://localhost:8000/Airplane-Management-System/index.html
```

**Customize & Development notes**
- To change the sidebar width, edit the `.sidebar { width: ... }` and update the `.main-content { margin-left: ... }` values in [css/style.css](css/style.css).
- Add images to a new `assets/` folder and reference them from the pages using relative paths.
- If you introduce JavaScript, create a `js/` folder and include scripts before the closing `</body>` tag.
- Consider converting repeated dimension values (for example sidebar width) into CSS custom properties (`:root`) if you plan frequent layout tweaks.

**Accessibility & best practices**
- Keep `alt` attributes on images and labels on form controls.
- Ensure focus styles remain visible when adding interactive components.

**Contributing**
- This is a personal/learning project. For changes, open a branch, make focused commits and provide a short description of any UI/UX changes.

**Author**
- Built for the UDev internship Task 02.

**License**
- This repository is provided as-is for demonstration and learning purposes. No license file included.