import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fira-code";
import "./globals.css";

const title = "Phebian Nwokeji | Agentic Software Developer and AI Product Engineer";
const description =
  "Phebian Nwokeji builds full-stack products with AI agents and checks their work. Agentic software developer and AI product engineer in Lagos, Nigeria.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Phebian Nwokeji" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1116" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks the page as script-enabled before first paint, so reveal/typing effects never hide content for no-JS visitors. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
