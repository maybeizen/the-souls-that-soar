import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" />
      <div className="relative border-b border-primary-400/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="text-xl font-bold text-white hover:text-primary-300 transition-colors"
            >
              <span className="text-primary-300">TST</span>
              <span className="ml-2 tracking-wide">The Souls That Soar</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/about"
                className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
              >
                <Icon icon="book" />
                About
              </Link>
              <Link
                to="/world"
                className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
              >
                <Icon icon="globe" />
                World
              </Link>
              <Link
                to="/characters"
                className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
              >
                <Icon icon="users" />
                Characters
              </Link>
              <Link
                to="/story"
                className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
              >
                <Icon icon="book-open" />
              </Link>
              <Link
                to="/valkyrian-wings"
                className="px-4 py-2 bg-primary-400/10 hover:bg-primary-400/20 text-primary-300 rounded-md text-center transition-colors border border-primary-400/20 hover:border-primary-400/40 flex items-center gap-2"
              >
                <Icon icon="jet-fighter" />
                Explore Wings
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-primary-300"
            >
              <Icon icon={isMenuOpen ? "xmark" : "bars"} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary-400/10 bg-zinc-950/80 backdrop-blur-md">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/about"
                  className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
                >
                  <Icon icon="book" />
                  About
                </Link>
                <Link
                  to="/world"
                  className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
                >
                  <Icon icon="globe" />
                  World
                </Link>
                <Link
                  to="/characters"
                  className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
                >
                  <Icon icon="users" />
                  Characters
                </Link>
                <Link
                  to="/valkyrian-wings"
                  className="px-4 py-2 bg-primary-400/10 hover:bg-primary-400/20 text-primary-300 rounded-md text-center transition-colors border border-primary-400/20 hover:border-primary-400/40 flex items-center gap-2"
                >
                  <Icon icon="jet-fighter" />
                  Explore Wings
                </Link>
                <Link
                  to="/story"
                  className="text-zinc-300 hover:text-primary-300 transition-colors flex items-center gap-2"
                >
                  <Icon icon="book-open" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
