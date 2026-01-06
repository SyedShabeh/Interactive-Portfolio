"use client";
import React from "react";
import { Mail, Phone, Linkedin, Send, Facebook, Twitter, Instagram, Globe } from "lucide-react";

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

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31 0 2.591.214 3.75.606V5.32c-1.027-.304-2.13-.466-3.273-.466-.545 0-1.079.039-1.596.115V.02h1.119zm-1.12 7.812V24c-3.14 0-5.685-2.545-5.685-5.685 0-3.14 2.545-5.685 5.685-5.685.19 0 .376.01.56.029v-4.85c-.185-.007-.37-.011-.56-.011-5.813 0-10.525 4.712-10.525 10.525S5.592 28.85 11.405 28.85c5.813 0 10.525-4.712 10.525-10.525V6.17c1.304.912 2.884 1.456 4.59 1.456V3.076c-2.014 0-3.822-.87-5.083-2.25l-.019-.022h-4.82v12.512c-.517-.076-1.051-.115-1.596-.115-1.143 0-2.246.162-3.273.466V7.832h1.12z" />
    </svg>
);

const DevToIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6.03v2.45h.55c.34 0 .59-.04.75-.13.21-.11.32-.32.33-.64.01-.32-.07-.54-.24-.71zm8.59 3.64c-.13 0-.26-.03-.4-.08s-.24-.12-.32-.21c-.11-.11-.16-.29-.16-.51 0-.21.05-.38.14-.51.1-.13.23-.22.39-.26.13-.04.26-.07.39-.07.13 0 .26.03.39.08.13.05.24.11.32.2.11.12.17.3.17.51 0 .23-.05.41-.15.53-.1.13-.24.23-.41.27-.1.02-.2.05-.3.05zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM7.24 8.06c-.5-.24-1.1-.35-1.8-.35H3.5v8.5h1.92c.81 0 1.46-.12 1.96-.37.51-.25.81-.59.9-1.01.09-.42.14-1.05.14-1.88V11.2c0-.83-.05-1.46-.14-1.89-.09-.42-.39-.76-.9-1.01-.06-.03-.09-.04-.14-.04zm4.66 2.69V8.07h-3.99v8.5h4.33v-1.7H10v-1.6h2.52v-1.7H10V10.75h1.9zm5.92-2.8c-1.03 0-1.81.29-2.34.87-.53.58-.79 1.44-.79 2.58v1.15c0 1.13.26 1.99.79 2.58.53.58 1.31.87 2.34.87.52 0 .99-.07 1.41-.23.42-.16.71-.37.87-.64.16-.27.24-.58.24-.93V8.07h-1.9v7.29c0 .07-.01.12-.04.15-.03.03-.06.05-.1.05-.04 0-.08-.02-.1-.05-.03-.03-.04-.08-.04-.15V11.2c0-1.13-.26-1.99-.79-2.58-.53-.58-1.31-.87-2.34-.87z" />
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

                            {/* Social Links Grid */}
                            <div className="pt-4">
                                <p className="text-sm text-white/40 mb-4">Social Connect</p>
                                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                                    {[
                                        { icon: Facebook, href: "#", label: "Facebook" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/syed-shabeh-ul-hassan-naqvi-46868726a", label: "LinkedIn" },
                                        { icon: Twitter, href: "#", label: "Twitter" },
                                        { icon: Instagram, href: "#", label: "Instagram" },
                                        { icon: DevToIcon, href: "#", label: "Dev.to" },
                                        { icon: TikTokIcon, href: "#", label: "TikTok" },
                                        { icon: FiverrIcon, href: "https://www.fiverr.com/syedshabeh", label: "Fiverr" },
                                        { icon: UpworkIcon, href: "https://www.upwork.com/freelancers/syedshabeh", label: "Upwork" },
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/5 rounded-lg text-white/70 hover:text-neon-green hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all flex items-center justify-center group"
                                            title={social.label}
                                        >
                                            <social.icon className="w-5 h-5 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_5px_rgba(0,255,0,0.5))] transition-all" />
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
