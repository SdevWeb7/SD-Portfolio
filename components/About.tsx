"use client"

import {useInView} from "react-intersection-observer";
import {useTheme} from "next-themes";
import {useEffect} from "react";

export const About = () => {
    const {setTheme} = useTheme();
    const { ref, inView } = useInView({
        threshold: 1,
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

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolore exercitationem expedita illum, ipsam iure labore neque odio pariatur suscipit, vitae. A accusamus iure possimus quidem soluta vitae voluptate!</p>
    </section>;
}