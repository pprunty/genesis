"use client";

import Image from "next/image";
import Head from 'next/head';
import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/styles/ThemeSwitcher';
import CheckoutButton from '@/components/Stripe';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import ExternalLink from '@/components/ExternalLink'; // Adjust the import path if necessary
import Icon from '@/components/Icon'; // Adjust the path as needed

export default function Home() {
  const t = useTranslations('HomePage');

  return (
   <>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <title>{t(`siteTitle`)}</title>
          <meta name="description" content={t(`siteDescription`)} />
          <meta name="msapplication-TileColor" content="#fffefc" />
          <meta
            name="msapplication-TileImage"
            content="/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#fffefc" />
          <meta content={t(`siteDescription`)} name="description" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={t(`siteTitle`)} />
          <meta property="og:title" content={t(`siteTitle`)} />
          <meta property="og:description" content={t(`siteDescription`)} />
          <meta property="og:url" content={URL} />
          <meta property="og:image" content="https://i.imgur.com/F5R0K03.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://i.imgur.com/F5R0K03.png" />
          <meta name="twitter:site" content="@phillzou" />
          <meta name="twitter:title" content={t(`siteTitle`)} />
          <meta name="twitter:description" content={t(`siteDescription`)} />
        </Head>
        <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t(`siteTitle`)}
    </main>
            Check out this <ExternalLink href="https://example.com" className="text-blue-500">external link</ExternalLink> for more information!
            <LocaleSwitcher />
                <Icon name="palette" className="icon-class" style={{ width: '24px', height: '24px' }} />

          <ThemeSwitcher />
          <CheckoutButton />
          <Footer />
    </>
  );
}
