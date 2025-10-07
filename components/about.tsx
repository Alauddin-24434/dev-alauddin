"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <section id="about" className="py-20  relative overflow-hidden  border-t">
  
      <div className="container mx-auto px-4 relative z-10 ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" data-aos="fade-up">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-primary">Who I Am</h3>
            <p className="text-lg text-muted-foreground">
              Hello! I'm Md Alauddin, a Full-Stack Developer who enjoys building web applications and solving problems. I focus on writing clean, maintainable code and creating user-friendly interfaces.
            </p>
            <p className="text-lg text-muted-foreground">
              I enjoy exploring new technologies, debugging projects, and finding solutions that make applications run smoothly. Continuous learning and experimenting with new ideas motivate me to grow as a developer.
            </p>

          
          </div>

          {/* Right Column */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-primary">What I Enjoy</h3>
            <p className="text-lg text-muted-foreground">
              In my free time, I like trying out things I haven't explored before, such as learning new technologies or frameworks. Fixing bugs and seeing the result gives me satisfaction, and I thrive in natural, collaborative environments. I enjoy working in teams, brainstorming ideas, and finding creative solutions together. Small successes and making progress in challenging tasks always motivate me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
