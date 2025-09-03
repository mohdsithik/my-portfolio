import "./App.css";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            {/* <span className="logo-text">Mohammed Sithik</span> */}
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#availability" className="nav-link">
                Availability
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Mohammed Sithik</span>
              <span className="title">Frontend Engineer</span>
            </h1>
            <p className="hero-description">
              I specialize in building seamless digital experiences across
              platforms — from responsive web applications to powerful mobile
              apps for iOS and Android, and even desktop and tablet
              applications. My focus is on creating solutions that are fast,
              functional, and user-friendly, ensuring a smooth experience no
              matter the device.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="avatar-container">
                  <div className="avatar-glow"></div>
                  <div className="avatar-image">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQEdTNtuE4JzfQ/profile-displayphoto-shrink_800_800/B56ZSuS.F0GUAg-/0/1738090996727?e=1759968000&v=beta&t=On1alQQt4ymZHgqYHWvBGqKbur3cEWASBACn7ThGnpw"
                      alt="Sithik"
                      className="profile-photo"
                    />
                  </div>
                  {/* <div className="tech-badges">
                    <div className="tech-badge badge-1">⚛️</div>
                    <div className="tech-badge badge-2">📱</div>
                    <div className="tech-badge badge-3">🔥</div>
                    <div className="tech-badge badge-4">🟨</div>
                    <div className="tech-badge badge-5">🔷</div>
                    <div className="tech-badge badge-6">🍃</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate <strong>Frontend Engineer</strong> and
                Full-Stack Developer with a love for creating innovative,
                user-friendly, and impactful digital experiences. With expertise
                in modern web technologies, I specialize in building
                applications that work flawlessly across
                <strong>
                  Web, Mobile (iOS & Android), Desktop, and Tablet
                </strong>{" "}
                platforms.
              </p>
              <p>
                Beyond coding, I enjoy exploring new technologies, contributing
                to open-source projects, and sharing knowledge with the
                developer community — always striving to grow, innovate, and
                inspire others.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <div className="skill-item">React</div>
                <div className="skill-item">React Native</div>
                <div className="skill-item">Redux</div>
                <div className="skill-item">Redux-Toolkit</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">TypeScript</div>
                <div className="skill-item">HTML5</div>
                <div className="skill-item">CSS3</div>
                <div className="skill-item">Sass</div>
                <div className="skill-item">Firebase</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <div className="skill-item">Node.js</div>
                <div className="skill-item">MongoDB</div>
                <div className="skill-item">REST APIs</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <div className="skill-item">Git</div>
                <div className="skill-item">Figma</div>
                <div className="skill-item">VS Code</div>
                <div className="skill-item">Android Studio</div>
                <div className="skill-item">X Code</div>
                <div className="skill-item">XD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openProjectModal(project)}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <img src={project.icon} className="project-icon" />
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
                        live Site 🔗
                      </a>
                    )}
                    <a></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="availability">
        <div className="container">
          <h2 className="section-title">Freelancing Services</h2>
          <div className="availability-content">
            <div className="availability-hero">
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span className="status-text">Available for Projects</span>
              </div>
              <h3>Ready to Transform Your Ideas into Reality</h3>
              <p>
                I'm currently available for freelance work and excited to
                collaborate on innovative projects. With expertise in full-stack
                development, mobile apps, and modern web technologies, I'm here
                to help you build exceptional digital experiences.
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🌐</div>
                <h4>Web Development</h4>
                <p>
                  Modern, responsive websites and web applications using React,
                  Node.js, and cutting-edge technologies.
                </p>
                <ul>
                  <li>E-commerce Platforms</li>
                  <li>Business Websites</li>
                  <li>Web Applications</li>
                  <li>API Development</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📱</div>
                <h4>Mobile Development</h4>
                <p>
                  Cross-platform mobile applications using React Native for iOS
                  and Android with native performance.
                </p>
                <ul>
                  <li>iOS & Android Apps</li>
                  <li>Cross-platform Solutions</li>
                  <li>App Store Deployment</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>

            <div className="availability-details">
              <div className="detail-item">
                <span className="detail-icon">⏰</span>
                <div className="detail-content">
                  <h4>Response Time</h4>
                  <p>Within 24 hours</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div className="detail-content">
                  <h4>Project Types</h4>
                  <p>Web Apps, Mobile Apps, APIs, E-commerce</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🌍</span>
                <div className="detail-content">
                  <h4>Availability</h4>
                  <p>Remote work worldwide</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💰</span>
                <div className="detail-content">
                  <h4>Pricing</h4>
                  <p>Competitive & flexible rates</p>
                </div>
              </div>
            </div>

            <div className="availability-cta">
              <a href="#contact" className="btn btn-primary">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mohammed-sithik-s-2403a222b/"
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mohdsithik"
                  className="social-link"
                >
                  GitHub
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/SithikMohd?t=pcIvcO99qMhhgHr9FLPecw&s=09"
                  className="social-link"
                >
                  Twitter
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/mohd_sithik_?igsh=MW1leDZxMmRybWVtOA=="
                  className="social-link"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="contact-form">
              {" "}
              <form>
                {" "}
                <div className="form-group">
                  {" "}
                  <input type="text" placeholder="Your Name" required />{" "}
                </div>{" "}
                <div className="form-group">
                  {" "}
                  <input type="email" placeholder="Your Email" required />{" "}
                </div>{" "}
                <div className="form-group">
                  {" "}
                  <input type="text" placeholder="Subject" required />{" "}
                </div>{" "}
                <div className="form-group">
                  {" "}
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>{" "}
                </div>{" "}
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Send Message{" "}
                </button>{" "}
              </form>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Sithik. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              ×
            </button>
            <div className="modal-header">
              <img src={selectedProject.icon} className="modal-icon" />
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
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
