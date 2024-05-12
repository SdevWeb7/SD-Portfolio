"use client";

import {useTheme} from "next-themes";
import {useInView} from "react-intersection-observer";
import React, {useEffect, useRef, useState, useTransition} from "react";
import {mailAction} from "@/actions/mailAction";
import toast from "react-hot-toast";
import {IconLinkedin} from "@/svg/IconLinkedin";
import {IconGithub} from "@/svg/IconGithub";
import {IconFrontEndMentor} from "@/svg/IconFrontEndMentor";

export const Footer = () => {
    const {setTheme} = useTheme();
    const { ref, inView } = useInView({
        threshold: .4,
    })
    const [isPending, startTransition] = useTransition();
    const [formDatas, setFormDatas] = useState({
        email: '',
        subject: '',
        content: ''
    });
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formDatas.email);
    const isSubjectValid = formDatas.subject.length > 5 && formDatas.subject.length < 50;
    const isContentValid = formDatas.content.length > 10 && formDatas.content.length < 100;
    const isFormValid = isEmailValid && isSubjectValid && isContentValid;
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (inView) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [inView]);


    const handleSubmit =  () => {
        startTransition(async () => {
            const res = await mailAction({
                email: formDatas.email,
                subject: formDatas.subject,
                content: formDatas.content
            });

            if ((res.validationErrors && Object.keys(res.validationErrors).length > 0)
                || res.serverError) {
                toast.error('Il y eu une erreur, veuillez recommencer');
            } else if (res.data && res.data.success) {
                toast.success(res.data.message);
            } else if (res.data && !res.data.success) {
                toast.error(res.data.message);
            }
        })

    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormDatas({
            ...formDatas,
            [e.target.name]: e.target.value
        });
    }



    return <section ref={ref} id={'footer'}>
        <h2>Contact</h2>
        <form action={handleSubmit} ref={formRef}>

            <label htmlFor="email">Votre adresse e-mail</label>
            <input
                onChange={handleInputChange}
                type="email"
                id={"email"}
                name={"email"}
                value={formDatas.email}
                placeholder="Votre e-mail"/>
            {!isEmailValid && <span>Exemple: exemple@test.fr</span>}

            <label htmlFor="subject">Sujet du message</label>
            <input
                onChange={handleInputChange}
                type="text"
                name={"subject"}
                id={"subject"}
                value={formDatas.subject}
                placeholder="Sujet"/>
            {!isSubjectValid && <span>Le sujet doit contenir entre 5 et 50 caractères.</span>}

            <label htmlFor="content">Votre message</label>
            <textarea
                onChange={handleInputChange}
                name="content"
                value={formDatas.content}
                id="content"
                cols={30}
                rows={10}
                placeholder={"Votre message"}></textarea>
            {!isContentValid && <span>Le contenu doit contenir entre 10 et 100 caractères.</span>}

            <button
                type={"submit"}
                disabled={isPending || !isFormValid}
                className={`btn-submit ${isPending || !isFormValid ? 'btn-disabled' : ""}`}>Envoyer
            </button>
        </form>

        <aside className="social-links">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>

            <IconLinkedin className={"ml-4"} />
            <IconGithub />
            <IconFrontEndMentor className={'mr-4'} />
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>

        </aside>


        <p>&copy;Copyright 2024. Made by Steven with NextJS</p>
    </section>;
}