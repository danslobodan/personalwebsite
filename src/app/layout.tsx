import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

import { Viewport } from 'next';

import NavMenu from '@/components/nav/NavMenu';
import { PostHogProvider } from './providers';

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <PostHogProvider>
                <body className={inter.className}>
                    <div className="flex flex-col gap-y-4 mt-30 mx-2 xl:mx-60">
                        <NavMenu />
                        {children}
                    </div>
                </body>
            </PostHogProvider>
        </html>
    );
}
