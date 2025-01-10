// components/common/FlagIcon.tsx
import React from 'react';
import { Icon } from '@iconify/react';

type FlagIconProps = {
    lang: 'vietnamese' | 'english' | 'french';
    size?: number;
};

const iconMap: Record<string, string> = {
    vietnamese: 'flag:vn-4x3',
    english: 'flag:sh-4x3',
    french: 'flag:fr-4x3',
};

const FlagIcon: React.FC<FlagIconProps> = ({ lang, size = 40 }) => {
    return <Icon icon={iconMap[lang]} width={size} />;
};

export default FlagIcon;
