import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withMDX = createMDX({
    // Optional: Add MDX-specific plugins here, such as remark or rehype plugins
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withNextIntl(withMDX(nextConfig));
