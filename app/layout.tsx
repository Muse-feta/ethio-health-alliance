import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/css/fontawesome.css";
import "@/assets/css/templatemo-onix-digital.css";
import "@/assets/css/animated.css";
// import "@/assets/css/owl.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Fotter from "@/components/Fotter";
import TopNavbar from "@/components/TopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethio Health Aliance",
  description: "Ethio Health Aliance is a non profit organization", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TopNavbar /> */}
          <Nav />
        {children}
        <Fotter />
      </body>
    </html>
  );
}
