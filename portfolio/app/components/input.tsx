
import { useFormStatus } from 'react-dom';


export default function Input({ id, type, placeholder, sr = false }: { id: string, type: string, placeholder?: string, sr?: boolean }) {
    const { pending } = useFormStatus();
    let autoComplete: string;

    switch (id) {
        case 'name':
            autoComplete = 'name';
            break;
        case 'email':
            autoComplete = 'email';
            break;
        default:
            autoComplete = 'off'; // Default behavior when type is not recognized
            break;
    }
    return (
        <div className="flex flex-wrap mb-6">
            <div className="w-full">
                <label className={`${sr ? 'sr-only' : ''} block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2`} htmlFor={id}>
                    {id}
                </label>
                <input
                    className={`appearance-none shadow-inner block w-full dark:bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    name={id}
                    required
                    aria-disabled={pending}
                    aria-busy={pending}
                    disabled={pending}
                    autoComplete={autoComplete}
                />
            </div>
        </div>
    );
}