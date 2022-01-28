import Image from "next/image";
import { SiLaravel, SiNextdotjs, SiNuxtdotjs, SiReact, SiVuedotjs } from 'react-icons/si'
import information from '../public/lottie/information.json'
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
    return (<>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="flex font-bold  p-4">
                <Player
                    autoplay
                    loop
                    src={information}
                    className="w-2/4 lg:w-full"
                   
                />
            </div>
            <div className="p-2">
                <p className="text-lg text-slate-600 dark:text-slate-400 font-bold leading-7">
                    I'm a software devloper started as a backend developer using PHP, and when am not writting codes, I hang out with Bruce Wayne, am not kidding I hang out with batsy!
                    Fell in love with Jamstack, as a curious fellow, I had to try out front end devlopment, now i find myslef on both sides of the table!
                </p>

                <p className="mt-2 text-lg text-slate-600 dark:text-slate-400 font-bold leading-7">
                    Passionate about learning new things and also sharing with the community and also support new devs trasitioning into tech,
                </p>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-400 font-bold leading-7">Here are some of the techs I currently love playing with.</p>
                <div className="inline-flex flex-wrap gap-3">
                    <div className="flex flex-row items-center bg-white shadow-md rounded px-2 py-3">
                        <div className="flex items-center justify-center flex-shrink-0  rounded-xl">
                            <SiReact fill="#61DAFB" className="w-8 h-8" />
                        </div>
                        <div className=" text-gray-500 font-bold text-lg ml-2">ReactJs</div>
                    </div>
                    <div className="flex flex-row items-center bg-white shadow-md rounded px-2 py-3">
                        <div className="flex items-center justify-center flex-shrink-0  rounded-xl">
                            <SiNextdotjs fill="#000000" className="w-8 h-8" />
                        </div>
                        <div className=" text-gray-500 font-bold text-lg ml-2">NextJs</div>
                    </div>
                    <div className="flex flex-row items-center bg-white shadow-md rounded px-2 py-3">
                        <div className="flex items-center justify-center flex-shrink-0  rounded-xl">
                            <SiVuedotjs fill="#4FC08D" className="w-8 h-8" />
                        </div>
                        <div className=" text-gray-500 font-bold text-lg ml-2">VueJs</div>
                    </div>
                    <div className="flex flex-row items-center bg-white shadow-md rounded px-2 py-3">
                        <div className="flex items-center justify-center flex-shrink-0  rounded-xl">
                            <SiNuxtdotjs fill="#00DC82" className="w-8 h-8" />
                        </div>
                        <div className=" text-gray-500 font-bold text-lg ml-2">NuxtJs</div>
                    </div>
                    <div className="flex flex-row items-center bg-white shadow-md rounded px-2 py-3">
                        <div className="flex items-center justify-center flex-shrink-0  rounded-xl">
                            <SiLaravel fill="#FF2D20" className="w-8 h-8" />
                        </div>
                        <div className=" text-gray-500 font-bold text-lg ml-2">Next</div>
                    </div>
                </div>

                <p className="mt-2 text-lg text-slate-600 dark:text-slate-400 font-bold leading-8">Intrested in learning new things, currently learning Cloud engineering and Web3</p>
            </div>
        </div>
    </>);
}

export default About;