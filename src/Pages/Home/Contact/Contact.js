import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [state, handleSubmit] = useForm("movqwkkz");
    const navigate = useNavigate();
    const resetForm = () => {
        navigate("/")
    };

    if (state.succeeded) {
        return (
            <div className="flex flex-col justify-center items-center bg-transparent bg-opacity-25 bg-slate-950 mx-8 rounded-xl shadow-xl mt-24">
                <div className="text-4xl text-rose-800 font-semibold">Thank you for reaching outtt!</div>
                <button
                    onClick={resetForm}
                    className="text-white mt-6 glow-btn btn border-2 p-2 rounded-lg border-rose-800 hover:bg-rose-800 hover:text-black hover:border-0"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="mt-24 text-white bg-transparent bg-opacity-25 bg-slate-950 mx-8 rounded-xl shadow-xl" id="contact">
            <div className="flex flex-col justify-center py-12 items-center gap-8 mt-12 w-full">
                <form action="https://formspree.io/f/movqwkkz" method="POST" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="flex flex-col lg:flex-row-reverse gap-24 text-xl w-full">
                        <div className="flex flex-col gap-4 lg:w-[20rem] justify-center">
                            <h1 className="text-4xl font-bold text-rose-800 mb-8 mt-16 text-center lg:text-left">Contact Me </h1>
                            <div className="flex justify-center lg:justify-start">
                                <AiOutlineMail className="text-3xl text-white" />
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <h3 className="text-2xl uppercase font-medium text-white">Email</h3>
                            </div>
                            <p className="font-medium text-white text-center lg:text-left">nuzh.tabassum@gmail.com</p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-6">
                                <BsFillSendFill className="text-3xl text-rose-800 " />
                                <h1 className="text-rose-800 text-4xl font-semibold text-center">Reach Out and Say Hello!!!</h1>
                                <BsFillSendFill className="text-3xl text-rose-800 " />
                            </div>
                            <div className="flex flex-col gap-4 font-medium text-white mt-8 items-center">
                                <label htmlFor="username">Full Name</label>
                                <div>
                                    <input
                                        className="border-2 w-56 lg:w-96 rounded-lg text-black p-2 font-normal text-lg"
                                        id="username"
                                        type="text"
                                        name="username"
                                    />
                                </div>
                                <ValidationError prefix="Username" field="username" errors={state.errors} />
                            </div>
                            <div className="flex flex-col gap-4 font-medium text-white items-center">
                                <label htmlFor="email">Email Address</label>
                                <div>
                                    <input
                                        className="border-2 w-56 lg:w-96 rounded-lg text-black p-2 font-normal text-lg"
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div className="flex flex-col gap-4 font-medium text-white items-center">
                                <label htmlFor="message">Message</label>
                                <div>
                                    <textarea
                                        className="border-2 w-56 lg:w-96 rounded-lg text-black p-2 font-normal text-lg"
                                        id="message"
                                        name="message"
                                    />
                                </div>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="glow-btn btn border-2 p-2 rounded-lg border-rose-800 text-white hover:bg-rose-800 hover:text-black hover:border-0"
                                    type="submit"
                                    disabled={state.submitting}
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
