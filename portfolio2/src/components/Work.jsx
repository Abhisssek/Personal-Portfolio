import React from "react";

export const Work = () => {
  return (
    <div className="work">
      <div className="container">
        <div className="main-work">
          <div className="work-text">
            
            <h1>Work Process</h1>
            <h3>
              Understanding project requirements is crucial. <br />{" "}
              Initial discussions and planning ensure a clear vision <br />
              for the project. Effective communication leads to success.
            </h3>
            <h3>
              Planning involves setting clear milestones. <br />
              Each stage is carefully planned for efficiency.
            </h3>
          </div>
          <div className="work-cards">
            <div className="work-one">
              <div className="work-card">
                <i class="fa-solid fa-book"></i>
                <h1>1. Research</h1>
                <h3>
                  Analyzing user needs and <br />
                  market trends. Gathering <br />
                  information and insights.
                </h3>
              </div>
              <div className="work-card">
                <i class="fa-solid fa-pen"></i>
                <h1>3. Design</h1>
                <h3>
                  Crafting user-friendly interfaces. <br />
                  Focusing on user experience <br />
                  and visual appeal.
                </h3>
              </div>
            </div>
            <div className="work-two">
              <div className="work-card">
                <i class="fa-solid fa-chart-line"></i>
                <h1>2. Analyze</h1>
                <h3>
                  Evaluating data and feedback. <br />
                  Making data-driven decisions <br />
                  for the best outcomes.
                </h3>
              </div>
              <div className="work-card">
                <i class="fa-solid fa-laptop"></i>
                <h1>4. Launch</h1>
                <h3>
                  Deploying the final product. <br />
                  Ensuring everything runs <br />
                  smoothly and efficiently.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
