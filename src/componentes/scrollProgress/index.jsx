import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

/* Barra fina no topo que acompanha o progresso de rolagem da página.
   useSpring suaviza o movimento pra não ficar "duro". */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress-bar" style={{ scaleX }} aria-hidden="true" />;
}
