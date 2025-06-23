'use client';

import React from 'react';
import { motion, useSpring, useScroll } from 'motion/react'; // make sure you're importing from 'framer-motion'

const Scroller = () => {
  const { scrollYProgress } = useScroll();
  

  return (
    <motion.div
    style={{ scaleX: scrollYProgress }}
      className="h-[4px] bg-gradient-to-r from-orange-500 to-orange-600 rounded-sm  fixed top-0 left-0 right-0 z-50 origin-left"
    />
  );
};

export default Scroller;