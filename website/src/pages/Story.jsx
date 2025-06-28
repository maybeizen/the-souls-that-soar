import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon from "../components/ui/Icon";
import { marked } from "marked";
import { getChapterContent, getStoryStructure } from "../utils/storyUtils";
import ChapterContent from "../components/Story/ChapterContent";

export default function Story() {
  const { volume, chapter } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [volumes, setVolumes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const structure = await getStoryStructure();
      setVolumes(structure);

      const content = await getChapterContent(volume, chapter);
      if (content) {
        setContent(marked(content));
      }
      setLoading(false);
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [volume, chapter]);

  const currentVolume = volumes.find((v) => v.number === parseInt(volume));
  const currentChapter = currentVolume?.chapters[parseInt(chapter) - 1];
  const nextChapter = currentVolume?.chapters[parseInt(chapter)];
  const nextVolume = volumes.find((v) => v.number === parseInt(volume) + 1);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="relative pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {loading ? (
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-zinc-800 rounded w-3/4"></div>
              <div className="h-4 bg-zinc-800 rounded w-full"></div>
              <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
              <div className="h-4 bg-zinc-800 rounded w-full"></div>
              <div className="h-4 bg-zinc-800 rounded w-4/5"></div>
            </div>
          ) : (
            <>
              {/* Back to Story Index */}
              <div className="mb-12">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary-300 transition-colors"
                >
                  <Icon icon="arrow-left" className="w-4 h-4" />
                  Back to Story Index
                </Link>
              </div>

              {/* Chapter Header */}
              <div className="mb-12">
                <div className="text-zinc-400 mb-2">
                  Volume {volume}: {currentVolume?.title}
                </div>
                <h1 className="text-4xl font-bold">
                  <span className="text-primary-300">Chapter {chapter}:</span>
                  <span className="text-white ml-2">
                    {currentChapter?.title}
                  </span>
                </h1>
              </div>

              {/* Chapter Content */}
              <article className="prose prose-invert prose-lg max-w-none mb-16">
                <ChapterContent content={content} />
              </article>

              {/* Navigation Footer */}
              <div className="border-t border-zinc-800 pt-8">
                {nextChapter ? (
                  <Link
                    to={`/story/${volume}/${parseInt(chapter) + 1}`}
                    className="group flex flex-col items-start hover:text-primary-300"
                  >
                    <span className="text-sm text-zinc-400 group-hover:text-primary-300 flex items-center gap-2">
                      Next Chapter
                      <Icon
                        icon="arrow-right"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                    <span className="text-xl font-bold mt-2">
                      {nextChapter.title}
                    </span>
                  </Link>
                ) : nextVolume ? (
                  <Link
                    to={`/story/${nextVolume.number}/1`}
                    className="group flex flex-col items-start hover:text-primary-300"
                  >
                    <span className="text-sm text-zinc-400 group-hover:text-primary-300 flex items-center gap-2">
                      Continue to Volume {nextVolume.number}
                      <Icon
                        icon="arrow-right"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                    <span className="text-xl font-bold mt-2">
                      {nextVolume.title}
                    </span>
                  </Link>
                ) : null}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
