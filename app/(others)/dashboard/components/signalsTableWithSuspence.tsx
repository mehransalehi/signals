import { readSignals } from "@/app/actions/signalActions";
import SignalsTable from "./signalsTable";

export default async function SignalsTableWithSuspenece() {
    let signals = await readSignals();
    return <>
        <SignalsTable signals={signals}></SignalsTable>
    </>
}