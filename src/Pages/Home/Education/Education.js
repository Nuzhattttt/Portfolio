import React from 'react';

const Education = () => {
    const education = [
        {
            "id": "01",
            "degree": "Bachelor of Science in",
            "subject": "Information & Communication Engineering",
            "institution": "Bangladesh University Of Professionals",
            "session": "2023",
            "result": "CGPA-3.76"
        },
        {
            "id": "02",
            "degree": "Higher Secondary School Certificate",
            "institution": "Chattogram Cantonment Public College",
            "session": "2018",
            "result": "GPA-5.00"
        },
        {
            "id": "03",
            "degree": "Secondary School Certificate",
            "institution": "Aunkur Society Girls' High School",
            "session": "2016",
            "result": "GPA-5.00"
        }
    ];

    return (
        <div className="mt-24 w-full text-white">
            <h1 className="text-center text-5xl font-semibold">Education</h1>
            <div className="flex justify-center mt-12">
                <div>
                    {education.map((edu) => (
                        <div key={edu.id} className="rounded-xl bg-opacity-15 bg-black shadow-xl px-12 py-6 mb-4 w-auto mx-4 lg:w-[70rem]">
                            <div className="mb-2 flex flex-col lg:flex-row justify-between">
                                <div className="text-3xl text-rose-800">
                                    {edu.degree} {edu.subject && `in ${edu.subject}`}
                                </div>
                                <div className="text-xl">
                                    {edu.session}
                                </div>
                            </div>
                            <h2 className="text-2xl">{edu.institution}</h2>
                            <h4 className="text-xl">{edu.result}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
