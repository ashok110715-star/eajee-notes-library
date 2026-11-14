
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EAJEE Notes Library",
  description:
    "Explore and access EAJEE study notes, chapter-wise resources and PDF downloads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
