import Head from 'next/head';
import { SEOLayoutProps } from '../../../../types';

export default function SEOLayout({
  pageTitle,
  pageDescription,
  children,
}: SEOLayoutProps) {
  const defaultTitle = process.env.NEXT_PUBLIC_APP_TITLE;
  const url = process.env.NEXT_PUBLIC_APP_URL;
  const defaultDescription = `With features for tracking expenses, increasing income, and budgeting, this app helps users stay on top of their money management.`;

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta name='description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <link rel='canonical' href={url} />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>
      {children}
    </>
  );
}
