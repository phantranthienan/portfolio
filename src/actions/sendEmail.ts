'use server';
import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/ContactFormEmail';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message') as string;
    const senderEmail = formData.get('senderEmail') as string;

    if (!validateString(senderEmail, 320)) {
        return {
            error: 'Invalid email',
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message',
        };
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact  <onboarding@resend.dev>',
            to: 'phantranthienan1405@gmail.com',
            subject: 'Someone contacted you',
            replyTo: senderEmail,
            react: React.createElement(ContactFormEmail, {
                senderEmail: senderEmail,
                message: message,
            }),
        });
    } catch (error: unknown) {
        getErrorMessage(error);
    }

    return {
        data,
    };
};
