import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ultimate Studios | Premium Minecraft Plugins",
  description: "Premium tools and plugins for modern Minecraft servers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
