import React, { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 2500, label = "", colorClass = "", sizeClass = "", trigger, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);
  const frameRef = useRef();

  useEffect(() => {
    if (!trigger) return;

    const timer = setTimeout(() => {
      setShouldStart(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [trigger, delay]);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const increment = end / (duration / 16);

    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();

    return () => cancelAnimationFrame(frameRef.current);
  }, [shouldStart, end, duration]);

  return (
    <div className="flex flex-col items-start w-full">
      <span className={`font-cyber font-extrabold ${sizeClass} ${colorClass}`}>
        {count.toLocaleString()}+
      </span>
      <span className="mt-3 text-base sm:text-lg font-mono tracking-wide text-white/90 dark:text-white/80">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);

  const statsData = [
    {
      id: 0,
      end: 150,
      label: "Social Media Accounts Handled",
      colorClass: "text-electric-blue"
    },
    {
      id: 1,
      end: 80,
      label: "Professional Shoots For Brands",
      colorClass: "text-neon-pink"
    },
    {
      id: 2,
      end: 60,
      label: "Influencer Marketing Campaigns Launched For Brands",
      colorClass: "text-cyber-green"
    },
    {
      id: 3,
      end: null, // Custom for 95%
      label: "Retention Rate",
      colorClass: "text-cyber-purple"
    }
  ];

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              const delay = index * 200;
              setTimeout(() => {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }, delay);
            }
          },
          {
            threshold: 0.2,
            rootMargin: "0px 0px -30px 0px"
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
   <section
  ref={sectionRef}
  className="relative w-full min-h-[800px] flex flex-col gap-24 justify-center bg-black dark:bg-black px-2 py-12 md:py-24"
>

        
         {/* Subtle grid background */}
  <div className="absolute top-12 sm:top-8 left-0 right-0 bottom-0 opacity-20">
  {/* Grid background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.55)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:150px_150px]"></div>

  {/* Softer top & bottom fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70 dark:from-black/40 dark:via-transparent dark:to-black/70"></div>
</div>
      <div className="grid grid-rows-4 gap-24 max-w-5xl mx-auto w-full">
        
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`transform transition-all duration-700 ease-out ${
              visibleItems.includes(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {stat.id === 3 ? (
              <div className="flex flex-col items-start w-full">
                <span className="font-cyber font-extrabold text-cyber-purple text-7xl sm:text-8xl md:text-9xl">
                  95%
                </span>
                <span className="mt-3 text-base sm:text-lg font-mono tracking-wide text-white/90 dark:text-white/80">
                  {stat.label}
                </span>
              </div>
            ) : (
              <CountUp
                end={stat.end}
                label={stat.label}
                colorClass={stat.colorClass}
                sizeClass="text-7xl sm:text-8xl md:text-9xl"
                trigger={visibleItems.includes(index)}
                duration={1000}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
