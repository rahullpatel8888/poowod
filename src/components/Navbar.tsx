import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const AvatarModal = ({ onClose }: { onClose: () => void }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <aside className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-content">
          <img
            src="/assets/avatar.JPG"
            alt="Vraj Patel"
            className="modal-image"
          />
          <button
            onClick={onClose}
            className="modal-close"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
      </div>
    </aside>
  );
};

const Navbar = () => {
  const [avatarToggle, setAvatarToggle] = useState(false);

  useEffect(() => {
    if (avatarToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [avatarToggle]);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="left-section">
          <div className="flex items-center gap-6">
            <div
              className="avatar-container"
              onClick={() => setAvatarToggle(true)}
            >
              <img
                src="/assets/avatar.JPG"
                alt="Vraj Patel"
                className="avatar-image"
              />
            </div>
            <div className="navbar-title">
              Vraj Patel &nbsp;
              <span className="hidden lg:inline">| Full Stack Developer</span>
            </div>
          </div>
        </div>
        
        <div className="navbar-connect-wrapper">
        <a
          href="mailto:vrajpatel342008@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vrajpatel342008@gmail.com
        </a>
        </div>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#skills" href="#skills">
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a data-href="#projects" href="#projects">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      {avatarToggle && <AvatarModal onClose={() => setAvatarToggle(false)} />}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
