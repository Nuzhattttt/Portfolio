import React from 'react';

const About = () => {
    return (
        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row text-white bg-transparent bg-opacity-25 bg-slate-950 mx-8 rounded-xl shadow-xl py-16">
            <div className="w-1/2 text-5xl font-semibold flex items-center justify-center">
                <div className="border-rose-800 rounded-full border-[0.4rem] mr-8"></div> About Me <div className="border-rose-800 rounded-full border-[0.4rem] ml-8"></div>
            </div>
            <div className="w-1/2 text-xl mr-10 text-left">
                <p className="w-auto lg:w-[38rem]">
                    A result-oriented individual with a strong academic background in Information and Communication Engineering. With a passion for continuous learning and problem-solving, I aim to work in a dynamic environment where I can further develop my expertise, adapt to new technologies, and grow professionally while making meaningful contributions to the success of the organization.

                </p>
            </div>
        </div>
    );
};

export default About;