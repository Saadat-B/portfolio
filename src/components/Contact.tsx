import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Saadat-B",
    color: "hover:bg-black hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/saadat-badgujar-ba85b5211/",
    color: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/saadat_1997",
    color: "hover:bg-[#1DA1F2] hover:text-white",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:saadatbadgujar@google.com",
    color: "hover:bg-primary hover:text-primary-foreground",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch through any of these platforms
          </p>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="lg"
                    className={`transition-colors ${link.color}`}
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="mr-2 h-5 w-5" />
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="default" asChild>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
