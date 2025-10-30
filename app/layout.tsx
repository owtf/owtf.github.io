import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWTF — Offensive Web Testing Framework",
  description:
    "OWTF streamlines penetration testing with automation, reporting, and integrations designed for fast, modern web security assessments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-background text-white antialiased">
        <div className="pointer-events-none absolute inset-x-0 top-[-30rem] -z-20 flex justify-center">
          <div className="h-[50rem] w-[50rem] rounded-full bg-accent/40 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(19,78,230,0.12),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(115deg,_rgba(0,224,255,0.08)_0%,_rgba(12,15,35,0.6)_45%,_rgba(12,15,35,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-40 bg-[size:120px_120px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.035)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.035)_1px,_transparent_1px)]" />
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
