import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans" style={{ backgroundColor: "#E6DDD1", color: "#2D3142" }}>
      {/* Navigation */}
      <nav className="fixed w-full z-10 px-6 md:px-12 py-4 flex justify-between items-center" style={{ backgroundColor: "rgba(230, 221, 209, 0.95)" }}>
        <div className="font-bold text-xl tracking-tight">Jesse Works</div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Portfolio</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Blog</a>
          <a href="#" className="px-4 py-2 rounded" style={{ backgroundColor: "#EF6461", color: "white" }}>Contact</a>
        </div>
        <div className="md:hidden">
          <button className="p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Engineering <span style={{ color: "#2CB1BC" }}>meets</span> Product Leadership
              </h1>
              <p className="text-lg mb-8 opacity-80">Building pragmatic solutions with human-centered design and technical precision.</p>
              <div className="flex space-x-4">
                <a href="#" className="px-6 py-3 rounded font-medium" style={{ backgroundColor: "#2CB1BC", color: "white" }}>
                  See my work
                </a>
                <a href="#" className="px-6 py-3 rounded font-medium border" style={{ borderColor: "#2D3142" }}>
                  Read my thoughts
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Abstract representation of the dual expertise */}
              <div className="w-full aspect-square relative">
                {/* Base circle representing structure/engineering */}
                <div className="absolute inset-0 rounded-full border-8 border-dashed" style={{ borderColor: "#99968F" }}></div>
                
                {/* Geometric shapes representing engineering */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 transform rotate-45" style={{ backgroundColor: "#2CB1BC" }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full" style={{ backgroundColor: "#F7B32B" }}></div>
                
                {/* Lines representing connections/product thinking */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <path d="M20,50 Q50,20 80,50" stroke="#EF6461" strokeWidth="2" fill="none" />
                  <path d="M20,50 Q50,80 80,50" stroke="#8A4FFF" strokeWidth="2" fill="none" />
                </svg>
                
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-20">
                  {Array(100).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-gray-800"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Work Section */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>Featured Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 w-full" style={{ backgroundColor: "#2CB1BC" }}>
                <div className="h-full w-full opacity-20 grid grid-cols-8 grid-rows-6">
                  {Array(48).fill(0).map((_, i) => (
                    <div key={i} className="border border-white"></div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium py-1 px-2 rounded" style={{ backgroundColor: "#E6DDD1" }}>Consumer Product</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Connected Wellness Platform</h3>
                <p className="text-gray-600 mb-4">Reimagining how users track health data with an integrated approach.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "#2CB1BC" }}>2022 – 2023</span>
                  <button className="text-sm font-medium">Read Case Study →</button>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 w-full" style={{ backgroundColor: "#8A4FFF" }}>
                <div className="h-full w-full opacity-20 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium py-1 px-2 rounded" style={{ backgroundColor: "#E6DDD1" }}>Developer Tool</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Static Site Compiler</h3>
                <p className="text-gray-600 mb-4">A lightning-fast static site generator with best-in-class performance.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "#8A4FFF" }}>2021 – 2022</span>
                  <button className="text-sm font-medium">View Project →</button>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 w-full" style={{ backgroundColor: "#EF6461" }}>
                <div className="h-full w-full opacity-20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 transform rotate-45" style={{ backgroundColor: "white" }}></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium py-1 px-2 rounded" style={{ backgroundColor: "#E6DDD1" }}>B2B SaaS</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Enterprise Collaboration Suite</h3>
                <p className="text-gray-600 mb-4">Reinventing how teams communicate across distributed organizations.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "#EF6461" }}>2020 – 2021</span>
                  <button className="text-sm font-medium">Read Case Study →</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-block px-6 py-3 rounded font-medium border" style={{ borderColor: "#2D3142" }}>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <article className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium py-1 px-2 rounded mr-2" style={{ backgroundColor: "#E6DDD1", color: "#2CB1BC" }}>Engineering</span>
                <span className="text-sm text-gray-500">June 12, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-3">The Case for Static Site Generators in 2023</h3>
              <p className="text-gray-600 mb-4">Why the pendulum is swinging back to simpler, faster, and more resilient web architectures.</p>
              <a href="#" className="text-sm font-medium" style={{ color: "#2CB1BC" }}>Read Article →</a>
            </article>
            
            {/* Article 2 */}
            <article className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium py-1 px-2 rounded mr-2" style={{ backgroundColor: "#E6DDD1", color: "#EF6461" }}>Product Leadership</span>
                <span className="text-sm text-gray-500">May 28, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Building Teams That Ship: Lessons from Jazz Ensembles</h3>
              <p className="text-gray-600 mb-4">How improvisational structures from music can create both freedom and alignment in product teams.</p>
              <a href="#" className="text-sm font-medium" style={{ color: "#EF6461" }}>Read Article →</a>
            </article>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-block px-6 py-3 rounded font-medium border" style={{ borderColor: "#2D3142" }}>
              Browse All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#2D3142", color: "white" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>Let's Connect</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">I'm always interested in discussing new opportunities with organizations that value both technical excellence and human-centered product thinking.</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@jesseworks.com" className="px-6 py-3 rounded font-medium" style={{ backgroundColor: "#EF6461" }}>
              Send an Email
            </a>
            <a href="#" className="px-6 py-3 rounded font-medium border border-white">
              LinkedIn Profile
            </a>
            <a href="#" className="px-6 py-3 rounded font-medium border border-white">
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 text-center" style={{ backgroundColor: "#252836", color: "#99968F" }}>
        <div className="max-w-6xl mx-auto">
          <p>© 2023 Jesse Works. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
