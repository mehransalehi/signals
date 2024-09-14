import { Metadata } from 'next';
import Image from 'next/image';
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";





export const metadata: Metadata = {
    title: 'Signals List',
}

export default function Signals() {
    return <div className='flex flex-col xl:flex-row gap-4'>
        <div className="card card-side bg-base-100 shadow-xl w-full xl:w-1/2">
            <figure className='p-4 min-w-[150px]'>
                <img src="/icons/ada-svgrepo-com.svg" alt="ADA Icon" className='w-32' />
            </figure>
            <div className="card-body">
                <div className="flex justify-between gap-4">
                    <div>
                        <span className='me-2 text-xs'>دوشنبه (۰۱) | ۱۷:۳</span>
                        <div className="badge badge-primary text-[10px] text-base-100">NEW</div>
                    </div>
                    <div className='flex justify-between w-[80px]'>
                        <button className="btn btn-info btn-xs text-lg"><CiEdit /></button>
                        <button className="btn btn-warning btn-xs text-lg"><CiTrash /></button>
                    </div>
                </div>
                <h2 className="card-title">ADA/USDT</h2>
                <div className="flex flex-col gap-2">
                    <div className="badge badge-error text-base-100 p-3 text-[12px]"><FaArrowRightArrowLeft />&nbsp;SHORT</div>
                    <div className='flex items-center'>
                        <div className="badge badge-success text-base-100 p-3 text-[12px]"><FaArrowTurnDown />&nbsp;Entry Points</div>&nbsp;
                        <div className="badge badge-success text-base-100 p-2 text-[12px]">0.609451</div>&nbsp;
                        <div className="badge badge-success text-base-100 p-2 text-[12px]">0.594066</div>
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div className="badge badge-secondary text-base-100 p-3 text-[12px]"><FaCheck />&nbsp;Targets</div>&nbsp;
                        <div className="badge badge-secondary text-base-100 p-2 text-[12px]">0.588711</div>&nbsp;
                        <div className="badge badge-secondary text-base-100 p-2 text-[12px]">0.588711</div>&nbsp;
                        <div className="badge badge-secondary text-base-100 p-2 text-[12px]">0.588711</div>&nbsp;
                        <div className="badge badge-secondary text-base-100 p-2 text-[12px]">0.588711</div>&nbsp;
                        <div className="badge badge-secondary text-base-100 p-2 text-[12px]">0.588711</div>&nbsp;
                        <div className="badge badge-secondary text-base-100 p-2 text-[12px]">0.588711</div>&nbsp;
                        <div className="badge badge-secondary text-base-100 p-2 text-[12px]">0.588711</div>&nbsp;
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div className="badge badge-accent text-base-100 p-3 text-[12px]"><FaExclamation />&nbsp;Stop Target</div>&nbsp;
                        <div className="badge badge-accent text-base-100 p-2 text-[12px]">0.588711</div>
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div className="badge badge-info text-base-100 p-3 text-[12px]"><FaArrowTrendUp />&nbsp;Levrage</div>&nbsp;
                        <div className="badge badge-info text-base-100 p-2 text-[12px]">5</div>&nbsp;
                        <div className="badge badge-info text-base-100 p-2 text-[12px]">10</div>
                    </div>

                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-xs text-base-100">Show Message</button>
                </div>

                {/*  <div className="divider divider-neutral">Orginal Message</div>
                <pre style={{ whiteSpace: 'pre-line' }}>🔥 MFG Indicator 🔥

                    15 Minutes Timeframe

                    🔴 SHORT

                    #HOOK/USDT

                    Entry zone : 0.609451-0.594066

                    Targets : 0.588711 - 0.576818 - 0.564925 - 0.553032 - 0.541139 - 0.529246 - 0.517352 - 0.505459

                    Stop loss :0.633119

                    Leverage: 5x_10x

                    ✯</pre> */}
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl w-full xl:w-1/2">
            <figure className='p-4 min-w-[150px]'>
                <div className="skeleton w-[130px] h-[130px]  rounded-full"></div>
            </figure>
            <div className="card-body">
                <div className="flex justify-between gap-4">
                    <div>
                        <div className="skeleton w-[100px] h-[20px]"></div>
                    </div>
                    <div className='flex justify-between w-[80px]'>
                    <div className="skeleton w-[30px] h-[30px]"></div>
                    <div className="skeleton w-[30px] h-[30px]"></div>
                    </div>
                </div>
                <h2 className="skeleton w-[150px] h-[20px]"></h2>
                <div className="flex flex-col gap-2">
                    <div className="skeleton w-[100px] h-[30px]"></div>
                    <div className='flex items-center'>
                        <div className="skeleton w-[100px] h-[25px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div className="skeleton w-[100px] h-[25px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div className="skeleton w-[100px] h-[25px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div className="skeleton w-[100px] h-[25px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                        <div className="skeleton w-[80px] h-[20px]"></div>&nbsp;
                    </div>

                </div>
                <div className="card-actions justify-end">
                    <div className="skeleton w-[100px] h-[20px]"></div>&nbsp;
                </div>
            </div>
        </div>
    </div>
}