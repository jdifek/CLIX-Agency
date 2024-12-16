import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Trophy, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Projects Completed", value: "100+" },
  { label: "Team Members", value: "20+" },
  { label: "Years Experience", value: "10+" },
  { label: "Client Satisfaction", value: "98%" },
];

const values = [
  {
    icon: Users,
    title: "Client-Focused",
    description: "We put our clients first, ensuring their needs and goals drive every decision we make."
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "We respect deadlines and ensure projects are delivered on time without compromising quality."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About CLIX</h1>
          <p className="text-xl text-muted-foreground">
            Building the future of web development, one project at a time
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2014, CLIX has grown from a small team of passionate developers 
              into a full-service web development agency. We specialize in creating 
              modern, efficient, and scalable web solutions using cutting-edge technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              Our mission is to help businesses succeed in the digital age by providing 
              them with powerful, custom-built web solutions that drive growth and enhance 
              user experience.
            </p>
            <Button asChild>
              <Link href="/contact">
                Work With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="p-6">
              <value.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}