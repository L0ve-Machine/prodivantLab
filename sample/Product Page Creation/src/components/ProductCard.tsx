import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  type: "自社開発" | "受託開発";
  category: string;
  year: string;
  technologies: string[];
  status?: "運用中" | "開発中" | "完了";
  isLarge?: boolean;
}

export function ProductCard({
  title,
  description,
  imageUrl,
  type,
  category,
  year,
  technologies,
  status = "運用中",
  isLarge = false
}: ProductCardProps) {
  return (
    <div className={`group relative bg-gray-900 overflow-hidden hover:bg-gray-800 transition-all duration-500 ${isLarge ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      {/* Image */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-64 lg:h-96' : 'h-64'}`}>
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Status badge */}
        <div className="absolute top-6 left-6">
          <div className="bg-cyan-400 text-black px-3 py-1 text-xs uppercase tracking-wider">
            {type}
          </div>
        </div>

        {/* Arrow icon */}
        <div className="absolute top-6 right-6">
          <div className="w-10 h-10 border border-white/30 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-300">
            <ExternalLink className="h-5 w-5 text-white group-hover:text-black" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 lg:p-8 ${isLarge ? 'lg:p-12' : ''}`}>
        <div className="space-y-4">
          {/* Meta info */}
          <div className="flex items-center space-x-4 text-sm text-gray-400 uppercase tracking-wider">
            <span>{year}</span>
            <span>•</span>
            <span>{category}</span>
            <span>•</span>
            <span className="text-cyan-400">{status}</span>
          </div>

          {/* Title */}
          <h3 className={`text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300 ${isLarge ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>
            {title}
          </h3>

          {/* Description */}
          <p className={`text-gray-300 leading-relaxed ${isLarge ? 'text-lg' : 'text-base'}`}>
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4">
            {technologies.slice(0, isLarge ? 6 : 4).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-xs uppercase tracking-wider border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <button className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors duration-300 uppercase tracking-wide text-sm">
              <span>View Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}