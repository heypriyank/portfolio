import Image from "next/image";
import Contact from "./div5/Contact";
import Socials from "./div5/Socials";

export default function Div5() {
    return (
        <div
            id="div5"
            className="min-h-screen flex items-center justify-center width__full div5"
        >
            <div className="h-screen w-2/3">
                <Contact />
            </div>
            <div className="h-screen w-1/3 flex flex-col">
                <div className="h-2/3">
                    <Socials />
                </div>
                <div className="self-center mt-auto">
                    <Image
                        className="-mt-20"
                        src="/images/hmu.png"
                        alt="PV with laptop"
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
}
