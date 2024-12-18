import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import Footer from '@/components/Footer';

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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 pt-24 text-gray-950 antialiased sm:pt-32`}
            >
                <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
                <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Toaster position="top-right" />
                    <Footer />
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
