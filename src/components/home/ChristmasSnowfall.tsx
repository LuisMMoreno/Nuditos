'use client';

import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

export default function ChristmasSnowfall() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      <Snowfall
        snowflakeCount={36}
        color="#ffffff"
        radius={[0.6, 2.2]}
        speed={[0.4, 1.3]}
        wind={[-0.3, 0.5]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

