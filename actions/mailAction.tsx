"use server";

import {z} from "zod";
import {safeAction} from "@/actions/safe-actions";
import {Resend} from "resend";


const schema = z.object({
    email: z.string({message: "Email invalide."}).email({message: "Email invalide."}),
    subject: z.string().min(5, {message: "Minimum 5 caractères"}).max(50, {message: "Maximum 50 caractères"}),
    content: z.string().min(10, {message: "Minimum 10 caractères"}).max(50, {message: "Maximum 100 caractères"}),
});


export const mailAction = safeAction(
    schema,
    async ({email, subject, content}) => {


        const resend = new Resend(process.env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: `${email} <onboarding@resend.dev>`,
            to: "veustyle93310@gmail.com",
            subject: subject,
            text: content
        });

        if (result.error) {
            return {success: false, message: "Erreur lors de l'envoi du message"};
        } else {
            return {success: true, message: "Message envoyé"};
        }

    }
);
