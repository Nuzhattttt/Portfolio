import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import nuzhat from "../../../assets/Nuzhat.png";
import "./Banner.css"
const Banner = () => {
    return (
        <div className="container mx-auto px-4" id="intro">
            <div className="intro hero min-h-screen">
                <div className="hero-content flex flex-col lg:flex-row-reverse">
                    <div className="">
                        <img src={nuzhat} alt="Prothoma" className=" flex" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="title text-4xl md:text-6xl font-bold mt-8 mb-8 text-rose-800 leading-8" data-aos="fade-down" data-aos-duration="1000">{`{Nuzhat Tabassum Prothoma}`}</h1>
                        <h1 className="subtitle text-3xl md:text-5xl font-semibold mt-8 text-white text-animate leading-8" data-aos="fade-right" data-aos-duration="1000">Tech-forward thinker</h1>
                        <p className="mt-6 text-2xl text-white"></p>
                        <div className="flex gap-4 justify-center mt-4">
                            <a href="mailto:nuzh.tabassum@gmail.com"><AiOutlineMail className="text-3xl text-rose-800 animate__animated animate__heartBeat animate__infinite" /></a>
                            <Link to="https://github.com/Nuzhattttt"><AiFillGithub className="text-3xl text-rose-800 animate__animated animate__heartBeat animate__infinite" /></Link>
                            <Link to="https://www.linkedin.com/in/nuzhat-tabassum19"><AiFillLinkedin className="text-3xl text-rose-800 animate__animated animate__heartBeat animate__infinite" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;