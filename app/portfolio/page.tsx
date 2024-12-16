import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    category: "E-Commerce"
  },
  {
    title: "Healthcare Dashboard",
    description: "Analytics dashboard for healthcare providers with patient management",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    technologies: ["React", "TypeScript", "MySQL", "Chart.js"],
    category: "Healthcare"
  },
  {
    title: "Learning Management System",
    description: "Online learning platform with video courses and progress tracking",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    category: "Education"
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Showcasing our best work and successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6">
                <Badge className="mb-2">{project.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}