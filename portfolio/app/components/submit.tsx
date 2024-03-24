
import { useFormStatus } from 'react-dom';


export default function Submit({ text = 'Send' }: { text?: string }) {
    const { pending } = useFormStatus();
    return (
        <button
            className={`shadow-lg bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${pending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-400'}`}
            type="submit"
            aria-disabled={pending}
            aria-busy={pending}
            disabled={pending} >
            {pending ? 'Sending' : text}
        </button>
    );
}