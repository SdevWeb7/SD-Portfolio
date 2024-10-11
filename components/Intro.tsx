"use client";

import Link from "next/link";
import {IconGithub} from "@/svg/IconGithub";
import {IconFrontEndMentor} from "@/svg/IconFrontEndMentor";
import {IconLinkedin} from "@/svg/IconLinkedin";
import {IconMail} from "@/svg/IconMail";
import {MouseEventHandler, useState} from "react";
import {EmailBox} from "@/components/EmailBox";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import {cn} from "@/lib/utils";


export const Intro = () => {

    const [isOpenMailModal, setIsOpenMailModal] = useState(false);


    const handleMailClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsOpenMailModal(true);
    }


    return <section id={'intro'}>
        <div
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 flex-col rounded-full">

                <h2 className={'z-10'}>Steven</h2>
                <p className={'title z-10'}>Développeur Web Full-Stack</p>
                <p className={'badges z-10'}>
                    <span className={'badge'}>Next.js</span>
                    <span className={'badge'}>React.js</span>
                    <span className={'badge'}>Symfony</span>
                </p>

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>



        <aside className={'reseaux'}>
            <nav>
                <Link href={"#"}
                      passHref={true}
                      onClick={handleMailClick}
                      target={'_blank'}>
                    <IconMail/>
                </Link>

                <Link href={"https://www.linkedin.com/in/steven-durand-3b347126b/"} target={"_blank"}>
                    <IconLinkedin/>
                </Link>

                <Link href={"https://github.com/SdevWeb7"} target={"_blank"}>
                    <IconGithub/>
                </Link>

                <Link href={"https://www.frontendmentor.io/profile/Veustyle"} target={"_blank"}>
                    <IconFrontEndMentor/>
                </Link>
            </nav>
        </aside>

        {isOpenMailModal && <EmailBox setIsOpen={setIsOpenMailModal}/>}
    </section>;
}
