'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod';
import { list, put } from '@vercel/blob';
import { aboutMe } from 'app/db/place-holder'
import { sql } from 'app/db/postgres';
// import { writeFile } from "fs/promises";
// import path from "path";
import { extname } from 'path';



export async function getBlob(prefix) {
    console.log(`fetching ${prefix}...`);
    const image = await list({ prefix });
    return image.blobs[0]?.url;
}

var logoImagePath = 'public/logo.webp';
var resumeUrl;

export async function getResumeUrl() {
    // if (
    //     // process.env.VERCEL_ENV &&
    //     !resumeUrl.startsWith('http')) {

    resumeUrl = await getBlob('johnsapan-resume');
    // }
    // console.log(resumeUrl);
    return resumeUrl;
}

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string | null;
};

export async function upload(prevState: State, formData: FormData) {
    const file = formData.get("file") as File;
    var submitMessage = "No files received.";
    if (!file) {
        console.log(submitMessage)
        return {
            message: submitMessage,
        };
    }
    // Check file type
    const fileType = extname(file.name).toLowerCase();
    if (fileType !== '.pdf') {
        submitMessage = 'Invalid file type. Only PDF files are allowed.'
        console.log(submitMessage)
        return {
            message: submitMessage,
        };
    }

    try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = 'johnsapan-resume.pdf'

        // if (
        //     // process.env.VERCEL_ENV || 
        //     resumeUrl.startsWith('http')) {
        const blob = await put(filename, buffer, {
            access: 'public',
            contentType: 'application/pdf',
            addRandomSuffix: false,
        });
        // console.log(blob.url)
        // }
        // else {
        //     await writeFile(
        //         path.join(process.cwd(), "public/" + filename),
        //         buffer
        //     );
        // }

        // File has been successfully written, now perform subsequent actions
        submitMessage = 'Uploaded PDF successfully'
        console.log(submitMessage)
        return {
            message: submitMessage,
        };
    }
    catch (error) {
        console.error("Error occured", error);
        return {
            message: 'Failed to upload PDF.',
        };
    }
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
    email: z.string({ invalid_type_error: 'Please enter your email.', }),
    message: z.string({ invalid_type_error: 'Please enter your message.', }),
    date: z.string(),
});

const SendEmail = FormSchema.omit({ id: true, date: true });

export async function sendEmail(prevState: State, formData: FormData) {

    if (process.env.VERCEL_ENV && !logoImagePath.startsWith('http')) {
        logoImagePath = await getBlob('logo') || logoImagePath;
    }

    const validatedFields = SendEmail.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });
    if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to send email',
        };
    }

    const { name, email, message } = validatedFields.data;
    const date = new Date().toISOString();
    const host = process.env.SMTP_HOST;
    if (!process.env.SMTP_EMAIL) {
        throw new Error('Recipient email is not set');
    }
    const recipient = process.env.SMTP_EMAIL;
    const pass = process.env.SMTP_PASS;

    // console.log(name, from, message);
    // console.log(host, email, pass);

    let transporter = nodemailer.createTransport({
        host: host, // Replace with your mail server SMTP host
        port: 587, // Common port for SMTP
        secure: false, // true for 465, false for other ports
        auth: {
            user: recipient, // Replace with your SMTP email
            pass: pass, // Replace with your SMTP password
        },
    });


    // Set up email data
    let mailOptions: MailOptions = {
        from: recipient, // sender address
        to: recipient, // list of receivers
        subject: `${aboutMe.name} website from ${email}`, // Subject line
        text: `You have a new submission from: ${name} (${email}) \n\nMessage: ${message}`, // plain text body
    };


    try {
        // throw error;
        // Send email
        var submitMessage = 'Email successfully sent! You will receive a confirmation email.';
        await transporter.sendMail(mailOptions);

        // Add emails to db
        if (process.env.POSTGRES_URL) {
            await sql`
            INSERT INTO emails (name, from_email, message, date)
            VALUES (${name},${email},${message},${date})`;
            console.log(`Added email from ${name}`)
        }

        // Send confirmation email
        mailOptions.to = email;
        mailOptions.subject = `Confirmation: We've Received Your Message!`; // Subject line
        mailOptions.text = `You have a new submission to: ${aboutMe.name} (${aboutMe.email}) \n\nMessage: ${message}`; // plain text body
        mailOptions.attachments = [{
            filename: 'logo.webp',
            path: logoImagePath,
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
                    <h1>Confirmation: Message Received!</h1>
                    <p>Dear ${name},</p>
                    <p>Thank you for contacting me! This email is to confirm that I have successfully received your message.</p>

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
                            <td>${email}</td>
                        </tr>
                        <tr>
                            <td>Message</td>
                            <td>${message}</td>
                        </tr>
                    </table>

                    <p>I will review your message and aim to respond as quickly as possible, typically within 3 business days. If you need a quicker response, feel free to call me at ${aboutMe.phone} — I'll do my best to get back to you promptly.</p>
                    
                    <p>In the meantime, you may find some helpful information on my <a href="https://www.johnsapan.com">website</a>.</p>
                    
                    <p>I appreciate your patience and look forward to speaking with you soon.</p>

                    <p>Warm regards,</p>
                    <p>${aboutMe.name}<br>
                    ${aboutMe.title}<br>
                    ${aboutMe.phone}<br>
                    ${aboutMe.email}<br>
                    johnsapan.com</p>
                    
                    <p>P.S. This is an automated response, but rest assured, I will get back to you personally.</p>
                </body>
            </html>`; // html body
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
