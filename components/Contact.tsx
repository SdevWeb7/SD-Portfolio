"use client";

import {useTheme} from "next-themes";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export const Contact = () => {
    const {setTheme} = useTheme();
    const { ref, inView } = useInView({
        threshold: 0.5,
    })

    useEffect(() => {
        if (inView) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [inView]);

    return <section ref={ref} id={'contact'}>
        <h2>Contact</h2>
    </section>;
}