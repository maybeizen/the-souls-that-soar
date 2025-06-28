import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon from "../components/ui/Icon";
import { getStoryStructure } from "../utils/storyUtils";

export default function StoryIndex() {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVolume, setSelectedVolume] = useState(null);

  useEffect(() => {
    const fetchStoryStructure = async () => {
      const structure = await getStoryStructure();
      setVolumes(structure);
      setLoading(false);
      setSelectedVolume(structure[0]);
    };

    fetchStoryStructure();
  }, []);

  const handleVolumeSelect = (volume) => {
    setSelectedVolume(volume);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="relative pt-20">
        <section className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-12">
              <span className="text-primary-300 text-shadow-glow-lg">Read</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                {" "}
                The Souls That Soar
              </span>
            </h1>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-zinc-900/50 rounded-xl p-8 space-y-4"
                  >
                    <div className="h-8 bg-zinc-800 rounded w-3/4"></div>
                    <div className="h-4 bg-zinc-800 rounded w-full"></div>
                    <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-4">
                  {volumes.map((volume) => (
                    <button
                      key={volume.number}
                      onClick={() => handleVolumeSelect(volume)}
                      className={`
                        card-base w-full text-left p-6
                        ${
                          selectedVolume?.number === volume.number
                            ? "border-primary-400/30 bg-primary-400/10"
                            : ""
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-xl font-bold text-primary-300">
                            Volume {volume.number}
                          </h2>
                          <p className="text-zinc-400 text-sm">
                            {volume.title}
                          </p>
                        </div>
                        <Icon
                          icon="book-open"
                          className={`transition-colors ${
                            selectedVolume?.number === volume.number
                              ? "text-primary-300"
                              : "text-zinc-600"
                          }`}
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="md:col-span-2 card-base p-8">
                  {selectedVolume && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold text-primary-300">
                          Volume {selectedVolume.number}: {selectedVolume.title}
                        </h2>
                        <p className="text-zinc-400 mt-2">
                          {selectedVolume.chapters.length} Chapters
                        </p>
                      </div>

                      <div className="space-y-4">
                        {selectedVolume.chapters.map((chapter, index) => (
                          <Link
                            key={index}
                            to={`/story/${selectedVolume.number}/${index + 1}`}
                            className="block card-base p-4 
                              hover:border-primary-400/30 
                              group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-zinc-500 text-sm">
                                  Chapter {index + 1}
                                </span>
                                <h3
                                  className="text-lg font-bold text-primary-300 
                                  group-hover:text-primary-200 transition-colors"
                                >
                                  {chapter.title}
                                </h3>
                              </div>
                              <Icon
                                icon="arrow-right"
                                className="text-zinc-600 
                                  group-hover:text-primary-300 
                                  group-hover:translate-x-1 
                                  transition-all"
                              />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
