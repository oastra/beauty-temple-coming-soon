import Image from "next/image";
import BeautyTempleLogo from "@/components/ui/BeautyTempleLogo";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-10 via-white to-primary-40 flex items-center justify-center px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-12 lg:py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16">
        {/* LEFT: portrait / placeholder + headings + copy + CTAs */}
        <div className="text-center xl:text-left">
          {/* Soft glow behind image */}
          <div className="relative mb-8 xl:mb-12">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="bg-gradient-to-br from-primary-20 to-primary-40 opacity-30 blur-3xl w-3/4 h-3/4 rounded-full" />
            </div>
            <div className="max-w-7xl w-full flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-16">
              <div className="relative mx-auto xl:mx-0 w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden ">
                <BeautyTempleLogo size={300} />
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-normal text-grey-100 mb-3 tracking-wider">
              Coming Soon
            </h1>
          </div>
          <h2 className="font-text text-xl md:text-2xl font-light text-primary-100 mb-6">
            Beauty Temple — Kogarah
          </h2>

          <div className="max-w-2xl mx-auto xl:mx-0 mb-8">
            <p className="font-text text-base md:text-lg text-grey-80 leading-relaxed ">
              Welcome to BEAUTY TEMPLE – your boutique sanctuary for exceptional
              hair in the heart of Kogarah, Sydney.
            </p>
            <p className="font-text text-base md:text-lg text-grey-80 leading-relaxed ">
              {" "}
              With over 20 years of experience in hairstyling and colour
              artistry, we blend timeless style with modern techniques to create
              a luxurious yet personal experience.{" "}
            </p>
            <p className="font-text text-base md:text-lg text-grey-80 leading-relaxed mb-4">
              At BEAUTY TEMPLE, your hair is a reflection of your individuality.
              Our caring, professional team ensures every visit feels relaxing,
              inspiring, and uniquely yours — from precision cuts to bespoke
              colour tailored perfectly to you.
            </p>
            <p className="font-text text-sm md:text-base text-grey-60 leading-relaxed">
              While the full site is being polished, you can already secure your
              spot.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Replace href with your real Square booking link */}
            <a
              href="https://app.squareup.com/appointments/book/bgisbcdif1hzwg/LGJD0FN4G9HP9/start"
              className="inline-block bg-primary-80 hover:bg-primary-60 text-white px-8 py-4 rounded-full font-text font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </a>

            <a
              href="https://www.instagram.com/beautytempleau"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-primary-60 text-primary-100 hover:bg-primary-20 px-8 py-4 rounded-full font-text font-medium transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>

          {/* Quick contact row */}
          <div className="mt-8 space-y-2 font-text text-grey-80 text-sm md:text-base">
            <p>📍 1/46 Montgomery Street, Kogarah NSW 2217</p>
            <p>
              ✉️{" "}
              <a
                href="mailto:beautytemple2024@gmail.com"
                className="underline hover:text-primary-100"
              >
                beautytemple2024@gmail.com
              </a>{" "}
              · ☎️{" "}
              <a
                href="tel:+61407777179"
                className="underline hover:text-primary-100"
              >
                0407 777 179
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT: You can keep this area minimal while “Coming Soon” */}
        <div className="w-full xl:w-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-grey-10 p-8">
            <h3 className="font-display text-2xl text-grey-100 mb-3 tracking-wide">
              Hair • Nails • Brows • Rent a Space
            </h3>
            <p className="font-text text-grey-60 leading-relaxed">
              We’re preparing a fresh, modern website with real transformations,
              service details, and easy online booking. If you’re a beauty
              professional looking for a bright, stylish station —{" "}
              <span className="text-primary-100 font-medium">
                space rentals
              </span>{" "}
              are available.
            </p>

            <div className="mt-6">
              <a
                href="https://squareup.com/appointments/book/REPLACE_WITH_YOUR_SQUARE_LINK"
                className="inline-block w-full text-center bg-primary-80 hover:bg-primary-60 text-white px-6 py-3 rounded-lg font-text font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Now
              </a>
            </div>

            <div className="mt-4 text-xs font-text text-grey-60">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/beautytempleau"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary-100"
              >
                @beautytempleau
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
