import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Joshi – Full Stack Developer",
  description:
    "Portfolio of Mohit Joshi, a modern MERN stack developer rooted in Indian tradition. Projects include travel platforms, API integrations, and Expo apps.",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico", // Make sure your favicon file is in /public folder
  },
  openGraph: {
    title: "Mohit Joshi – Full Stack Developer",
    description:
      "Explore Mohit Joshi’s portfolio – merging code, culture, and creativity.",
    url: "https://portfolio-three-umber-31.vercel.app/", // replace with your domain
    siteName: "Mohit Joshi Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
