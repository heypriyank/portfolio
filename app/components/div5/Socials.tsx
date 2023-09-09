import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { socials } from "../../constants";

const Contact = () => {
    const formRef = useRef();

    return (
        <div>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex justify-between items-center"
            >
                {socials.map((elem, i) => {
                    return (
                        <Image
                            key={i}
                            src={elem.icon}
                            alt={elem.name}
                            width={50}
                            height={50}
                            onClick={() => window.open(elem.link, "_blank")}
                            className="cursor-pointer"
                            title={elem.name}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
