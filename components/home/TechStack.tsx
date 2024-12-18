import { Card } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiWordpress,
  SiJavascript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPhp, name: "PHP " },
  { icon: SiWordpress, name: "Wordpress " },
  { icon: SiJavascript, name: "Javascript " },
  { icon: SiCss3, name: "Css3 " },
  { icon: SiHtml5, name: "Html5 " },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Tech Stack</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We use the latest and most powerful technologies to build scalable,
          performant, and maintainable applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <tech.icon className="h-12 w-12 mb-4 text-primary" />
              <span className="font-medium">{tech.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
