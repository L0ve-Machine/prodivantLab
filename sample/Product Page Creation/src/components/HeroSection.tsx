import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Main content */}
      <div className="w-full">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-32 lg:py-0">
            <div className="max-w-xl">
              <div className="mb-8">
                <div className="inline-block bg-cyan-400 text-black px-4 py-2 text-sm uppercase tracking-wider mb-6">
                  IT Solutions
                </div>
                <h1 className="text-5xl lg:text-7xl leading-none mb-6">
                  革新的な<br />
                  <span className="text-cyan-400">テクノロジー</span><br />
                  ソリューション
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  自社開発プロダクトから受託開発まで、最先端技術でビジネスの未来を創造します。
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <button className="bg-cyan-400 text-black px-8 py-4 hover:bg-cyan-300 transition-colors duration-200 flex items-center space-x-2 uppercase tracking-wide">
                  <span>プロダクトを見る</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 uppercase tracking-wide">
                  <Play className="h-5 w-5" />
                  <span>デモを見る</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            {/* Geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400/20 transform rotate-45"></div>
              <div className="absolute bottom-40 right-40 w-24 h-24 bg-blue-500/30 transform rotate-12"></div>
              <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-500/40 transform -rotate-45"></div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-gray-700"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main visual element */}
            <div className="relative z-10 text-center">
              <div className="w-64 h-64 border-2 border-cyan-400 flex items-center justify-center mb-8">
                <div className="w-48 h-48 border border-gray-600 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <span className="text-black text-2xl">&lt;/&gt;</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center space-x-8 text-sm uppercase tracking-wider text-gray-400">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Python</span>
                </div>
                <div className="flex justify-center space-x-8 text-sm uppercase tracking-wider text-gray-400">
                  <span>AWS</span>
                  <span>Docker</span>
                  <span>K8s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </section>
  );
}