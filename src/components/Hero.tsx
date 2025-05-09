import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <p className="text-3xl text-secondary font-medium mb-4">
              Hello 👋🏻, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Saadat
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              I write code for browsers and servers — building things 🚀,
              breaking things, then putting the pieces back together 🧩.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex mt-8 space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Saadat-B"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/saadat-badgujar-ba85b5211/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:saadatbadgujar@google.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/saadat_1997" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-primary to-secondary rounded-full overflow-hidden flex items-center justify-center">
                {/* <span className="text-white text-7xl font-bold">JD</span>
                 */}
                <img src="/portfolio-img.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
