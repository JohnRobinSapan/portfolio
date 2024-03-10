'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { sendEmail } from 'app/api/send-email'
import Submit from './submit'


export default function ContactForm() {
    const initialState = { message: null, errors: {} };

    const [state, dispatch] = useFormState(sendEmail, initialState);

    return (
        <div className="container mx-auto">
            <form action={dispatch} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="name"
                            type="text"
                            placeholder="Your name"
                            name="name"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            name="from"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            id="message"
                            placeholder="Your message..."
                            name="message"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <Submit />
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
                {/* TODO: Customize popup message */}
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    {
                        <p className="mt-2 text-sm text-red-500" key={state?.message}>
                            {state?.message}
                        </p>
                    }
                </div>
            </form>
        </div>
    );
}
