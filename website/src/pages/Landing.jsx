import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon from "../components/ui/Icon";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="relative">
        <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                  <span className="text-primary-300 text-shadow-glow-lg">
                    The Souls
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                    That Soar
                  </span>
                </h1>
                <p className="text-2xl sm:text-3xl font-medium text-primary-300/80 font-japanese">
                  舞い上がる魂
                </p>
              </div>

              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
                In a world where humanity faces extinction, hope takes flight on
                Aetherion wings. The fate of Earth rests in the hands of those
                who dare to soar beyond the stars.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="group relative px-8 py-4 bg-primary-400/10 rounded-lg overflow-hidden transition-all hover:bg-primary-400/20 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/10 to-primary-400/0 group-hover:translate-x-full duration-1000 ease-in-out" />
                  <span className="relative flex items-center justify-center text-lg font-semibold text-primary-300">
                    Discover the Story
                    <Icon icon="arrow-right" className="ml-2" />
                  </span>
                </Link>
                <Link
                  to="/characters"
                  className="px-8 py-4 border border-primary-400/20 hover:border-primary-400/40 rounded-lg text-center text-lg font-semibold text-zinc-300 hover:text-primary-300 transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Icon icon="users" />
                  Meet the Pilots
                </Link>
              </div>
            </div>

            <div className="relative lg:h-[600px] space-y-6">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:hidden" />

              <div className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary-300 mb-3 flex items-center gap-2">
                  The Anchor
                  <Icon icon="mars" className="text-blue-400" />
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Masters of navigation and defense, these pilots form the
                  backbone of each Valkyrian Wing, channeling raw power into
                  precise control.
                </p>
              </div>

              <div className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30 backdrop-blur-sm lg:ml-12">
                <h3 className="text-xl font-bold text-primary-300 mb-3 flex items-center gap-2">
                  The Heart
                  <Icon icon="venus" className="text-pink-400" />
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Specialists in Aetherion manipulation, Hearts maintain the
                  delicate balance of energy and emotion that keeps their Wings
                  aloft.
                </p>
              </div>

              <div className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30 backdrop-blur-sm lg:ml-24">
                <h3 className="text-xl font-bold text-primary-300 mb-3 flex items-center gap-2">
                  The Wings
                  <Icon icon="jet-fighter" />
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  More than mere machines, Valkyrian Wings represent humanity's
                  hopes and dreams, soaring on the power of synchronized souls.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
