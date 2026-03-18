import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Achievements</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Participated in Real-World App Deployment</h4>
                <h5>by Humble Coders</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Actively participated in deploying real-world applications, gaining hands-on experience in software deployment, DevOps practices, and production environment management.
            </p>
          </div>
        </div>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>300+ LeetCode Problems</h4>
                <h5>Problem Solving & Algorithms</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Solved over 300 problems on LeetCode, mastering data structures, algorithms, and competitive programming techniques. Demonstrated strong problem-solving skills and coding proficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
