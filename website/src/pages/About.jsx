import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon from "../components/ui/Icon";

export default function About() {
  const sections = [
    {
      title: "The Story",
      description:
        "The Souls That Soar is a sci-fi action-romance story set in a dystopian future where humanity faces extinction at the hands of an alien race known as the Xhar'kiir.",
      icon: "book-open",
    },
    {
      title: "The World",
      description:
        "In the aftermath of the Xhar'kiir's war declaration, Earth unites under the United Earth Coalition (UEC). The discovery of Aetherion, a powerful energy source beyond our solar system, becomes both humanity's greatest hope and the catalyst for conflict.",
      icon: "globe",
    },
    {
      title: "The Technology",
      description:
        "The UEC develops the Valkyrian Wings, advanced fighter jets powered by Aetherion and piloted by specially trained pairs. These remarkable machines represent humanity's best chance at survival against the alien threat.",
      icon: "jet-fighter",
    },
    {
      title: "The Pilots",
      description:
        "Young pilots are selected and trained in facilities known as Nests, where they form Wings - squadrons of four pairs. Each pair consists of an Anchor and a Heart, working in perfect synchronization to control their Valkyrian Wing.",
      icon: "users",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="relative pt-20">
        <section className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-12">
              <span className="text-primary-300 text-shadow-glow-lg">
                About
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                {" "}
                The Souls That Soar
              </span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="card-base p-8 transition-all duration-300 
                    hover:shadow-lg 
                    hover:-translate-y-1 
                    hover:border-primary-400/30"
                >
                  <div className="flex items-center mb-6">
                    <Icon
                      icon={section.icon}
                      className="text-primary-300 text-4xl mr-4"
                    />
                    <h2 className="text-3xl font-bold text-primary-300">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="/story"
                className="btn-primary inline-flex items-center gap-3 group"
              >
                Read the Story
                <Icon
                  icon="arrow-right"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
