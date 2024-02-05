import { Providers } from "./providers";
import { titleFont } from "../config/fonts";
import "./globals.css";

export const metadata = {
  title: "Shop",
  description: "Next|NextUI|NextAuth|Tailwind|Zustand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${titleFont.className} antialiased tracking-widest text-slate-100 uppercase bg-slate-100 dark:bg-slate-950`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
