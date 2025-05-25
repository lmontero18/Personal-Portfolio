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
    "Portfolio de Luis Montero, desarrollador Full Stack especializado en tecnologías modernas como Next.js, React y diseño web. Descubre mis proyectos, habilidades y cómo contactarme.",
  keywords: [
    "Luis Montero",
    "Portfolio",
    "Full Stack Developer",
    "Desarrollador Web",
    "Next.js",
    "React",
    "TailwindCSS",
    "JavaScript",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Luis Montero", url: "https://tusitio.com" }],
  creator: "Luis Montero",
  openGraph: {
    title: "Luis Montero | Full Stack Developer",
    description:
      "Explora el portfolio profesional de Luis Montero. Proyectos modernos, experiencia sólida y enfoque creativo.",
    url: "https://tusitio.com",
    siteName: "Luis Montero Portfolio",
    images: [
      {
        url: "https://tusitio.com/og-image.jpg", // reemplaza con tu imagen real
        width: 1200,
        height: 630,
        alt: "Preview del portfolio de Luis Montero",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Montero | Full Stack Developer",
    description:
      "Conocé el trabajo y los proyectos de Luis Montero, desarrollador web especializado en React y Next.js.",
    creator: "@tuusuario", // opcional
    images: ["https://tusitio.com/og-image.jpg"],
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
