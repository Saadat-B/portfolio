
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, User, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Here's a bit about my background and what I do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-background hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm a passionate full stack developer with a knack for creating 
                intuitive user experiences and robust backend solutions. Based in 
                New York City, I enjoy transforming ideas into reality through code.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">What I Do</h3>
              <p className="text-muted-foreground">
                I specialize in building modern web applications using React, 
                TypeScript and Node.js. My focus is creating clean, maintainable 
                and scalable solutions that solve real-world problems effectively.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">My Experience</h3>
              <p className="text-muted-foreground">
                With 5+ years in the industry, I've worked on projects ranging from 
                e-commerce platforms to SaaS applications. I've collaborated with 
                startups and established companies to deliver high-quality software.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
