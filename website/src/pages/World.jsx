import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon from "../components/ui/Icon";

export default function World() {
  const [activeSection, setActiveSection] = useState("global-history");

  const worldSections = [
    {
      title: "Mid-Century Climate Crisis",
      description:
        "Unprecedented environmental degradation led to global challenges. Rising sea levels, extreme weather events, and resource scarcity caused widespread societal collapse. Coastal megacities were submerged, displacing billions.",
      icon: "earth",
      period: "Mid-21st Century",
      impact: {
        negative: [
          "Massive global biodiversity loss",
          "Rainforests dramatically reduced",
          "Oceanic ecosystems severely damaged",
          "Massive population displacement",
        ],
        positive: [
          "Increased global environmental awareness",
          "Accelerated sustainable technology development",
        ],
      },
    },
    {
      title: "Technological Renaissance",
      description:
        "Humanity responded to environmental collapse with unprecedented technological innovation. Breakthrough energy and computing technologies enabled massive global resource production. Massive restoration projects began reversing environmental catastrophe.",
      icon: "microchip",
      period: "Late 21st Century",
      impact: {
        negative: [
          "Continued displacement of indigenous populations",
          "Ethical concerns about technological interventionism",
          "Massive resource extraction",
        ],
        positive: [
          "Near-total renewable energy adoption",
          "Revolutionary medical nanotechnology",
          "Advanced neural interface technologies",
          "Global food production stabilization",
        ],
      },
    },
    {
      title: "Global Unification (2130-2150)",
      description:
        "Facing existential threats, nations gradually dissolved traditional boundaries. The United Earth Coalition (UEC) formed, centralizing global resources, research, and governance. This unprecedented cooperation allowed for coordinated global problem-solving and technological advancement.",
      icon: "users",
      impact: {
        negative: [
          "Significant loss of cultural diversity",
          "Centralized power led to reduced individual freedoms",
          "Forced relocation of populations",
        ],
        positive: [
          "Unified global response to environmental challenges",
          "Accelerated technological development",
          "Reduced international conflicts",
          "Coordinated climate restoration efforts",
        ],
      },
    },
    {
      title: "Aetherion Discovery (2155)",
      description:
        "Deep-space quantum probes detected Aetherion, an energy source that defied known physics. Its discovery promised near-infinite energy, capable of powering entire civilizations with microscopic quantities. This breakthrough marked humanity's most significant technological leap.",
      icon: "satellite",
      impact: {
        negative: [
          "Potential cosmic conflict with Xhar'kiir",
          "Ethical concerns about energy manipulation",
          "Rapid, potentially uncontrolled technological expansion",
        ],
        positive: [
          "Potential solution to global energy crisis",
          "Unprecedented technological capabilities",
          "Hope for human survival and expansion",
        ],
      },
    },
    {
      title: "First Contact and Conflict (2155-2160)",
      description:
        "The Xhar'kiir, observing humanity's rapid Aetherion exploitation, perceived this as a potential universal threat. Their first communication was not an attack, but a stern warning against 'reckless energy manipulation', setting the stage for the impending cosmic conflict.",
      icon: "alien",
      impact: {
        negative: [
          "Potential extinction-level threat",
          "Global panic and uncertainty",
          "Breakdown of previous technological optimism",
        ],
        positive: [
          "Unified global defense initiative",
          "Acceleration of Valkyrian Wing development",
          "Unprecedented human cooperation",
        ],
      },
    },
  ];

  const xharkirDetails = {
    origin: "Unknown star system beyond the Orion Nebula",
    governmentType: "Collective Consciousness",
    communicationMethod: "Quantum Entanglement",
    primaryConcern: "Cosmic Energy Equilibrium",
    motivations: [
      "Prevent potential universal energy destabilization",
      "Maintain strict cosmic resource management protocols",
      "Prevent technological civilizations from causing quantum disruptions",
    ],
    socialStructure: [
      "Hivemind-like collective intelligence",
      "No individual identity, pure collective purpose",
      "Decisions made through instantaneous quantum consensus",
    ],
  };

  const geographicalChanges = [
    {
      region: "North America",
      status: "Restructured",
      description:
        "Major coastal cities like New York and Los Angeles were abandoned due to rising sea levels. Population centers shifted to the Rocky Mountain regions and Great Plains, with advanced arcology complexes replacing traditional urban landscapes.",
      keyChanges: [
        "90% of coastal infrastructure abandoned",
        "Massive underground and mountain-integrated cities",
        "Radical agricultural redesign using vertical and hydroponic farming",
      ],
    },
    {
      region: "South America",
      status: "Ecological Transformation",
      description:
        "The Amazon rainforest, once on the brink of total collapse, underwent a radical ecological restoration. Advanced bioengineering and climate control technologies allowed for the regeneration of vast swathes of forest. Indigenous communities played a crucial role in ecosystem reconstruction, developing symbiotic technologies that harmonized human needs with environmental preservation.",
      keyChanges: [
        "Complete Amazon rainforest ecosystem restoration",
        "Development of bio-adaptive urban settlements",
        "Pioneering indigenous-led ecological technologies",
        "Transformation of agricultural practices to regenerative models",
        "Emergence of new ecological governance structures",
      ],
    },
    {
      region: "Africa",
      status: "Technological Renaissance",
      description:
        "The continent emerged as a global leader in climate adaptation and technological innovation. The Sahara Desert was transformed through massive solar energy and atmospheric manipulation projects. Mega-cities like New Lagos and Nairobi became global centers of sustainable technology, with advanced water harvesting, vertical farming, and renewable energy systems.",
      keyChanges: [
        "Complete transformation of Sahara Desert ecosystem",
        "World's largest distributed solar energy network",
        "Advanced water reclamation and management technologies",
        "Emergence of pan-African technological collaboration",
        "Global leadership in climate adaptation strategies",
      ],
    },
    {
      region: "Antarctica",
      status: "Global Scientific Preserve",
      description:
        "Transformed from a geopolitical contested zone to a unified global research hub. Massive underground research facilities were constructed, focusing on climate restoration, marine ecosystem recovery, and advanced geological research. International scientific teams developed breakthrough technologies for ecosystem reconstruction and planetary healing.",
      keyChanges: [
        "Conversion to international scientific research zone",
        "Advanced subterranean research complexes",
        "Global collaborative climate restoration initiatives",
        "Pioneering extreme environment survival technologies",
        "Development of planetary ecosystem modeling systems",
      ],
    },
    {
      region: "Asia",
      status: "Technological Hub",
      description:
        "Japan and parts of East Asia became global centers of technological innovation. Hokkaido transformed into a critical research and military training complex for Valkyrian Wing development.",
      keyChanges: [
        "Massive relocation of population to elevated regions",
        "Transformation of urban centers into technological complexes",
        "Significant investment in climate mitigation technologies",
      ],
    },
    {
      region: "Europe",
      status: "Decentralized",
      description:
        "Alpine and Scandinavian regions became primary human settlements. Advanced climate-controlled habitats and underground cities replaced traditional urban structures.",
      keyChanges: [
        "Complete restructuring of urban infrastructure",
        "Massive underground city networks",
        "Pioneering climate-resilient architectural designs",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="relative pt-20">
        <section className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-12">
              <span className="text-primary-300 text-shadow-glow-lg">The</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                {" "}
                World
              </span>
            </h1>

            <div className="flex mb-8 border-b border-primary-400/20">
              {[
                { id: "global-history", label: "Global History", icon: "book" },
                { id: "geographical", label: "Geographical", icon: "globe" },
                { id: "xharkirr", label: "Xhar'kiir", icon: "alien" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`
                    px-4 py-2 flex items-center gap-2 
                    transition-all duration-300
                    ${
                      activeSection === tab.id
                        ? "text-primary-300 border-b-2 border-primary-300"
                        : "text-zinc-400 hover:text-zinc-200 hover:-translate-y-0.5"
                    }
                  `}
                >
                  <Icon icon={tab.icon} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>

            {activeSection === "global-history" && (
              <section className="mb-20">
                <h2 className="text-3xl font-bold text-primary-300 mb-8">
                  Global History
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {worldSections.map((section, index) => (
                    <div
                      key={index}
                      className="card-base p-6 transition-all duration-300 
                        hover:shadow-lg 
                        hover:-translate-y-1 
                        hover:border-primary-400/30"
                    >
                      <div className="flex items-center mb-4">
                        <Icon
                          icon={section.icon}
                          className="text-3xl text-primary-300 mr-4"
                        />
                        <h3 className="text-xl font-bold">{section.title}</h3>
                      </div>
                      <p className="text-zinc-300 leading-relaxed mb-4">
                        {section.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-red-300 font-semibold mb-2">
                            Negative Impacts
                          </h4>
                          <ul className="text-zinc-400 text-sm space-y-1">
                            {section.impact.negative.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <Icon
                                  icon="circle-dot"
                                  className="mr-2 mt-1 text-red-400 text-xs"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-green-300 font-semibold mb-2">
                            Positive Impacts
                          </h4>
                          <ul className="text-zinc-400 text-sm space-y-1">
                            {section.impact.positive.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <Icon
                                  icon="circle-dot"
                                  className="mr-2 mt-1 text-green-400 text-xs"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeSection === "geographical" && (
              <section>
                <h2 className="text-3xl font-bold text-primary-300 mb-8">
                  Geographical Landscape
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {geographicalChanges.map((region, index) => (
                    <div
                      key={index}
                      className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-primary-300">
                          {region.region}
                        </h3>
                        <span
                          className={`
                            text-sm px-2 py-1 rounded 
                            ${
                              region.status === "Restructured"
                                ? "bg-green-500/20 text-green-300"
                                : region.status === "Technological Hub"
                                ? "bg-blue-500/20 text-blue-300"
                                : region.status === "Adaptive Zone"
                                ? "bg-yellow-500/20 text-yellow-300"
                                : "bg-zinc-500/20 text-zinc-300"
                            }
                          `}
                        >
                          {region.status}
                        </span>
                      </div>
                      <p className="text-zinc-300 leading-relaxed mb-4">
                        {region.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-primary-300 font-semibold mb-2">
                            Key Changes
                          </h4>
                          <ul className="text-zinc-400 text-sm space-y-1">
                            {region.keyChanges.map((change, changeIndex) => (
                              <li
                                key={changeIndex}
                                className="flex items-start"
                              >
                                <Icon
                                  icon="circle-dot"
                                  className="mr-2 mt-1 text-primary-300 text-xs"
                                />
                                {change}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeSection === "xharkirr" && (
              <section>
                <h2 className="text-3xl font-bold text-primary-300 mb-8">
                  The Xhar'kiir
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {Object.entries(xharkirDetails)
                    .filter(
                      ([key]) =>
                        key !== "motivations" && key !== "socialStructure"
                    )
                    .map(([key, value], index) => (
                      <div
                        key={index}
                        className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30"
                      >
                        <h3 className="text-xl font-bold text-primary-300 mb-4 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </h3>
                        <p className="text-zinc-300 leading-relaxed">{value}</p>
                      </div>
                    ))}

                  <div className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30">
                    <h3 className="text-xl font-bold text-primary-300 mb-4">
                      Motivations
                    </h3>
                    <ul className="space-y-2 text-zinc-300">
                      {xharkirDetails.motivations.map((motivation, index) => (
                        <li key={index} className="flex items-start">
                          <Icon
                            icon="circle-dot"
                            className="mr-2 mt-1 text-white"
                          />
                          {motivation}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30">
                    <h3 className="text-xl font-bold text-primary-300 mb-4">
                      Social Structure
                    </h3>
                    <ul className="space-y-2 text-zinc-300">
                      {xharkirDetails.socialStructure.map((aspect, index) => (
                        <li key={index} className="flex items-start">
                          <Icon
                            icon="circle-dot"
                            className="mr-2 mt-1 text-white"
                          />
                          {aspect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "environmental" && (
              <section>
                <h2 className="text-3xl font-bold text-primary-300 mb-8">
                  Environmental Collapse
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {environmentalImpact.map((impact, index) => (
                    <div
                      key={index}
                      className="card-base p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-400/30"
                    >
                      <div className="flex items-center mb-4">
                        <Icon
                          icon={impact.icon}
                          className="text-3xl text-primary-300 mr-4"
                        />
                        <h3 className="text-xl font-bold">{impact.title}</h3>
                      </div>
                      <p className="text-zinc-300 leading-relaxed">
                        {impact.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
