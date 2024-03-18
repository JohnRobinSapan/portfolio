
import { useFormStatus } from 'react-dom';


export default function Input({ id, type, placeholder }: { id: string, type: string, placeholder: string }) {
    const { pending } = useFormStatus();
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                    {id}
                </label>
                <input
                    className={`appearance-none block w-full dark:bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    name={id}
                    required
                    aria-disabled={pending}
                    aria-busy={pending}
                    disabled={pending}
                />
            </div>
        </div>
    );
}