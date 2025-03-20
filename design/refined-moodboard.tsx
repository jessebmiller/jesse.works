import React, { useState } from 'react';

const RefinedMoodBoard = () => {
  const [colorMode, setColorMode] = useState('light');
  
  // Solarized color palette
  const colors = {
    light: {
      base: [
        { name: "Base3 (Background)", hex: "#FDF6E3", rgb: "253, 246, 227" },
        { name: "Base2", hex: "#EEE8D5", rgb: "238, 232, 213" },
        { name: "Base1", hex: "#93A1A1", rgb: "147, 161, 161" },
        { name: "Base0", hex: "#839496", rgb: "131, 148, 150" }
      ],
      content: [
        { name: "Base00", hex: "#657B83", rgb: "101, 123, 131" },
        { name: "Base01", hex: "#586E75", rgb: "88, 110, 117" },
        { name: "Base02", hex: "#073642", rgb: "7, 54, 66" },
        { name: "Base03", hex: "#002B36", rgb: "0, 43, 54" }
      ]
    },
    dark: {
      base: [
        { name: "Base03 (Background)", hex: "#002B36", rgb: "0, 43, 54" },
        { name: "Base02", hex: "#073642", rgb: "7, 54, 66" },
        { name: "Base01", hex: "#586E75", rgb: "88, 110, 117" },
        { name: "Base00", hex: "#657B83", rgb: "101, 123, 131" }
      ],
      content: [
        { name: "Base0", hex: "#839496", rgb: "131, 148, 150" },
        { name: "Base1", hex: "#93A1A1", rgb: "147, 161, 161" },
        { name: "Base2", hex: "#EEE8D5", rgb: "238, 232, 213" },
        { name: "Base3", hex: "#FDF6E3", rgb: "253, 246, 227" }
      ]
    },
    accent: [
      { name: "Yellow", hex: "#B58900", rgb: "181, 137, 0" },
      { name: "Orange", hex: "#CB4B16", rgb: "203, 75, 22" },
      { name: "Red", hex: "#DC322F", rgb: "220, 50, 47" },
      { name: "Magenta", hex: "#D33682", rgb: "211, 54, 130" },
      { name: "Violet", hex: "#6C71C4", rgb: "108, 113, 196" },
      { name: "Blue", hex: "#268BD2", rgb: "38, 139, 210" },
      { name: "Cyan", hex: "#2AA198", rgb: "42, 161, 152" },
      { name: "Green", hex: "#859900", rgb: "133, 153, 0" }
    ]
  };

  // Typography selections
  const typography = {
    body: "Montserrat",
    headings: [
      "Recoleta",
      "Eksell Display",
      "GT Super"
    ]
  };

  // Design elements/patterns
  const patterns = [
    "Geometric grid overlays with slight randomization",
    "Dot patterns with occasional disruptions",
    "Abstract wave forms suggesting both structure and flow",
    "Subtle texture reminiscent of handmade paper"
  ];

  // Design principles (keeping the original)
  const principles = [
    "Progressive disclosure - reveal complexity gradually",
    "Deliberate contrast between calm and dynamic elements",
    "Thoughtful white space that guides the eye",
    "Balance between artistic expression and functional clarity",
    "Subtle animations that respond to user interaction"
  ];

  const backgroundColor = colorMode === 'light' ? '#FDF6E3' : '#002B36';
  const textColor = colorMode === 'light' ? '#002B36' : '#FDF6E3';
  const secondary = colorMode === 'light' ? '#586E75' : '#93A1A1';

  return (
    <div className="p-8 max-w-6xl mx-auto" style={{ backgroundColor, color: textColor }}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Portfolio Mood Board</h1>
        <button 
          className="px-4 py-2 rounded-md"
          style={{ 
            backgroundColor: colorMode === 'light' ? '#073642' : '#EEE8D5',
            color: colorMode === 'light' ? '#FDF6E3' : '#073642'
          }}
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      
      {/* Typography Section */}
      <section className="mb-12 p-6 rounded-lg" style={{ backgroundColor: colorMode === 'light' ? '#EEE8D5' : '#073642' }}>
        <h2 className="text-2xl font-bold mb-4">Typography Pairing</h2>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2 opacity-80">Body Text</h3>
            <div className="mb-4">
              <p className="text-base mb-1" style={{ fontFamily: typography.body }}>
                <span className="font-bold mr-2">Montserrat:</span> 
                A clean, geometric sans-serif that provides excellent readability while maintaining a modern, professional feel. This will be used for all body text, navigation, and UI elements.
              </p>
              <p className="text-sm opacity-80 mt-2" style={{ fontFamily: typography.body, fontWeight: "bold" }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 opacity-80">Heading Options (Expressive Choices)</h3>
            {typography.headings.map((font, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-white border-opacity-10">
                <p className="text-2xl font-bold mb-1" style={{ fontFamily: font }}>
                  {font}
                </p>
                <p className="text-xl mb-2" style={{ fontFamily: font }}>
                  Engineering meets Product Leadership
                </p>
                <p className="text-sm opacity-80" style={{ fontFamily: typography.body }}>
                  {index === 0 && "A warm, friendly serif with distinctive rounded features that add personality while maintaining readability."}
                  {index === 1 && "A modern serif with artistic character that creates a sophisticated yet approachable feeling."}
                  {index === 2 && "A serif with retro-modern appeal that references classic typography with a contemporary twist."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Color Palette Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Solarized Color Palette</h2>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 opacity-80">Base Colors ({colorMode === 'light' ? 'Light' : 'Dark'} Mode)</h3>
          <div className="flex flex-wrap gap-3">
            {colors[colorMode].base.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-20 h-20 rounded-md shadow-md mb-2" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="text-sm font-medium">{color.name}</span>
                <span className="text-xs opacity-70">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 opacity-80">Content Colors ({colorMode === 'light' ? 'Light' : 'Dark'} Mode)</h3>
          <div className="flex flex-wrap gap-3">
            {colors[colorMode].content.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-20 h-20 rounded-md shadow-md mb-2" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="text-sm font-medium">{color.name}</span>
                <span className="text-xs opacity-70">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 opacity-80">Accent Colors (Consistent Across Modes)</h3>
          <div className="flex flex-wrap gap-3">
            {colors.accent.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-20 h-20 rounded-md shadow-md mb-2" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="text-sm font-medium">{color.name}</span>
                <span className="text-xs opacity-70">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Elements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Visual Elements & Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pattern 1: Geometric Grid with Disruption */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: colorMode === 'light' ? '#EEE8D5' : '#073642' }}>
            <div className="h-40 mb-3 rounded overflow-hidden relative">
              <div 
                className="w-full h-full relative" 
                style={{ 
                  backgroundColor: colorMode === 'light' ? '#FDF6E3' : '#002B36',
                }}
              >
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
                  {Array(48).fill(0).map((_, i) => (
                    <div key={i} className="border border-gray-200 opacity-30"></div>
                  ))}
                </div>
                <div className="absolute top-12 left-24 w-16 h-16 rounded-full opacity-40" style={{ backgroundColor: colors.accent[5].hex }}></div>
                <div className="absolute bottom-8 right-10 w-12 h-12 rounded-full opacity-40" style={{ backgroundColor: colors.accent[2].hex }}></div>
              </div>
            </div>
            <p className="text-sm font-medium">Geometric Grid with Disruption</p>
            <p className="text-xs opacity-70">Structure with moments of creative freedom</p>
          </div>
          
          {/* Pattern 2: Miró-inspired Element (replacing soft gradients) */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: colorMode === 'light' ? '#EEE8D5' : '#073642' }}>
            <div className="h-40 mb-3 rounded overflow-hidden relative">
              <div 
                className="w-full h-full relative" 
                style={{ 
                  backgroundColor: colorMode === 'light' ? '#FDF6E3' : '#002B36',
                }}
              >
                {/* Miró-inspired abstract element */}
                <svg viewBox="0 0 160 120" className="absolute inset-0 w-full h-full">
                  {/* Biomorphic shape */}
                  <path 
                    d="M40,30 C55,20 80,25 90,40 C100,55 95,75 80,85 C65,95 40,90 30,75 C20,60 25,40 40,30 Z" 
                    fill={colors.accent[6].hex} 
                    opacity="0.8"
                  />
                  
                  {/* Simple black outline */}
                  <circle 
                    cx="110" 
                    cy="40" 
                    r="15" 
                    fill={colors.accent[0].hex}
                    stroke={colorMode === 'light' ? '#002B36' : '#FDF6E3'}
                    strokeWidth="2"
                    opacity="0.8"
                  />
                  
                  {/* Star-like element */}
                  <path 
                    d="M30,80 L40,65 L50,80 L65,85 L55,95 L60,110 L45,105 L30,110 L35,95 L20,85 Z" 
                    fill={colors.accent[3].hex}
                    opacity="0.8"
                  />
                  
                  {/* Simple line */}
                  <line 
                    x1="85" 
                    y1="70" 
                    x2="130" 
                    y2="100" 
                    stroke={colorMode === 'light' ? '#002B36' : '#FDF6E3'}
                    strokeWidth="2"
                  />
                  
                  {/* Small dot */}
                  <circle 
                    cx="130" 
                    cy="100" 
                    r="6" 
                    fill={colors.accent[4].hex}
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium">Miró-Inspired Abstract Element</p>
            <p className="text-xs opacity-70">Playful, artistic expression with bold colors</p>
          </div>
          
          {/* Pattern 3: Dot Pattern with Disruptions */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: colorMode === 'light' ? '#EEE8D5' : '#073642' }}>
            <div className="h-40 mb-3 rounded overflow-hidden relative">
              <div 
                className="w-full h-full relative" 
                style={{ 
                  backgroundColor: colorMode === 'light' ? '#FDF6E3' : '#002B36',
                }}
              >
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-10">
                  {Array(120).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <div className={`w-1 h-1 rounded-full opacity-60 ${Math.random() > 0.85 ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-lg opacity-50" style={{ backgroundColor: colors.accent[0].hex }}></div>
              </div>
            </div>
            <p className="text-sm font-medium">Dot Pattern with Disruptions</p>
            <p className="text-xs opacity-70">Representing detailed engineering with creative disruptions</p>
          </div>
        </div>
      </section>
      
      {/* Design Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Design Principles</h2>
        <div className="p-6 rounded-lg" style={{ backgroundColor: colorMode === 'light' ? '#EEE8D5' : '#073642' }}>
          <ul className="space-y-4">
            {principles.map((principle, index) => (
              <li key={index} className="flex items-start">
                <span 
                  className="inline-block w-4 h-4 mt-1 mr-3 rounded-full" 
                  style={{ backgroundColor: colors.accent[index % 8].hex }}
                ></span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Inspiration Quote - Using the original */}
      <section className="mb-8">
        <div 
          className="p-8 rounded-lg border-l-4" 
          style={{ 
            backgroundColor: colorMode === 'light' ? '#EEE8D5' : '#073642',
            borderColor: colors.accent[2].hex 
          }}
        >
          <p className="text-lg italic mb-2">"Spikes of productive disturbance in a bed of comfort"</p>
          <p className="text-sm opacity-70">Creating a visually calming base design with strategic, striking visual accents that draw attention</p>
        </div>
      </section>
    </div>
  );
};

export default RefinedMoodBoard;
