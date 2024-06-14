import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const cards = [
  {
    id: 1,
    img: "../img/image1.png",
    title: "New Product Admin Dashboard",
    description:
      "A comprehensive dashboard for managing products and orders efficiently. This dashboard provides a user-friendly interface with advanced features to streamline the process of product management and order processing. With intuitive design and powerful functionality, it allows users to track inventory, analyze sales data, and generate insightful reports to make informed decisions.",
  },
  {
    id: 2,
    img: "../img/image2.png",
    title: "HR Management System",
    description:
      "An intuitive interface for managing employee records and payroll. This system offers a centralized platform for HR tasks, including employee onboarding, attendance tracking, performance evaluation, and payroll management. With robust security measures and customizable features, it ensures compliance with HR regulations and enhances organizational efficiency.",
  },
  {
    id: 3,
    img: "../img/image3.png",
    title: "Project Tracker",
    description:
      "Track project progress and collaborate with team members seamlessly. This tracker enables real-time monitoring of project milestones, task assignments, and resource allocation. With interactive dashboards and communication tools, it facilitates effective collaboration among team members, leading to improved project outcomes and client satisfaction.",
  },
  {
    id: 4,
    img: "../img/image4.png",
    title: "Financial Dashboard",
    description:
      "Monitor financial metrics and generate reports with ease. This dashboard provides a comprehensive overview of financial performance, including revenue, expenses, and profit margins. With customizable reporting tools and data visualization features, it allows users to analyze trends, identify opportunities, and make strategic financial decisions.",
  },
  {
    id: 5,
    img: "../img/image5.png",
    title: "Marketing Analytics",
    description:
      "Analyze marketing campaigns and optimize strategies for better ROI. This analytics platform offers insights into marketing channels, audience demographics, and campaign effectiveness. With predictive analytics and A/B testing capabilities, it empowers marketers to refine their strategies, increase engagement, and maximize return on investment.",
  },
  {
    id: 6,
    img: "../img/image6.png",
    title: "Customer Support",
    description:
      "Manage customer inquiries and support tickets efficiently. This support system centralizes customer communication channels, including email, chat, and phone. With ticket management features and automated workflows, it ensures timely response to customer queries, leading to enhanced customer satisfaction and loyalty.",
  },
  {
    id: 7,
    img: "../img/image1.png",
    title: "Inventory Management",
    description:
      "Keep track of stock levels and manage inventory with precision. This inventory system offers real-time visibility into stock levels, locations, and movements. With barcode scanning and inventory forecasting tools, it helps businesses optimize inventory levels, reduce stockouts, and improve supply chain efficiency.",
  },
  {
    id: 8,
    img: "../img/image2.png",
    title: "Sales Dashboard",
    description:
      "Visualize sales data and track performance metrics. This dashboard provides key insights into sales trends, customer behavior, and revenue growth. With interactive charts and drill-down capabilities, it enables sales teams to identify opportunities, prioritize leads, and drive revenue growth.",
  },
  {
    id: 9,
    img: "../img/image3.png",
    title: "Task Management",
    description:
      "Organize and prioritize tasks for better productivity. This task management tool offers a centralized platform for task assignment, tracking, and collaboration. With task categorization and deadline reminders, it helps individuals and teams stay organized, focused, and productive.",
  },
  {
    id: 10,
    img: "../img/image4.png",
    title: "Social Media Dashboard",
    description:
      "Manage and analyze social media activities from one place. This dashboard aggregates data from various social media platforms, including Facebook, Twitter, and Instagram. With social listening and engagement tracking features, it enables businesses to monitor brand mentions, analyze audience sentiment, and optimize social media marketing strategies.",
  },
  {
    id: 11,
    img: "../img/image5.png",
    title: "SEO Analytics",
    description:
      "Track website performance and optimize for search engines. This analytics platform offers insights into website traffic, keyword rankings, and backlink profiles. With competitor analysis and SEO auditing tools, it helps businesses identify SEO opportunities, improve search engine visibility, and drive organic traffic.",
  },
  {
    id: 12,
    img: "../img/image6.png",
    title: "Content Management",
    description:
      "Create and manage digital content effortlessly. This content management system streamlines the process of content creation, publishing, and distribution. With content scheduling and version control features, it empowers content creators to collaborate effectively, maintain brand consistency, and engage audiences across multiple channels.",
  },
  {
    id: 13,
    img: "../img/image1.png",
    title: "Fitness App Dashboard",
    description:
      "Monitor user activity and fitness progress in real-time. This dashboard provides insights into user workouts, nutrition intake, and health metrics. With activity tracking and goal setting features, it motivates users to stay active, achieve fitness goals, and lead a healthier lifestyle.",
  },
  {
    id: 14,
    img: "../img/image2.png",
    title: "Educational Platform",
    description:
      "Manage courses and track student performance. This platform offers tools for course creation, enrollment, and assessment. With student analytics and progress tracking features, it enables educators to personalize learning experiences, identify learning gaps, and improve student outcomes.",
  },
  {
    id: 15,
    img: "../img/image3.png",
    title: "Event Management",
    description:
      "Plan and manage events with comprehensive tools. This event management software streamlines the process of event planning, registration, and attendee management. With event promotion and feedback collection features, it helps event organizers create memorable experiences, attract attendees, and measure event success.",
  },
];





const linkStyle = {
  textDecoration: "none",
  color: "inherit", // Optional: Ensures it inherits the color of the parent element
};

export const Portfolio = ({ full, isHome, half }) => {
  const cardsToDisplay = isHome ? cards.slice(0, 6) : cards;

  return (
    <>
        {full && <Navbar />}
        {full && (
        <div className="space" style={{marginTop:"-50px"}}>
          
        </div>
      )} 
      <div className="portfolio">
        <div className="container">
          <div className="port-tag" style={{alignItems: 'center'}}>
            <h1>Portfolio</h1>
            <h3>
              There are many variations of passages of Lorem Ipsum available,
              but the <br />
              majority have suffered alteration.
            </h3>
              <hr />
          </div>

          <div className="main-portfolio">
            {cardsToDisplay.map((card, index) => (
              <div key={index} className="port-card">
                <img src={card.img} alt={`Image ${card.id}`} />
                <div className="card-content">
                  <h1>{card.title}</h1>
                  <p>{card.description}</p>
                  <Link
                    style={linkStyle}
                    to="/"
                    className="case-study-btn secondary-btn"
                  >
                    Case Study <i class="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
            <div className="more-project">
              {half && (
                <Link to="/portfolio">
                  <button className="primary-btn">More Projects</button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {half && (
          <div className="project-idea">
            <h1>
              Do You have Project Idea? <br /> Let's discuss your Project!
            </h1>
            <h3>
              There are many variations of passages of Lorem Ipsum available,{" "}
              <br />
              but the majority have suffered alteration.
            </h3>
            <Link to="/contact">
              <button className="secondary-btn">Let's Work Together</button>
            </Link>
          </div>
        )}
      </div> 
      {full && <Footer />}
      </>
  );
};
