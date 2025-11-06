import Head from "next/head";
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beauty Temple | Hair • Nails • Brows — Coming Soon</title>
        <meta
          name="description"
          content="A welcoming salon in Kogarah offering expert hair colouring, nail care, and brows. Website coming soon — book your appointment today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Beauty Temple — Coming Soon" />
        <meta
          property="og:description"
          content="Hair • Nails • Brows in Kogarah. Book now via Square."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beauty Temple — Coming Soon" />
        <meta
          name="twitter:description"
          content="Hair • Nails • Brows in Kogarah. Book now via Square."
        />

        {/* SEO */}
        <meta
          name="keywords"
          content="hair salon Kogarah, balayage Sydney, blonde specialist, nail salon Kogarah, brow lamination Kogarah, rent beauty space"
        />
        <meta name="author" content="Beauty Temple" />
        <meta name="theme-color" content="#C58787" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>

      <Header />

      <main>
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}
