import React from "react";

export default function ChapterContent({ content }) {
  return (
    <div className="chapter-content">
      <style jsx>{`
        .chapter-content {
          font-size: 1.125rem;
          line-height: 1.8;
        }

        .chapter-content p {
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .chapter-content p:first-of-type::first-letter {
          initial-letter: 3;
          -webkit-initial-letter: 3;
          margin-right: 0.5rem;
          color: theme("colors.primary.300");
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .chapter-content {
            font-size: 1rem;
          }
        }
      `}</style>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="space-y-6 text-zinc-300 leading-relaxed"
      />
    </div>
  );
}
