'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { sendEmail } from 'app/api/send-email'
import Submit from './submit'
import TextArea from './textarea'
import Input from './input'

export default function ContactForm() {
    const initialState = { message: null, errors: {} };

    const [state, dispatch] = useFormState(sendEmail, initialState);

    return (
        <div className="container mx-auto">
            <form action={dispatch} className="w-full max-w-lg">
                <Input id='name' type='text' placeholder='Your name' />
                <Input id='email' type='email' placeholder='your@email.com' />
                <TextArea id="message" />
                <Submit />
                {/* TODO: Customize popup message */}
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    {
                        <p className="mt-2 text-sm text-red-500" key={state?.message}>
                            {state?.message}

                        </p>
                    }
                </div>
            </form >
        </div >
    );
}
