/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

// @ts-ignore
import { typingSimulator } from "node-typing-simulator";
import { useEffect, useState } from "react";
const sentences = [
    "Hey 👋",
    "I'm Priyank",
    "Software Developer 💻",
    "Avid mac 🍎 lover",
    "Open source contributor </>",
    "Gen AI & Web3 enthusiast!",
];

const timeout = 2000;
const typingSpeed = 80;
const mistakeProbability = 0;

export default function Div1() {
    const [heading, setHeading] = useState<string>();
    useEffect(() => {
        typingSimulator(
            sentences,
            timeout,
            typingSpeed,
            mistakeProbability,
            setHeading
        );
    }, []);
    return (
        <div id="div1" className="min-h-screen flex items-center width__full div1">
            <div className="-mt-10 mx-20">
                <Image
                    className="drop-shadow-2xl mt-24"
                    src="/images/pvwithlaptop.png"
                    alt="PV with laptop"
                    width={250}
                    height={250}
                />
            </div>
            <div className="text-eerieBlack whitespace-normal flex flex-col h-screen w-1/2 justify-between py-64">
                <h1 className="text-6xl">{heading}</h1>
                <p className="text-xl pb-10">
                    "Welcome to my digital realm! 🚀 With a passion for crafting
                    exceptional digital experiences, I'm the architect behind
                    the code, the wizard optimizing performance, and the
                    guardian of seamless scalability. As a seasoned software
                    developer, I've not only built and maintained large-scale
                    products but also breathed life into visionary tech stacks.
                    With a toolkit spanning front-end to back-end, and a knack
                    for DevOps wizardry, I'm your go-to collaborator for turning
                    innovative concepts into robust, efficient realities. Let's
                    embark on a journey where code meets creativity and
                    technology knows no bounds!" 🌟
                </p>
            </div>
        </div>
    );
}
