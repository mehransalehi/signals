'use server'
import { z } from "zod";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';
import { checkUser } from "./userActions";
const formSchema = z.object({
    pairs: z.string(),
    entrymin: z.coerce.number(),
    entrymax: z.coerce.number().nullable(),
    targets: z.string(),
    stoploss: z.coerce.number(),
    leverage: z.coerce.number(),
    description: z.string(),
    side: z.string(),
});
export const createSignal = async (data: FormData) => {
    const pairs = data.get('pair');
    const entrymin = data.get('entrymin');
    const entrymax = data.get('entrymax');
    const targets = data.get('targets');
    const stoploss = data.get('stoploss');
    const leverage = data.get('leverage');
    const description = data.get('description');
    const side = data.get('side');

    //check the necessary data
    const res = formSchema.safeParse({
        pairs, entrymin, entrymax, targets, stoploss, leverage, description, side
    });

    if (!res.success) {
        console.log(res.error);
        return "The data you sent not correct";
    }
    //save in database
    const user: false | User = await checkUser();
    if (!user) {
        return "Internal Error"
    }
    const mainSide = res.data.side == 'long' ? "Long" : "Short";
    try {
        await prisma.signal.create({
            data: {
                symbol: res.data.pairs,
                side: mainSide,
                leverage: res.data.leverage,
                entryMin: res.data.entrymin,
                entryMax: res.data.entrymax,
                profit: res.data.targets,
                stopLoss: res.data.stoploss,
                messageId: "none",
                text: res.data.description,
                channel: "none",
                user: { connect: { id: user.id } },
            }
        })
    } catch (error: any) {
        console.error(error);
        throw new Error(error.message);
    }
    revalidatePath('/dashboard/signals');
    redirect('/dashboard/signals');

}
export const readSignals = async () => {
    const user: false | User = await checkUser();

    if (!user) {
        return false;
    }

    const signals = await prisma.signal.findMany({
        where: {
            userId: user.id
        }
    });

    return signals;
}
export const deleteSignal = async (index: string) => {
    const user: false | User = await checkUser();

    if (!user) {
        return false;
    }
    await prisma.signal.delete({
        where: {
            userId: user.id,
            id: index,
        }
    });
    revalidatePath('/dashboard/signals');
    console.log("Signal Deleted");
}
export const deleteSignals = async (indexes: string[]) => {
    const user: false | User = await checkUser();

    if (!user) {
        return false;
    }
    await prisma.signal.deleteMany({
        where: {
            userId: user.id,
            id: { in: indexes },
        }
    });
    revalidatePath('/dashboard/signals');
    console.log("Signals Deleted");
}