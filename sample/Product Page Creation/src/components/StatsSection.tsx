export function StatsSection() {
  const stats = [
    {
      value: "50+",
      label: "Projects Completed",
      description: "Across multiple industries"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Continuous support rating"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    },
    {
      value: "5Y",
      label: "Average Runtime",
      description: "Long-term partnerships"
    }
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-none px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block bg-cyan-400 text-black px-4 py-2 text-sm uppercase tracking-wider mb-6">
            Our Impact
          </div>
          <h2 className="text-4xl lg:text-6xl mb-8">
            実績を<span className="text-cyan-400">数字</span>で見る
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black p-8 lg:p-12 group hover:bg-gray-900 transition-colors duration-300">
              <div className="space-y-4">
                <div className="text-5xl lg:text-7xl text-cyan-400 leading-none group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </div>
                <div>
                  <div className="text-lg lg:text-xl uppercase tracking-wide mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.description}
                  </div>
                </div>
              </div>
              
              {/* Accent line */}
              <div className="mt-8 w-12 h-px bg-cyan-400 group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}