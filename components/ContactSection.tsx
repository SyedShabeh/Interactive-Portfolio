"use client";
import React from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

const FiverrIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.107 6.673c-1.243 0-1.809.75-1.809 1.502v1.435h1.719v1.933h-1.719V18h-2.103v-6.457h-1.164V9.61h1.164V8.175c0-2.122 1.361-3.426 3.505-3.426 1.243 0 1.886.225 1.886.225l-.599 2.026s-.578-.327-1.38-.327zM6.422 9.61h2.103V18H6.422V9.61zM7.474 4.5c.728 0 1.318.59 1.318 1.318 0 .728-.59 1.318-1.318 1.318-.728 0-1.318-.59-1.318-1.318 0-.728.59-1.318 1.318-1.318z" />
    </svg>
);

const UpworkIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.561 3.311c-2.203 0-3.986 1.782-3.986 3.986v4.305c-1.102-1.445-1.983-3.116-2.536-4.714H9.573v6.495c0 1.059-.858 1.917-1.917 1.917-1.058 0-1.917-.858-1.917-1.917V3.311H3.274v6.495c0 2.398 1.944 4.341 4.342 4.341 2.398 0 4.341-1.943 4.341-4.341V9.24c.551 1.444 1.41 2.97 2.535 4.305l-1.505 7.144h2.466l1.12-5.336c.634.44 1.356.662 2.126.662 2.203 0 3.986-1.783 3.986-3.986V7.297c0-2.204-1.783-3.986-3.986-3.986z" />
    </svg>
);

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

                            <a
                                href="https://www.linkedin.com/in/syed-shabeh-ul-hassan-naqvi-46868726a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">LinkedIn</p>
                                    <p className="text-lg font-medium">Syed Shabeh-ul-Hassan Naqvi</p>
                                </div>
                            </a>

                            <a
                                href="https://www.fiverr.com/syedshabeh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <FiverrIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Fiverr</p>
                                    <p className="text-lg font-medium">syedshabeh</p>
                                </div>
                            </a>

                            <a
                                href="https://www.upwork.com/freelancers/syedshabeh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <UpworkIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Upwork</p>
                                    <p className="text-lg font-medium">Syed Shabeh</p>
                                </div>
                            </a>
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
