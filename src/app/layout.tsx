import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luis Montero | Full Stack Developer",
  description:
    "Luis Montero's portfolio – a Full Stack Developer specialized in modern technologies like Next.js, React, and responsive UI design. Explore my projects, skills, and how to get in touch.",
  keywords: [
    "Luis Montero",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TailwindCSS",
    "JavaScript",
    "Frontend",
    "Backend",
  ],
  authors: [
    {
      name: "Luis Montero",
      url: "https:personal-portfolio-seven-eta-60.vercel.app",
    },
  ],
  creator: "Luis Montero",
  openGraph: {
    title: "Luis Montero | Full Stack Developer",
    description:
      "Explore the professional portfolio of Luis Montero — modern projects, solid experience, and a creative mindset.",
    url: "https:personal-portfolio-seven-eta-60.vercel.app",
    siteName: "Luis Montero Portfolio",
    images: [
      {
        url: "https://personal-portfolio-seven-eta-60.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luis Montero Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Montero | Full Stack Developer",
    description:
      "Discover the work and projects of Luis Montero, a web developer specialized in React and Next.js.",
    creator: "@yourhandle",
    images: ["https:personal-portfolio-seven-eta-60.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
