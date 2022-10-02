import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import ThemeToggler from "@components/ThemeToggler";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fylo Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Header */}
      <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
        {/* Dynamic Logo */}
        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>

        {/* Menu */}
        <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
          <Link href="#features">
            <a className="hover:text-accentCyan">Features</a>
          </Link>

          <Link href="#testimonials">
            <a className="hover:text-accentCyan">Testimonials</a>
          </Link>

          <ThemeToggler />
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
      >
        {/* Hero Container */}

        <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
          <picture>
            <img
              src="/img/illustration-intro.png"
              alt="intro"
              className="mx-auto"
            />
          </picture>
          <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg ">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
