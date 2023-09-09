import Image from "next/image";
export default function ComingSoon() {
    return (
        <div className="min-h-screen flex flex-col justify-center font-extrabold text-xl text-center text-night items-center px-10 coming__soon">
            <h1>This UI is still cooking, meanwhile open on a bigger screen</h1>
            <Image
                className="absolute bottom-0"
                src="/images/hushh.png"
                alt="PV whispers"
                width={250}
                height={250}
            />
        </div>
    );
}
