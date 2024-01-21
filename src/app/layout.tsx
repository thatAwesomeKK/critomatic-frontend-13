import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Toast from "./(Providers)/Toast";

export const metadata: Metadata = {
  title: "CritoMatic",
  description: "A Rating and Review Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Toast>
          <Navbar />
          {children}
        </Toast>
      </body>
    </html>
  );
}
