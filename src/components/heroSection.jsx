import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="max-container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
            <span className="animate-fade-in opacity-0">hi, i am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rukhaam
            </span>
            <span className=" text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
              -Bin-Mushtaq
            </span>
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Dynamic front-end developer with a passion for creating engaging,
            responsive user interfaces and seamless digital experiences. Skilled
            in modern web technologies including HTML, CSS, JavaScript, and
            frameworks like React, with a keen eye for detail and a commitment
            to clean, maintainable code. Experienced in collaborating with
            designers and back-end developers to translate complex requirements
            into intuitive, accessible web applications. Driven by curiosity, I
            enjoy solving real-world problems through innovative solutions that
            blend performance and design. My portfolio features a diverse range
            of projects, reflecting my dedication to staying up-to-date with
            industry trends and delivering results that delight both users and
            clients.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Here are some of my works
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 trasnfrom -translate-x-1/2 flex flex-col items-center animate-bounce">
     <span className="text-sm text-muted-foreground mb-2">
        Scroll
     </span>
     <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};
