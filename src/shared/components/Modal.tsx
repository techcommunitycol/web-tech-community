import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  children?: React.ReactNode;
};

export default function Modal({ isOpen, onClose, titleId, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    const focusable = contentRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first?.focus();
      }
    };

    first?.focus();
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center px-4 py-6 sm:py-10"
      aria-labelledby={titleId}
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="fixed inset-0 bg-slate-950/82 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(17,17,17,0.96))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.38)] sm:p-7">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
        <div className="pointer-events-none absolute -top-12 right-0 h-32 w-32 rounded-full bg-[rgba(54,151,156,0.12)] blur-3xl" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          {titleId ? (
            <h2 id={titleId} className="text-lg font-semibold text-gray-200" />
          ) : null}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 text-gray-300 transition hover:bg-[rgba(255,255,255,0.08)]"
          >
            ✕
          </button>
        </div>

        <div className="relative z-10 mt-4 text-sm text-gray-300">{children}</div>
      </div>
    </div>,
    document.body
  );
}
