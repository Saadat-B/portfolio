
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          
          <div className="bg-background p-8 rounded-lg shadow-sm">
            <p className="text-lg mb-6">
              I'm a passionate full stack developer based in New York City, with a focus on creating 
              intuitive and performant web applications. I enjoy turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            
            <p className="text-lg mb-6">
              With 5+ years of industry experience, I've worked with startups and established companies 
              to build everything from small business websites to complex enterprise applications.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying the outdoors. I'm always open to new challenges and opportunities to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
