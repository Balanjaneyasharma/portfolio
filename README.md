# Next.js

A modern Next.js 15 application built with TypeScript and Tailwind CSS.

## 🚀 Features

- **Next.js 15** - Latest version with improved performance and features
- **React 19** - Latest React version with enhanced capabilities
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## 🛠️ Installation

1. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```

2. Start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
3. Open [http://localhost:4028](http://localhost:4028) with your browser to see the result.

## 📁 Project Structure

```
nextjs/
├── public/             # Static assets
├── src/
│   ├── app/            # App router components
│   │   ├── layout.tsx  # Root layout component
│   │   └── page.tsx    # Main page component
│   ├── components/     # Reusable UI components
│   ├── styles/         # Global styles and Tailwind configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
└── tailwind.config.js  # Tailwind CSS configuration

```

## 🧩 Page Editing

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 🎨 Styling

This project uses Tailwind CSS for styling with the following features:
- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
# Balu Sharma - Software Engineer Portfolio

Personal portfolio website for Balu Sharma, a software engineer focused on building reliable, accessible, and polished web applications with Angular, TypeScript, .NET, and C#.

The site presents my experience, technical skills, career journey, selected projects, resume, and contact details.

## Features

- Responsive portfolio experience for desktop and mobile
- Dark and light theme support
- Sections for about, journey, experience, skills, projects, and contact
- Resume download link
- Contact form powered by [Formspree](https://formspree.io)
- SEO routes for `robots.txt` and `sitemap.xml`
- Built with Next.js App Router and TypeScript

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React and Heroicons
- Formspree for contact form delivery

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:4028](http://localhost:4028) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on port 4028 |
| `npm run type-check` | Run the TypeScript compiler without emitting files |
| `npm run build` | Create an optimized production build |
| `npm run serve` | Serve the production build locally |
| `npm run lint` | Run the project lint check |
| `npm run format` | Format source files with Prettier |

## Project Structure

```text
src/
├── app/                 # App Router pages, metadata, and SEO routes
│   └── components/      # Portfolio sections
├── components/          # Shared UI components
├── context/             # Theme context
├── data/                # Portfolio content and project data
└── styles/              # Tailwind and global styles
public/                  # Static images, logo, and resume assets
```

## Contact Form

The contact form sends the visitor's name, email address, and message to the configured Formspree form. Formspree notification settings control which email inbox receives submissions.

## Deployment

This project can be deployed on Vercel or Netlify. For a Vercel deployment:

1. Import the GitHub repository.
2. Keep the framework preset as Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL.
4. Deploy and verify the contact form, resume link, and navigation.

The `.env` file is ignored by Git and should never be committed to the repository.