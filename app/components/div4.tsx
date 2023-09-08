import Image from "next/image";
import Projects from "./div4/Projects";

export default function Div4() {
    return (
        <div id="div4" className="min-h-screen width__full div4 flex flex-col justify-between">
            <Projects/>
            <div className="">
                <Image
                    className="-mt-20"
                    src="/images/lovepriyank.png"
                    alt="PV with laptop"
                    width={250}
                    height={250}
                />
            </div>
        </div>
    );
}