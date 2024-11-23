'use client'

import { useState, useEffect } from 'react';
import { Signal } from '@prisma/client';
import { readSignals } from '@/app/actions/signalActions';
import Modal from '../components/modal';
import DeleteModal from '../components/deleteModal';
import { deleteSignals } from '@/app/actions/signalActions';


import { CiTrash, CiEdit } from "react-icons/ci";
import { FaArrowRightArrowLeft, FaArrowTurnDown, FaCheck, FaExclamation, FaArrowTrendUp } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { CiCircleCheck } from "react-icons/ci";



export default function SignalsTable({ signals }: { signals: Signal[] | false }) {
    if (!signals || signals.length === 0) {
        return <p className="font-bold text-lg text-center">There is no signal for you</p>;
    }

    const [isVisibilGroupDelete, setIsVisibleGroupDelete] = useState(false);
    const [targetSignals, setTargetSignals] = useState<string[]>([]);
    const [eachCheckbox, setEachCheckbox] = useState<boolean[]>(new Array(signals.length).fill(false));
    const [delLoading,setDelLoading] = useState(false);

    const handleHeaderCheckbox = (checked: boolean) => {
        setEachCheckbox(new Array(signals.length).fill(checked));
        setIsVisibleGroupDelete(checked);

        const targets: string[] = [];
        eachCheckbox.map((checkbox, index) => {
            if (checkbox) {
                targets.push(signals[index].id);
            }
        });
        setTargetSignals(targets)
    }
    const handleCheckbox = (index: number, checked: boolean) => {
        const newCheckboxs = [...eachCheckbox];
        newCheckboxs[index] = checked;
        setEachCheckbox(newCheckboxs);
        setIsVisibleGroupDelete(newCheckboxs.filter(ch => ch === true).length > 1)

        const targets: string[] = [];
        newCheckboxs.map((checkbox, index) => {
            if (checkbox) {
                targets.push(signals[index].id);
            }
        });
        setTargetSignals(targets)
    }
    const handleGroupDelete = async () => {
        const modal = document.getElementById(`delete-group-modal`) as HTMLDialogElement;
        if (!modal) {
            return false;
        }
        modal.classList.add('hidden');
        setDelLoading(true);
    }

    const deleteSignalsWithIds = deleteSignals.bind(null, targetSignals)


    return <>
        <table className="table bg-white shadow-sm">
            <thead>
                <tr className='text-center'>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" onChange={(event) => { handleHeaderCheckbox(event.target.checked) }} />
                        </label>
                    </th>
                    <th className='text-start'>Pair</th>
                    <th>Entry</th>
                    <th>Stop</th>
                    <th>Side/Lev</th>
                    <th className='text-start'>Targets</th>
                    <th>Satus</th>
                    <th>Date</th>
                    <th className='text-start'>Manage</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>

                {signals.map((signal, index) => {
                    const date = new Date(signal.createdAt);
                    const options: Intl.DateTimeFormatOptions = {
                        month: "long", // "long", "short", "narrow", "numeric", "2-digit"
                        day: "numeric", // "numeric", "2-digit"
                        hour: "2-digit", // "numeric", "2-digit"
                        minute: "2-digit", // "numeric", "2-digit"
                        hour12: true, // boolean
                    };

                    const formattedDate = date.toLocaleString('en-US', options);
                    return (
                        <tr key={index} className='text-center'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox checkbox-primary" checked={eachCheckbox[index]}
                                        onChange={(event) => { handleCheckbox(index, event.target.checked) }} />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={`https://assets.coincap.io/assets/icons/${signal.symbol.split('/')[0]}@2x.png`} alt="ADA Icon" className='w-32' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{signal.symbol.toUpperCase()}</div>
                                        <div className="text-sm opacity-50">{signal.symbol.split('/')[0].toUpperCase()}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="badge badge-success text-base-100 p-2 text-[12px]">{signal.entryMin}</div>&nbsp;
                                <div className="badge badge-success text-base-100 p-2 text-[12px]">{signal.entryMax}</div>
                            </td>
                            <td><p className='font-bold text-[12px]'>{signal.stopLoss}</p></td>
                            <td>
                                {signal.side == 'Short' ? (
                                    <div className="badge badge-error text-base-100 p-3 text-[12px]"><FaArrowRightArrowLeft />&nbsp;SHORT</div>
                                ) : (
                                    <div className="badge badge-success text-base-100 p-3 text-[12px]"><FaArrowRightArrowLeft />&nbsp;LONG</div>
                                )}
                            </td>
                            <td className='text-start'>
                                {signal.profit.split(' ').map((profit, index) => (
                                    <div key={index} className="badge badge-secondary text-base-100 p-2 text-[12px] me-2">{profit}</div>
                                ))}
                            </td>
                            <td>
                                {signal.status == 'Disable' ? (
                                    <div className="text-error text-base-100 flex justify-center"><RxCrossCircled /></div>
                                ) : (
                                    <div className="text-success text-base-100 flex justify-center"><CiCircleCheck /></div>
                                )}
                            </td>
                            <td><p className='text-[12px] font-bold'>{formattedDate}</p></td>
                            <td>
                                <div className='flex justify-between w-[80px]'>
                                    <button className="btn btn-primary btn-xs text-lg"><CiEdit /></button>
                                    <DeleteModal title='Delete Signal' index={signal.id}></DeleteModal>
                                </div>
                            </td>
                            <td>
                                <Modal index={index} title="Details" text={signal.text}></Modal>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
        <div className="flex justify-center mt-5">
            <button className={`btn btn-error text-white ${isVisibilGroupDelete ? 'block' : 'hidden'}`}
            disabled={delLoading}
                onClick={() => {
                    const modal = document.getElementById(`delete-group-modal`) as HTMLDialogElement;
                    if (!modal) {
                        return false;
                    }
                    modal.showModal();
                }}>{delLoading ? (<span className="loading loading-spinner loading-sm"></span>) : (<CiTrash className='text-lg' />)}</button>
            <dialog id={`delete-group-modal`} className="modal text-start">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Signals</h3>
                    <p className="py-4">Are You Sure You Want To Delete Selected Signals?</p>
                    <div className="modal-action">
                        <form action={deleteSignalsWithIds}>
                            <button type="submit" className="btn btn-success btn-sm text-white text-xs" onClick={handleGroupDelete}>YES</button>
                        </form>
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-error btn-sm text-white text-xs">NO</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    </>
}