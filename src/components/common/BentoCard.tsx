'use client';

import React from 'react';
import clsx from 'clsx';
import { motion, MotionProps } from 'framer-motion';

type BentoCardProps = {
    children: React.ReactNode;
    className?: string;
} & MotionProps;

const BentoCard: React.FC<BentoCardProps> = ({
    children,
    className = '',
    ...motionProps
}) => {
    return (
        <motion.div
            className={clsx(
                `col-span-1 rounded-2xl border-4 border-gray-200 bg-white p-2 sm:rounded-3xl sm:p-6`,
                className
            )}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
};

export default BentoCard;
