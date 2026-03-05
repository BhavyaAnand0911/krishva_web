# Krishva Global Exim Pvt Ltd – Corporate Website

A minimal, professional single-page website for **Krishva Global Exim Pvt Ltd**, built with React, Vite, TailwindCSS, Framer Motion, and EmailJS.

## Tech stack

- **React** (latest) + **Vite**
- **TailwindCSS** – styling
- **Framer Motion** – subtle animations
- **EmailJS** – contact form emails

## Assets

Replace the placeholder images in `src/assets/` with your official logos:

- `logo.png` – navbar logo
- `footer_logo.png` – footer logo

**SEO / Social:** For favicon and social preview (Open Graph, Twitter), copy `logo.png` into the `public/` folder so it is served at `/logo.png`. The site’s meta tags and sitemap point to `https://krishvaglobalexim.com/logo.png`.

## Run locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Optional: Contact form (EmailJS)**

   - Sign up at [EmailJS](https://www.emailjs.com/).
   - Create an **Email Service** and an **Email Template**.
   - In the template, use variables: `{{from_name}}`, `{{from_company}}`, `{{from_country}}`, `{{from_email}}`, `{{product_requirement}}`, `{{message}}`.
   - Copy `.env.example` to `.env` and set:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Start dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173).

4. **Production build**

   ```bash
   npm run build
   ```

   Output is in `dist/`. Preview with:

   ```bash
   npm run preview
   ```

## Deploy on Vercel

1. Push the project to a Git repository (GitHub, GitLab, or Bitbucket).

2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New** → **Project**.

3. Import the repository. Vercel will detect Vite; use these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment variables (EmailJS):** In the project settings → **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

5. Deploy. After deployment, add your custom domain in **Settings → Domains**.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Exports.jsx
    WhyChooseUs.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

## License

Private – Krishva Global Exim Pvt Ltd.
