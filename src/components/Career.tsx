import { useEffect, useRef } from "react";
import "./styles/Career.css";

const Career = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Timeline animation
      if (timelineRef.current) {
        const element = timelineRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const progress = Math.min(
            Math.max(
              (windowHeight - rect.top) / (windowHeight + rect.height),
              0
            ),
            1
          );
          element.style.maxHeight = `${progress * 100}%`;
        }
      }

      // Section animation
      if (sectionRef.current) {
        const element = sectionRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25) {
          element.classList.add('section-visible');
        } else {
          element.classList.remove('section-visible');
        }
      }

      // Items animation
      itemRefs.current.forEach((item) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25) {
            item.classList.add('item-visible');
          } else {
            item.classList.remove('item-visible');
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="career-section" ref={sectionRef}>
      <div className="career-container">
        <h2 className="career-title">experience</h2>
        
        <div className="career-content">
          <div className="career-timeline" ref={timelineRef}>
            <div className="career-dot"></div>
          </div>

          <div className="career-items">
            <div className="career-item" ref={el => itemRefs.current[0] = el}>
              <div className="career-item-content">
                <h3>Graduate Student Assistant</h3>
                <h4>Loyola Marymount University, CA, USA</h4>
                <ul>
                  <li>Manage and update the Media Arts and a Just Society (MAJS) program website using the university's content management system (CMS), ensuring timely, accurate, and accessible information for students and faculty.</li>
                  <li>Oversee the operational aspects of the MAJS Guide, providing technical and administrative support to both students and faculty.</li>
                  <li>Assist students in the end-to-end production of podcasts, offering expertise in audio editing, technical troubleshooting, and creative direction.</li>
                  <li>Coordinate and organize MAJS program events, including workshops and seminars, enhancing student engagement and program visibility.</li>
                  <li>Support students in academic and extracurricular initiatives, fostering a collaborative and inclusive learning environment.</li>
                </ul>
              </div>
            </div>

            <div className="career-item" ref={el => itemRefs.current[1] = el}>
              <div className="career-item-content">
                <h3>Technical Intern</h3>
                <h4>Keryar, Anand, India</h4>
                <ul>
                  <li>Contributed to the development of a live web application, "Salon Management System," utilizing React.js for the frontend and Node.js for the backend.</li>
                  <li>Implemented user authentication, appointment scheduling, and real-time notifications, improving the overall user experience.</li>
                  <li>Collaborated with cross-functional teams to deliver project milestones within tight deadlines, following Agile methodologies.</li>
                </ul>
              </div>
            </div>

            <div className="career-item" ref={el => itemRefs.current[2] = el}>
              <div className="career-item-content">
                <h3>Technical Intern</h3>
                <h4>SparksToIdeas, Ahmedabad, India</h4>
                <ul>
                  <li>Developed and maintained features for the "Evenet" event management platform using Python and Django.</li>
                  <li>Designed and implemented database models, RESTful APIs, and user interfaces to streamline event organization and participant management.</li>
                  <li>Enhanced platform reliability and performance through rigorous testing and code optimization.</li>
                </ul>
              </div>
            </div>

            <div className="career-item" ref={el => itemRefs.current[3] = el}>
              <div className="career-item-content">
                <h3>Technical Intern</h3>
                <h4>Praxware Technologies, Ahmedabad, India</h4>
                <ul>
                  <li>Engineered core modules for "ADCASE," a legal case management system, using Python and Django.</li>
                  <li>Built secure communication channels between clients and lawyers, enabling document sharing, appointment scheduling, and case tracking.</li>
                  <li>Developed user-friendly dashboards and automated reminders, increasing efficiency for legal professionals and clients.</li>
                  <li>Collaborated with stakeholders to gather requirements and deliver tailored solutions, ensuring high user satisfaction.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
