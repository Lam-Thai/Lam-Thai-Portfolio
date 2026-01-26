import { Anek_Latin } from "next/font/google";
import "./globals.css";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio | Your Name",
  description:
    "Creative developer & designer crafting exceptional digital experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${anekLatin.variable} antialiased`}>{children}</body>
    </html>
  );
}
