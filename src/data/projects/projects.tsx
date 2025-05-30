export const projects = [
  {
    title: "Katalogue",
    imgSrc: "/project-imgs/katalogue-preview.png",
    code: "https://github.com/lmontero18/katalogue",
    projectLink: "https://katalogue.app",
    tech: ["Next.js", "TypeScript", "Tailwind", "NestJS", "Prisma"],
    description:
      "A modern platform to build & share curated product collections. Co-founded and led engineering.",
    modalContent: (
      <>
        <p>
          Katalogue is a platform I co-founded to empower creators and
          entrepreneurs in Costa Rica and LATAM to build beautifully structured,
          public-facing product collections. It&apos;s designed to be
          lightweight, fast, and visually engaging—perfect for showcasing
          favorite tools, curated items, or inspiration boards.
        </p>
        <p>
          I led the technical side: frontend architecture, backend API design,
          and database modeling. The stack includes Next.js, TailwindCSS,
          Prisma, and Framer Motion to deliver a polished and performant
          experience.
        </p>
        <p>
          Katalogue is currently available in Spanish only, as we&apos;re
          focused on supporting Spanish-speaking creators across Latin America.
        </p>
      </>
    ),
  },
  {
    title: "JobFit AI",
    imgSrc: "/project-imgs/job-fit-ai-preview.png",
    code: "https://github.com/lmontero18/JobFitAi",
    projectLink: "https://job-fit-ai-drab.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind", "OpenAI API", "PDF parser"],
    description:
      "An AI-powered platform that analyzes your resume against job descriptions. Built with OpenAI and PDF parsing.",
    modalContent: (
      <>
        <p>
          <strong>JobFit AI</strong> is a tool I built to help users evaluate
          how well their resume matches a specific job description. The app uses
          OpenAI to analyze compatibility, highlight strengths and weaknesses,
          and generate actionable recommendations.
        </p>
        <p>
          Users can upload a PDF of their resume and paste in a job description.
          The platform parses the content, runs the analysis, and presents
          results such as: compatibility score, key improvements, and technical
          focus areas.
        </p>
        <p>
          On the tech side, I used <strong>Next.js 15</strong>,{" "}
          <strong>TypeScript</strong>,<strong>TailwindCSS</strong>, the{" "}
          <strong>OpenAI API</strong>, and <strong>pdfjs-dist</strong> for PDF
          parsing. I also solved several production challenges such as handling
          `canvas` errors in serverless environments like Vercel.
        </p>
        <p>
          JobFit AI was designed to be lightweight, intuitive, and helpful for
          junior and mid-level devs preparing for job applications.
        </p>
      </>
    ),
  },
];
