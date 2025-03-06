// import React, { useState } from 'react';

// const Experience = () => {
//     const experience = [
//         {
//             "name": "Grameenphone| Searchlite Communications Limited",
//             "position": "Executive, Quality Assurance Engineer",
//             "year": "April,2024 – September,2024",
//             "extraInfo": [ "1. Managed and optimized data-driven operations for Grameenphone, supporting a large user base with content updates, campaign configurations, and system enhancements.",
//             "2. Conducted extensive data validation through pre- and post-live UAT, ensuring accurate and error-free deployments.",
//             "3. Documented and analyzed system issues, implementing effective solutions to improve operational efficiency.",
//             "4. Coordinated cross-functional projects and resolved user issues, showcasing strong analytical and organizational skills."  ]},
//         {

//             "name": "Battery Interactive Ltd",
//             "position": "Quality Assurance Intern",
//             "year": "Dec 2022",
//             "extraInfo": [`Identified major bugs in the production stage of The Financial Express that helped developers identify the system bottlenecks and result a bug free website. Link: Test Report of the FE.xlsx`, 
//                         `Performed manual testing of the Alamgir Ranch. Link: Manual testing of Alamgir Ranch.xlsx`,
// `Wrote test cases for a particular functionality of VirtuConnect. Link: Test_case_on_Virtuconnect.xlsx`]
//         }
//     ]
//     const [expandedIndex, setExpandedIndex] = useState(null);

//     const handleExpand = (index) => {
//         setExpandedIndex(index === expandedIndex ? null : index);
//     };

//     return (
//         <div className="mt-24 text-white bg-transparent bg-opacity-25 bg-slate-950 mx-8 rounded-xl shadow-xl py-16">
//             <h1 className="text-center text-5xl font-semibold">Experience</h1>
//             <div className="flex flex-col items-center mt-24 justify-center">
//                 {experience.map((exp, index) => (
//                     <div key={index} className="flex flex-col lg:flex-row justify-center pb-10 relative">
//                         <div className="mb-4 w-auto lg:w-[40rem] flex items-center">
//                             <h3 className="text-2xl px-4 text-rose-800">{exp.year}</h3>
//                         </div>

//                         <div className="relative hidden lg:flex flex-col items-center">
//                             <div className="h-[100px] border-l border-gray-300"></div>

//                             <button
//                                 className="relative text-3xl"
//                                 onClick={() => handleExpand(index)}
//                             >
//                                 🚀
//                             </button>
//                             <div className="h-[100px] border-l border-gray-300"></div>
//                         </div>

//                         <div
//                             className={`transition-all duration-300 ${expandedIndex === index ? 'w-full text-justify mt-4 px-4' : 'w-[60%] mt-4 px-4'
//                                 }`}
//                         >
//                             <h1 className="text-3xl">{exp.name}</h1>
//                             <h2 className="text-2xl">{exp.position}</h2>
//                             {expandedIndex === index && (
//                                 <p className="text-xl mt-2 text-justify text-wrap">
//                                     {exp.extraInfo}
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Experience;





import React, { useState } from 'react';

const Experience = () => {
    const experience = [
        {
            "name": "Grameenphone| Searchlite Communications Limited",
            "position": "Executive, Quality Assurance Engineer",
            "year": "April,2024 – September,2024",
            "extraInfo": [
                "1. Managed and optimized data-driven operations for Grameenphone, supporting a large user base with content updates, campaign configurations, and system enhancements.",
                "2. Conducted extensive data validation through pre- and post-live UAT, ensuring accurate and error-free deployments.",
                "3. Documented and analyzed system issues, implementing effective solutions to improve operational efficiency.",
                "4. Coordinated cross-functional projects and resolved user issues, showcasing strong analytical and organizational skills."
            ]
        },
        {
            "name": "Battery Interactive Ltd",
            "position": "Quality Assurance Intern",
            "year": "Dec 2022",
            "extraInfo": [
                "1. Identified major bugs in the production stage of The Financial Express that helped developers identify the system bottlenecks and result a bug-free website. Link: <a href='https://1drv.ms/x/s!AtqAbMKyPYoAgc91UfhutW45kE7BDQ?e=pHboqR&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0' target='_blank' className='text-blue-500'> Test Report of the FE.xlsx</a>",
                "2. Performed manual testing of the Alamgir Ranch. Link: <a href='https://1drv.ms/x/s!AtqAbMKyPYoAgc9cCNmSUy1B4wJB_Q?e=Yynd1o&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0' target='_blank' className='text-blue-500'> Manual testing of Alamgir Ranch.xlsx</a>",
                "3. Wrote test cases for a particular functionality of VirtuConnect. Link: <a href='https://1drv.ms/x/s!AtqAbMKyPYoAgc937SK4GmUdgotMrA?e=2y5cQl&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0' target='_blank' className='text-blue-500'> Test_case_on_Virtuconnect.xlsx</a>"
            ]
        }
    ];
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="mt-24 text-white bg-transparent bg-opacity-25 bg-slate-950 mx-8 rounded-xl shadow-xl pb-12">
            <h1 className="text-center text-5xl font-semibold">Experience</h1>
            <div className="flex flex-col items-center mt-24 justify-center">
                {experience.map((exp, index) => (
                    <div key={index} className="flex flex-col lg:flex-row justify-center pb-10 relative">
                        <div className="mb-4 w-auto lg:w-[40rem] flex items-center">
                            <h3 className="text-2xl px-4 text-rose-800">{exp.year}</h3>
                        </div>

                        <div className="relative hidden lg:flex flex-col items-center">
                            <div className="h-[100px] border-l border-gray-300"></div>

                            <button
                                className="relative text-3xl"
                                onClick={() => handleExpand(index)}
                            >
                                🚀
                            </button>
                            <div className="h-[100px] border-l border-gray-300"></div>
                        </div>

                        <div
                            className={`transition-all duration-300 ${expandedIndex === index ? 'w-full text-left mt-4 px-4' : 'w-[20rem] lg:w-[30rem] mt-4 px-4'
                                }`}
                        >
                            <h1 className="text-3xl">{exp.name}</h1>
                            <h2 className="text-2xl">{exp.position}</h2>
                            {expandedIndex === index && (
                                <div className="text-xl mt-2 text-justify">
                                    {exp.extraInfo.map((info, i) => (
                                        <p key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: info }} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
