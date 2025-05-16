import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function ExperienceCard({ experience, theme }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme !== "dark"
            ? "linear-gradient(90deg, rgba(240,240,255,1) 0%, rgba(255,255,255,1) 50%, rgba(240,240,255,1) 100%)"
            : "linear-gradient(90deg, rgba(20,20,40,1) 0%, rgba(30,30,50,1) 50%, rgba(20,20,40,1) 100%)",
        color: theme !== "dark" ? "#5a5a7a" : "#d5d6e0",
        boxShadow:
          theme !== "dark"
            ? "0 0 30px rgba(0, 0, 0, 0.9), 0 0 60px rgba(0, 0, 0, 0.9)"
            : "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.8)",
        position: "relative",
        overflow: "hidden",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme !== "dark" ? "#1e1e1e" : "#141428"}`,
      }}
      style={{
        boxShadow: "none",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, backgroundColor: "#e0eaf0" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[60%] h-[60%] relative">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            />
          </div>
        </div>
      }
    >
      <div className="absolute inset-0 border border-transparent animate-color-change"></div>
      <style jsx>{`
        @keyframes color-change {
          0% {
            border-color: rgba(255, 0, 0, 1);
          }
          25% {
            border-color: rgba(0, 255, 0, 1);
          }
          50% {
            border-color: rgba(0, 0, 255, 1);
          }
          75% {
            border-color: rgba(255, 255, 0, 1);
          }
          100% {
            border-color: rgba(255, 0, 0, 1);
          }
        }
        .animate-color-change {
          animation: color-change 10s linear infinite;
          border-width: 0;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
          transition: box-shadow 0.3s ease-in-out;
        }
        .animate-color-change:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.8);
        }
      `}</style>
      <div>
        <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme || resolvedTheme;

  return (
    <motion.section className="w-full p-8 mt-20">
      <motion.div variants={textVariant()}>
        <p className={`sectionSubText text-center`}>What I have done so far</p>
        <h2 className={`sectionHeadText text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={currentTheme === "dark" ? "#7e8c9f" : "#8c9db1"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={currentTheme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(Experience, "work");
