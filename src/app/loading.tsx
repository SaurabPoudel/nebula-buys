'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate='blinking'
      className='inline-block h-5 w-[1px] translate-y-1 bg-slate-900'
    />
  );
}

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div
      className={`fixed inset-0 h-full w-full bg-white ${
        isLoading ? 'bg-white' : 'hidden'
      } `}
    >
      {isLoading ? <CursorBlinker /> : 'Hello'}
    </div>
  );
}
