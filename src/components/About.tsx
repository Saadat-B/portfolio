import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>

          <div className="bg-background p-8 rounded-lg shadow-sm">
            <p className="text-lg mb-6">
              Hey, I’m Saadat — a full-stack developer from Mumbai who loves
              building things that work as great as they look. Whether it’s a
              scrappy MVP or a complex enterprise-grade tool, I enjoy taking
              ideas{" "}
              <span>
                from{" "}
                <code className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-1.5 py-0.5 rounded text-sm font-mono">
                  git init
                </code>{" "}
                🪄 to{" "}
                <code className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-1.5 py-0.5 rounded text-sm font-mono">
                  deploy --prod
                </code>{" "}
                🚀.
              </span>
            </p>

            <p className="text-lg mb-6">
              With 3+ years of experience working with both startups and
              established teams, I’ve crafted everything from lightning-fast
              dashboards to scalable backend systems. I mostly vibe with React,
              Next.js, Node.js, Express, Prisma, and PostgreSQL — the kind of
              stack that helps me build smooth, performant, and maintainable
              products. Lately, I’ve been diving deeper into Go, web3, CLI
              tools, and blockchain development to level up my backend game and
              contribute to more advanced, distributed systems.
            </p>

            <p className="text-lg">
              Outside of code, I’m often exploring open source, tinkering with
              new tech, or planning my next adventure outdoors. I’m always up
              for a good challenge and excited about working on real-world
              problems with real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
