import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { useState } from "react";
import { github, pineapple, pineappleHover } from "../../assets";
import { projects } from "../../constants";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";

interface ProjectCardProps {
    id: string;
    name: string;
    description: string;
    image: any;
    repo: string;
    demo: string;
    index: number;
    active: string;
    handleClick: (id: string) => void;
}

const ProjectCard = ({
    id,
    name,
    description,
    image,
    repo,
    demo,
    index,
    active,
    handleClick,
}: ProjectCardProps) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={`relative ${
                active === id
                    ? "lg:flex-[3.5] flex-[10] min-w-[30vw]"
                    : "lg:flex-[0.5] flex-[2]"
            } flex items-center justify-center min-w-[10vw]
        h-[420px] cursor-pointer card-shadow`}
            onClick={() => handleClick(id)}
        >
            <div
                className="absolute top-0 left-0 z-10 bg-jetLight 
        h-full w-full opacity-[0.5] rounded-[24px]"
            ></div>

            <Image
                src={image}
                alt={name}
                className="absolute w-full h-full object-cover rounded-[24px] filter grayscale"
            />

            {active !== id ? (
                <div className="flex items-center justify-start pr-[4.5rem]">
                    <h3
                        className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
                            whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
                            absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
                            leading-none z-20"
                    >
                        {name}
                    </h3>
                </div>
            ) : (
                <>
                    <div
                        className="absolute bottom-0 p-8 justify-start w-full 
              flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20"
                    >
                        <div className="absolute inset-0 flex justify-end m-3">
                            <div
                                onClick={() => window.open(repo, "_blank")}
                                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                    flex justify-center items-center cursor-pointer
                    sm:opacity-[0.9] opacity-[0.8]"
                            >
                                <Image
                                    src={github}
                                    alt="source code"
                                    className="w-4/5 h-4/5 object-contain"
                                />
                            </div>
                        </div>

                        <h2
                            className="font-bold sm:text-[32px] text-[24px] 
                text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
                        >
                            {name}
                        </h2>
                        <p
                            className="text-silver sm:text-[14px] text-[12px] 
                max-w-3xl sm:leading-[24px] leading-[18px]
                font-poppins tracking-[1px] whitespace-normal"
                        >
                            {description}
                        </p>
                        <button
                            className="live-demo flex justify-between 
                sm:text-[16px] text-[14px] text-timberWolf 
                font-bold font-beckman items-center py-5 pl-2 pr-3 
                whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
                w-[125px] h-[46px] rounded-[10px] glassmorphism 
                sm:mt-[22px] mt-[16px] hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.2s] 
                ease-in-out"
                            onClick={() => window.open(demo, "_blank")}
                            onMouseOver={() => {
                                // @ts-ignore
                                document
                                    .querySelector(".btn-icon")
                                    // @ts-ignore
                                    .setAttribute("src", pineappleHover);
                            }}
                            onMouseOut={() => {
                                // @ts-ignore
                                document
                                    .querySelector(".btn-icon")
                                    // @ts-ignore
                                    .setAttribute("src", pineapple);
                            }}
                        >
                            <Image
                                src={pineapple}
                                alt="pineapple"
                                className="btn-icon sm:w-[34px] sm:h-[34px] 
                    w-[30px] h-[30px] object-contain"
                            />
                            LIVE DEMO
                        </button>
                    </div>
                </>
            )}
        </motion.div>
    );
};

const Projects = ({ scrollRefProp, handleWheel }: any) => {
    const [active, setActive] = useState<string>(projects[0].id);

    function handleEnableScoll(e: any) {
        scrollRefProp.current.removeEventListener("wheel", handleWheel);
    }
    function handleDisableScroll(e: any) {
        scrollRefProp.current.addEventListener("wheel", handleWheel);
    }

    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>
                    Mix of Web2 and Web3
                </p>
                <h2 className={`${styles.sectionHeadTextLight}`}>
                    Personal Projects.
                </h2>
            </motion.div>

            {/* <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
                >
                    These projects demonstrate my expertise with practical
                    examples of some of my work, including brief descriptions
                    and links to code repositories and live demos. They showcase
                    my ability to tackle intricate challenges, adapt to various
                    technologies, and efficiently oversee projects.
                </motion.p>
            </div> */}

            <motion.div
                // @ts-ignore
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col -ml-20`}
            >
                <div
                    onMouseEnter={handleEnableScoll}
                    onMouseLeave={handleDisableScroll}
                    className="flex lg:flex-row flex-col min-h-[50vh] gap-5 max-w-[50vw] overflow-auto"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Projects, "");
