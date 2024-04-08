import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';
import { AnalyticsProvider } from '../components/AnalyticsProvider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnalyticsProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnalyticsProvider>
    );
}
