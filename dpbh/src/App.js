import React, { useState, useEffect } from 'react';
import Typed from 'typed.js'; // Assuming you're using the Typed.js library for the typewriter effect

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: [
        "Hidden Costs in E-commerce",
        "Uncover Additional Expenses",
        "Ensure Accurate Budgeting",
        "Consider Payment Gateway Fees",
        "Account for Shipping Costs",
        "Understand Tax Compliance",
        "Beware of Customs Duties",
        "Factor in Return and Refund Costs",
        "Account for E-commerce Platform Fees",
        "Consider Security and Compliance",
        "Include Marketing and Advertising Expenses",
        "Factor in Hosting and Maintenance Costs",
        "Plan for Technology Integration Expenses",
        "Don't Forget Customer Service Costs",
        "Ensure Transparent Communication with Customers"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      typed.destroy(); // Clean up the Typed.js instance
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        TEAM <span>EXCALIBUR</span>
      </a>
      <div className={`bx bx-menu ${menuActive ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></div>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="reference.html">Documentation</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>Exploring Hidden Costs :</h1>
        <div className="text-animate">
          <h3>Welcome</h3>
        </div>
        <p>
          In the world of online shopping, there's often more than meets the eye. Hidden costs, those sneaky
          additional charges not readily apparent during a purchase, play a significant role. This presentation
          introduces our focus on exposing these concealed fees using web scraping, particularly with Beautiful
          Soup. Our goal is simple – to empower consumers with the knowledge they need to make informed decisions.
          Join us as we uncover the hidden side of e-commerce and discuss its impact on your shopping experience.
        </p>
        <div className="btn-box">
          <a href="reference.html" className="btn">Learn More</a>
          <a target="_blank" href="https://github.com/SabarishCodeWizard/HiddenCost-Chrome-Extension" className="btn">Project Source</a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-member row-1">
        <div className="about-member">
          <div className="about-img">
            <img src="images/naveen.png" alt="Naveenkumar" />
            <span className="circle-spin"></span>
          </div>
          <div className="about-content">
            <h3>NAVEENKUMAR</h3>
            <p>Frontend</p>
          </div>
        </div>
        <div className="about-member">
          <div className="about-img">
            <img src="images/sabarish.jpg" alt="Sabarish" />
            <span className="circle-spin"></span>
          </div>
          <div className="about-content">
            <h3>SABARISH</h3>
            <p>Backend</p>
          </div>
        </div>
        <div className="about-member">
          <div className="about-img">
            <img src="images/mugundhan.jpg" alt="Mugundhan" />
            <span className="circle-spin"></span>
          </div>
          <div className="about-content">
            <h3>MUGUNDHAN</h3>
            <p>Frontend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form action="https://formspree.io/f/moqzggqb" method="POST" className="contact__form">
        <div className="input-box">
          <div className="input-field">
            <input type="text" name="First Name" placeholder="First Name" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" name="Last Name" placeholder="Last Name" required />
            <span className="focus"></span>
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input type="number" name="Mobile Number" placeholder="Your Mobile Number" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="email" name="Email address" placeholder="Email Address" required />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea name="Message" cols="30" rows="10" placeholder="Your message is required...."></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box btns">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Team Excalibur</p>
      </div>
      <div className="footer-iconTop">
        <a href="#"><i className="bx bx-up-arrow-alt"></i></a>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
