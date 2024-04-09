'use client'
import { useState } from 'react'
import { useFormState } from 'react-dom';
import Modal from './modal';

export default function GenericForm(props) {
    const initialState = { message: null, errors: {} };
    const { action } = props;
    const [state, dispatch] = useFormState(action, initialState) as [typeof initialState, (payload: FormData) => void];
    const [show, setShow] = useState(false);

    return (
        <div className="container mx-auto">
            <form action={(formData) => {
                dispatch(formData);
                setShow(true);
            }}>
                {props.children}
                <Modal isOpen={show} message={state?.message} setShow={setShow} refresh={props.refresh} />
            </form >
        </div >
    );
}
