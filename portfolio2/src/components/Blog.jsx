import React from "react";
import { Navbar } from "./Navbar";
// import './BlogPage.css';
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Design",
      date: "June 7, 2024",
      content:
        "Design is not just what it looks like and feels like. Design is how it works.",
    },
    {
      title: "Creating a Portfolio",
      date: "May 22, 2024",
      content:
        "Your portfolio is the window to your work and your soul. Make it reflective of your best work.",
    },
    {
      title: "Design Trends in 2024",
      date: "April 15, 2024",
      content:
        "Stay ahead of the curve with these upcoming design trends that will shape the industry.",
    },
    {
      title: "Innovation in AI",
      date: "March 10, 2024",
      content:
        "Artificial Intelligence is transforming the way we approach problem-solving and innovation. Explore the latest advancements and their potential impacts.",
    },
    {
      title: "The Future of Machine Learning",
      date: "February 25, 2024",
      content:
        "Machine learning continues to evolve, offering new opportunities and challenges. Discover what the future holds for this exciting field.",
    },
    {
      title: "AI in Everyday Life",
      date: "January 12, 2024",
      content:
        "From smart assistants to predictive analytics, AI is becoming an integral part of our daily lives. Learn how AI technologies are being integrated into various sectors.",
    },
  ];

  const projects = [
    {
      title: "Project Alpha",
      description:
        "A revolutionary project that combines design and technology to create innovative solutions.",
      link: "#",
    },
    {
      title: "Project Beta",
      description:
        "An exploration of modern design trends and their applications in real-world projects.",
      link: "#",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Fantastic work! The design was beyond my expectations and delivered on time.",
    },
    {
      name: "Jane Smith",
      feedback: "Professional and creative. Truly a pleasure to work with!",
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="page">
          <main className="main-content">
            <section className="blog-posts">
              <h2 className="section-title">Blog Posts</h2>
              <hr style={{marginBottom:'50px'}} />
              {blogPosts.map((post, index) => (
                <div key={index} className="post">
                  <h3 className="post-title">{post.title}</h3>
                  <h3 className="post-date">{post.date}</h3>
                  <h3 className="post-content">{post.content}</h3>
                </div>
              ))}
            </section>
            <aside className="sidebar">
              <section className="about">
                <h2 className="section-title">About Me</h2>
                <hr style={{marginBottom:'25px', marginTop:'-13px'}} />
                <h3>
                  Hello! I'm a designer passionate about creating beautiful and
                  functional designs. Welcome to my blog!
                </h3>
              </section>
              <section className="links">
                <h2 className="section-title">Useful Links</h2>
                <hr style={{marginBottom:'25px', marginTop:'-13px'}} />
                <ul>
                  <Link to="/portfolio" className="link">
                    <a className="sidebar-link">Portfolio</a>
                  </Link>
                  <Link to="/about" className="link">
                    <a className="sidebar-link">About</a>
                  </Link>
                  <Link to="/services" className="link">
                    <a className="sidebar-link">Services</a>
                  </Link>
                </ul>
                <section className="testimonials">
                  <h2 className="section-title">Testimonials</h2>
                  <hr style={{marginBottom:'25px', marginTop:'-13px'}} />
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                      <h3 className="testimonial-feedback">
                        "{testimonial.feedback}"
                      </h3>
                      <h3 className="testimonial-name">- {testimonial.name}</h3>
                    </div>
                  ))}
                </section>
                <section className="projects">
            <h2 className="section-title">Recent Projects</h2>
            <hr style={{marginBottom:'25px', marginTop:'-13px'}} />
            {projects.map((project, index) => (
              <div key={index} className="blog-project">
                <h1 className="blog-project-title">{project.title}</h1>
                <h3 className="blog-project-description">
                  {project.description}
                </h3>
                <Link className="blog-project-link"><button className="blog-project-btn secondary-btn">Learn More</button>
                  
                </Link>
              </div>
            ))}
          </section>
              </section>
            </aside>
          </main>
          

          <section className="subscribe">
            <h1 className="section-title">Subscribe to A.Pattanayak</h1>
            <hr style={{marginBottom:'50px'}}/>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-btn secondary-btn">
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
