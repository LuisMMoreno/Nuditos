"use client";

import React from "react";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col flex-1">
      {children}
    </div>
  );
}
