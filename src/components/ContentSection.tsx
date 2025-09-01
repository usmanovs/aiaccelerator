interface ContentSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}
export const ContentSection = ({
  number,
  title,
  children,
  className = ""
}: ContentSectionProps) => {
  return <section className={`py-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center gap-6">
          <h2 className="text-6xl md:text-7xl font-bold text-orange-500">
            {number}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient">
            {title}
          </h3>
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>;
};