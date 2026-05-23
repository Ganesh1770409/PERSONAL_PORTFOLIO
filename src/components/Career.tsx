import "./styles/Career.css";



const Career = () => {

  return (

    <div className="career-section section-container">

      <div className="career-container">

        <h2>

          My career <span>&</span>

          <br /> experience

        </h2>

        <div className="career-info">

          <div className="career-timeline">

            <div className="career-dot"></div>

          </div>

          <div className="career-info-box">

            <div className="career-info-in">

              <div className="career-role">

                <h4>B.Tech — Computer Science</h4>

                <h5>Andhra University</h5>

              </div>

              <h3>EDU</h3>

            </div>

            <p>

              Bachelor of Technology from Andhra University, building the

              foundation in programming, algorithms, and software engineering

              that supports my work in data science and generative AI.

            </p>

          </div>

          <div className="career-info-box">

            <div className="career-info-in">

              <div className="career-role">

                <h4>Data Scientist</h4>

                <h5>Tata Consultancy Services (TCS)</h5>

              </div>

              <h3>2021-2025</h3>

            </div>

            <p>

              Built OCR-powered automation using Python and Azure Cognitive

              Services for claims processing. Developed ML models for visa

              outcome prediction, performed large-scale feature engineering, and

              delivered Power BI dashboards for operational insights.

            </p>

          </div>

          <div className="career-info-box">

            <div className="career-info-in">

              <div className="career-role">

                <h4>Senior Associate / Data Scientist — GenAI</h4>

                <h5>Cognizant Technology Solutions</h5>

              </div>

              <h3>2025-Present</h3>

            </div>

            <p>

              Design intelligent AI agents for decision-making and team

              performance analytics. Deliver analytics solutions that improved

              project delivery timelines by 20% and mentor junior engineers to

              boost team productivity.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};



export default Career;

