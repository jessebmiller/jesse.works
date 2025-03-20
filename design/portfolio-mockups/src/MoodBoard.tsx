import React, { useState } from 'react';
import './MoodBoard.css';

const UpdatedMoodBoard = () => {
  const [colorMode, setColorMode] = useState('light');
  const [paletteType, setPaletteType] = useState('solarized');
  
  // Color palettes
  const palettes = {
    // Solarized palette
    solarized: {
      name: "Solarized",
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
    },
    
    // Original palette from first design
    original: {
      name: "Original",
      light: {
        base: [
          { name: "Warm Sand", hex: "#E6DDD1", rgb: "230, 221, 209" },
          { name: "Muted Clay", hex: "#C2B8AD", rgb: "194, 184, 173" },
          { name: "Soft Stone", hex: "#99968F", rgb: "153, 150, 143" },
          { name: "Dark Gray", hex: "#4A4A4A", rgb: "74, 74, 74" }
        ],
        content: [
          { name: "Medium Gray", hex: "#707070", rgb: "112, 112, 112" },
          { name: "Charcoal", hex: "#3D3D3D", rgb: "61, 61, 61" },
          { name: "Off Black", hex: "#2D2D2D", rgb: "45, 45, 45" },
          { name: "Deep Slate", hex: "#2D3142", rgb: "45, 49, 66" }
        ]
      },
      dark: {
        base: [
          { name: "Deep Slate", hex: "#2D3142", rgb: "45, 49, 66" },
          { name: "Off Black", hex: "#2D2D2D", rgb: "45, 45, 45" },
          { name: "Charcoal", hex: "#3D3D3D", rgb: "61, 61, 61" },
          { name: "Medium Gray", hex: "#707070", rgb: "112, 112, 112" }
        ],
        content: [
          { name: "Soft Stone", hex: "#99968F", rgb: "153, 150, 143" },
          { name: "Muted Clay", hex: "#C2B8AD", rgb: "194, 184, 173" },
          { name: "Warm Sand", hex: "#E6DDD1", rgb: "230, 221, 209" },
          { name: "Off White", hex: "#F5F3F0", rgb: "245, 243, 240" }
        ]
      },
      accent: [
        { name: "Vivid Coral", hex: "#EF6461", rgb: "239, 100, 97" },
        { name: "Bold Teal", hex: "#2CB1BC", rgb: "44, 177, 188" },
        { name: "Electric Purple", hex: "#8A4FFF", rgb: "138, 79, 255" },
        { name: "Bright Amber", hex: "#F7B32B", rgb: "247, 179, 43" },
        { name: "Forest Green", hex: "#1D7874", rgb: "29, 120, 116" },
        { name: "Deep Blue", hex: "#2E5EAA", rgb: "46, 94, 170" },
        { name: "Dusty Rose", hex: "#E07A5F", rgb: "224, 122, 95" },
        { name: "Sage Green", hex: "#81B29A", rgb: "129, 178, 154" }
      ]
    },
    
    // Miró-inspired palette
    miro: {
      name: "Miró",
      light: {
        base: [
          { name: "Canvas White", hex: "#FFFEF2", rgb: "255, 254, 242" },
          { name: "Parchment", hex: "#F6F4E8", rgb: "246, 244, 232" },
          { name: "Shell", hex: "#E3DFD7", rgb: "227, 223, 215" },
          { name: "Stone", hex: "#C8C4BC", rgb: "200, 196, 188" }
        ],
        content: [
          { name: "Graphite", hex: "#5D5D5D", rgb: "93, 93, 93" },
          { name: "Charcoal", hex: "#3C3C3C", rgb: "60, 60, 60" },
          { name: "Deep Char", hex: "#282828", rgb: "40, 40, 40" },
          { name: "Ink Black", hex: "#1A1A1A", rgb: "26, 26, 26" }
        ]
      },
      dark: {
        base: [
          { name: "Ink Black", hex: "#1A1A1A", rgb: "26, 26, 26" },
          { name: "Deep Char", hex: "#282828", rgb: "40, 40, 40" },
          { name: "Charcoal", hex: "#3C3C3C", rgb: "60, 60, 60" },
          { name: "Graphite", hex: "#5D5D5D", rgb: "93, 93, 93" }
        ],
        content: [
          { name: "Stone", hex: "#C8C4BC", rgb: "200, 196, 188" },
          { name: "Shell", hex: "#E3DFD7", rgb: "227, 223, 215" },
          { name: "Parchment", hex: "#F6F4E8", rgb: "246, 244, 232" },
          { name: "Canvas White", hex: "#FFFEF2", rgb: "255, 254, 242" }
        ]
      },
      accent: [
        { name: "Miró Red", hex: "#E63946", rgb: "230, 57, 70" },
        { name: "Miró Blue", hex: "#0077B6", rgb: "0, 119, 182" },
        { name: "Miró Yellow", hex: "#FCBF49", rgb: "252, 191, 73" },
        { name: "Miró Black", hex: "#000000", rgb: "0, 0, 0" },
        { name: "Earth Brown", hex: "#A26D40", rgb: "162, 109, 64" },
        { name: "Miró Green", hex: "#38B000", rgb: "56, 176, 0" },
        { name: "Cerulean", hex: "#219EBC", rgb: "33, 158, 188" },
        { name: "Ochre", hex: "#CA6702", rgb: "202, 103, 2" }
      ]
    }
  };
  
  // Typography information
  const typography = {
    body: {
      name: "Montserrat",
      description: "A clean, geometric sans-serif that provides excellent readability while maintaining a modern, professional feel."
    },
    heading: {
      name: "Montserrat Alternates",
      description: "A variation of Montserrat with unique, more playful character shapes that add personality while maintaining the geometric structure."
    }
  };

  // Design principles
  const principles = [
    "Progressive disclosure - reveal complexity gradually",
    "Deliberate contrast between calm and dynamic elements",
    "Thoughtful white space that guides the eye",
    "Balance between artistic expression and functional clarity",
    "Subtle animations that respond to user interaction"
  ];

  // Get current color palette based on mode and type
  const currentPalette = palettes[paletteType];
  const colors = currentPalette[colorMode];
  const accentColors = currentPalette.accent;
  
  // Background and text colors based on mode
  const backgroundColor = colors.base[0].hex;
  const textColor = colors.content[3].hex;
  const secondaryColor = colors.base[2].hex;
  const highlightBg = colors.base[1].hex;

  return (
    <div className="mood-board" style={{ backgroundColor, color: textColor }}>
      <div className="header">
        <h1 className="heading-1">Portfolio Mood Board</h1>
        
        <div className="controls">
          {/* Palette selector */}
          <div className="palette-selector">
            {Object.keys(palettes).map(key => (
              <button
                key={key}
                className="palette-button"
                style={{ 
                  backgroundColor: paletteType === key ? accentColors[0].hex : highlightBg,
                  color: paletteType === key ? '#fff' : textColor,
                  opacity: paletteType === key ? 1 : 0.8
                }}
                onClick={() => setPaletteType(key)}
              >
                {palettes[key].name}
              </button>
            ))}
          </div>

          {/* Mode toggle */}
          <button 
            className="mode-toggle"
            style={{ 
              backgroundColor: highlightBg,
              color: textColor
            }}
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
          >
            Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </div>
      
      {/* Typography Section */}
      <section className="section">
        <h2 className="heading-2">Typography Pairing</h2>
        <div className="section-content">
          <div className="font-sample">
            <h3 className="heading-3">Body Text</h3>
            <div>
              <p className="font-title montserrat-sample">
                <span className="font-bold">{typography.body.name}:</span> 
              </p>
              <p className="font-example montserrat-sample">
                The quick brown fox jumps over the lazy dog. 0123456789
              </p>
              <p className="font-description">
                {typography.body.description}
              </p>
            </div>
          </div>
          
          <div className="font-sample">
            <h3 className="heading-3">Heading</h3>
            <div>
              <p className="font-title montserrat-subrayada">
                {typography.heading.name}
              </p>
              <p className="font-example montserrat-subrayada">
                Engineering meets Product Leadership
              </p>
              <p className="font-description">
                {typography.heading.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Color Palette Section */}
      <section className="section">
        <h2 className="heading-2">Color Palette: {currentPalette.name}</h2>
        <div>
          <h3 className="heading-3">Base Colors ({colorMode === 'light' ? 'Light' : 'Dark'} Mode)</h3>
          <div className="color-grid">
            {colors.base.map((color, index) => (
              <div key={index} className="color-block">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="color-name">{color.name}</span>
                <span className="color-hex">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="heading-3">Content Colors ({colorMode === 'light' ? 'Light' : 'Dark'} Mode)</h3>
          <div className="color-grid">
            {colors.content.map((color, index) => (
              <div key={index} className="color-block">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="color-name">{color.name}</span>
                <span className="color-hex">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="heading-3">Accent Colors (Consistent Across Modes)</h3>
          <div className="color-grid">
            {accentColors.map((color, index) => (
              <div key={index} className="color-block">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="color-name">{color.name}</span>
                <span className="color-hex">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Elements */}
      <section className="section">
        <h2 className="heading-2">Visual Elements & Patterns</h2>
        <div className="visual-grid">
          {/* Pattern 1: Geometric Grid with Disruption */}
          <div className="visual-element" style={{ backgroundColor: highlightBg }}>
            <div className="visual-canvas" style={{ backgroundColor }}>
              <div className="grid-pattern">
                {Array(48).fill(0).map((_, i) => (
                  <div key={i} className="grid-cell" style={{ borderColor: "rgba(200, 200, 200, 0.3)" }}></div>
                ))}
              </div>
              <div 
                style={{ 
                  position: "absolute", 
                  top: "3rem", 
                  left: "6rem", 
                  width: "4rem", 
                  height: "4rem", 
                  borderRadius: "9999px", 
                  opacity: 0.4,
                  backgroundColor: accentColors[5].hex 
                }}
              ></div>
              <div 
                style={{ 
                  position: "absolute", 
                  bottom: "2rem", 
                  right: "2.5rem", 
                  width: "3rem", 
                  height: "3rem", 
                  borderRadius: "9999px", 
                  opacity: 0.4,
                  backgroundColor: accentColors[2].hex 
                }}
              ></div>
            </div>
            <p className="visual-title">Geometric Grid with Disruption</p>
            <p className="visual-description">Structure with moments of creative freedom</p>
          </div>
          
          {/* Pattern 2: Miró-inspired Element */}
          <div className="visual-element" style={{ backgroundColor: highlightBg }}>
            <div className="visual-canvas" style={{ backgroundColor }}>
              <svg viewBox="0 0 160 120" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                {/* Biomorphic shape */}
                <path 
                  d="M40,30 C55,20 80,25 90,40 C100,55 95,75 80,85 C65,95 40,90 30,75 C20,60 25,40 40,30 Z" 
                  fill={accentColors[6].hex} 
                  opacity="0.8"
                />
                
                {/* Simple black outline */}
                <circle 
                  cx="110" 
                  cy="40" 
                  r="15" 
                  fill={accentColors[0].hex}
                  stroke={textColor}
                  strokeWidth="2"
                  opacity="0.8"
                />
                
                {/* Star-like element */}
                <path 
                  d="M30,80 L40,65 L50,80 L65,85 L55,95 L60,110 L45,105 L30,110 L35,95 L20,85 Z" 
                  fill={accentColors[3].hex}
                  opacity="0.8"
                />
                
                {/* Simple line */}
                <line 
                  x1="85" 
                  y1="70" 
                  x2="130" 
                  y2="100" 
                  stroke={textColor}
                  strokeWidth="2"
                />
                
                {/* Small dot */}
                <circle 
                  cx="130" 
                  cy="100" 
                  r="6" 
                  fill={accentColors[4].hex}
                  opacity="0.8"
                />
              </svg>
            </div>
            <p className="visual-title">Miró-Inspired Abstract Element</p>
            <p className="visual-description">Playful, artistic expression with bold colors</p>
          </div>
          
          {/* Pattern 3: Dot Pattern with Disruptions */}
          <div className="visual-element" style={{ backgroundColor: highlightBg }}>
            <div className="visual-canvas" style={{ backgroundColor }}>
              <div className="dot-grid">
                {Array(120).fill(0).map((_, i) => (
                  <div key={i} className="dot-cell">
                    <div 
                      className="dot" 
                      style={{ 
                        backgroundColor: Math.random() > 0.85 ? accentColors[5].hex : "rgba(150, 150, 150, 0.5)" 
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div 
                style={{ 
                  position: "absolute", 
                  top: "33%", 
                  left: "25%", 
                  width: "3rem", 
                  height: "3rem", 
                  borderRadius: "0.5rem", 
                  opacity: 0.5,
                  backgroundColor: accentColors[0].hex 
                }}
              ></div>
            </div>
            <p className="visual-title">Dot Pattern with Disruptions</p>
            <p className="visual-description">Representing detailed engineering with creative disruptions</p>
          </div>
        </div>
      </section>
      
      {/* Design Principles */}
      <section className="section">
        <h2 className="heading-2">Design Principles</h2>
        <div className="principles-list" style={{ backgroundColor: highlightBg }}>
          <ul>
            {principles.map((principle, index) => (
              <li key={index} className="principle-item">
                <span className="principle-dot" style={{ backgroundColor: accentColors[index % 8].hex }}></span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Inspiration Quote */}
      <section className="section">
        <div 
          className="quote-block" 
          style={{ 
            backgroundColor: highlightBg,
            borderColor: accentColors[2].hex 
          }}
        >
          <p className="quote-text">"Spikes of productive disturbance in a bed of comfort"</p>
          <p className="quote-description">Creating a visually calming base design with strategic, striking visual accents that draw attention</p>
        </div>
      </section>
    </div>
  );
};

export default UpdatedMoodBoard;
