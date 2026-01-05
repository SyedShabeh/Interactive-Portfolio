"use client";
import React from "react";
import DomeGallery from "./DomeGallery";

const skillImages = [
    { src: 'https://skillicons.dev/icons?i=html', alt: 'HTML' },
    { src: 'https://skillicons.dev/icons?i=css', alt: 'CSS' },
    { src: 'https://skillicons.dev/icons?i=js', alt: 'JavaScript' },
    { src: 'https://skillicons.dev/icons?i=bootstrap', alt: 'Bootstrap' },
    { src: 'https://skillicons.dev/icons?i=tailwind', alt: 'Tailwind CSS' },
    { src: 'https://skillicons.dev/icons?i=ts', alt: 'TypeScript' },
    { src: 'https://skillicons.dev/icons?i=redux', alt: 'Redux' },
    { src: 'https://skillicons.dev/icons?i=react', alt: 'React' },
    { src: 'https://skillicons.dev/icons?i=nextjs', alt: 'Next.js' },
    { src: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js' },
    { src: 'https://skillicons.dev/icons?i=pnpm', alt: 'pnpm' },
    { src: 'https://skillicons.dev/icons?i=git', alt: 'Git' },
    { src: 'https://skillicons.dev/icons?i=github', alt: 'GitHub' },
    { src: 'https://skillicons.dev/icons?i=supabase', alt: 'Supabase' },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="h-screen w-full relative z-10 overflow-hidden bg-black">
            <div className="absolute top-12 left-0 right-0 z-20 pointer-events-none px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-white border-b border-white/10 pb-4 text-center">Skills</h2>
                </div>
            </div>

            <div className="absolute inset-0 top-32">
                <DomeGallery
                    images={skillImages}
                    grayscale={false}
                    overlayBlurColor="#000000"
                    openedImageWidth="500px"
                    openedImageHeight="500px"
                />
            </div>
        </section>
    );
};

export default SkillsSection;
