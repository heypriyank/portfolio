/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

// @ts-ignore
import { typingSimulator } from "node-typing-simulator";
import { useEffect, useState } from "react";
import { styles } from "../styles";
const sentences = [
    "Hey 👋",
    "I'm Priyank",
    "Software Developer 💻",
    ".....",
    "Avid mac 🍎 lover",
    "Open source contributor </>",
    "Generative ai & Web3 enthusiast!",
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
        <div id="div1" className="min-h-screen flex width__full div1">
            <div className="w-3/12 self-end">
                <Image
                    className="drop-shadow-2xl"
                    src="/images/pvWithLaptop.png"
                    alt="PV with laptop"
                    width={250}
                    height={250}
                />
            </div>
            <div
                className={`${styles.sectionHeadText} whitespace-normal w-6/12`}
            >
                <div className="h-1/2 flex justify-center items-center">
                    <h1 className="text-6xl">{heading}</h1>
                </div>
                <div className="h-1/2">
                    <p className="text-base">
                        Welcome to my digital realm! 🚀 With a passion for
                        crafting exceptional digital experiences, I'm the
                        architect behind the code, the wizard optimizing
                        performance, and the guardian of seamless scalability.
                        As a seasoned software developer, I've not only built
                        and maintained large-scale products but also breathed
                        life into visionary tech stacks. With a toolkit spanning
                        front-end to back-end, and a knack for DevOps wizardry,
                        I'm your go-to collaborator for turning innovative
                        concepts into robust, efficient realities. Let's embark
                        on a journey where code meets creativity and technology
                        knows no bounds! 🌟
                    </p>
                </div>
            </div>
        </div>
    );
}
