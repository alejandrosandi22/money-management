import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../commons/components/Loader';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${inter.style.fontFamily}, Roboto, system-ui,
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
      <div className={`relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Loader loading={loading} />
        <Component {...pageProps} />
      </div>
    </>
  );
}
