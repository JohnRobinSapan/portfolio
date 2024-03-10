'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod';
import { aboutMe } from 'app/db/place-holder'
import { sql } from 'app/db/postgres';


export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string | null;
};

type MailOptions = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html?: string;
    attachments?: Array<{
        filename: string;
        path: string;
        cid: string;
    }>;
};

// Email schema
const FormSchema = z.object({
    id: z.string(),
    name: z.string({ invalid_type_error: 'Please enter your name.', }),
    from: z.string({ invalid_type_error: 'Please enter your email.', }),
    message: z.string({ invalid_type_error: 'Please enter your message.', }),
    date: z.string(),
});

const SendEmail = FormSchema.omit({ id: true, date: true });

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
    const date = new Date().toISOString();
    const host = process.env.SMTP_HOST;
    if (!process.env.SMTP_EMAIL) {
        throw new Error('Recipient email is not set');
    }
    const email = process.env.SMTP_EMAIL;
    const pass = process.env.SMTP_PASS;

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
    let mailOptions: MailOptions = {
        from: email, // sender address
        to: email, // list of receivers
        subject: `${aboutMe.name} website from ${from}`, // Subject line
        text: `You have a new submission from: ${name} (${from}) \n\nMessage: ${message}`, // plain text body
    };


    try {
        // Send email
        var submitMessage = 'Email successfully sent! You will receive a confirmation email.';
        await transporter.sendMail(mailOptions);

        // Add emails to db
        if (process.env.POSTGRES_URL) {
            await sql`
            INSERT INTO emails (name, from_email, message, date)
            VALUES (${name},${from},${message},${date})`;
            console.log(`Added email from ${name}`)
        }

        // Send receipt email
        mailOptions.to = from;
        mailOptions.subject = `${aboutMe.name} Confirmation: We've Received Your Message!`; // Subject line
        mailOptions.text = `You have a new submission to: ${aboutMe.name} (${email}) \n\nMessage: ${message}`; // plain text body
        mailOptions.attachments = [{
            filename: 'logo.jpg',
            path: 'app/logo.jpg',
            cid: `logo@cid` //same cid value as in the html img src
        }];
        mailOptions.html = `
            <html>
            <head>
            <style>
                table {
                width: 100%;
                border-collapse: collapse;
                }
                td, th {
                border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                text-align: left;
                }
            </style>
            </head>
            <body>
            <img src="cid:logo@cid" alt="${aboutMe.name} width="100" height="100" style="max-width:100%; height:auto;">
            <h1>Confirmation: We've Received Your Message!</h1>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to ${aboutMe.name}! This email is to confirm that we have successfully received your message.</p>

            <table>
                <tr>
                    <th>Detail</th>
                    <th>Information</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>${from}</td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td>${message}</td>
                </tr>
            </table>

            <p>${aboutMe.name} will review your message and aim to respond as quickly as possible, typically within 3 business days. If your inquiry is urgent, please call ${aboutMe.phone} for an immediate response.</p>
            
            <p>We appreciate your contact and are here to assist you. Should you have any further questions or need additional information, please do not hesitate to reach out.</p>
            
            <p>Thank you for your patience and understanding.</p>

            <p>Regards,</p>
            <p>${aboutMe.name}<br>
            ${aboutMe.title}<br>
            ${aboutMe.phone}<br>
            ${aboutMe.email}</p>
            <p>P.S. This is an automated response, but rest assured, ${aboutMe.name} will get back to you personally.</p>
            </body>
            </html>
            `; // html body
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
