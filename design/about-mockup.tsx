import React from 'react';

const AboutPage = () => {
  return (
    <div className="font-sans" style={{ backgroundColor: "#E6DDD1", color: "#2D3142" }}>
      {/* Navigation - Same as HomePage */}
      <nav className="fixed w-full z-10 px-6 md:px-12 py-4 flex justify-between items-center" style={{ backgroundColor: "rgba(230, 221, 209, 0.95)" }}>
        <div className="font-bold text-xl tracking-tight">Jesse Works</div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="font-medium" style={{ color: "#2CB1BC" }}>About</a>
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

      {/* Page Header */}
      <header className="pt-32 pb-12 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
            About Me
          </h1>
          <p className="text-lg opacity-80">
            Product leader with engineering roots, specializing in human-centered design and technical innovation.
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Photo/Visual Section */}
            <div className="md:col-span-1">
              <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                {/* This would be a photo in a real implementation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500">
                  {/* Geometric overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                    {Array(36).fill(0).map((_, i) => (
                      <div key={i} className="border border-white"></div>
                    ))}
                  </div>
                  
                  {/* Abstract person silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-white opacity-30"></div>
                    <div className="absolute top-1/4 w-1/3 h-1/3 rounded-full bg-white opacity-20"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col space-y-3">
                <a href="#" className="block py-3 px-4 bg-white rounded-lg text-center shadow-sm font-medium">
                  Download Resume
                </a>
                <div className="flex justify-between">
                  <a href="#" className="py-2 px-3 bg-white rounded-lg text-center shadow-sm" style={{ width: "48%" }}>
                    <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="py-2 px-3 bg-white rounded-lg text-center shadow-sm" style={{ width: "48%" }}>
                    <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bio/Text Content */}
            <div className="md:col-span-2">
              <div className="prose prose-lg">
                <h2 style={{ color: "#2CB1BC", fontFamily: 'Playfair Display' }}>Professional Philosophy</h2>
                <p>
                  I believe that the most impactful products emerge at the intersection of technical excellence and deep human understanding. My approach combines rigorous engineering discipline with empathetic design thinking.
                </p>
                <p>
                  Throughout my career, I've found that equitable, collaborative teams consistently deliver better outcomes. I strive to create environments where diverse perspectives are valued and where team members have both autonomy and shared purpose.
                </p>
                
                <h2 style={{ color: "#2CB1BC", fontFamily: 'Playfair Display' }}>Career Journey</h2>
                <p>
                  My path began in software engineering, building complex systems that required both technical precision and creative problem-solving. This foundation gave me a deep appreciation for how thoughtful implementation details can make or break user experiences.
                </p>
                <p>
                  As I moved into product leadership roles, I maintained my technical roots while developing a broader strategic perspective. I've led teams across consumer apps, enterprise platforms, and developer tools, always seeking to balance innovation with pragmatic execution.
                </p>
                
                <h2 style={{ color: "#2CB1BC", fontFamily: 'Playfair Display' }}>Personal Interests</h2>
                <p>
                  My professional approach is informed by seemingly unrelated passions. I find inspiration in the structures of math rock and progressive jazz, where complex patterns create emergent experiences. Similarly, I'm drawn to "difficult" art forms that reward deeper engagement.
                </p>
                <p>
                  These interests reflect my belief that the most meaningful work often contains layers of complexity beneath an accessible surface – just like the best digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "white" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display' }}>Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Leadership */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: "#EF6461" }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Product Leadership</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>Product Strategy & Roadmapping</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>User Research & Journey Mapping</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>Cross-functional Team Leadership</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>Go-to-market Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>Stakeholder Management</span>
                </li>
              </ul>
            </div>
            
            {/* Engineering */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: "#2CB1BC" }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Engineering</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>Frontend & Backend Architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>CI/CD & DevOps Practices</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>System Design & Architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  <span>Technical Mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display' }}>Experience Highlights</h2>
          
          <div className="relative border-l-2 ml-6 pl-8 py-4" style={{ borderColor: "#C2B8AD" }}>
            {/* Experience Item 1 */}
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-6 h-6 rounded-full border-2" style={{ backgroundColor: "#EF6461", borderColor: "#C2B8AD" }}></div>
              <div className="mb-1">
                <span className="text-sm font-medium py-1 px-2 rounded" style={{ backgroundColor: "#E6DDD1" }}>2021 – Present</span>
              </div>
              <h3 className="text-xl font-bold">Director of Product, TechInnovate Inc.</h3>
              <p className="mt-2">
                Led cross-functional teams to deliver a flagship SaaS platform, increasing customer retention by 32% and expanding market share in enterprise segment.
              </p>
            </div>
            
            {/* Experience Item 2 */}
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-6 h-6 rounded-full border-2" style={{ backgroundColor: "#2CB1BC", borderColor: "#C2B8AD" }}></div>
              <div className="mb-1">
                <span className="text-sm font-medium py-1 px-2 rounded" style={{ backgroundColor: "#E6DDD1" }}>2018 – 2021</span>
              </div>
              <h3 className="text-xl font-bold">Senior Engineering Manager, CloudScale</h3>
              <p className="mt-2">
                Managed a team of 15 engineers to rebuild core infrastructure, resulting in 60% performance improvements and enabling new product capabilities.
              </p>
            </div>
            
            {/* Experience Item 3 */}
            <div className="relative">
              <div className="absolute -left-14 w-6 h-6 rounded-full border-2" style={{ backgroundColor: "#8A4FFF", borderColor: "#C2B8AD" }}></div>
              <div className="mb-1">
                <span className="text-sm font-medium py-1 px-2 rounded" style={{ backgroundColor: "#E6DDD1" }}>2015 – 2018</span>
              </div>
              <h3 className="text-xl font-bold">Full-Stack Developer, StartupVision</h3>
              <p className="mt-2">
                Early employee who helped scale consumer application from prototype to 2M+ users, implementing critical features and establishing technical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 text-center" style={{ backgroundColor: "#2D3142", color: "white" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>Interested in Working Together?</h2>
          <p className="text-lg opacity-80 mb-8">
            I'm selectively taking on new opportunities where I can make a significant impact through product leadership and technical excellence.
          </p>
          <a href="#" className="inline-block px-8 py-3 rounded-lg font-medium" style={{ backgroundColor: "#EF6461" }}>
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer - Same as HomePage */}
      <footer className="py-6 px-6 md:px-12 text-center" style={{ backgroundColor: "#252836", color: "#99968F" }}>
        <div className="max-w-6xl mx-auto">
          <p>© 2023 Jesse Works. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
