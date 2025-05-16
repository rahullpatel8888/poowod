import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideIn } from "@/utils/motion";
import { PlayerCanvas } from "./canvas";

function PlayerContainer({ isMobile }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer"
    >
      <PlayerCanvas isMobile={isMobile} />
    </motion.div>
  );
}

export default PlayerContainer;
