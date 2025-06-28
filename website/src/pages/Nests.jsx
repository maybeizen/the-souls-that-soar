import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon from "../components/ui/Icon";

export default function Nests() {
  const facilities = [
    {
      name: "Nest-01: Phoenix",
      location: "Nevada, United States",
      specialization: "Combat Training & Command",
      description:
        "The first and largest Nest, serving as the Western Command Center. Specializes in advanced combat maneuvers and houses the most experienced combat instructors.",
      icon: "fire",
      wingCount: "Wings 01-06",
    },
    {
      name: "Nest-02: Sakura",
      location: "Hokkaido, Japan",
      isMainLocation: true,
      specialization: "Neural Synchronization",
      description:
        "The Eastern Command Center, renowned for its advanced pilot-heart synchronization research and training programs.",
      icon: "snowflake",
      wingCount: "Wings 07-11",
    },
    {
      name: "Nest-03: Aurora",
      location: "Northern Finland",
      specialization: "Environmental Adaptation",
      description:
        "Arctic warfare specialist facility, focusing on extreme weather operations and atmospheric anomaly response. Houses the experimental cold-weather Valkyrian variants.",
      icon: "brain",

      wingCount: "Wings 12-16",
      featuredWing: "Wing 14 - Home to Kairo, Rika, and their squadmates",
    },
    {
      name: "Nest-04: Helios",
      location: "Australian Outback",
      specialization: "Decommissioned",
      description:
        "Former endurance training facility, destroyed during the Third Wave. Lost with all hands during a surprise Harbinger attack.",
      icon: "sun",
      isDecommissioned: true,
    },
    {
      name: "Nest-05: Atlas",
      location: "Mediterranean Sea",
      specialization: "Naval Operations",
      description:
        "Mobile sea-based Nest specializing in maritime combat and amphibious operations. Houses the experimental aquatic Valkyrian variants.",
      icon: "ship",
      wingCount: "Wings 17-21",
    },
    {
      name: "Nest-06: Condor",
      location: "Chilean Andes",
      specialization: "High-Altitude Combat",
      description:
        "Mountain warfare specialist facility, focusing on high-altitude operations and gravity manipulation training.",
      icon: "mountain",
      wingCount: "Wings 22-26",
    },
    {
      name: "Nest-07: Sphinx",
      location: "Egyptian Desert",
      specialization: "Decommissioned",
      description:
        "Former desert warfare facility, abandoned after massive Harbinger assault. Currently used as a decoy installation.",
      icon: "chart-pyramid",
      isDecommissioned: true,
    },
    {
      name: "Nest-08: Hyperion",
      location: "Siberian Tundra",
      specialization: "Decommissioned",
      description:
        "Lost during the Second Wave. Former specialized research facility for experimental Valkyrian technology.",
      icon: "atom",
      isDecommissioned: true,
    },
    {
      name: "Nest-09: Artemis",
      location: "Scottish Highlands",
      specialization: "Tactical Response",
      description:
        "European Command Center, specializing in rapid response and tactical deployment. Houses the most advanced early warning systems.",
      icon: "radar",
      wingCount: "Wings 27-32",
    },
    {
      name: "Nest-10: Vishnu",
      location: "Indian Ocean",
      specialization: "Strategic Defense",
      description:
        "Southern Command Center, coordinating defense operations across the Asian theater. Features advanced pilot recovery systems.",
      icon: "shield",
      wingCount: "Wings 33-42",
    },
  ];

  const stats = {
    activeNests: 7,
    decommissionedNests: 3,
    totalNests: 10,
    totalWings: 42,
    activeWings: 30,
    lostWings: 12,
    totalPilots: 312,
    activePilots: 240,
    lostPilots: 72,
    totalValkyrianUnits: 230,
    activeValkyrianUnits: 180,
    retiredUnits: 38,
    prototypeUnits: 12,
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="relative pt-20">
        <section className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-primary-300 text-shadow-glow-lg">The</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                {" "}
                Nests
              </span>
            </h1>

            <div className="mb-20 max-w-4xl">
              <p className="text-xl text-zinc-300 leading-relaxed">
                Nests are highly secure underground facilities where young
                pilots are housed for quick deployment into warzones. Each Nest
                houses multiple Wings, creating a close-knit community of pilots
                who live, train, and grow together.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              <div className="card-base p-6 text-center hover:bg-zinc-800/50 transition">
                <div className="text-4xl font-bold text-primary-300 mb-2">
                  {stats.activeNests}
                </div>
                <div className="text-sm text-zinc-400">Active Nests</div>
                <div className="text-xs text-zinc-500 mt-1">
                  {stats.decommissionedNests} Decommissioned
                </div>
              </div>
              <div className="card-base p-6 text-center hover:bg-zinc-800/50 transition">
                <div className="text-4xl font-bold text-primary-300 mb-2">
                  {stats.activeWings}
                </div>
                <div className="text-sm text-zinc-400">Active Wings</div>
                <div className="text-xs text-zinc-500 mt-1">
                  {stats.lostWings} Lost in Combat
                </div>
              </div>
              <div className="card-base p-6 text-center hover:bg-zinc-800/50 transition">
                <div className="text-4xl font-bold text-primary-300 mb-2">
                  {stats.activePilots}
                </div>
                <div className="text-sm text-zinc-400">Active Pilots</div>
                <div className="text-xs text-zinc-500 mt-1">
                  <span className="text-primary-400/70">
                    {stats.lostPilots}
                  </span>{" "}
                  KIA/MIA
                </div>
              </div>
              <div className="card-base p-6 text-center hover:bg-zinc-800/50 transition">
                <div className="text-4xl font-bold text-primary-300 mb-2">
                  {stats.activeValkyrianUnits}
                </div>
                <div className="text-sm text-zinc-400">Valkyrian Units</div>
                <div className="text-xs text-zinc-500 mt-1">
                  <span className="text-zinc-400">{stats.prototypeUnits}</span>{" "}
                  Prototypes ·{" "}
                  <span className="text-zinc-400">{stats.retiredUnits}</span>{" "}
                  Retired
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {facilities
                .filter((f) => !f.isDecommissioned)
                .map((facility) => (
                  <div
                    key={facility.name}
                    className={`card-base p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      facility.isMainLocation
                        ? "border-green-400/30 hover:border-green-400/50 bg-green-400/5"
                        : "hover:border-primary-400/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3
                            className={`text-2xl font-bold ${
                              facility.isMainLocation
                                ? "text-green-300"
                                : "text-primary-300"
                            }`}
                          >
                            {facility.name}
                          </h3>
                          {facility.isMainLocation && (
                            <span className="px-3 py-1 bg-green-400/20 rounded-full text-xs font-semibold text-green-300">
                              Main Story
                            </span>
                          )}
                        </div>
                        <p className="text-zinc-400 flex items-center gap-2">
                          <Icon icon="location-dot" />

                          {facility.location}
                        </p>
                      </div>
                      <Icon
                        icon={facility.icon}
                        className={`text-4xl ${
                          facility.isMainLocation
                            ? "text-green-300"
                            : "text-primary-400"
                        }`}
                      />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-200 mb-3">
                          Specialization
                        </h4>
                        <p className="text-zinc-400">
                          {facility.specialization}
                        </p>
                      </div>

                      <p className="text-zinc-300 leading-relaxed">
                        {facility.description}
                      </p>

                      {facility.wingCount && (
                        <div className="pt-6 border-t border-zinc-800">
                          <h4 className="text-lg font-semibold text-zinc-200 mb-4">
                            Assigned Wings
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {facility.wingCount
                              .split(",")
                              .map((wing, index) => (
                                <div
                                  key={index}
                                  className={`p-4 rounded-lg border backdrop-blur-sm transition-colors hover:bg-opacity-75 ${
                                    facility.isMainLocation
                                      ? "border-green-400/20 bg-green-400/10 hover:bg-green-400/20"
                                      : "border-primary-400/20 bg-primary-400/10 hover:bg-primary-400/20"
                                  }`}
                                >
                                  <p
                                    className={`font-medium mb-1 ${
                                      facility.isMainLocation
                                        ? "text-green-300"
                                        : "text-primary-300"
                                    }`}
                                  >
                                    {wing.trim()}
                                  </p>
                                  <p className="text-sm text-zinc-400">
                                    {index % 2 === 0
                                      ? "Combat Operations"
                                      : "Defense Operations"}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-bold text-zinc-400 mb-8">
                Decommissioned Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {facilities
                  .filter((f) => f.isDecommissioned)
                  .map((facility) => (
                    <div
                      key={facility.name}
                      className="card-base p-6 border-red-500/30 bg-red-500/5 hover:bg-red-500/10 transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <Icon
                          icon={facility.icon}
                          className="text-3xl text-red-400"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-red-300">
                            {facility.name}
                          </h3>
                          <p className="text-sm text-zinc-400">
                            {facility.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
