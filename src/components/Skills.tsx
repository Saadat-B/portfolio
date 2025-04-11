
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, PencilRuler } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Material UI", "Vue.js"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Firebase", "AWS"]
  },
  {
    title: "Tools & Other",
    icon: PencilRuler,
    skills: ["Git/GitHub", "Docker", "Jest", "CI/CD", "Webpack", "Figma", "Agile/Scrum", "Technical Writing"]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
