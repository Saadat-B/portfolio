import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  category: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Amazon | E-commerce App – NextJS, Stripe, Firebase & Tailwind CSS",
    description:
      "Developed a fully functional e-commerce application inspired by Amazon, leveraging Next.js for powerful server-side rendering and optimal performance. Features include secure authentication with NextAuth, a dynamic shopping cart with real-time updates, smooth checkout integration via Stripe payments, and comprehensive order tracking with Cloud Firestore. Styled beautifully and responsively using Tailwind CSS, and seamlessly deployed on Vercel.",
    image: "/amazon.png",
    tags: [
      "Next.js",
      "React",
      "NextAuth",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
      "Vercel",
    ],

    github: "https://github.com/Saadat-B/amazon-clone",
    live: "https://amazon.saadat.app/",
    category: ["frontend"],
  },
  {
    id: 2,
    title:
      "Breadit | Reddit-inspired Social Platform – Next.js, Redis & React Query",
    description:
      "Built a Reddit-inspired social platform featuring infinite scrolling, secure authentication with NextAuth & Google OAuth, personalized user feeds, and advanced caching with Upstash Redis. Leveraged React Query for performant data fetching and optimistic UI updates. Includes a powerful post editor supporting image uploads, link previews, and nested comment threads for rich user interactions. Deployed seamlessly on Vercel.",
    image: "/breadit.png",
    tags: [
      "Next.js",
      "React",
      "NextAuth",
      "Upstash Redis",
      "React Query",
      "Tailwind CSS",
      "Vercel",
    ],

    github: "https://github.com/Saadat-B/reddit",
    live: "https://breadit.saadat.app/",
    category: ["frontend"],
  },
  {
    id: 3,
    title: "Hacker Terminal | Interactive CLI – Cursor, Next.js & TypeScript",
    description:
      "Vibe-coded a fun and interactive hacker-themed terminal simulator using Cursor. Built with Next.js, TypeScript, and Tailwind CSS, the app mimics a hacking interface by automatically typing random code snippets and terminal commands, creating an engaging visual experience reminiscent of movie-style hacking scenes. Rapidly developed and deployed using modern web tools.",
    image: "/hacker.png",
    tags: [
      "Cursor",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    github: "https://github.com/Saadat-B/hacker-terminal",
    live: "https://hackerterminal.saadat.app/",
    category: ["frontend"],
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Full Stack", value: "fullstack" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground mb-8">
            Check out some of my recent work
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
