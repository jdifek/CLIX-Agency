import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Laptop, Smartphone, Gauge } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React and Next.js"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with PostgreSQL and MySQL integration"
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web applications that scale with your business needs"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that work perfectly on all devices"
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed optimization and performance tuning for better user experience"
  },
  {
    icon: Laptop,
    title: "Custom Solutions",
    description: "Tailored development solutions for your specific requirements"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of web development services to help your business succeed in the digital world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}