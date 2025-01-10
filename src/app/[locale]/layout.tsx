import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { notFound } from 'next/navigation';
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LangueSwitcher from '@/components/common/LangueSwitcher';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Phan Tran Thien An - Portfolio',
    description: 'My portfolio website',
    icons: {
        icon: '/favicon.ico',
    },
};

export default async function LocaleLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className="!scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 pt-24 text-gray-950 antialiased sm:pt-32`}
            >
                <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
                <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                <NextIntlClientProvider messages={messages}>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Toaster position="top-right" />
                        <Footer />
                    </ActiveSectionContextProvider>
                    <LangueSwitcher />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
