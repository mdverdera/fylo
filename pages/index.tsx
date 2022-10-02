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
    </>
  );
};

export default Home;
