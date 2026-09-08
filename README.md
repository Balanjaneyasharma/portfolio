# Balu Sharma - Software Engineer Portfolio

Personal portfolio website for Balu Sharma, a software engineer focused on building reliable, accessible, and polished web applications with Angular, TypeScript, .NET, and C#.

The site presents my experience, technical skills, career journey, selected projects, resume, and contact details.

## Features

- Responsive portfolio experience for desktop and mobile
- Dark and light theme support
- About, journey, experience, skills, projects, and contact sections
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

```
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
