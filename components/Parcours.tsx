"use client"

import {useInView} from "react-intersection-observer";
import {useTheme} from "next-themes";
import {useEffect} from "react";
import Image from "next/image";
import logoC from "@/public/images/technos/logoC.png";
import logoPython from "@/public/images/technos/python.png";
import logoJS from "@/public/images/technos/javascript.png";
import logoPhp from "@/public/images/technos/php.png";
import logoReact from "@/public/images/technos/react.png";
import {IconPrisma} from "@/public/images/technos/IconPrisma";
import {IconNext} from "@/public/images/technos/IconNext";
import {IconSymfony} from "@/public/images/technos/IconSymfony";
import logoTailwindCss from '@/public/images/technos/tailwind.png';
import {IconNode} from "@/public/images/technos/IconNode";
import {IconTS} from "@/public/images/technos/IconTS";
import {IconGit} from "@/public/images/technos/IconGit";
import {IconSQL} from "@/public/images/technos/IconSQL";

export const Parcours = () => {
    const {setTheme} = useTheme();
    const { ref, inView } = useInView({
        threshold: .8,
    })

    useEffect(() => {
        if (inView) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [inView]);


    return <section ref={ref} id={"parcours"}>
        <h2>Parcours</h2>


        <div className="container">
        <article className={'description'}>
            <ul>Auto-formation:
                <li>C, C++, Python</li>
                <li>HTML, CSS, Sass</li>
                <li>Javascript, Php</li>
                <li>SQL, Git</li>
                <li>Symfony, ReactJS</li>
                <li>Next.js, Prisma</li>
                <li>TailwindCSS, Shadcnui</li>
                <li>Typescript</li>
            </ul>

            <ul>École:
                <li>ExpressJS, ReactJS</li>
                <li>Mysql, Sass</li>
            </ul>

            <ul>Stacks 💜💜💜:
                <li>Next.js, Prisma</li>
                <li>Symfony, React</li>
                <li>Sass ou TailwindCSS</li>
            </ul>
        </article>



        <article className="technologies">

            <div className="container-logos">
                <Image
                    className={'c'}
                    src={logoC}
                    alt={'logo language C'} />


                <Image
                    className={'php'}
                    src={logoPhp}
                    alt={'logo language Php'} />

                <Image
                    className={'python'}
                    src={logoPython}
                    alt={'logo language Python'} />
            </div>


            <div className="container-logos">
                <IconSymfony className={'symfony'} />
                <IconSQL className={'sql'} />

                </div>


            <div className="container-logos">
                <IconGit className={'git'} />
                <Image
                    className={'js'}
                    src={logoJS}
                    alt={'logo language Javascript'} />

            </div>

            <div className="container-logos">
                <IconNode className={'node'} />
                <Image
                    className={'react'}
                    src={logoReact}
                    alt={'logo language ReactJS'} />
            </div>


            <div className="container-logos">
                <Image
                    className={'tailwind'}
                    src={logoTailwindCss}
                    alt={'logo language Tailwindcss'} />
                <IconPrisma className={'prisma'} />
            </div>


            <div className="container-logos">
                <IconNext className={'next'} />
                <IconTS className={'ts'} />
            </div>
        </article>
        </div>
    </section>;
}