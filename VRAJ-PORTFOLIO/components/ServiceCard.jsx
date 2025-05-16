import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="w-[250px]" tiltMaxAngleX="10" tiltMaxAngleY="10">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative group"
      >
        {/* Neon glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-900 to-fuchsia-900 rounded-[20px] blur-lg opacity-90 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        
        <div className="relative w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col backdrop-blur-xl bg-opacity-80 group-hover:bg-opacity-90 transition duration-300"
          >
            <div className="w-16 h-16 object-contain relative group-hover:scale-110 transition duration-300">
              {icon}
            </div>
            <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[20px] font-bold text-center w-[80%] group-hover:text-glow transition duration-300">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
