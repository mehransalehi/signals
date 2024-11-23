import { io } from "socket.io-client";

export default function Dashboard() {
    //websocket to get live prices
    /* const arbit = {};
    const socket = io('65.108.245.153:9000',{
        auth : {
            token : 'signal-app',
            id : 'signal-app'
        }
    });

    socket.on("disconnect", (reason) => {
        console.log("DISCONNECTED");
        if (reason === "io server disconnect") {
            // the disconnection was initiated by the server, you need to reconnect manually
            console.log("RECONNECTING");
        }
        // else the socket will automatically try to reconnect
    });
    socket.on("connect", () => {
        socket.emit("join","dashboard");
    });
    socket.on("prices.coinex", (data) => {
        console.log(data);
        if(!arbit.hasOwnProperty(data[1])){
            arbit[data[1]] = {
                coinex : {bids : [] , asks :[]},
                binance :  {bids : [] , asks :[]}
            };
        }
        arbit[data[1]].coinex.bids = data[0].bids
        arbit[data[1]].coinex.asks = data[0].asks
    }); */


    return <>
        <div className="flex flex-wrap">
            <div className="w-1/4 px-2">
                <a href="https://coinmarketcap.com/">
                    <div className="card card-side bg-white shadow-sm hover:translate-y-[-5px] transition-all">
                        <figure className="w-[100px] h-[100px] p-4">
                            <img src="/images/coinmarketcap.svg" alt="coinmarketcap" />
                        </figure>
                        <div className="card-body flex flex-row justify-start items-center">
                            <h2 className="card-title text-xl">Coinmarketcap</h2>
                        </div>
                    </div>
                </a>
            </div>
            <div className="w-1/4 px-2">
                <a href="https://www.binance.com/">
                    <div className="card card-side bg-white shadow-sm hover:translate-y-[-5px] transition-all">
                        <figure className="w-[100px] h-[100px] p-4">
                            <img src="/images/binance.svg" alt="coinmarketcap" />
                        </figure>
                        <div className="card-body flex flex-row justify-start items-center">
                            <h2 className="card-title text-xl">Binance</h2>
                        </div>
                    </div>
                </a>
            </div>
            <div className="w-1/4 px-2">
                <a href="coinex.com">
                    <div className="card card-side bg-white shadow-sm hover:translate-y-[-5px] transition-all">
                        <figure className="w-[100px] h-[100px] p-4">
                            <img src="/images/coinex.svg" alt="coinmarketcap" />
                        </figure>
                        <div className="card-body flex flex-row justify-start items-center">
                            <h2 className="card-title text-xl">Coinex</h2>
                        </div>
                    </div>
                </a>
            </div>
            <div className="w-1/4 px-2">
                <a href="https://nobitex.ir/">
                    <div className="card card-side bg-white shadow-sm hover:translate-y-[-5px] transition-all">
                        <figure className="w-[100px] h-[100px] p-4">
                            <img src="/images/nobitex.png" alt="coinmarketcap" />
                        </figure>
                        <div className="card-body flex flex-row justify-start items-center">
                            <h2 className="card-title text-xl">Nobitex</h2>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="overflow-x-auto mt-4">
            <table className="table bg-white shadow-sm">
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-[50px]"></th>
                        <th>Name/Idle</th>
                        <th>Price</th>
                        <th>More</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="/icons/ada-svgrepo-com.svg"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Cardano</div>
                                    <div className="text-sm opacity-50">ADA</div>
                                </div>
                            </div>
                        </td>
                        <th>0.0005 $</th>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="/icons/bch-svgrepo-com.svg"
                                            alt="bch-svgrepo-com" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Bitcoin Cash</div>
                                    <div className="text-sm opacity-50">BCH</div>
                                </div>
                            </div>
                        </td>
                        <th>0.006 $</th>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="/icons/amp-svgrepo-com.svg"
                                            alt="amp-svgrepo-com" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">AMP Coin</div>
                                    <div className="text-sm opacity-50">AMP</div>
                                </div>
                            </div>
                        </td>
                        <th>1.5 $</th>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th>4</th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src="/icons/ark-svgrepo-com.svg"
                                            alt="ark-svgrepo-com" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Ark Network</div>
                                    <div className="text-sm opacity-50">ARK</div>
                                </div>
                            </div>
                        </td>
                        <th>150 $</th>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}