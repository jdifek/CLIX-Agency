import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const highlights = [
  "10+ years of industry experience",
  "100+ successful projects delivered",
  "24/7 dedicated support",
  "Agile development methodology",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About CLIX</h2>
            <p className="text-muted-foreground mb-6">
              CLIX is a leading web development agency specializing in creating 
              innovative digital solutions. We combine creativity with technical 
              expertise to deliver exceptional results for our clients.
            </p>
            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
            {/* Add an image here later */}
          </div>
        </div>
      </div>
    </section>
  );
}