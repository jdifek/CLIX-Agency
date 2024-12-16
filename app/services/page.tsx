import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Laptop, Smartphone, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "We create stunning user interfaces using React and Next.js, focusing on performance, accessibility, and user experience. Our frontend solutions are responsive, interactive, and built with modern best practices.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO Optimization"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Our backend solutions are built with scalability and security in mind. We use robust database systems and efficient server architectures to power your applications.",
    features: ["Node.js", "PostgreSQL", "MySQL", "API Development", "Database Design"]
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web applications that combine powerful backend functionality with intuitive frontend interfaces. We build solutions that scale with your business.",
    features: ["Full-Stack Development", "Cloud Integration", "Authentication", "Real-time Features", "Performance Optimization"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every project we undertake is designed with mobile users in mind. Our responsive approach ensures your application works flawlessly across all devices.",
    features: ["Responsive Design", "Touch-friendly UI", "Progressive Web Apps", "Cross-browser Support", "Mobile Optimization"]
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "We optimize every aspect of your application to ensure fast loading times and smooth user experience. Our performance-first approach keeps your users engaged.",
    features: ["Load Time Optimization", "Code Splitting", "Caching Strategies", "Image Optimization", "Performance Monitoring"]
  },
  {
    icon: Laptop,
    title: "Custom Solutions",
    description: "Need something specific? We create custom solutions tailored to your unique business requirements, ensuring you get exactly what you need.",
    features: ["Custom Development", "Integration Services", "Legacy System Updates", "Technical Consulting", "Maintenance & Support"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild>
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-accent/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}