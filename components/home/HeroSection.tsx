import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Crafting Digital
            <span className="text-primary block">Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            CLIX is your partner in digital transformation. We build exceptional web experiences 
            using cutting-edge technologies that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/get-started">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}