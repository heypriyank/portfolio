import Image from "next/image";
import Projects from "./div4/Projects";

export default function Div4({ scrollRefProp, handleWheel }:any) {
    return (
        <div id="div4" className="min-h-screen width__full div4 flex flex-col justify-between max-sm:max-w-[90vw]">
            <Projects scrollRefProp={scrollRefProp} handleWheel={handleWheel} />
            <div className="">
                <Image
                    className="-mt-28"
                    src="/images/lovepriyank.png"
                    alt="PV with laptop"
                    width={250}
                    height={250}
                />
            </div>
        </div>
    );
}