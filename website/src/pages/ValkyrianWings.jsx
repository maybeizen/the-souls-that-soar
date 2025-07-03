import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon from "../components/ui/Icon";

export default function ValkyrianWings() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="relative pt-20">
        <section className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-primary-300 text-shadow-glow-lg">
                Valkyrian
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                {" "}
                Wings
              </span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="card-base p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30">
                <h2 className="text-3xl font-bold text-primary-300 mb-6">
                  Advanced Technology
                </h2>
                <div className="space-y-6">
                  <p className="text-zinc-300 leading-relaxed">
                    Valkyrian Wings represent the pinnacle of human engineering,
                    combining advanced aeronautics with Aetherion energy
                    manipulation. Each Wing requires two pilots working in
                    perfect synchronization: an Anchor to maintain stability and
                    a Heart to channel Aetherion energy.
                  </p>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <Icon
                      icon="microchip"
                      className="text-2xl text-primary-400"
                    />
                    <span>Neural Interface Systems</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <Icon icon="atom" className="text-2xl text-primary-400" />
                    <span>Aetherion Core Reactor</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <Icon icon="shield" className="text-2xl text-primary-400" />
                    <span>Energy Shield Matrix</span>
                  </div>
                </div>
              </div>

              <div className="card-base aspect-square bg-zinc-900/40 rounded-lg border-primary-400/20 transition-all duration-300 hover:border-primary-400/30"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-base p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30">
                <h3 className="text-xl font-bold text-primary-300 flex items-center gap-3 mb-4">
                  <Icon icon="brain" className="text-2xl" />
                  Neural Link
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Advanced interface allowing pilots to control their Wing
                  through direct neural connection, enabling split-second
                  reactions and precise control.
                </p>
              </div>

              <div className="card-base p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30">
                <h3 className="text-xl font-bold text-primary-300 flex items-center gap-3 mb-4">
                  <Icon icon="bolt" className="text-2xl" />
                  Energy Systems
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Powered by Aetherion, these systems provide unlimited flight
                  time and energy for weapons and shields when properly
                  maintained.
                </p>
              </div>

              <div className="card-base p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30">
                <h3 className="text-xl font-bold text-primary-300 flex items-center gap-3 mb-4">
                  <Icon icon="shield-halved" className="text-2xl" />
                  Defense Matrix
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Multi-layered energy shields capable of withstanding extreme
                  damage while adapting to different types of attacks.
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
