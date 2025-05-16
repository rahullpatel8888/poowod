import "./styles/Work.css";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
        >
          My <span>Work</span>
        </motion.h2>
      </div>
    </div>
  );
};

export default Work;
