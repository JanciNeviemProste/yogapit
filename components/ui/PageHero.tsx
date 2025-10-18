interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function PageHero({ title, subtitle, description, className = "" }: PageHeroProps) {
  return (
    <div className={`relative z-20 pt-32 pb-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          {title}
          {subtitle && (
            <span className="block mt-2 text-primary font-devanagari text-3xl sm:text-4xl lg:text-5xl">
              {subtitle}
            </span>
          )}
        </h1>
        {description && (
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mt-6">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
