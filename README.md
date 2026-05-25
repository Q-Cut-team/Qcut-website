# Qcut Website

The official landing page and web application for **Qcut** — the modern solution for multicam set cutting.

## 🛠 Tech Stack

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server** (runs on `localhost:5173` by default):
   ```bash
   npm run dev
   ```

### Other Commands
- `npm run build` — Builds the app for production into the `dist/` directory.
- `npm run preview` — Locally previews the production build.

## 🏗 Project Architecture

The project is structured to enforce a strict design system and code reusability.

### Directory Structure
- **`src/components/`**: The core of the UI. Uses a **"Block-based" Architecture**. Instead of writing HTML tags and Tailwind classes directly on pages, the UI is constructed using pre-defined blocks (`ContentBlock`, `VideoBlock`, `H1Block`, `ButtonBlock`). This ensures consistency and makes pages easy to read.
- **`src/pages/`**: The main route views.
  - `HomePage.jsx`: The main landing page.
  - `HelpPage.jsx`: Support & documentation.
  - `DJVersionPage.jsx` / `CreatorVersionPage.jsx`: Specific license details.
  - `ImpressumPage.jsx` / `PrivacyNoticePage.jsx`: Legal pages.
- **`src/assets/`**: Static media files (`images/`, `videos/`).
- **`src/styles/`**: Global styles (`tailwind.css`).

### Routing
The application is wrapped in a unified layout containing a `SiteHeader` and `SiteFooter`. Page content is dynamically rendered between them using React Router in `App.jsx`.

## YouTubeEmbed
`YouTubeEmbed` renders a responsive YouTube iframe from a `youtu.be` URL and supports `showControls` and `autoPlay` toggles.

```jsx
<YouTubeEmbed url="https://youtu.be/VIDEO_ID" showControls={true} autoPlay={false} />
```
