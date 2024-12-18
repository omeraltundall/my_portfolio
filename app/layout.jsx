import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
  description: "Omer Altundal's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="text-black w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
