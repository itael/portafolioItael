import { motion } from "framer-motion";

interface ItaGarciaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const ItaGarciaLogo = ({ 
  className = "",
  size = 'md',
  animated = false
}: ItaGarciaLogoProps) => {
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
      className={`flex items-center space-x-3 ${currentSize.container} ${className}`}
    >
      {/* Icono circular con iniciales */}
      <div className={`${currentSize.icon} relative flex items-center justify-center`}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5">
          <div className="w-full h-full rounded-full bg-base-100 flex items-center justify-center">
            <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IG
            </span>
          </div>
        </div>
      </div>
      
      {/* Texto del logo */}
      <div className="flex flex-col leading-tight">
        <span className={`font-bold ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : 'text-xl'} ita-garcia-text`}>
          Ita
        </span>
        <span className={`font-light ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} text-base-content/70 -mt-1`}>
          García
        </span>
      </div>
    </Container>
  );
};

// Estilos para el logo de ItaGarcía
const itaGarciaLogoStyles = `
  .ita-garcia-text {
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
    transition: transform 0.2s ease;
  }
  
  @supports not (background-clip: text) {
    .ita-garcia-text {
      background: none !important;
      color: #667eea !important;
      -webkit-text-fill-color: unset !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('ita-garcia-logo-styles')) {
  const style = document.createElement('style');
  style.id = 'ita-garcia-logo-styles';
  style.textContent = itaGarciaLogoStyles;
  document.head.appendChild(style);
}
