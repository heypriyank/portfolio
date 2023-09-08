"use client";
import { useRef, useEffect } from "react";
import Div1 from "./components/div1";
import Div2 from "./components/div2";
import Div3 from "./components/div3";
import Div4 from "./components/div4";
import Div5 from "./components/div5";

export default function Home() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const div1Ref = useRef<HTMLDivElement | null>(null);
    const div2Ref = useRef<HTMLDivElement | null>(null);
    const div3Ref = useRef<HTMLDivElement | null>(null);
    const div4Ref = useRef<HTMLDivElement | null>(null);
    const div5Ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            // div5Ref.current?.scrollIntoView({
            //     behavior: "smooth",
            //     // block: "start"
            // });
        }
    }, []);

    // useEffect(() => {
    //     const scrollContainer = scrollRef.current;

    //     const handleScroll = (e: WheelEvent) => {
    //         const scrollAmount = 4;
    //         if (scrollRef.current) {
    //             const currentScroll = scrollRef.current.scrollLeft;
    //             scrollRef.current.scrollLeft =
    //                 currentScroll + e.deltaX * scrollAmount;
    //         }
    //     };

    //     if (scrollContainer) {
    //         scrollContainer.addEventListener("wheel", handleScroll, {
    //             passive: false,
    //         });
    //     }
    //     return () => {
    //         if (scrollContainer) {
    //             scrollContainer.removeEventListener("wheel", handleScroll);
    //         }
    //     };
    // }, []);

    return (
        <main
            ref={scrollRef}
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
            className="flex min-h-screen items-center justify-between"
        >
            <div ref={div1Ref}>
                <Div1 />
            </div>
            <div ref={div2Ref}>
                <Div2 />
            </div>
            <div ref={div3Ref}>
                <Div3 />
            </div>
            <div ref={div4Ref}>
                <Div4 />
            </div>
            <div ref={div5Ref}>
                <Div5 />
            </div>
        </main>
    );
}
