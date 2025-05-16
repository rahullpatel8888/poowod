import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "@/utils/motion";

// Dynamically import Tilt with no SSR
const Tilt = dynamic(() => import('react-parallax-tilt'), {
  ssr: false,
  loading: () => <div className="w-[50px] h-[50px]" />
});

const techCategories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'libraries', label: 'Libraries' },
  { key: 'databases', label: 'Databases' },
  { key: 'tools', label: 'Tools' },
  { key: 'environments', label: 'Environments' }
];

function Tech() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const renderTechSection = (category, index) => {
    const techList = technologies[category.key] || [];

    return (
      <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
        <h3 className="md:hidden text-xl font-bold tracking-wide text-black">
          {category.label}
        </h3>
        <motion.div
          className="w-full flex flex-row flex-wrap gap-5 pl-0 pr-8 pt-4"
          variants={fadeIn("right", "spring", 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {techList.map((tech) => (
            <div key={tech.name} className="relative group">
              {isMounted && (
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={800}
                  transitionSpeed={1500}
                  scale={1.02}
                  className="relative flex items-center justify-center"
                >
                  <Link
                    href={tech.link}
                    target="_blank"
                    className="relative flex items-center justify-center"
                  >
                    <div className="relative w-[50px] h-[50px] bg-bgSecondaryDark dark:bg-bgSecondaryLight rounded-xl p-2 flex items-center justify-center transform transition duration-200 group-hover:scale-110 border border-white/10 hover:border-white/30">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                        className="object-contain p-1"
                      />
                    </div>
                  </Link>
                </Tilt>
              )}
              {!isMounted && (
                <div className="w-[50px] h-[50px] bg-bgSecondaryDark dark:bg-bgSecondaryLight rounded-xl p-2 flex items-center justify-center border border-white/10">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    className="object-contain p-1"
                  />
                </div>
              )}
              <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -top-14 left-1/2 transform -translate-x-1/2 bg-[#1a1a2e]/90 backdrop-blur-sm text-white/90 px-4 py-2 rounded-lg text-sm transition-all duration-200 whitespace-nowrap border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] z-50 font-medium tracking-wide">
                {tech.name}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#1a1a2e]/90 border-r border-b border-white/20 rotate-45"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  const techNames = techCategories.map((category, index) => (
    <h3
      className="h-[40px] md:flex items-center hidden text-xl font-bold tracking-wide text-black"
      key={index}
    >
      {category.label}
    </h3>
  ));

  return (
    <section className="w-full h-fit p-4 mt-4 mb-0 pb-0" id="skills">
      <div className="dark"> {/* 👈 add this wrapper */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mx-auto"
        >
          <p className={"sectionSubText"}>What I have learnt so far</p>
          <h2 className="sectionHeadText text-black dark:text-white">Skills.</h2>
        </motion.div>

        {isMounted && (
          <Tilt
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            perspective={1000}
            scale={1.0}
            transitionSpeed={2000}
            className="w-full"
          >
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-[17px] md:w-fit md:min-w-[60%] w-full leading-[30px] flex flex-row gap-x-8 p-4 md:px-8 mx-auto rounded-2xl justify-between relative overflow-visible neon-box-animated active:scale-[0.99] transition-transform pb-8"
            >
              {/* Neon border lines (if you had them) */}
              <div className="border-line top"></div>
              <div className="border-line right"></div>
              <div className="border-line bottom"></div>
              <div className="border-line left"></div>

              {/* Neon background layer */}
              <div className="block dark:hidden w-full h-full animate-gradient-move bg-[radial-gradient(circle_at_20%_20%,#0f0c29,#1a1a2e,#004225,#4b3621,#000000)]">
                {/* Light mode background */}
                <div className="block dark:hidden w-full h-full animate-gradient-move bg-[radial-gradient(circle_at_20%_20%,#0f0c29,#1a1a2e,#004225,#4b3621,#000000)]"></div>

                {/* Dark mode background */}
                <div className="hidden dark:block w-full h-full bg-bgSecondaryLight"></div>
              </div>

              {/* Left labels */}
              <div className="flex flex-col justify-between py-2 pr-4 w-48 z-10 text-white dark:text-black">
                {techCategories.map((category, index) => (
                  <h3
                    key={index}
                    className="flex items-center text-xl font-bold tracking-wide"
                  >
                    {category.label}
                  </h3>
                ))}
              </div>

              {/* Partition line */}
              <div className="flex flex-col justify-center relative">
                <div className="absolute inset-0 rounded-full blur-[15px] animate-pulse">
                  {/* Light mode glow */}
                  <div className="block dark:hidden w-full h-full bg-gradient-to-b from-[#ff4ecd] via-[#ffb8d1] to-[#ffe6f1] rounded-full"></div>

                  {/* Dark mode glow */}
                  <div className="hidden dark:block w-full h-full bg-gradient-to-b from-[#00ff66] via-[#00ff66] to-[#00ff66]/50 rounded-full"></div>
                </div>

                <div className="w-[6px] h-full bg-[#00ff66] dark:bg-[#4B0082] rounded-full shadow-[0_0_20px_#00ff66,0_0_40px_#00ff66,0_0_60px_#00ff66] dark:shadow-[0_0_20px_#4B0082,0_0_40px_#4B0082,0_0_60px_#4B0082]"></div>
              </div>

              {/* Right icons */}
              <div className="flex flex-col gap-3 pl-4 flex-1">
                {techCategories.map((category, index) => (
                  <div key={index} className="flex flex-row items-center gap-5">
                    <motion.div
                      className="flex flex-row flex-wrap gap-5"
                      variants={fadeIn("right", "spring", 0.75)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                    >
                      {(technologies[category.key] || []).map((tech) => (
                        <div key={tech.name} className="relative group">
                          {isMounted && (
                            <Tilt
                              tiltMaxAngleX={15}
                              tiltMaxAngleY={15}
                              perspective={800}
                              transitionSpeed={1500}
                              scale={1.02}
                              className="relative flex items-center justify-center"
                            >
                              <Link
                                href={tech.link}
                                target="_blank"
                                className="relative flex items-center justify-center"
                              >
                                <div className="relative w-[50px] h-[50px] bg-bgSecondaryDark dark:bg-bgSecondaryLight rounded-xl p-2 flex items-center justify-center transform transition duration-200 group-hover:scale-110 border border-white/10 hover:border-white/30">
                                  <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                                    className="object-contain p-1"
                                  />
                                </div>
                              </Link>
                            </Tilt>
                          )}
                          {!isMounted && (
                            <div className="w-[50px] h-[50px] bg-bgSecondaryDark dark:bg-bgSecondaryLight rounded-xl p-2 flex items-center justify-center border border-white/10">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                                className="object-contain p-1"
                              />
                            </div>
                          )}
                          <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -top-14 left-1/2 transform -translate-x-1/2 bg-[#1a1a2e]/90 backdrop-blur-sm text-white/90 px-4 py-2 rounded-lg text-sm transition-all duration-200 whitespace-nowrap border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] z-50 font-medium tracking-wide">
                            {tech.name}
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#1a1a2e]/90 border-r border-b border-white/20 rotate-45"></div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        )}
        {!isMounted && (
          <div className="mt-4 text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-2xl justify-between relative overflow-visible">
            {/* Static fallback content */}
            <div className="absolute inset-0 rounded-2xl opacity-90 z-0 overflow-hidden">
              {/* Light mode background */}
              <div className="block dark:hidden w-full h-full animate-gradient-move bg-[radial-gradient(circle_at_20%_20%,#fff1eb,#ace0f9)]"></div>

              {/* Dark mode background */}
              <div className="hidden dark:block w-full h-full bg-bgSecondaryLight"></div>
            </div>
            <div className="flex flex-col justify-between h-full gap-5 relative z-10">
              {techNames}
            </div>
            <div className="relative md:flex hidden mx-8 z-10">
              <div className="w-[6px] h-[600px] bg-[#00ff66] rounded-full"></div>
            </div>
            <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8 relative z-10">
              {techCategories.map((category, index) => renderTechSection(category, index))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");
