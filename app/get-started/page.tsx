"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Web Application",
  "E-Commerce",
  "Corporate Website",
  "Custom Development",
  "Other"
];

export default function GetStartedPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request submitted",
      description: "We'll contact you shortly to discuss your project.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get Started</h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your project and let's create something amazing together
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name</label>
              <Input placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input type="tel" placeholder="+1 (555) 123-4567" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project Budget</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k+">$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project Description</label>
              <Textarea 
                placeholder="Tell us about your project requirements..."
                className="min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full">Submit Request</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}