'use client'

import { CiTrash } from "react-icons/ci";
import { deleteSignal } from "@/app/actions/signalActions";
import { useState } from "react";

export default function DeleteModal({ title, index }: { title: string, index: string }) {

    const [loading,setLoading] = useState(false);
    const handleModal = (index: string) => {
        const modal = document.getElementById(`delete-modal-${index}`) as HTMLDialogElement;
        if (!modal) {
            return false;
        }
        modal.showModal();
    }

    const deleteSignalWithId = deleteSignal.bind(null, index);
    const handleCloseModal =  () => {
        const modal = document.getElementById(`delete-modal-${index}`) as HTMLDialogElement;
        if (!modal) {
            return false;
        }
        modal.classList.add("hidden");
        setLoading(true);
    }
    return <>
        <button onClick={() => handleModal(index)} className="btn btn-error btn-xs text-lg" disabled={loading}>
            {loading ? (<span className="loading loading-spinner loading-sm"></span>) : (<CiTrash />)}
        </button>
        <dialog id={`delete-modal-${index}`} className="modal text-start">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">Are You Sure You Want To Delete This Signal?</p>
                <div className="modal-action">
                    <form action={deleteSignalWithId}>
                        <button type="submit" className="btn btn-success btn-sm text-white text-xs" onClick={handleCloseModal}>YES</button>
                    </form>
                    
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-error btn-sm text-white text-xs">NO</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
}