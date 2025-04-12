import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary">
              Saadat<span className="text-secondary">.</span>
            </a>
            <p className="text-muted-foreground mt-2">
              From{" "}
              <code className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-1.5 py-0.5 rounded text-sm font-mono">
                git init
              </code>{" "}
              🪄 to{" "}
              <code className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-1.5 py-0.5 rounded text-sm font-mono">
                deploy --prod
              </code>{" "}
              🚀.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="h-px bg-border my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Saadat Badgujar. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
