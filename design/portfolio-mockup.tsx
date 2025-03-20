import React, { useState } from 'react';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Connected Wellness Platform",
      category: "consumer",
      year: "2022 – 2023",
      color: "#2CB1BC",
      shortDesc: "Reimagining how users track health data with an integrated approach.",
      tags: ["React Native", "Node.js", "GraphQL", "AWS"]
    },
    {
      id: 2,
      title: "Static Site Compiler",
      category: "developer",
      year: "2021 – 2022",
      color: "#8A4FFF",
      shortDesc: "A lightning-fast static site generator with best-in-class performance.",
      tags: ["Rust", "WebAssembly", "Performance Optimization"]
    },
    {
      id: 3,
      title: "Enterprise Collaboration Suite",
      category: "b2b",
      year: "2020 – 2021",
      color: "#EF6461",
      shortDesc: "Reinventing how teams communicate across distributed organizations.",
      tags: ["React", "Redux", "Express", "Socket.io"]
    },
    {
      id: 4,
      title: "E-Commerce Analytics Dashboard",
      category: "b2b",
      year: "2019 – 2020",
      color: "#F7B32B",
      shortDesc: "Real-time analytics platform for high-volume online retailers.",
      tags: ["Vue.js", "D3.js", "Python", "Kafka"]
    },
    {
      id: 5,
      title: "Developer Documentation Platform",
      category: "developer",
      year: "2018 – 2019",
      color: "#2CB1BC",
      shortDesc: "Interactive documentation system with integrated code playground.",
      tags: ["TypeScript", "Next.js", "MDX", "Docker"]
    },
    {
      id: 6,
      title: "Mobile Payment Application",
      category: "consumer",
      year: "2017 – 2018",
      color: "#8A4FFF",
      shortDesc: "Secure and user-friendly mobile payment solution for emerging markets.",
      tags: ["Swift", "Kotlin", "Spring Boot", "Security"]
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="font-sans" style={{ backgroundColor: "#E6DDD1", color: "#2D3142" }}>
      {/* Navigation - Same as Other Pages */}
      <nav className="fixed w-full z-10 px-6 md:px-12 py-4 flex justify-between items-center" style={{ backgroundColor: "rgba(230, 221, 209, 0.95)" }}>
        <div className="font-bold text-xl tracking-tight">Jesse Works</div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">About</a>
          <a href="#" className="font-medium" style={{ color: "#2CB1BC" }}>Portfolio</a>
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
            Portfolio
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            A selection of projects showcasing my experience across consumer products, B2B solutions, and developer tools.
          </p>
        </div>
      </header>

      {/* Filter Controls */}
      <section className="pb-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap justify-center gap-3">
            <button 
              className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === 'all' ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              style={{ backgroundColor: filter === 'all' ? '#2D3142' : 'transparent' }}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === 'consumer' ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              style={{ backgroundColor: filter === 'consumer' ? '#2CB1BC' : 'transparent' }}
              onClick={() => setFilter('consumer')}
            >
              Consumer Products
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === 'b2b' ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              style={{ backgroundColor: filter === 'b2b' ? '#EF6461' : 'transparent' }}
              onClick={() => setFilter('b2b')}
            >
              B2B Solutions
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === 'developer' ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              style={{ backgroundColor: filter === 'developer' ? '#8A4FFF' : 'transparent' }}
              onClick={() => setFilter('developer')}
            >
              Developer Tools
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 w-full relative" style={{ backgroundColor: project.color }}>
                  <div className="h-full w-full opacity-20 grid grid-cols-8 grid-rows-6">
                    {Array(48).fill(0).map((_, i) => (
                      <div key={i} className="border border-white"></div>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-sm font-medium py-1 px-2 rounded-md text-white bg-black bg-opacity-30">
                      {project.category === 'consumer' ? 'Consumer Product' : 
                       project.category === 'b2b' ? 'B2B Solution' : 'Developer Tool'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs py-1 px-2 bg-gray-100 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: project.color }}>{project.year}</span>
                    <button className="text-sm font-medium">View Case Study →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display' }}>Featured Case Study</h2>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Visual Side */}
              <div className="h-64 lg:h-auto relative" style={{ backgroundColor: "#2CB1BC" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 relative">
                    {/* Abstract representation of the project */}
                    <div className="absolute inset-0 border-4 border-white opacity-30 rounded-lg"></div>
                    <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white opacity-20"></div>
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border-4 border-white opacity-30"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sm font-medium py-1 px-2 rounded-md text-white bg-black bg-opacity-30">
                    Consumer Product
                  </span>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Connected Wellness Platform</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive wellness tracking platform that integrates fitness, nutrition, and mental health data to provide holistic insights and personalized recommendations.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Increased user engagement by 47% through personalized insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Launched on iOS and Android with 4.8+ star ratings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Achieved 86% data accuracy in health predictions</span>
                    </li>
                  </ul>
                </div>
                
                <a href="#" className="inline-block px-6 py-3 rounded font-medium" style={{ backgroundColor: "#2CB1BC", color: "white" }}>
                  Read Full Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 md:px-12 text-center" style={{ backgroundColor: "#2D3142", color: "white" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Playfair Display' }}>Client Testimonials</h2>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <svg className="w-10 h-10 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg mb-6 italic">
              "Jesse's unique blend of technical knowledge and product vision transformed our project. The team delivered a solution that not only met our immediate needs but positioned us for future growth."
            </p>
            <div>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-sm opacity-80">CTO, HealthTech Innovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>Have a Project in Mind?</h2>
          <p className="text-lg opacity-80 mb-8">
            I'm always interested in discussing new opportunities and challenges where I can apply my expertise in product development and engineering.
          </p>
          <a href="#" className="inline-block px-8 py-3 rounded-lg font-medium" style={{ backgroundColor: "#EF6461", color: "white" }}>
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer - Same as Other Pages */}
      <footer className="py-6 px-6 md:px-12 text-center" style={{ backgroundColor: "#252836", color: "#99968F" }}>
        <div className="max-w-6xl mx-auto">
          <p>© 2023 Jesse Works. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
