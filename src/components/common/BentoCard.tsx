"use client"

import React from 'react';
import clsx from 'clsx';
import { motion, MotionProps } from 'framer-motion';

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps;

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', ...motionProps }) => {
  return (
    <motion.div
      className={clsx(
        `p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-400 col-span-1`,
        className,
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;
