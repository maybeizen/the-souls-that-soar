import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

export default function NextVolumeModal({ nextVolume, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-lg max-w-md w-full p-6 border border-primary-400/20">
        <div className="text-center space-y-4">
          <Icon icon="book-open" className="text-4xl text-primary-300" />
          <h3 className="text-2xl font-bold text-white">Continue Reading?</h3>
          <p className="text-zinc-300">
            You've reached the end of this volume. Would you like to continue to
            Volume {nextVolume}?
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              to={`/story/${nextVolume}/1`}
              className="flex-1 px-4 py-2 bg-primary-400/10 hover:bg-primary-400/20 text-primary-300 rounded-md text-center transition-colors border border-primary-400/20 hover:border-primary-400/40"
            >
              Continue to Volume {nextVolume}
            </Link>
            <button
              onClick={onClose}
              className="px-4 py-2 text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
