import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" />
      <div className="relative border-t border-primary-400/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl">
                <span className="text-primary-300 font-japanese">
                  舞い上がる魂
                </span>
              </h3>
              <p className="text-sm text-zinc-400">
                A story of humanity's fight for survival through the bonds of
                its pilots.
              </p>
            </div>

            {/* Story Links */}
            <div>
              <h4 className="font-bold text-zinc-200 mb-4">Story</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-zinc-400 hover:text-primary-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/world"
                    className="text-zinc-400 hover:text-primary-300 transition-colors"
                  >
                    World
                  </Link>
                </li>
                <li>
                  <Link
                    to="/characters"
                    className="text-zinc-400 hover:text-primary-300 transition-colors"
                  >
                    Characters
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-200 mb-4">Wings</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/valkyrian-wings"
                    className="text-zinc-400 hover:text-primary-300 transition-colors"
                  >
                    Valkyrian Wings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pilots"
                    className="text-zinc-400 hover:text-primary-300 transition-colors"
                  >
                    Pilots
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nests"
                    className="text-zinc-400 hover:text-primary-300 transition-colors"
                  >
                    Nests
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-200 mb-4">Creator</h4>
              <a
                href="https://maybeizen.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary-300 transition-colors"
              >
                maybeizen
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-primary-400/10 text-center">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} The Souls That Soar. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
