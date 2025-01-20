import { renderSimpleIcon } from 'react-icon-cloud';
import { SimpleIcon } from 'simple-icons';
import { Activity } from './types';

export const validateString = (
    value: unknown,
    maxLength: number
): value is string => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false;
    }

    return true;
};

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message);
    } else if (typeof error === 'string') {
        message = error;
    } else {
        message = 'Something went wrong';
    }

    return message;
};

export const filterContributions = (contributions: Activity[]) => {
    const currentDate = new Date();
    const nineMonthsAgo = new Date();
    nineMonthsAgo.setMonth(currentDate.getMonth() - 9);

    return contributions.filter((activity) => {
        const date = new Date(activity.date);
        return date >= nineMonthsAgo && date <= currentDate;
    });
};

export const getCurrentWeekday = () => {
    const currentDate = new Date();
    return currentDate.getDay(); // Returns the current day of the week (0 for Sunday, 1 for Monday, etc.)
};

// const githubTheme = {
//     light: ['#c9e4ca', '#87bba2', '#55828b', '#3b6064', '#364958'],
// };

export const renderCustomIcon = (icon: SimpleIcon, size: number) => {
    const bgHex = '#f3f2ef';
    const fallbackHex = '#6e6e73';
    const minContrastRatio = 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                e.preventDefault(),
        },
    });
};
