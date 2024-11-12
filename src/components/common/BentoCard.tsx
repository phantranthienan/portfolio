import React from 'react';
import clsx from 'clsx';

type BentoCardProps = {
  children: React.ReactNode;
  colSpan?: number;
  className?: string;
};

const BentoCard: React.FC<BentoCardProps> = ({ children, colSpan = 1, className = '' }) => {
  return (
    <div
      className={clsx(
        `p-4 rounded-3xl bg-white border-2 border-gray-400`,
        className,
        colSpan === 1 && 'col-span-1',
        colSpan === 2 && 'col-span-2',
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
