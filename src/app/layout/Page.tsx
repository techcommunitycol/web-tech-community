import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-900 text-gray-300">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
