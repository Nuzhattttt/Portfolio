import React from 'react';

const Project = () => {
    const projects = [
        {
            "id": "01",
            "title": "Financial Data Preprocessing ",
            "technology": "Python",
            // "image": "https://i.ibb.co.com/6SRDRLS/project.jpg",
            "libraries": "Pandas, NumPy, Scikit-learn, XGBoost",
            "link": "Stockkkkkk.ipynb"
        },
        {
            "id": "02",
            "title": "BUP Post Admission Test Portal",
            "technology": "HTML, CSS & JavaScript",
            // "image": "https://i.ibb.co.com/6SRDRLS/project.jpg",
            "link": ""
        }
    ]
    return (
        <div className="mt-24 w-full text-white">
            <h1 className="text-center text-5xl font-semibold">Projects</h1>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
                {projects.map((project) => (
                    <div>
                        <h2 className="text-rose-600 text-3xl">
                            {project.title}
                        </h2><br />
                        <h3>Language: {project.technology}</h3>
                        {project.libraries && <h3>Library: {project.libraries}</h3>}
                    </div>

                ))}
            </div>
        </div >
    );
};

export default Project;