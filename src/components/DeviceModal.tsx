"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Check, ArrowRight } from "lucide-react";

interface DeviceModalProps {
  open: boolean;
  onClose: () => void;
}

const devices = [
  {
    id: "holo-pro",
    name: "Holo Pro",
    formFactor: "Pendant",
    tagline: "Discreet pendant worn around the neck - at home & on the go",
    badge: "Most Popular",
    image: "/holopro_phero.webp",
    features: [
      "Automatic fall detection",
      "Two-way voice",
      "Long battery life",
      "24/7 monitoring",
    ],
    href: "https://buy.stripe.com/cNi8wP57ebbF4d07AJdIA1d",
  },
  {
    id: "holo-mini",
    name: "Holo Mini",
    formFactor: "Wristband",
    tagline: "Lightweight wristband with GPS - worn like a watch",
    badge: null,
    image: "/holomini_phero.webp",
    features: [
      "GPS tracking",
      "Automatic fall detection",
      "Water resistant",
      "24/7 monitoring",
    ],
    href: "https://buy.stripe.com/dRmcN5eHOdjNaBo8ENdIA1e",
  },
];

function ModalContent({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      style={{ isolation: "isolate" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[6px] animate-[fadeIn_0.2s_ease]"
        onClick={onClose}
      />

      {/* Scroll wrapper */}
      <div className="absolute inset-0 overflow-y-auto overscroll-contain">
        <div className="flex min-h-full items-center justify-center p-5 max-sm:p-4">
          {/* Panel */}
          <div
            className="relative w-full max-w-[460px] bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] animate-[modalIn_0.3s_cubic-bezier(0.16,1,0.3,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-11 h-11 max-sm:w-11 max-sm:h-11 rounded-full flex items-center justify-center text-gray hover:text-black hover:bg-surface transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            {/* Header */}
            <div className="pt-7 pb-1 px-7 text-center">
              <h3 className="font-semibold text-black text-[20px] tracking-[-0.02em]">
                Choose Your Device
              </h3>
              <p className="text-[13px] text-gray mt-1 leading-relaxed">
                Which protection device is right for you?
              </p>
            </div>

            {/* Device cards */}
            <div className="px-5 pb-5 pt-4 flex flex-col gap-3">
              {devices.map((device) => (
                <a
                  key={device.id}
                  href={device.href}
                  className="device-card group relative flex items-center gap-4 p-4 rounded-xl border border-border/80 bg-white hover:border-blue/40 transition-all duration-200 max-[420px]:flex-col max-[420px]:items-start max-[420px]:gap-3"
                >
                  {/* Badge */}
                  {device.badge && (
                    <span className="absolute -top-2.5 left-4 inline-flex items-center bg-blue text-white text-[10px] font-bold tracking-[0.5px] uppercase px-2.5 py-[3px] rounded-full shadow-[0_2px_6px_rgba(66,148,216,0.3)]">
                      {device.badge}
                    </span>
                  )}

                  {/* Product image */}
                  <div className="shrink-0 w-[88px] h-[88px] rounded-xl bg-gradient-to-b from-surface/80 to-surface/40 border border-border/40 flex items-center justify-center overflow-hidden group-hover:border-blue/20 transition-colors max-[420px]:w-full max-[420px]:h-[100px]">
                    <Image
                      src={device.image}
                      alt={device.name}
                      width={80}
                      height={80}
                      className="object-contain w-[72px] h-[72px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-black text-[15px] leading-tight">
                        {device.name}
                      </h4>
                      <span className="text-[10px] font-semibold text-blue bg-blue/8 px-1.5 py-[2px] rounded tracking-wide uppercase">
                        {device.formFactor}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray mt-0.5 leading-snug">
                      {device.tagline}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-2">
                      {device.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 text-[11px] text-black-7"
                        >
                          <Check size={10} className="text-blue shrink-0" strokeWidth={1.5} />
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 mt-3 bg-blue text-white font-semibold text-[12px] px-4 py-[7px] rounded-lg shadow-[0_2px_8px_rgba(66,148,216,0.25)] group-hover:shadow-[0_4px_16px_rgba(66,148,216,0.35)] group-hover:bg-[#3888cc] transition-all duration-200">
                      Select {device.name}
                      <ArrowRight size={12} strokeWidth={1.5} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Phone fallback */}
            <div className="border-t border-border/50 px-7 py-3.5 text-center">
              <span className="text-[12px] text-gray">
                Need help choosing? Call{" "}
                <strong className="text-black font-semibold">
                  1-888-411-4656
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeviceModal({ open, onClose }: DeviceModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, handleEscape]);

  /* Lock body scroll */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(<ModalContent onClose={onClose} />, document.body);
}
