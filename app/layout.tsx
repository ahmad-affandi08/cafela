import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafela Coffee & Tea",
  description: "Tempat ngopi terbaik di Gemolong dengan suasana modern dan estetik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-outfit text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
