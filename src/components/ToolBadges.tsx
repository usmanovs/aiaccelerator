import { Badge } from "@/components/ui/badge";

const tools = [
  { name: "Lovable", icon: "💝" },
  { name: "Supabase", icon: "⚡" },
  { name: "Github", icon: "🐙" },
];

export const ToolBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {tools.map((tool) => (
        <Badge
          key={tool.name}
          variant="secondary"
          className="px-4 py-2 text-sm font-medium bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/70 transition-smooth"
        >
          <span className="mr-2 text-base">{tool.icon}</span>
          {tool.name}
        </Badge>
      ))}
    </div>
  );
};