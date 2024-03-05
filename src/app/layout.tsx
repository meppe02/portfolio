import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "A Portfolio made by Martin Obasi to show some projects he has done and plans to make",
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
