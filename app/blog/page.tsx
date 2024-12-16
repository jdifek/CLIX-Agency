import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const posts = [
  {
    title: "The Future of Web Development with Next.js",
    excerpt: "Explore how Next.js is revolutionizing web development with its powerful features and optimizations.",
    date: "2024-03-15",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    title: "Building Scalable Applications with TypeScript",
    excerpt: "Learn best practices for building large-scale applications using TypeScript and modern development tools.",
    date: "2024-03-10",
    category: "Development",
    readTime: "7 min read"
  },
  {
    title: "Optimizing Database Performance in Web Applications",
    excerpt: "Tips and techniques for improving database performance in modern web applications.",
    date: "2024-03-05",
    category: "Database",
    readTime: "6 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and updates from our team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}