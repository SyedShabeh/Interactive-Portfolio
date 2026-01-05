"use client";
import React from "react";
import CircularGallery from "./CircularGallery";

const projects = [
    {
        title: "Chatbot",
        description: "Interactive creation of high end chatbot using grok 4 api considering the best chatbot ever according to design and functionality both.",
        tags: [
            { name: "Next.js", color: "#A855F7" },
            { name: "TypeScript", color: "#3B82F6" },
            { name: "Supabase", color: "#22C55E" },
            { name: "npm", color: "#F97316" } // Orange
        ],
        link: "https://sigmabot.vercel.app",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Deal Desk",
        description: "Management of clients, properties, deals and commission in a simple and clean understandable pixel perfect view.",
        tags: [
            { name: "Next.js", color: "#A855F7" }, // Purple
            { name: "TypeScript", color: "#3B82F6" }, // Blue
            { name: "Supabase", color: "#22C55E" }, // Green
            { name: "pnpm", color: "#EAB308" } // Yellow
        ],
        link: "https://dealdesk.pk",
        image: "/dealth.png"
    },
    {
        title: "Interactive Portfolio",
        description: "A premium portfolio template with advanced GSAP animations and 3D effects using Three.js.",
        tags: [
            { name: "React", color: "#61DAFB" },
            { name: "GSAP", color: "#88CE02" },
            { name: "Three.js", color: "#FFFFFF" }
        ],
        link: "https://syedshabeh-dev.vercel.app",
        image: "/portth.png"
    },
    {
        title: "E-commerce platform",
        description: "A solution for buying and selling products smoothly with 2 panels (sellers and buyers) with an interactive add to card functionality.",
        tags: [
            { name: "Next.js", color: "#A855F7" },
            { name: "TypeScript", color: "#3B82F6" },
            { name: "Supabase", color: "#22C55E" },
            { name: "npm", color: "#F97316" }
        ],
        link: "https://shabeh-e-commerce.vercel.app/",
        image: "/ecomerceth.png"
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="h-screen w-full relative z-10 overflow-hidden bg-black">
            <div className="absolute top-12 left-0 right-0 z-20 pointer-events-none px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-white border-b border-white/10 pb-4 text-center">Featured Projects</h2>
                </div>
            </div>

            <div className="absolute inset-0 top-32">
                <CircularGallery
                    key={`gallery-${projects.length}-${projects[0].title}-${projects[0].link}`}
                    items={projects}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.02}
                />
            </div>
        </section>
    );
};

export default ProjectsSection;
