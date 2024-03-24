'use client'
import { useState } from 'react'
import { useFormState } from 'react-dom';
import { upload } from 'app/api/send-email'
import Submit from './submit'
import Input from './input'
import Modal from './modal'

export default function UploadForm() {
    const initialState = { message: null, errors: {} };

    const [state, dispatch] = useFormState(upload, initialState);
    const [show, setShow] = useState(false);

    return (
        <div className="container mx-auto">
            <form action={(formData) => {
                dispatch(formData);
                setShow(true);
            }}>
                <Input id='file' type='file' sr />
                <Submit text='Submit' />
                <Modal isOpen={show} message={state?.message} setShow={setShow} refresh />
            </form >
        </div >
    );
}
