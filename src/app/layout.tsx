import type { Metadata } from "next";
import { Alexandria } from 'next/font/google';
import "../styles/globals.css";
import "../styles/projects.css"
import '../styles/bubbles.css'
import '../styles/colors.css'
import '../styles/about.css'

export const metadata: Metadata = {
  title: "Angel's Portfolio",
  description: "Showcase of Angel's background.",
};

const alexandria = Alexandria({ 
  subsets: ['latin', 'arabic'], 
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={alexandria.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
