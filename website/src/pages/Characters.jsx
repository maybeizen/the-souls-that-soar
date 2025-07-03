import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Icon, { IconOutline } from "../components/ui/Icon";

const CharacterCard = React.memo(({ character, characters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const findPartner = () => {
    if (character.partnerStatus) return null;

    const partnerRole = character.role === "Anchor" ? "Heart" : "Anchor";
    return characters.find(
      (c) =>
        c.role === partnerRole &&
        (c.partnerCode === character.code || character.partnerCode === c.code)
    );
  };

  const partner = findPartner();

  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const renderPartnerInfo = () => {
    if (partner) {
      return (
        <div className="flex items-center gap-2 text-zinc-400">
          <Icon
            icon={partner.role === "Anchor" ? "mars" : "venus"}
            className={
              partner.role === "Anchor" ? "text-blue-400" : "text-pink-400"
            }
          />
          <span className="text-sm">Partner: {partner.name}</span>
        </div>
      );
    }

    switch (character.partnerStatus) {
      case "inactive":
        return (
          <div className="flex items-center gap-2 text-zinc-400">
            <IconOutline icon="circle-pause" className="text-yellow-400" />
            <span className="text-sm">No Active Partnership</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`
        card-base 
        overflow-hidden 
        relative
        transition-all 
        duration-300 
        hover:shadow-lg 
        hover:-translate-y-1 
        hover:border-primary-400/30 
        ${
          character.status === "deceased"
            ? "border-red-500/30 bg-red-500/5 hover:bg-red-500/10"
            : ""
        }
        flex 
        flex-col
      `}
    >
      {character.status === "deceased" && (
        <div className="absolute top-4 right-4 z-30">
          <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Killed in Action
          </div>
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent z-10" />
        <img
          src={character.image}
          alt={character.name}
          className={`absolute inset-0 w-full h-full object-cover 
            ${character.status === "deceased" ? "grayscale opacity-60" : ""}`}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-zinc-950/80 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3
                className={`text-2xl font-bold ${
                  character.status === "deceased"
                    ? "text-red-300"
                    : "text-primary-300"
                }`}
              >
                {character.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Icon
                icon={character.role === "Anchor" ? "mars" : "venus"}
                className={
                  character.role === "Anchor"
                    ? "text-blue-400"
                    : "text-pink-400"
                }
              />
              <span className="text-sm">{character.role}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Icon icon="id-badge" className="text-zinc-400" />
            <span className="text-zinc-300 text-sm">
              Code: {character.code}
            </span>
          </div>

          {renderPartnerInfo()}
        </div>

        <p
          className={`text-zinc-300 leading-relaxed mb-4 ${
            character.status === "deceased" ? "italic" : ""
          }`}
        >
          {isExpanded
            ? character.description
            : truncateDescription(character.description)}
          {character.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary-300 hover:text-primary-400 ml-2 text-sm transition-colors"
            >
              {isExpanded ? "Show Less" : "More"}
            </button>
          )}
        </p>
      </div>

      {character.status === "deceased" && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500/50" />
      )}
    </div>
  );
});

export default function Characters() {
  const characters = useMemo(
    () => [
      {
        name: "Kairo Takeda",
        role: "Anchor",
        code: "7-8-6-6",
        partnerCode: "5-7-6-6", // Mira's code
        description:
          "A quiet and humble 16-year-old pilot burdened by the loss of his family in the first alien assault. Originally paired with Mira Kaname, Kairo struggles to move forward after her injury disrupts their synchronization.",
        image: "/characters/kairo.jpg",
      },
      {
        name: "Rika 'Riven' Asakura",
        role: "Heart",
        code: "8-6-7-9",
        partnerCode: "7-8-6-6", // Kairo's code
        description:
          "Fiercely independent yet deeply caring, Rika hides her vulnerabilities beneath a bold exterior. She feels cursed to lose her partners after witnessing the death of her previous Anchor, Alec Stravos, during a critical mission.",
        image: "/characters/rika.jpg",
      },
      {
        name: "Mira Kaname",
        role: "Heart",
        code: "5-7-6-6",
        partnerStatus: "inactive", // Indicates no current partner
        description:
          "Gentle and shy, Mira serves as emotional support for the squad after losing her role as a pilot. Her struggle with feelings of inadequacy adds emotional depth to the group dynamic. Has a crush on Kairo.",
        image: "/characters/mira.jpg",
      },
      {
        name: "Daichi Nakamura",
        role: "Anchor",
        code: "7-6-7-7",
        partnerCode: "6-7-8-6", // Shiori's code
        description:
          "Charismatic and cocky, Daichi provides comic relief and loyalty. He is partnered with the reserved Shiori.",
        image: "/characters/daichi.jpg",
      },
      {
        name: "Shiori Hatanaka",
        role: "Heart",
        code: "6-7-8-6",
        partnerCode: "7-6-7-7", // Daichi's code
        description:
          "Pragmatic and intelligent, Shiori balances Daichi's impulsiveness.",
        image: "/characters/shiori.jpg",
      },
      {
        name: "Taro 'Taz' Minami",
        role: "Anchor",
        code: "8-6-8-7",
        partnerCode: "7-6-7-8", // Aya's code
        description:
          "A thrill-seeker who thrives in battle but worries his squadmates. He is partnered with Aya.",
        image: "/characters/taro.jpg",
      },
      {
        name: "Aya Mizuno",
        role: "Heart",
        code: "7-6-7-8",
        partnerCode: "8-6-8-7", // Taz's code
        description:
          "Quiet and empathetic, Aya's calming presence balances Taz's recklessness.",
        image: "/characters/aya.jpg",
      },
      {
        name: "Renji 'Ren' Fujiwara",
        role: "Anchor",
        code: "9-7-9-7",
        partnerCode: "6-8-6-7", // Nami's code
        description:
          "The stoic leader of the squad who suppresses his emotions to maintain order. Partnered with Nami.",
        image: "/characters/renji.jpg",
      },
      {
        name: "Nami Koizumi",
        role: "Heart",
        code: "6-8-6-7",
        partnerCode: "9-7-9-7", // Renji's code
        description:
          "Mischievous and playful, Nami hides her fierce determination behind humor. Despite her current lack of an active partnership, she remains a vital member of the squad.",
        image: "/characters/nami.jpg",
      },
      {
        name: "Alec Stravos",
        role: "Anchor",
        code: "6-8-6-7",
        partnerStatus: "deceased", // Deceased partner
        description:
          "Rika's former partner who was tragically killed during a devastating encounter with the Xhar'kiir. Rika often feels guilty for his death and struggles to move foward. He was a big part of Rika's life and the first person she truly loved.",
        image: "/characters/alec.jpg",
        status: "deceased",
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="relative pt-20">
        <section className="min-h-[80vh] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-12">
              <span className="text-primary-300">The</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                {" "}
                Pilots
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters.map((character) => (
                <CharacterCard
                  key={character.code}
                  character={character}
                  characters={characters}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
