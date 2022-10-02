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

      {/* Features Section */}
      <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
        {/* Features Container */}
        <div className="container mx-auto px-6 pb-32">
          {/* First Row */}

          <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <picture>
                  <img src="/img/icon-access-anywhere.svg" alt="" />
                </picture>
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <picture>
                  <img src="/img/icon-security.svg" alt="" />
                </picture>
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>

          {/* Second Row */}

          <div className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <picture>
                  <img src="/img/icon-collaboration.svg" alt="" />
                </picture>
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <picture>
                  <img src="/img/icon-any-file.svg" alt="" />
                </picture>
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
