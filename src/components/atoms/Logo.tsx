import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'text';
  animated?: boolean;
}

export const Logo = ({ 
  className = "",
  size = 'md',
  variant = 'full',
  animated = false
}: LogoProps) => {
  const sizeClasses = {
    sm: { container: 'h-8', text: 'text-lg', icon: 'w-6 h-6' },
    md: { container: 'h-10', text: 'text-2xl', icon: 'w-8 h-8' },
    lg: { container: 'h-12', text: 'text-3xl', icon: 'w-10 h-10' }
  };

  const currentSize = sizeClasses[size];

  const containerProps = animated ? {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    whileHover: { scale: 1.02 }
  } : {};

  const Container = animated ? motion.div : 'div';

  return (
    <Container 
      {...containerProps}
      className={`flex items-center space-x-2 ${currentSize.container} ${className}`}
    >
      {variant !== 'text' && (
        <div className={`${currentSize.icon} relative`}>
          <svg 
            viewBox="0 0 40 40" 
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGradientReact" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="1" />
                <stop offset="25%" stopColor="#764ba2" stopOpacity="1" />
                <stop offset="50%" stopColor="#f093fb" stopOpacity="1" />
                <stop offset="75%" stopColor="#f5576c" stopOpacity="1" />
                <stop offset="100%" stopColor="#4facfe" stopOpacity="1" />
              </linearGradient>
              
              <filter id="shadowReact" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
            </defs>
            
            <g filter="url(#shadowReact)">
              {/* Letra I */}
              <rect x="6" y="8" width="4" height="24" rx="2" fill="url(#logoGradientReact)" />
              <rect x="4" y="8" width="8" height="3" rx="1.5" fill="url(#logoGradientReact)" />
              <rect x="4" y="29" width="8" height="3" rx="1.5" fill="url(#logoGradientReact)" />
              
              {/* Letra G */}
              <path 
                d="M16 8 C24 8 30 14 30 20 C30 26 24 32 16 32 C12 32 8 30 6 27 L10 25 C11 27 13 28 16 28 C22 28 26 24 26 20 L26 18 L20 18 L20 22 L22 22 L22 20 C22 22 20 24 16 24 C12 24 10 22 10 20 C10 16 12 12 16 12 C18 12 20 13 21 15 L25 13 C23 10 20 8 16 8 Z" 
                fill="url(#logoGradientReact)" 
              />
              
              {/* Punto decorativo conectando I y G */}
              <circle cx="13.5" cy="20" r="1.5" fill="url(#logoGradientReact)" />
            </g>
          </svg>
        </div>
      )}
      
      {variant !== 'icon' && (
        <span className={`font-bold ${currentSize.text} logo-text`}>
          Ita<span className="text-secondary">García</span>
        </span>
      )}
    </Container>
  );
};

// CSS en JS para el componente React
const logoStyles = `
  .logo-text {
    background: linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 25%,
      #f093fb 50%,
      #f5576c 75%,
      #4facfe 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-family: 'Inter', system-ui, sans-serif;
    letter-spacing: -0.02em;
    transition: transform 0.2s ease;
  }
  
  @supports not (background-clip: text) {
    .logo-text {
      background: none !important;
      color: #667eea !important;
      -webkit-text-fill-color: unset !important;
    }
  }
  
  .logo-text:hover {
    transform: scale(1.02);
  }
`;

// Inyectar estilos si no existen
if (typeof document !== 'undefined' && !document.getElementById('logo-styles')) {
  const style = document.createElement('style');
  style.id = 'logo-styles';
  style.textContent = logoStyles;
  document.head.appendChild(style);
}
