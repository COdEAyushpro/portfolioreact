import React from "react";

const Qualification = () => (
  <section id="qualification" style={{
    background: 'url("https://proqualrecognition.eu/wp-content/uploads/2025/01/qualification-complex-like-puzzle-pictured-260nw-1932473846.jpg") center/cover no-repeat',
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    padding: '100px 20px',
    minHeight: '100vh'
  }}>
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      zIndex: 0
    }}></div>

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="mb-5">Qualification</h2>

      <div className="timeline d-flex flex-column align-items-center">

        <div className="card mb-4 p-4" style={{ maxWidth: '600px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}>
          <h4>Bachelor of Technology (B.Tech)</h4>
          <h6 className="text-info">2021 – 2025</h6>
          <p>Completed B.Tech with specialization in Computer Science and Engineering.  
          Focused on software development, data science, and web technologies.</p>
        </div>

        <div className="card mb-4 p-4" style={{ maxWidth: '600px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}>
          <h4>Higher Secondary Education (12th Grade)</h4>
          <h6 className="text-info">2019 – 2021</h6>
          <p>Studied Science stream with Physics, Chemistry, and Mathematics as core subjects.</p>
        </div>

        <div className="card mb-4 p-4" style={{ maxWidth: '600px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}>
          <h4>Secondary Education (10th Grade)</h4>
          <h6 className="text-info">2018 – 2019</h6>
          <p>Completed 10th with distinction, building strong fundamentals in mathematics and computer science.</p>
        </div>

      </div>
    </div>
  </section>
);

export default Qualification;
