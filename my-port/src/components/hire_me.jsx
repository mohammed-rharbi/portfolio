import React from 'react';

const HireMe = () => {
    const sectionStyle = {
        marginBottom: '2em'
    };

    const listStyle = {
        paddingLeft: '20px'
    };

    const contactLinkStyle = {
        display: 'block',
        marginBottom: '0.5em'
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
            <h1>Why You Should Hire Me</h1>
            
            <section style={sectionStyle}>
                <h2>Comprehensive Skill Set</h2>
                <p>
                    As a Full Stack Developer, I possess a wide range of skills across both front-end and back-end development. My proficiency includes:
                </p>
                <ul style={listStyle}>
                    <li><strong>Front-End Technologies:</strong> HTML, CSS, JavaScript, React, Angular, and Vue.js.</li>
                    <li><strong>Back-End Technologies:</strong> Node.js, Express.js, Python, Django, Ruby on Rails, and Java.</li>
                    <li><strong>Database Management:</strong> SQL, NoSQL, MongoDB, PostgreSQL, and MySQL.</li>
                    <li><strong>DevOps:</strong> Experience with Docker, Kubernetes, CI/CD pipelines, AWS, Azure, and Google Cloud Platform.</li>
                    <li><strong>Version Control:</strong> Proficient in Git, GitHub, and GitLab.</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2>Proven Track Record</h2>
                <p>
                    With over [X] years of experience in the industry, I have successfully delivered numerous projects for a diverse range of clients, from startups to established enterprises. My portfolio includes:
                </p>
                <ul style={listStyle}>
                    <li>Developing scalable web applications that handle high traffic.</li>
                    <li>Building robust APIs that integrate seamlessly with various third-party services.</li>
                    <li>Creating responsive and user-friendly interfaces that enhance user experience.</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2>Problem-Solving Expertise</h2>
                <p>
                    I thrive on solving complex problems and have a knack for debugging and optimizing code to enhance performance. My analytical skills enable me to break down intricate issues and devise efficient solutions quickly.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2>Adaptability and Continuous Learning</h2>
                <p>
                    The tech industry evolves rapidly, and I stay ahead of the curve by continually updating my skills and learning new technologies. This commitment to growth ensures that I can adapt to the latest trends and best practices, bringing innovative solutions to your projects.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2>Strong Collaboration and Communication</h2>
                <p>
                    Effective communication and teamwork are critical in software development. I excel in collaborating with cross-functional teams, including designers, product managers, and other developers, to ensure cohesive project execution. My ability to clearly articulate ideas and technical concepts helps bridge the gap between technical and non-technical stakeholders.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2>Attention to Detail</h2>
                <p>
                    I have a keen eye for detail, ensuring that my code is clean, well-documented, and maintainable. This attention to detail extends to user interface design, ensuring that the final product is not only functional but also aesthetically pleasing.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2>Client-Focused Approach</h2>
                <p>
                    Understanding and meeting client needs is at the core of my work ethic. I take the time to listen to your requirements and provide tailored solutions that align with your business goals. My client-focused approach ensures that projects are delivered on time, within budget, and to your satisfaction.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2>Testimonials</h2>
                <blockquote>
                    "Working with [Your Name] was a game-changer for our project. Their technical expertise and proactive approach helped us launch on schedule." - [Client's Name], [Position], [Company]
                </blockquote>
                <blockquote>
                    "[Your Name] is a problem solver with an exceptional ability to handle complex tasks efficiently. Their contributions were invaluable to our team." - [Colleague's Name], [Position], [Company]
                </blockquote>
            </section>

            <section style={sectionStyle}>
                <h2>Let's Work Together</h2>
                <p>
                    I'm excited about the opportunity to bring my skills and experience to your project. Whether you're looking to build a new application from scratch, improve an existing product, or need consultation on best practices, I am here to help.
                </p>
                <p>
                    <strong>Get in touch</strong>:
                    <a href="mailto:your.email@example.com" style={contactLinkStyle}>your.email@example.com</a>
                    [Your Phone Number]
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>LinkedIn Profile</a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>GitHub Profile</a>
                </p>
            </section>
        </div>
    );
};

export default HireMe;
