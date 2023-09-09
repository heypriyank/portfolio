"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Div1 = dynamic(() => import("./components/div1"), { ssr: false });
const Div2 = dynamic(() => import("./components/div2"), { ssr: false });
const Div3 = dynamic(() => import("./components/div3"), { ssr: false });
const Div4 = dynamic(() => import("./components/div4"), { ssr: false });
const Div5 = dynamic(() => import("./components/div5"), { ssr: false });

export default function Home() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const div1Ref = useRef<HTMLDivElement | null>(null);
    const div2Ref = useRef<HTMLDivElement | null>(null);
    const div3Ref = useRef<HTMLDivElement | null>(null);
    const div4Ref = useRef<HTMLDivElement | null>(null);
    const div5Ref = useRef<HTMLDivElement | null>(null);
    const refs = [div1Ref, div2Ref, div3Ref, div4Ref, div5Ref];

    let deltaX = 0;
    let currentPage = 0;
    let scrolling = false;

    function handleWheel(e: any) {
        e.preventDefault();

        if (e.deltaX > deltaX && currentPage < refs.length - 1) {
            if (!scrolling) {
                scrolling = true;
                const divToGoTo = refs[currentPage + 1];
                divToGoTo.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                currentPage += 1;
                setTimeout(() => {
                    scrolling = false;
                }, 1000);
            }
        } else if (e.deltaX < deltaX && currentPage > 0) {
            if (!scrolling) {
                scrolling = true;
                const divToGoTo = refs[currentPage - 1];
                divToGoTo.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                currentPage -= 1;
                setTimeout(() => {
                    scrolling = false;
                }, 1000);
            }
        }
    }

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            if (scrollContainer) {
                scrollContainer.addEventListener("wheel", handleWheel);
            }
        }

        return () => {
            scrollContainer?.removeEventListener("wheel", handleWheel);
        };
    }, []);

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
                <Div3 scrollRefProp={scrollRef} handleWheel={handleWheel} />
            </div>
            <div ref={div4Ref}>
                <Div4 scrollRefProp={scrollRef} handleWheel={handleWheel} />
            </div>
            <div ref={div5Ref}>
                <Div5 />
            </div>
        </main>
    );
}
