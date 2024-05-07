"use client"

import {useInView} from "react-intersection-observer";
import {useTheme} from "next-themes";
import {useEffect} from "react";

export const About = () => {
    const {setTheme} = useTheme();
    const { ref, inView } = useInView({
        threshold: 0.6,
    })

    useEffect(() => {
        if (inView) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [inView]);


    return <section ref={ref} id={"about"}>
        <h2>About</h2>
    </section>;
}