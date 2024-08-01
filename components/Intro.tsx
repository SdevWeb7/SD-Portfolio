"use client";

import Link from "next/link";
import {IconGithub} from "@/svg/IconGithub";
import {IconFrontEndMentor} from "@/svg/IconFrontEndMentor";
import {IconLinkedin} from "@/svg/IconLinkedin";
import {IconMail} from "@/svg/IconMail";
import {MouseEventHandler, useState} from "react";
import {EmailBox} from "@/components/EmailBox";


export const Intro = () => {

    const [isOpenMailModal, setIsOpenMailModal] = useState(false);


    const handleMailClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsOpenMailModal(true);
    }


    return <section id={'intro'}>
        <h2>Steven</h2>
        <p className={'title'}>Développeur web full-stack junior</p>
        <p className={'badges'}>
            <span className={'badge'}>Next.js</span>
            <span className={'badge'}>React</span>
            <span className={'badge'}>Symfony</span>
        </p>


        <aside className={'reseaux'}>
            <nav>
                <Link href={"#"}
                      passHref={true}
                      onClick={handleMailClick}
                      target={'_blank'}>
                        <IconMail />
                </Link>

                <Link href={"https://www.linkedin.com/in/steven-durand-3b347126b/"} target={"_blank"}>
                    <IconLinkedin />
                </Link>

                <Link href={"https://github.com/SdevWeb7"} target={"_blank"}>
                    <IconGithub />
                </Link>

                <Link href={"https://www.frontendmentor.io/profile/Veustyle"} target={"_blank"}>
                    <IconFrontEndMentor />
                </Link>
            </nav>
        </aside>

        {isOpenMailModal && <EmailBox setIsOpen={setIsOpenMailModal} />}
    </section>;
}
