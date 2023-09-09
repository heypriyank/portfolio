import Image from "next/image";
import Tech from "./div2/Tech";

export default function Div2() {
    return (
        <div id="div2" className="min-h-screen flex flex-col justify-between width__full div2">
            <Tech/>
            <div className="flex justify-end">
                <Image
                    className="-mt-40"
                    src="/images/yumpriyank.png"
                    alt="PV with laptop"
                    width={250}
                    height={250}
                />
            </div>
        </div>
    );
}
