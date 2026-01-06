'use client'
import React, { useRef, useEffect, useState } from "react";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);
  const isScrollingRef = useRef(false);

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    filterRef.current.classList.add("active");
  };
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        isScrollingRef.current = true;
        setActiveIndex(index);
        element.scrollIntoView({ behavior: 'smooth' });

        // Re-enable scroll spy after smooth scroll finishes
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    }

    const liEl = e.currentTarget.parentElement;
    if (activeIndex === index || !liEl) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(
        {
          currentTarget: e.currentTarget,
        } as React.MouseEvent<HTMLAnchorElement>,
        index
      );
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    // Intersection Observer for more reliable scroll spying
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = items.findIndex(item => item.href === `#${entry.target.id}`);
          if (index !== -1 && activeIndex !== index) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    items.forEach(item => {
      const element = document.getElementById(item.href.replace('#', ''));
      if (element) observer.observe(element);
    });

    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
    }

    const handleNavScroll = () => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[
        activeIndex
      ] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    };

    const navElement = navRef.current?.parentElement;
    if (navElement) {
      navElement.addEventListener('scroll', handleNavScroll);
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[
        activeIndex
      ] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      if (navElement) {
        navElement.removeEventListener('scroll', handleNavScroll);
      }
    };
  }, [activeIndex, items]);

  return (
    <>
      {/* This effect is quite difficult to recreate faithfully using Tailwind, so a style tag is a necessary workaround */}
      <style>
        {`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
          }
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
            transition: all 0.6s var(--linear-ease);
          }
          .effect.filter {
            filter: blur(7px) contrast(100) blur(0);
            mix-blend-mode: lighten;
          }
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: -75px;
            z-index: -2;
            background: transparent;
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--color-neon-green);
            box-shadow: 0 0 20px var(--color-neon-green);
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          li.active {
            color: white;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: var(--color-neon-green);
            box-shadow: 0 0 15px var(--color-neon-green);
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }
          li:hover::after {
            opacity: 1;
            transform: scale(1);
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div className="relative max-w-full overflow-hidden" ref={containerRef}>
        <nav
          className="flex relative max-w-full overflow-x-auto no-scrollbar"
          style={{ transform: "translate3d(0,0,0.01px)" }}
        >
          <ul
            ref={navRef}
            className="flex gap-2 sm:gap-4 list-none p-0 px-4 m-0 relative z-[3] whitespace-nowrap"
            style={{
              color: "white",
              textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)",
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white text-sm sm:text-base ${activeIndex === index ? "active" : ""
                  }`}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none py-[5px] px-[8px] sm:px-[10px] inline-block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
      </div>
    </>
  );
};

export default GooeyNav;
