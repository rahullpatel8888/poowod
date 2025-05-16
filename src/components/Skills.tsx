import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./styles/Skills.css";

interface TechItem {
  name: string;
  icon: string;
  link: string;
}

interface Technologies {
  languages: TechItem[];
  frameworks: TechItem[];
  libraries: TechItem[];
  databases: TechItem[];
  tools: TechItem[];
  environments: TechItem[];
  [key: string]: TechItem[];
}

interface TechCategory {
  key: keyof Technologies;
  label: string;
}

const techCategories: TechCategory[] = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'libraries', label: 'Libraries' },
  { key: 'databases', label: 'Databases' },
  { key: 'tools', label: 'Tools' },
  { key: 'environments', label: 'Environments' }
];

const technologies: Technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "./assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "./assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "./assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "./assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "./assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "./assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "./assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "./assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "./assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "./assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "./assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "./assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "./assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "./assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "./assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "./assets/tech/redux.png",
      link: "https://redux.js.org",
    },
    {
      name: "Prisma",
      icon: "./assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "./assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "./assets/tech/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "./assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "./assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "./assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "./assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "./assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "./assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "./assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "./assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const textVariant = () => {
  return {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25
      }
    }
  };
};

function Skills() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ amount: 0.25 }}
        className="w-full flex flex-col items-center"
      >
        <motion.h2 
          className="skills-title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ amount: 0.25 }}
        >
          Skills.
        </motion.h2>
      </motion.div>

      {isMounted && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ amount: 0.25 }}
        >
          <Tilt
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            perspective={1000}
            scale={1.0}
            transitionSpeed={2000}
            className="skills-container"
          >
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              viewport={{ amount: 0.25 }}
              className="skills-content neon-box-animated active:scale-[0.99] transition-transform"
            >
              {/* Animated gradient background */}
              <div className="animate-gradient-move"></div>

              {/* Left labels */}
              <div className="skills-labels">
                {techCategories.map((category, index) => (
                  <h3
                    key={index}
                    className="category-label"
                  >
                    {category.label}
                  </h3>
                ))}
              </div>

              {/* Partition line with glow effect */}
              <div className="partition-line"></div>

              {/* Tech icons */}
              <div className="tech-grid">
                {techCategories.map((category, index) => (
                  <div key={index} className="tech-category" data-category={category.label}>
                    <motion.div
                      className="tech-icons"
                      variants={{
                        hidden: { x: 50, opacity: 0 },
                        show: { x: 0, opacity: 1 }
                      }}
                      initial="hidden"
                      whileInView="show"
                      exit="hidden"
                      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                      viewport={{ amount: 0.25 }}
                    >
                      {(technologies[category.key] || []).map((tech) => (
                        <div key={tech.name} className="tech-item">
                          {isMounted && (
                            <Tilt
                              tiltMaxAngleX={15}
                              tiltMaxAngleY={15}
                              perspective={800}
                              transitionSpeed={1500}
                              scale={1.02}
                              className="relative flex items-center justify-center"
                            >
                              <a
                                href={tech.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center"
                              >
                                <div className="tech-icon-container">
                                  <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="tech-icon w-full h-full object-contain p-1"
                                    style={{ width: '100%', height: '100%' }}
                                  />
                                </div>
                              </a>
                            </Tilt>
                          )}
                          <div className="tech-tooltip">
                            {tech.name}
                            <div className="tooltip-arrow"></div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        </motion.div>
      )}
    </section>
  );
}

export default Skills; 