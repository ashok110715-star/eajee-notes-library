
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "EAJEE Notes Library",
  description:
    "Explore and access EAJEE study notes, chapter-wise resources and PDF downloads.",
  other: {
  "google-adsense-account": "ca-pub-8423038248045542",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  {children}
  <Analytics />
</body>
    </html>
  );
}
