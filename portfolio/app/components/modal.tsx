
export default function Modal({ message, isOpen, setShow }: { message?: string | null, isOpen: boolean, setShow }) {
    return (<>
        {isOpen && <dialog
            className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
            <div className="prose shadow border border-gray-200 rounded-3xl bg-white m-auto p-8 leading-tight ">
                <div className="flex flex-col items-center">
                    <p>{message}</p>
                    <br />
                    <button type="button" className="shadow bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:bg-red-400" onClick={() => { setShow(false) }}>Close</button>
                </div>
            </div>
        </dialog>}
    </>);
}