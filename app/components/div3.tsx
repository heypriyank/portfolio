import Image from "next/image";
import Experience from "./div3/Experience";

export default function Div3({ scrollRefProp, handleWheel }:any) {
    return (
        <div id="div3" className="min-h-screen width__full div3">
            <Experience scrollRefProp={scrollRefProp} handleWheel={handleWheel}/>
        </div>
    );
}
