"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, Linkedin, Send, Facebook, Twitter, Instagram, Globe } from "lucide-react";


const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-neon-green border-b border-white/10 pb-4 text-center [text-shadow:0_0_15px_rgba(0,255,0,0.5)]">Contact Me</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-neon-green/90 mb-6 [text-shadow:0_0_10px_rgba(0,255,0,0.3)]">Get in Touch</h3>
                        <p className="text-white/60 text-lg leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="tel:03190028307"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Mobile</p>
                                    <p className="text-lg font-medium">03190028307</p>
                                </div>
                            </a>

                            <a
                                href="mailto:shabehhassan0@gmail.com"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Email</p>
                                    <p className="text-lg font-medium">shabehhassan0@gmail.com</p>
                                </div>
                            </a>

                            {/* Social Links Grid */}
                            <div className="pt-4">
                                <p className="text-sm text-white/40 mb-4">Social Connect</p>
                                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                                    {[
                                        { icon: Facebook, href: "#", label: "Facebook" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/syed-shabeh-ul-hassan-naqvi-46868726a", label: "LinkedIn" },
                                        { icon: Twitter, href: "#", label: "Twitter" },
                                        { icon: Instagram, href: "#", label: "Instagram" },
                                        { src: "/dev.png", href: "#", label: "Dev.to" },
                                        { src: "/tiktok.png", href: "#", label: "TikTok" },
                                        { src: "/fiverr.png", href: "https://www.fiverr.com/syedshabeh", label: "Fiverr" },
                                        { src: "/upwork.png", href: "https://www.upwork.com/freelancers/syedshabeh", label: "Upwork" },
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/5 rounded-lg text-white/70 hover:text-neon-green hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all flex items-center justify-center group"
                                            title={social.label}
                                        >
                                            {social.icon ? (
                                                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            ) : (
                                                <div className="w-5 h-5 relative group-hover:scale-110 transition-transform">
                                                    <Image
                                                        src={social.src!}
                                                        alt={social.label}
                                                        fill
                                                        className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                                                    />
                                                </div>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-colors resize-none"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-neon-green hover:bg-green-400 text-black font-bold py-3 px-6 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.4)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
