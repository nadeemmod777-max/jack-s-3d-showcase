import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({ char, range, progress }: { char: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: "relative" }}>
      <span style={{ opacity: 0.2 }}>{char}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>{char}</motion.span>
    </span>
  );
}

export function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  const step = 1 / chars.length;
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const start = i * step;
        const end = start + step;
        return <Char key={i} char={c} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
}
