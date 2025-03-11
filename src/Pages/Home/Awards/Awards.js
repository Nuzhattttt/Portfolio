import React from 'react';

const Awards = () => {
    const awards = [
        {
            "id": "01",
            "title": "Dean's appreciation for academic excellence",
            "institution": "Bangladesh University of Professionals (BUP)",
            "description": "Received dean's appreciation for outstanding academic performance, achieving a perfect 4.00 out of 4.00 GPA in the last semester."
        },
        {
            "id": "02",
            "title": "Scholarship",
            "description": "Received Scholarship for good academic result in multiple semesters."
        },
        {
            "id": "03",
            "title": "First Prize",
            "description": "Won an art competition arranged by Bangladesh Muktijoddha Sangsad in 2010."
        },
        {
            "id": "04",
            "title": "Special Prize",
            "description": "Sixth Shilpacharya Zainul Abedin Memorial Gold Medal Art Competition 2009."
        }
    ]
    return (
        <div className="mt-24 w-full text-white">
            <h1 className="text-center text-5xl font-semibold">Honors & Awards</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 place-items-center">
                {awards.map((award) => (
                    <div className="w-[20rem] lg:w-[36rem]">
                        <h2 className="text-3xl text-rose-600 text-center h-16">{award.title}</h2>
                        <div className="mt-4 rounded-xl bg-opacity-15 bg-black shadow-xl px-8 py-6 w-[20rem] lg:w-[36rem] h-[8rem]">
                            <p>{award.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;