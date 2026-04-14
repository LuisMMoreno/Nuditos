"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
        className="flex min-h-screen flex-col flex-1"
      >
        {children}
      </div>
    </>
  );
}
