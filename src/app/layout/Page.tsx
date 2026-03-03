import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col overflow-x-clip bg-transparent text-gray-300">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#09101d_0%,#0d1324_22%,#111111_48%,#0c1220_74%,#111111_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(54,151,156,0.12),transparent_22%),radial-gradient(circle_at_88%_14%,rgba(10,73,165,0.10),transparent_20%),radial-gradient(circle_at_50%_58%,rgba(255,255,255,0.02),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.035]" />
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
