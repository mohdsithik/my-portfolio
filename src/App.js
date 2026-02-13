import "./App.css";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import profileImage from "./assets/profile.png";

const CONTACT_EMAIL = "mohdsithik0786@gmail.com";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // "success" | "error" | null
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const availabilityRef = useRef(null);
  const contactRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-80px" });
  const availabilityInView = useInView(availabilityRef, { once: true, margin: "-80px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormStatus(null);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus("error");
      return;
    }

    setSending(true);
    setFormStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: CONTACT_EMAIL,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          setFormStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => setFormStatus("error")
      )
      .finally(() => setSending(false));
  };

  const projects = [
    {
      id: 1,
      title: "Club Mahindra – Holiday Resort Booking App",
      description:
        "A cross-platform mobile application (Android, iOS, and Tablet) built with React Native for Club Mahindra members to explore, book, and manage holiday experiences across resorts in India and abroad.",
      tech: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Firebase",
        "REST APIs",
      ],

      icon: "https://play-lh.googleusercontent.com/_50kZADzB84ceOBqnhJIaDzQeflt1138NDlabIjp-ls6DnxXJGla4Ri4we_btBHw-2U=w480-h960-rw",
      details: {
        overview:
          "The Club Mahindra mobile app delivers a seamless holiday planning experience across Android, iOS, and Tablet devices. It enables members to browse resorts, check availability, make reservations, manage membership details, handle secure payments, raise service requests, and track their status in real time.",
        features: [
          "Cross-platform support for Android, iOS, and Tablet",
          "User authentication and membership management",
          "Resort browsing with availability search and filtering",
          "Booking and reservation management",
          "Secure payment integration",
          "My Account with profile and edit flow",
          "Request and Status (ticket raising and tracking)",
          "Help and support section",
          "Responsive and intuitive UI across devices",
        ],
        challenges:
          "Ensuring consistent performance across Android, iOS, and Tablet devices while handling complex membership rules and real-time booking updates.",
        results:
          "Delivered a smooth and user-friendly experience that improved member engagement and simplified the holiday booking process across all platforms.",
        assets: [
          "https://play-lh.googleusercontent.com/sjBR9oS1Rs0BIgxXsbZy7gClozymr5M3nW0F2LJCOOAf2NuQwA9VrdMmvNnEaqkgc9g=w5120-h2880-rw",
          "https://play-lh.googleusercontent.com/TJKEtV24NoFLkIP8p_GuwJ5UpQeqBO-T4ZxNuF3-lKNAKtvS9uwAtHtJBf8ZBkEKgJLD=w5120-h2880-rw",
          "https://play-lh.googleusercontent.com/i7XPeRrK8UfvUuUnbzE70F3zowiCCauZNjYPi9vL14qI5y01_atBhFPuwdwRgDc-isME=w5120-h2880-rw",
          "https://play-lh.googleusercontent.com/I6B2OojwdxWvcEz_AKLnO5TfJUOSA8POUVjcZoftV-Af9dRfdkiQ9AN5BBjt4W6Pw4s=w5120-h2880-rw",
          "https://play-lh.googleusercontent.com/5aZZVLd7fO1053XoPQF99tSswjeEmKSkhfD7BCwveOefvOVcnDkc1INvvR3bsbStito=w5120-h2880-rw",
        ],
        playStoreUrl:
          "https://play.google.com/store/apps/details?id=co.clubmahindra.mahindraholidays",
        appStoreUrl: "https://apps.apple.com/in/app/club-mahindra/id1146810334",
      },
    },

    {
      id: 2,
      title: "Isansys Patient Monitoring Platform",
      description:
        "A healthcare application enabling remote patient monitoring with real-time vital tracking, analytics, and secure cloud storage.",
      tech: ["React Native", "Node.js", "MongoDB", "Firebase", "AWS"],
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4Drsee2CNvAjWVoaOtg-SrleSuH0CCQ7IQ&s",
      details: {
        overview:
          "Isansys is a digital healthcare solution designed for hospitals, clinics, and doctors to monitor patients remotely. The system integrates wearable medical devices with mobile and web applications, allowing real-time vital tracking such as heart rate, oxygen levels, and temperature.",
        features: [
          "Remote monitoring of patient vitals",
          "Integration with wearable medical devices",
          "Real-time data synchronization via secure APIs",
          "Alerts and notifications for abnormal vitals",
          "Patient history and medical records dashboard",
          "Role-based access for doctors, patients, and admins",
          "Mobile apps for Android, iOS, and tablets",
          "Web dashboard for doctors and hospital staff",
          "HIPAA-compliant data storage and security",
        ],
        challenges:
          "Ensuring real-time accuracy and reliability of vital signs data from wearable devices, handling large volumes of medical data securely, and maintaining compliance with healthcare regulations.",
        results:
          "Enabled hospitals and doctors to remotely monitor 5000+ patients, reduced hospital visits by 40%, and improved patient care outcomes through early detection of critical conditions.",

        liveUrl: "https://www.isansys.in/", // official site if needed
      },
    },
    {
      id: 3,
      title: "Open Me Player",
      description:
        "A powerful and lightweight Android video player app supporting multiple formats, playlists, offline playback, and gesture-based controls for a smooth and immersive viewing experience.",
      tech: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Expo",
        "Video APIs",
      ],
      icon: "https://play-lh.googleusercontent.com/l9B-ivMnuDYRvVIiK4MefdefsN6ki6Gd-Zoa_VULXAEuSjfDggG76mRJEYxMrA_KtEE=w480-h960-rw",
      details: {
        overview:
          "Open Me Player is a custom-built video player application designed for Android and iOS devices. It provides a seamless video playback experience with support for multiple file formats, playlists, offline access, and intuitive gesture controls. The app is lightweight, user-friendly, and optimized for both phones and tablets.",
        features: [
          "Supports multiple video formats (MP4, MKV, AVI, etc.)",
          "Smooth playback with gesture controls (seek, volume, brightness)",
          "Playlist management with add/remove options",
          "Offline video playback support",
          "Background play and picture-in-picture mode",
          "Dark mode and customizable themes",
          "Cross-platform support (Android, iOS, and tablets)",
          "Local file system access for video import",
          "Optimized for performance and battery usage",
        ],
        challenges:
          "Handling large video files efficiently, ensuring smooth playback across devices, and implementing advanced player features like PiP and background play without draining device resources.",
        results:
          "Achieved stable and smooth video playback with positive feedback on usability. Optimized performance reduced memory usage by 25% compared to default system players.",
        playStoreUrl:
          "https://play.google.com/store/apps/details?id=openme.production",
        assets: [
          "https://play-lh.googleusercontent.com/TmDWNMaLF43HfvndCgWqoElMfGsU8KTGtzFveIx97cUwKsmVuLrdKEltAb8bCxMfnOI=w5120-h2880-rw",
          "https://play-lh.googleusercontent.com/gElIpNTLFd3M-sliHhoDkxY8Ky-egWux-ZIJoMJt_ddNm-bSsFkjz1ggEhwqZ3eE864=w5120-h2880-rw",
          "https://play-lh.googleusercontent.com/nHub8BbRHR3-Isd10Vo8yBuW2gffgrHEMuoprW6ydhMjV9AQEQi-IpFPlcWedGwcLA=w5120-h2880-rw",
          "https://play-lh.googleusercontent.com/ih00LNmlfrk8_5LdYIG7IYAeBBwGErL1HZagmxsb9OOxGYPly3lhamfML_NjhRgexJ0=w5120-h2880-rw",
        ],
      },
    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    scrolled: { boxShadow: "0 8px 32px rgba(139, 92, 246, 0.15)" },
  };

  const stagger = { staggerChildren: 0.08, delayChildren: 0.1 };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <div className="App">
      {/* Navigation */}
      <motion.nav
        className={`navbar ${navScrolled ? "navbar-scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="nav-container">
          <div className="nav-logo" />
          <ul className="nav-menu">
            {["Home", "About", "Skills", "Availability", "Projects", "Contact"].map((label, i) => (
              <motion.li key={label} className="nav-item" variants={fadeIn}>
                <a href={`#${label === "Home" ? "home" : label.toLowerCase()}`} className="nav-link">
                  {label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={stagger}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <motion.h1 className="hero-title" variants={stagger}>
              <motion.span className="greeting" variants={fadeUp}>Hello, I'm</motion.span>
              <motion.span className="name" variants={fadeUp}>Mohammed Sithik</motion.span>
              <motion.span className="title" variants={fadeUp}>Frontend Engineer</motion.span>
            </motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>
              I specialize in building seamless digital experiences across
              platforms — from responsive web applications to powerful mobile
              apps for iOS and Android, and even desktop and tablet
              applications. My focus is on creating solutions that are fast,
              functional, and user-friendly, ensuring a smooth experience no
              matter the device.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeUp}>
              <motion.a href="#projects" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                View My Work
              </motion.a>
              <motion.a href="#contact" className="btn btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="profile-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="avatar-circle">
                <img
                  src={profileImage}
                  alt="Mohammed Sithik"
                  className="profile-photo"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about" ref={aboutRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="about-content"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <div className="about-text">
              <motion.p variants={fadeUp}>
                I'm a passionate <strong>Frontend Engineer</strong> and
                Full-Stack Developer with a love for creating innovative,
                user-friendly, and impactful digital experiences. With expertise
                in modern web technologies, I specialize in building
                applications that work flawlessly across
                <strong>
                  {" "}Web, Mobile (iOS & Android), Desktop, and Tablet
                </strong>{" "}
                platforms.
              </motion.p>
              <motion.p variants={fadeUp}>
                Beyond coding, I enjoy exploring new technologies, contributing
                to open-source projects, and sharing knowledge with the
                developer community — always striving to grow, innovate, and
                inspire others.
              </motion.p>
              <motion.div className="stats" variants={stagger}>
                {[
                  { number: "10+", label: "Projects" },
                  { number: "3+", label: "Years Experience" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((item, i) => (
                  <motion.div key={i} className="stat" variants={fadeUp} whileHover={{ y: -8, scale: 1.02 }}>
                    <span className="stat-number">{item.number}</span>
                    <span className="stat-label">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills" ref={skillsRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="skills-grid"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={stagger}
          >
            {[
              {
                title: "Frontend",
                items: ["React", "React Native", "Redux", "Redux-Toolkit", "JavaScript", "TypeScript", "HTML5", "CSS3", "Sass", "Firebase"],
              },
              { title: "Backend", items: ["Node.js", "MongoDB", "REST APIs"] },
              { title: "Tools & Others", items: ["Git", "Figma", "VS Code", "Android Studio", "X Code", "XD"] },
            ].map((cat, i) => (
              <motion.div key={cat.title} className="skill-category" variants={fadeUp} whileHover={{ y: -6 }}>
                <h3>{cat.title}</h3>
                <div className="skill-items">
                  {cat.items.map((item, j) => (
                    <motion.div
                      key={item}
                      className="skill-item"
                      variants={fadeUp}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects" ref={projectsRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="projects-grid"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={stagger}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={fadeUp}
                whileHover={{ y: -12, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.99 }}
                onClick={() => openProjectModal(project)}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <img src={project.icon} className="project-icon" alt="" />
                  </div>
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.details.playStoreUrl && (
                      <a
                        href={project.details.playStoreUrl}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Play Store 🔗
                      </a>
                    )}
                    {project.details.appStoreUrl && (
                      <a
                        href={project.details.appStoreUrl}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        App Store 🔗
                      </a>
                    )}
                    {project.details.liveUrl && (
                      <a
                        href={project.details.liveUrl}
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Site 🔗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="availability" ref={availabilityRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={availabilityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Freelancing Services
          </motion.h2>
          <motion.div
            className="availability-content"
            initial="hidden"
            animate={availabilityInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div className="availability-hero" variants={fadeUp}>
              <div className="availability-status">
                <div className="status-indicator available" />
                <span className="status-text">Available for Projects</span>
              </div>
              <h3>Ready to Transform Your Ideas into Reality</h3>
              <p>
                I'm currently available for freelance work and excited to
                collaborate on innovative projects. With expertise in full-stack
                development, mobile apps, and modern web technologies, I'm here
                to help you build exceptional digital experiences.
              </p>
            </motion.div>

            <div className="services-grid">
              {[
                {
                  icon: "🌐",
                  title: "Web Development",
                  desc: "Modern, responsive websites and web applications using React, Node.js, and cutting-edge technologies.",
                  list: ["E-commerce Platforms", "Business Websites", "Web Applications", "API Development"],
                },
                {
                  icon: "📱",
                  title: "Mobile Development",
                  desc: "Cross-platform mobile applications using React Native for iOS and Android with native performance.",
                  list: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Deployment", "UI/UX Design"],
                },
              ].map((s, i) => (
                <motion.div
                  key={s.title}
                  className="service-card"
                  variants={fadeUp}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="service-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div className="availability-details" variants={stagger}>
              {[
                { icon: "⏰", title: "Response Time", text: "Within 24 hours" },
                { icon: "💼", title: "Project Types", text: "Web Apps, Mobile Apps, APIs, E-commerce" },
                { icon: "🌍", title: "Availability", text: "Remote work worldwide" },
                { icon: "💰", title: "Pricing", text: "Competitive & flexible rates" },
              ].map((d) => (
                <motion.div key={d.title} className="detail-item" variants={fadeUp}>
                  <span className="detail-icon">{d.icon}</span>
                  <div className="detail-content">
                    <h4>{d.title}</h4>
                    <p>{d.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="availability-cta" variants={fadeUp}>
              <motion.a href="#contact" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                Start Your Project
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" ref={contactRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="contact-content"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div className="contact-info" variants={fadeUp}>
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>mohdsithik0786@gmail.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>+91 7868054316</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>Nagapattinam, Tamilnadu</span>
                </div>
              </div>
              <div className="social-links">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-sithik-s-2403a222b/" },
                  { label: "GitHub", href: "https://github.com/mohdsithik" },
                  { label: "Twitter", href: "https://x.com/SithikMohd?t=pcIvcO99qMhhgHr9FLPecw&s=09" },
                  { label: "Instagram", href: "https://www.instagram.com/mohd_sithik_?igsh=MW1leDZxMmRybWVtOA==" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={s.href}
                    className="social-link"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div className="contact-form" variants={fadeUp}>
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleContactChange}
                    required
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleContactChange}
                    required
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleContactChange}
                    required
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleContactChange}
                    required
                    disabled={sending}
                  />
                </div>
                {formStatus === "success" && (
                  <p className="form-status form-status-success">Message sent! I&apos;ll get back to you soon.</p>
                )}
                {formStatus === "error" && (
                  <p className="form-status form-status-error">
                    {process.env.REACT_APP_EMAILJS_SERVICE_ID
                      ? "Failed to send. Please try again or email me directly."
                      : "Email not configured. Please email mohdsithik0786@gmail.com directly."}
                  </p>
                )}
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  disabled={sending}
                  whileHover={!sending ? { scale: 1.02 } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                >
                  {sending ? "Sending…" : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sithik. All rights reserved.</p>
        </div>
      </motion.footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            className="modal-overlay"
            onClick={closeProjectModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.button
                className="modal-close"
                onClick={closeProjectModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            <div className="modal-header">
              <img src={selectedProject.icon} className="modal-icon" alt="" />
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>Overview</h3>
                <p>{selectedProject.details.overview}</p>
              </div>
              <div className="modal-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h3>Challenges & Solutions</h3>
                <p>{selectedProject.details.challenges}</p>
              </div>
              <div className="modal-section">
                <h3>Results</h3>
                <p>{selectedProject.details.results}</p>
              </div>

              {/* Assets Section */}
              {selectedProject.details.assets && (
                <div className="modal-section">
                  <h3 className="mb-2 text-lg font-semibold">
                    Screenshots & Assets
                  </h3>
                  <div>
                    {selectedProject.details.assets.map((asset, index) => (
                      <img
                        key={index}
                        src={asset}
                        alt={`Asset ${index + 1}`}
                        className="scrImahe"
                        // className="w-40 h-80 object-cover rounded-lg shadow-md flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              {selectedProject.details.playStoreUrl && (
                <a
                  href={selectedProject.details.playStoreUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Store 🔗
                </a>
              )}
              {selectedProject.details.appStoreUrl && (
                <a
                  href={selectedProject.details.appStoreUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store 🔗
                </a>
              )}

              {selectedProject.details.liveUrl && (
                <a
                  href={selectedProject.details.liveUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site 🔗
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
