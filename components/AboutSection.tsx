"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightRays from "./LightRays";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(".about-title", {
                scrollTrigger: {
                    trigger: ".about-title",
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Summary Section Animation
            gsap.from(".about-summary > *", {
                scrollTrigger: {
                    trigger: ".about-summary",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });

            // Experience & Education Animation (Right Column)
            gsap.from(".about-right-col > *", {
                scrollTrigger: {
                    trigger: ".about-right-col",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                x: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="py-20 px-6 relative overflow-hidden" ref={sectionRef}>
            {/* LightRays Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="about-title text-4xl font-bold mb-8 text-white border-b border-white/10 pb-4 text-center">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="about-summary">
                        <h3 className="text-2xl font-semibold mb-4 text-white/90">Summary</h3>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Results-driven Frontend Engineer with 1 year of experience specializing in modern web development technologies like React, JavaScript, TypeScript, Bootstrap, Tailwind, SASS, Data Visualization, and Next.js.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed mt-4">
                            Passionate about building responsive, accessible, and high-performance web applications that deliver exceptional user experiences. Proven track record of collaborating with cross-functional teams to translate design mockups into scalable, maintainable code.
                        </p>
                    </div>
                    <div className="about-right-col">
                        <div className="experience-block">
                            <h3 className="text-2xl font-semibold mb-4 text-white/90">Experience</h3>
                            <div className="border-l-2 border-white/20 pl-6 py-2">
                                <h4 className="text-xl font-bold text-white">Pakipreneurs</h4>
                                <p className="text-white/60 mb-2">Frontend Web Developer | April 2025 - Present</p>
                                <p className="text-white/70">
                                    Designing and building responsive, user-friendly web applications. Collaborating with cross-functional teams to develop and optimize UI components using HTML, CSS, and JavaScript frameworks like React/Redux.
                                </p>
                            </div>
                        </div>
                        <div className="education-block mt-8">
                            <h3 className="text-2xl font-semibold mb-4 text-white/90">Education</h3>
                            <div className="border-l-2 border-white/20 pl-6 py-2">
                                <h4 className="text-xl font-bold text-white">Hamdard University</h4>
                                <p className="text-white/60">Bachelor of Science - BS, Computer Science</p>
                                <p className="text-white/50">November 2020 - May 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
