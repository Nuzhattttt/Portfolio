import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            category: "Manual Testing",
            subSkills: [
                { name: "Requirement Analysis" },
                { name: "Test Case Design" },
                { name: "Test Execution & Evaluation" }
            ]
        },
        {
            category: "Project Management Tools",
            subSkills: [
                { name: "Trello" },
                { name: "Notion" },
                { name: "Jira" }
            ]
        },
        {
            category: "Programming",
            subSkills: [
                { name: "JavaScript" },
                { name: "React.js" },
                { name: "Node.js" },
                { name: "Java" },
                { name: "Python" }
            ]
        },
        {
            category: "Productivity Tools",
            subSkills: [
                { name: "Microsoft Word" },
                { name: "Microsoft Excel" },
                { name: "Microsoft PowerPoint" },
                { name: "Canva" }
            ]
        },
        {
            category: "Data Analysis",
            subSkills: [
                { name: "MySQL" }
            ]
        },
        {
            category: "Soft Skills",
            subSkills: [
                { name: "Disciplined and punctual" },
                { name: "Organizational Skills" },
                { name: "Problem-Solving" },
                { name: "Handling multiple tasks under pressure, meeting deadlines efficiently" }
            ]
        }
    ];

    return (
        <div className="skills-container rounded-xl shadow-xl py-16">
            <h1 className="mt-24 text-center text-5xl font-semibold text-white">Skills</h1>
            <div className="skills-grid mt-12">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item text-white">
                        <h2 className="text-2xl font-semibold">{skill.category}</h2>
                        <ul className="list-disc pl-5 mt-2">
                            {skill.subSkills.map((subSkill, subIndex) => (
                                <li key={subIndex}>{subSkill.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
