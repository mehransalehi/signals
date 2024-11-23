import Link from "next/link";
import { createSignal } from "@/app/actions/signalActions";
import { SubmitButton } from "@/app/(homepage)/components/submit";

export default function Add() {
    return <>
        <div className="flex items-center  justify-between pt-2">
            <h1 className="text-xl font-bold">Create New Signal</h1>
            <Link className="btn btn-error btn-sm text-[12px]" href="/dashboard/signals">Cancele</Link>
        </div>
        <div className="divider"></div>
        <form action={createSignal}>
            <div className="flex flex-col gap-4">
                <label className="input input-bordered focus-within:input-primary flex items-center gap-2 h-[40px] text-[12px]">
                    Pairs
                    <input name="pair" type="text" className="grow input-xs" placeholder="ADA/USDT" required />
                </label>
                <div className="flex flex-wrap gap-4">
                    <label className="input input-bordered focus-within:input-primary flex items-center gap-2 h-[40px] text-[12px] grow">
                        Entry Min
                        <input name="entrymin" type="number" step="any" className="grow input-xs" placeholder="0.005" required />
                    </label>
                    <label className="input input-bordered focus-within:input-primary flex items-center gap-2 h-[40px] text-[12px] grow">
                        Entry Max
                        <input name="entrymax" type="number" step="any" className="grow input-xs" placeholder="0.0051" />
                    </label>
                    <label className="input select-bordered focus-within:select-primary focus-within:input-primary flex items-center gap-2 h-[40px] text-[12px] grow">
                        Side
                        <select name="side" className="select grow select-xs focus:outline-none focus:border-none" required>
                            <option value="short">Short</option>
                            <option value="long">Long</option>
                        </select>
                    </label>
                </div>
                <label className="input input-bordered focus-within:input-primary flex items-center gap-2 h-[40px] text-[12px]">
                    Targets
                    <input name="targets" type="text" className="grow input-xs" required />
                </label>
                <label className="input input-bordered focus-within:input-primary flex items-center gap-2 h-[40px] text-[12px]">
                    Stop Loss
                    <input name="stoploss" type="number" step="any" className="grow input-xs" required />
                </label>
                <label className="input input-bordered focus-within:input-primary flex items-center gap-2 h-[40px] text-[12px]">
                    Levrage
                    <input name="leverage" type="number" step="any" className="grow input-xs" required />
                </label>
                <label className="input input-bordered focus-within:input-primary flex items-center gap-2 h-[200px] text-[12px]">
                    Description/Message
                    <textarea name="description" className="grow input-xs bg-base-100 h-[150px] outline-0"></textarea>
                </label>
                <div className="flex justify-end gap-4">
                    <Link className="btn btn-sm text-[12px]" href="/dashboard/signals">Cancele</Link>
                    <SubmitButton classText="btn btn-sm text-[12px] btn-primary" text="Create Signal" isDisable={false}></SubmitButton>
                </div>
            </div>
        </form>

    </>
}