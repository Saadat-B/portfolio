
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
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    category: ["frontend", "backend", "fullstack"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A kanban-style task management application with drag and drop functionality and team collaboration features.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    category: ["frontend", "fullstack"],
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances with charts, budget planning tools, and expense categorization.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    category: ["frontend"],
  },
  {
    id: 4,
    title: "Booking System API",
    description: "A robust API for a booking system handling reservations, availability checking, and payment processing.",
    image: "/placeholder.svg",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com",
    category: ["backend"],
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "A social media platform with user authentication, post creation, commenting, and real-time notifications.",
    image: "/placeholder.svg",
    tags: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    category: ["frontend", "backend", "fullstack"],
  },
  {
    id: 6,
    title: "Weather Application",
    description: "A weather forecast application with location detection, interactive maps, and detailed weather information.",
    image: "/placeholder.svg",
    tags: ["React", "Leaflet", "API Integration"],
    github: "https://github.com",
    live: "https://example.com",
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

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

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
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all">
              <div className="h-48 bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
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
