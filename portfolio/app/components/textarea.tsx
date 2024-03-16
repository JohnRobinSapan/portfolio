
import { useFormStatus } from 'react-dom';


export default function TextArea({ id }: { id: string }) {
    const { pending } = useFormStatus();
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                    {id}
                </label>
                <textarea
                    className={`no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    id={id}
                    placeholder="Your message..."
                    name={id}
                    required
                    aria-disabled={pending}
                    aria-busy={pending}
                    disabled={pending}
                ></textarea>
            </div>
        </div>
    );
}