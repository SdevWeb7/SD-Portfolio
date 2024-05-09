import {createPortal} from "react-dom";
import {IconClose} from "@/svg/IconClose";
import React, {useEffect, useRef, useState} from "react";
import {mailAction} from "@/actions/mailAction";
import toast from "react-hot-toast";

interface MenuProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const EmailBox: React.FC<MenuProps> = ({setIsOpen}) => {
    const [formDatas, setFormDatas] = useState({
        email: '',
        subject: '',
        content: ''
    });
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleEventClose);

        return () => {
            document.removeEventListener('mousedown', handleEventClose);
        }
    }, []);


    const handleEventClose: EventListenerOrEventListenerObject = (e) => {
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    const handleSubmit = async (formData: FormData) => {
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
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.name, e.target.value);
        setFormDatas({
            ...formDatas,
            [e.target.name]: e.target.value
        });
    }

    return createPortal(
        <section className={"mail-modal"}>
            <form action={handleSubmit} ref={formRef}>

                <IconClose
                    className={"close-icon"}
                    onClick={() => setIsOpen(false)} />

                <p>Me contacter</p>

                <label htmlFor="email">Votre address e-mail</label>
                <input
                    onChange={handleInputChange}
                    type="email"
                    id={"email"}
                    name={"email"}
                    value={formDatas.email}
                    placeholder="Votre e-mail" />

                <label htmlFor="subject">Sujet du message</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name={"subject"}
                    id={"subject"}
                    value={formDatas.subject}
                    placeholder="Sujet" />


                <label htmlFor="content">Votre message</label>
                <textarea
                    onChange={handleInputChange}
                    name="content"
                    value={formDatas.content}
                    id="content"
                    cols={30}
                    rows={10}
                    placeholder={"Votre message"}></textarea>


                <button
                    type={"submit"}
                    className={'btn-submit'}>Envoyer</button>
            </form>
        </section>, document.body);
}