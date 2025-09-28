import { motion } from "framer-motion";

interface MinimalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const MinimalLogo = ({ 
  className = "",
  size = 'md',
  animated = false
}: MinimalLogoProps) => {
  const sizeClasses = {
    sm: { text: 'text-lg', dot: 'w-2 h-2' },
    md: { text: 'text-2xl', dot: 'w-3 h-3' },
    lg: { text: 'text-3xl', dot: 'w-4 h-4' }
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
      className={`flex items-center space-x-1 ${className}`}
    >
      {/* Icono minimalista - círculo con K */}
      <div className="relative flex items-center justify-center">
        <div className={`${currentSize.dot} rounded-full bg-gradient-to-r from-primary to-accent`} />
        <span className={`ml-2 font-bold ${currentSize.text} minimal-logo-text`}>
          K
        </span>
      </div>
      
      <span className={`font-light ${currentSize.text} text-base-content/80`}>
        helde
      </span>
      
      <div className={`${currentSize.dot} rounded-full bg-primary`} />
    </Container>
  );
};

// Estilos para el logo minimalista
const minimalLogoStyles = `
  .minimal-logo-text {
    background: linear-gradient(135deg, #667eea 0%, #4facfe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    transition: transform 0.2s ease;
  }
  
  @supports not (background-clip: text) {
    .minimal-logo-text {
      background: none !important;
      color: #667eea !important;
      -webkit-text-fill-color: unset !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('minimal-logo-styles')) {
  const style = document.createElement('style');
  style.id = 'minimal-logo-styles';
  style.textContent = minimalLogoStyles;
  document.head.appendChild(style);
}
