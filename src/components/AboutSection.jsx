
import { cn } from "../lib/utils";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              I am an enthusiastic web developer
            </h2>
                
            <p className="text-muted-foreground">
              I have 1.5 years of web programming experience and I’m still
              learning every day. Soon I plan to build large-scale projects,
              InshaAllah!
            </p>

            <p className="text-muted-foreground">
              This section will soon have a proper description of my skills,
              journey, and projects. Stay tuned!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="#"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10",
                  "transition-colors duration-300"
                )}
              >
                Download my CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p>Creating good responsive application , websites.....</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p>Creating good responsive application , websites.....</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p>Creating good responsive application , websites.....</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
