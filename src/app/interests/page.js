"use client";

import Image from "next/image";
import NavBar from "../components/Nav-Bar";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";
import { useState } from "react";

export default function Interests() {
  const [activeCard, setActiveCard] = useState(null);

  const interests = [
    {
      title: "Gaming",
      image: "/interests/gaming.jpg",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Photography",
      image: "/interests/photography.png",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Music",
      image: "/interests/music.jpg",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Traveling",
      image: "/interests/traveling.png",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Hiking",
      image: "/interests/hiking.jpg",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Gym",
      image: "/interests/gym.png",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <NavBar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Interests
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-4">
            Places and passions that inspire me
          </p>
          <p className="text-sm text-zinc-500 italic flex items-center justify-center gap-2">
            <span className="inline-block animate-bounce">👆</span>
            Drag the cards around to explore!
          </p>
        </div>

        {/* Stacked Draggable Photo Cards */}
        <div className="relative w-full flex items-center justify-center min-h-[600px] mb-20">
          {interests.map((interest, index) => {
            // Calculate stacking position
            const totalCards = interests.length;
            const middleIndex = (totalCards - 1) / 2;
            const offset = (index - middleIndex) * 20; // Horizontal offset
            const rotation = (index - middleIndex) * 8; // Rotation angle

            // Calculate base z-index
            const baseZIndex = totalCards - Math.abs(index - middleIndex);

            // If this card is being dragged, give it the highest z-index
            const zIndex = activeCard === index ? 999 : baseZIndex;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `translateX(${offset}px) rotate(${rotation}deg)`,
                  zIndex: zIndex,
                  pointerEvents: "auto",
                }}
              >
                <DraggableCardContainer>
                  <DraggableCardBody
                    className="group/card !p-0 overflow-hidden w-80 md:w-96 !bg-zinc-800 border border-zinc-700 cursor-grab active:cursor-grabbing"
                    onMouseDown={() => setActiveCard(index)}
                    onMouseUp={() => setActiveCard(null)}
                    onTouchStart={() => setActiveCard(index)}
                    onTouchEnd={() => setActiveCard(null)}
                  >
                    {/* Image with overlay */}
                    <div className="relative w-full h-96">
                      <Image
                        src={interest.image}
                        alt={interest.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/card:scale-110 pointer-events-none select-none"
                        draggable={false}
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent pointer-events-none"></div>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                          {interest.title}
                        </h3>

                        {/* Decorative accent line */}
                        <div
                          className={`mt-3 h-1 w-20 bg-gradient-to-r ${interest.gradient} rounded-full`}
                        ></div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-zinc-900/0 group-hover/card:bg-zinc-900/20 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                  </DraggableCardBody>
                </DraggableCardContainer>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center border-t border-zinc-800 pt-12">
          <p className="text-zinc-400 mb-6 text-lg">
            Want to know more about my journey?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/about"
              className="px-6 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg font-medium hover:border-orange-500/50 hover:scale-105 transition-all"
            >
              About Me
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-amber-600 hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
