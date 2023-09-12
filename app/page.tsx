"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Div1 = dynamic(() => import("./components/div1"), { ssr: true });
const Div2 = dynamic(() => import("./components/div2"), { ssr: true });
const Div3 = dynamic(() => import("./components/div3"), { ssr: true });
const Div4 = dynamic(() => import("./components/div4"), { ssr: true });
const Div5 = dynamic(() => import("./components/div5"), { ssr: true });

export default function Home() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const div1Ref = useRef<HTMLDivElement | null>(null);
    const div2Ref = useRef<HTMLDivElement | null>(null);
    const div3Ref = useRef<HTMLDivElement | null>(null);
    const div4Ref = useRef<HTMLDivElement | null>(null);
    const div5Ref = useRef<HTMLDivElement | null>(null);
    const refs = [div1Ref, div2Ref, div3Ref, div4Ref, div5Ref];

    let delta = 0;
    let currentPage = 0;
    let scrolling = false;

    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
    });

    function handleWheel(e: any) {
        e.preventDefault();

        if ((e.deltaX > delta || e.deltaY > delta) && currentPage < refs.length - 1) {
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
                }, 1100);
            }
        } else if ((e.deltaX < delta || e.deltaY < delta) && currentPage > 0) {
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
                }, 1100);
            }
        }
    }

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            if (windowDimensions.height < windowDimensions.width) {
                scrollContainer.addEventListener("wheel", handleWheel);
            }
            if (windowDimensions.height > windowDimensions.width) {
                scrollContainer?.removeEventListener("wheel", handleWheel);
            }
        }

        return () => {
            scrollContainer?.removeEventListener("wheel", handleWheel);
        };
    }, [windowDimensions]);

    useEffect(() => {
        function getWindowDimensions() {
            const { innerWidth: width, innerHeight: height } = window;
            return { width, height };
        }
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        setWindowDimensions(getWindowDimensions());
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <main
            ref={scrollRef}
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
            className="flex min-h-screen items-center justify-between max-sm:flex-col max-sm:max-w-[100vw]"
        >
            <div ref={div1Ref}>
                <Div1 />
            </div>
            <div ref={div2Ref}>
                <Div2 />
            </div>
            <div ref={div3Ref}>
                <Div3
                    scrollRefProp={scrollRef}
                    handleWheel={handleWheel}
                    scrolling={scrolling}
                    windowDimensions={windowDimensions}
                />
            </div>
            <div ref={div4Ref}>
                <Div4
                    scrollRefProp={scrollRef}
                    handleWheel={handleWheel}
                    scrolling={scrolling}
                    windowDimensions={windowDimensions}
                />
            </div>
            <div ref={div5Ref}>
                <Div5 />
            </div>
        </main>
    );
}
