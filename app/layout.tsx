import type { Metadata } from "next";
import { SourceInspector } from "./source-inspector";
import "./globals.css";

export const metadata: Metadata = {
  title: "DMS Desk Channel Manager",
  description: "Connect channel operations to your DMS Desk property-management workflow.",
  icons: {
    icon: "/assets/dms-desk-mark.png",
    apple: "/assets/dms-desk-mark.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <SourceInspector />}
      </body>
    </html>
  );
}
