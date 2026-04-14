"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  const words = ["Diseña", "Crea", "Inspira"];

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Handle words cycling
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }
        clearInterval(wordInterval);
        return prev;
      });
    }, 900);

    return () => clearInterval(wordInterval);
  }, [words.length]);

  // Handle counter and progress bar over exactly 2.7s
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const duration = 2700;

    const updateProgress = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      let currentProgress = (elapsed / duration) * 100;
      if (currentProgress > 100) currentProgress = 100;

      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Reached 100. Wait 400ms, then call onComplete
        setTimeout(() => {
          onCompleteRef.current();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] bg-bg"
    >


      {/* Element 2: Rotating Words */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>




    </motion.div>
  );
}
