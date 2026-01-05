"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ScrollingRobot = () => {
    const robotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!robotRef.current) return;

        // Floating animation
        gsap.to(robotRef.current, {
            y: "-=20",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Scroll-based positioning
        const sections = [
            { id: "#home", x: "-20%", y: "20%", rotation: 0, opacity: 0 },
            { id: "#about", x: "10%", y: "20%", rotation: 15, opacity: 1 },
            { id: "#skills", x: "85%", y: "30%", rotation: -15, opacity: 1 },
            { id: "#projects", x: "10%", y: "50%", rotation: 10, opacity: 1 },
            { id: "#contact", x: "85%", y: "70%", rotation: -10, opacity: 1 },
        ];

        sections.forEach((section) => {
            ScrollTrigger.create({
                trigger: section.id,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.to(robotRef.current, {
                        left: section.x,
                        top: section.y,
                        rotation: section.rotation,
                        opacity: section.opacity,
                        duration: 1.5,
                        ease: "power2.inOut",
                    });
                },
                onEnterBack: () => {
                    gsap.to(robotRef.current, {
                        left: section.x,
                        top: section.y,
                        rotation: section.rotation,
                        opacity: section.opacity,
                        duration: 1.5,
                        ease: "power2.inOut",
                    });
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            ref={robotRef}
            className="fixed z-[100] pointer-events-none w-32 h-32 md:w-48 md:h-48 transition-opacity duration-500"
            style={{
                left: "-20%",
                top: "20%",
                filter: "drop-shadow(0 0 20px rgba(0, 255, 0, 0.7))"
            }}
        >
            <Image
                src="/robot.png"
                alt="Robot Companion"
                width={200}
                height={200}
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default ScrollingRobot;
