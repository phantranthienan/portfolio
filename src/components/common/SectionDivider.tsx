'use client';

import React from 'react';
import { delay, motion } from 'framer-motion';

const SectionDivider = () => {
    return (
        <motion.div
            className="my-24 hidden h-16 w-1 rounded-full bg-gray-300 sm:block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        ></motion.div>
    );
};

export default SectionDivider;
