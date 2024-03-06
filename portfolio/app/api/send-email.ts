'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod';
import { aboutMe } from 'app/db/place-holder'

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    id: z.string(),
    name: z.string({ invalid_type_error: 'Please enter your name.', }),
    from: z.string({ invalid_type_error: 'Please enter your email.', }),
    to: z.string(),
    subject: z.string(),
    message: z.string({ invalid_type_error: 'Please enter your message.', }),
    date: z.string(),
});

const SendEmail = FormSchema.omit({ id: true, to: true, subject: true, date: true });


export async function sendEmail(prevState: State, formData: FormData) {


    const validatedFields = SendEmail.safeParse({
        name: formData.get('name'),
        from: formData.get('from'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to send email',
        };
    }

    const { name, from, message } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    const host = process.env.SMTP_HOST
    const email = process.env.SMTP_EMAIL
    const pass = process.env.SMTP_PASS

    // console.log(name, from, message);
    // console.log(host, email, pass);

    let transporter = nodemailer.createTransport({
        host: host, // Replace with your mail server SMTP host
        port: 587, // Common port for SMTP
        secure: false, // true for 465, false for other ports
        auth: {
            user: email, // Replace with your SMTP email
            pass: pass, // Replace with your SMTP password
        },
    });


    // Set up email data
    let mailOptions = {
        from: email, // sender address
        to: email, // list of receivers
        subject: `${aboutMe.name} website from ${from}`, // Subject line
        text: `You have a new submission from: ${name} (${from}) \n\nMessage: ${message}`, // plain text body
    };

    // Send the email
    try {
        var submitMessage = 'Email successfully sent! You will receive a confirmation email.';
        await transporter.sendMail(mailOptions);
        mailOptions.to = from;
        mailOptions.text = `You have a new submission to: ${aboutMe.name} (${email}) \n\nMessage: ${message}`; // plain text body
        await transporter.sendMail(mailOptions);

    }
    catch (error) {
        submitMessage = 'Failed to send email.'
        console.error(submitMessage, error);
    }
    return {
        message: submitMessage,
    };
};

