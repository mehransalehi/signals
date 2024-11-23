'use client'
export default function Modal({ title, text, index }: { title: string, text: string, index: number }) {
    const handleModal = (index: number) => {
        const modal = document.getElementById(`details-modal-${index}`) as HTMLDialogElement;
        if (!modal) {
            return false;
        }
        console.log(index);
        modal.showModal();
    }
    return <>
        <button className="btn btn-ghost btn-xs" onClick={() => handleModal(index)}>Details</button>
        <dialog id={`details-modal-${index}`} className="modal text-start">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{text}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-xs">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
}