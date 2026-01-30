import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Valores de posición
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuración de resortes (Springs) - La clave del efecto fluido
  // El "aura" tiene mucha amortiguación para ese efecto de retraso suave
  const auraX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const auraY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  // El núcleo es más rígido y rápido
  const coreX = useSpring(mouseX, { damping: 20, stiffness: 400 });
  const coreY = useSpring(mouseY, { damping: 20, stiffness: 400 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      // Ajustamos el offset para centrar (w-8/2 = 16)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detectar si estamos sobre algo interactivo (botones/enlaces)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT'].includes(target.tagName) || target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      
      {/* 1. EL AURA (Círculo grande con lag y deformación) */}
      <motion.div
        className="absolute top-0 left-0 w-10 h-10 border border-brand-neon/40 rounded-full flex items-center justify-center"
        style={{ 
            x: auraX, y: auraY, 
            translateX: "-50%", translateY: "-50%",
            boxShadow: isHovering ? "0 0 20px rgba(16, 185, 129, 0.4)" : "none" 
        }}
        animate={{
          scale: isHovering ? 1.5 : isClicking ? 0.9 : 1,
          borderWidth: isHovering ? "1px" : "2px",
          rotate: isHovering ? 90 : 0,
        }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        {/* Un pequeño rastro neón dentro del aura */}
        <div className="w-1 h-1 bg-brand-neon rounded-full blur-[1px] opacity-30 animate-ping" />
      </motion.div>

      {/* 2. EL NÚCLEO (Punto de precisión) */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-brand-neon rounded-full shadow-[0_0_10px_#10B981]"
        style={{ 
            x: coreX, y: coreY, 
            translateX: "-50%", translateY: "-50%" 
        }}
        animate={{
          scale: isClicking ? 2 : 1,
          backgroundColor: isHovering ? "#0070F3" : "#10B981",
        }}
      />

      {/* 3. EFECTO DE SCANNER (Solo en hover) */}
      {isHovering && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-0 left-0 text-[8px] font-mono text-brand-neon/60 whitespace-nowrap"
            style={{ x: mouseX, y: mouseY, translateX: 20, translateY: -20 }}
        >
            [ ACTION_READY ]
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor;