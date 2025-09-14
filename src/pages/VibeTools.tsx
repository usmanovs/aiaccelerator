import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";

const tools = [
  {
    rank: 1,
    name: "Lovable.dev",
    description: "AI-driven \"vibe coding\" platform that turns natural-language prompts into full-stack apps with Supabase integration.",
    strength: "Fastest MVP prototyping with clean, maintainable code and native Supabase setup.",
    links: ["https://lovable.dev/blog/what-is-vibe-coding", "https://www.ft.com/content/01bc8e7e-6c45-4348-b89f-00e091149531"]
  },
  {
    rank: 2,
    name: "Replit (Agent)",
    description: "Web-based IDE with AI Agent (Replit Agent/Agent v2) that builds apps from natural-language descriptions.",
    strength: "Fully browser-native \"vibe coding\" with seamless deployment and hybrid workflows.",
    links: ["https://blog.replit.com/what-is-vibe-coding", "https://en.wikipedia.org/wiki/Replit"]
  },
  {
    rank: 3,
    name: "Softgen.ai",
    description: "No-code full-stack app generator using AI; integrates services like Firebase, Stripe, Resend.",
    strength: "Great for building commercial-grade apps without writing a line of code.",
    links: ["https://medium.com/data-science-in-your-pocket/best-vibe-coding-tools-5193b06de918"]
  },
  {
    rank: 4,
    name: "Bolt.new",
    description: "Browser-based AI tool for full-stack prototyping (e.g., Next.js) with one-click deployment.",
    strength: "Fast feedback loop and instant deployment in the browser.",
    links: ["https://medium.com/data-science-in-your-pocket/best-vibe-coding-tools-5193b06de918"]
  },
  {
    rank: 5,
    name: "v0 by Vercel",
    description: "AI tool turning text prompts into responsive React + Tailwind UI components; Figma-compatible.",
    strength: "Focused UI prototyping ideal for designers and frontend-first workflows.",
    links: ["https://medium.com/data-science-in-your-pocket/best-vibe-coding-tools-5193b06de918"]
  },
  {
    rank: 6,
    name: "Tempo (by Tempo Labs)",
    description: "Visual React interface builder with GitHub sync and Storybook integration.",
    strength: "Collaborative and visual React development with version control.",
    links: ["https://medium.com/data-science-in-your-pocket/best-vibe-coding-tools-5193b06de918"]
  },
  {
    rank: 7,
    name: "GitHub Copilot",
    description: "LLM-powered coding assistant that auto-completes code, writes tests, and creates docs.",
    strength: "Great for developers deep in large codebases automating routine tasks.",
    links: ["https://medium.com/data-science-in-your-pocket/best-vibe-coding-tools-5193b06de918"]
  },
  {
    rank: 8,
    name: "Cursor.ai (Anysphere)",
    description: "Advanced AI coding assistant akin to vibe coding, aimed at more experienced developers.",
    strength: "Powerful programming-focused tool with strong enterprise/investor backing.",
    links: ["https://www.ft.com/content/01bc8e7e-6c45-4348-b89f-00e091149531", "https://www.businessinsider.com/accel-to-lead-funding-round-for-lovable-2025-6"]
  },
  {
    rank: 9,
    name: "Claude Code",
    description: "Mentioned as a vibe coding platform with strengths like IDE integration.",
    strength: "Emphasizes IDE fluency and seamless development experience.",
    links: ["https://www.digitalocean.com/resources/articles/vibe-coding-tools"]
  },
  {
    rank: 10,
    name: "Emergent.sh, Creatr, Combini.dev",
    description: "Emerging \"vibe coding\" platforms mentioned by user; specifics vary across AI, tooling, or niche use.",
    strength: "Each may offer unique spin—such as specialized workflows, team tools, or agent capabilities—but are less documented.",
    links: []
  }
];

const VibeTools = () => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('vibe-tools-content');
    const opt = {
      margin: 1,
      filename: 'top-10-vibe-coding-tools.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-background">
      <div id="vibe-tools-content" className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Button onClick={handleDownloadPDF} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Top 10 Vibe Coding Tools</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover the most powerful AI-driven development tools that are revolutionizing how we build software. 
            From natural language prompts to full-stack applications in minutes.
          </p>
        </div>

        <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Ranking Overview</CardTitle>
            <CardDescription className="text-muted-foreground">
              Comprehensive comparison of vibe coding platforms based on capabilities, ease of use, and unique strengths.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption className="text-muted-foreground">
                  Ranking based on features, documentation quality, and community adoption.
                </TableCaption>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="w-16 text-foreground font-semibold">Rank</TableHead>
                    <TableHead className="min-w-48 text-foreground font-semibold">Tool Name</TableHead>
                    <TableHead className="min-w-80 text-foreground font-semibold">Description</TableHead>
                    <TableHead className="min-w-80 text-foreground font-semibold">Unique Strength</TableHead>
                    <TableHead className="w-24 text-foreground font-semibold">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tools.map((tool) => (
                    <TableRow key={tool.rank} className="border-border/50 hover:bg-accent/50">
                      <TableCell className="font-medium">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          #{tool.rank}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-foreground">
                        {tool.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground leading-relaxed">
                        {tool.description}
                      </TableCell>
                      <TableCell className="text-muted-foreground leading-relaxed">
                        {tool.strength}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          {tool.links.slice(0, 2).map((link, index) => (
                            <a
                              key={index}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-primary/80 text-xs transition-colors"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Link {index + 1}
                            </a>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Data compiled from various industry sources and community feedback. 
            Rankings may vary based on specific use cases and requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VibeTools;