import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans, Orbitron } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
});
const obitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-obitron",
});

export const metadata: Metadata = {
  title: "techboard",
  description: "Cadastre os teus temas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${worksans.variable}, ${obitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
